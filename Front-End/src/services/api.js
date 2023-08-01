import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api-rocketmovies-en3k.onrender.com"
});
