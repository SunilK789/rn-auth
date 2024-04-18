import axios from "axios";
// import { API_KEY } from "../constants/EnvConfig";

const BASE_API_URL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyCpyNQajZZhyuTgUwVT-182vzYnU4NpFo8";

export async function authenticate(url, email, password) {
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  console.log("response.data===>", response.data);
  return response;
}

export async function createUser(email, password) {
  const url = `${BASE_API_URL}/accounts:signUp?key=${API_KEY}`;
  const response = authenticate(url, email, password);
}

export async function login(email, password) {
  const url = `${BASE_API_URL}/accounts:signInWithPassword?key=${API_KEY}`;
  const response = authenticate(url, email, password);
}
