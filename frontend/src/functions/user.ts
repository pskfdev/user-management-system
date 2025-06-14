import axios from "axios";

export const readProfile = async (token: string) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const listUsers = async (token: string) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/users`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
