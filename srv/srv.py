from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User(BaseModel):
    id: str
    name: str
    password: str
    gender: str
    phone_number: str


class News(BaseModel):
    id: str
    title: str
    text: str


USERS_FILE = "srv\\users.json"
QUESTIONS_FILE = "srv\\questions.json"
NEWS_FILE = "srv\\news.json"


def save_json(file_path, data):
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)


def load_json(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)


@app.post('/new_user')
def create_user(user: User):

    users = load_json(USERS_FILE)
    if user not in users:
        users.append(user)
        save_json(USERS_FILE, users)
    else:
        raise HTTPException(status_code=404, detail="Role not found")


uvicorn.run(8000)
