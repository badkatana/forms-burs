import axios from "axios";

export const $host = axios.create({
  baseURL: "http://localhost:8000",
});

export const $newsHost = axios.create({
  baseURL: "https://newsapi.org",
});
