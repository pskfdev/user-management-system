import axios from "axios";
import type { LoginValues, RegisterValues } from "./types";

export const register = async (value: RegisterValues) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/register`, value);
};

export const login = async (value: LoginValues) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/login`, value);
};