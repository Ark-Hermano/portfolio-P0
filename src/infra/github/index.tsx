import axios from "axios";


const token = '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'

export const apiGitHub = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `${token}`
  }
});