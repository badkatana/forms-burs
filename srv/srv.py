from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import json
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
import os
from pydantic import BaseModel
from typing import Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User(BaseModel):
    name: str
    password: str
    gender: str
    phoneNumber: str


class News(BaseModel):
    id: str
    title: str
    text: str


class UsersQuestions(BaseModel):
    phoneNumber: str
    answers: Dict[str, Any]


USERS_FILE = "srv\\users.json"
USERS_QUESTIONS = "srv\\usersQuestions.json"
IMAGE_DIRECTORY = "srv\\user_images"


def save_json(file_path, data):
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)


def load_json(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)


@app.post("/new_user")
def create_user(user: User):
    users = load_json(USERS_FILE)

    print(users)
    if any(usr["phoneNumber"] == user.phoneNumber for usr in users):
        raise HTTPException(
            status_code=400, detail="Phone number already exists.")
    else:
        users.append(user.model_dump())
        save_json(USERS_FILE, users)
        return user


@app.get("/users_statistics")
def get_users_statistics():
    answered_users = load_json(USERS_QUESTIONS)
    users = load_json(USERS_FILE)
    statistics = {"answered_users": len(
        answered_users), "user_count": len(users)}
    return statistics


@app.get("/user/login")
def check_user_right(userPass: str, userPhone: str):
    users = load_json(USERS_FILE)
    user = next(filter(lambda obj: obj.get(
        'phoneNumber') == userPhone, users), None)

    if user is None:
        raise HTTPException(status_code=404, detail="User not found.")

    if user['password'] != userPass:
        raise HTTPException(status_code=401, detail="Incorrect password.")

    return user


@app.get("/check/{phone_number}")
def check_user(phone_number: str):
    UsersQuestions = load_json(USERS_QUESTIONS)
    for user in UsersQuestions:
        if user["phoneNumber"] == phone_number:
            return {"exists": True, "answers": user["answers"]}
    return {"exists": False}


@app.post("/save/")
def save_answers(user_answers: UsersQuestions):
    usersQuestions = load_json(USERS_QUESTIONS)

    for user in usersQuestions:
        if user["phoneNumber"] == user_answers.phoneNumber:
            user["answers"] = user_answers.answers
            save_json(USERS_QUESTIONS, usersQuestions)
            return {"message": "Answers updated successfully."}

    usersQuestions.append(user_answers.model_dump())
    save_json(USERS_QUESTIONS, usersQuestions)
    return {"message": "User answers saved successfully."}


@app.post("/api/save")
async def save_answers(
        images: List[UploadFile] = File(...)):
    for image in images:
        image_path = os.path.join(IMAGE_DIRECTORY, image.filename)
        with open(image_path, "wb") as buffer:
            buffer.write(await image.read())
    return JSONResponse(content={"message": "images were saved successfully"})

uvicorn.run(app, port=8000)
