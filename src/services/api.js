import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-7ant.onrender.com"
});