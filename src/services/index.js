import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.omdbapi.com/?apikey=f2d94c7d",
});
