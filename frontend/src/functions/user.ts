import axios from "axios";
import type { EditUserValues, ResUser, UserValues } from "./types";

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

export const readUsers = async (token: string, id:number) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/users/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = async (token: string, value: EditUserValues, id:number) => {
  return await axios.put(`${import.meta.env.VITE_APP_API}/users/${id}`, value, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
