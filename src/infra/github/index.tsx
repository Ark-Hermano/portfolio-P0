import axios from "axios";

export const apiGitHub = axios.create({
  baseURL: process.env.VITE_API_GITHUB_URL,
  headers: {
    Authorization: process.env.VITE_API_GITHUB_KEY
  }
});