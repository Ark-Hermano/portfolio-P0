import axios from "axios";
import.meta.env.VITE_API_GITHUB_URL

export const apiGitHub = axios.create({
  baseURL: import.meta.env.VITE_API_GITHUB_URL,
  headers: {
    Authorization: import.meta.env.VITE_API_GITHUB_KEY
  }
});