import axios from "axios";
axios.defaults.withCredentials = true;

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getAllCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/products/categories`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(
    `${API_BASE_URL}/products/category/${category}`
  );
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
