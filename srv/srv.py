from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import json

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


USERS_FILE = "srv\\users.json"
QUESTIONS_FILE = "srv\\questions.json"
USERS_QUESTIONS = "srv\\usersQuestions.json"
NEWS_FILE = "srv\\news.json"


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

    # if 1:
    #     raise HTTPException(status_code=409, detail="user was found")
    # else:
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


uvicorn.run(app, port=8000)
