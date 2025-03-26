import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}:3000/login`, {
    email,
    password,
  });
  return response.data;
};
