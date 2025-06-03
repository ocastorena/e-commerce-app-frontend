import axios from "axios";
axios.defaults.withCredentials = true;

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Create a new order
export const postOrder = async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
  return response.data;
};

// Get a specific order by ID
export const getOrdersByUserId = async (user_id) => {
  const response = await axios.get(`${API_BASE_URL}/orders/${user_id}`);
  return response.data;
};

// Get items for a specific order
export const getOrderItems = async (order_id) => {
  const response = await axios.get(`${API_BASE_URL}/orders/${order_id}/items`);
  return response.data;
};
