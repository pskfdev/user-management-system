import axios from "axios";
import type { ResUser, UserValues } from "./types";

export const readProfile = async (token: string) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const listUsers = async (token: string) => {
  return await axios.get<ResUser[]>(`${import.meta.env.VITE_APP_API}/users`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = async (token: string, value: UserValues) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/users`, value, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
