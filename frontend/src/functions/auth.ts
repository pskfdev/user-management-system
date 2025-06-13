import axios from "axios";
import type { RegisterValues } from "./types";

export const register = async (value: RegisterValues) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/register`, value);
};
