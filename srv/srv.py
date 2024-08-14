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
    id: int
    name: str
    password: str
    gender: str
    phone_number: str


class News(BaseModel):
    id: int
    title: str
    text: str


USERS_FILE = "srv\users.json"
QUESTIONS_FILE = "srv\\questions.json"
NEWS_FILE = "srv\\news.json"


uvicorn.run(8000)
