import axios from "axios";

const BASE_API_URL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export async function authenticate(url, email, password) {
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  return response?.data?.idToken;
}

export function createUser(email, password) {
  const url = `${BASE_API_URL}/accounts:signUp?key=${API_KEY}`;
  return authenticate(url, email, password);
}

export function login(email, password) {
  const url = `${BASE_API_URL}/accounts:signInWithPassword?key=${API_KEY}`;
  return authenticate(url, email, password);
}
