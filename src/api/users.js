import axios from "axios";
axios.defaults.withCredentials = true;

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const createUser = async (username, password, email, address) => {
  const response = await axios.post(`${API_BASE_URL}/users`, {
    username,
    password,
    email,
    address,
  });
  return response.data;
};

export const getUserCartById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/cart/${id}`);
  return response.data;
};
