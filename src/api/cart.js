import axios from "axios";
axios.defaults.withCredentials = true;

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const postAddItemsToCart = async (cart_id, product_id, quantity) => {
  const response = await axios.post(`${API_BASE_URL}/cart/${cart_id}/items`, {
    product_id,
    quantity,
  });
  return response.data;
};
