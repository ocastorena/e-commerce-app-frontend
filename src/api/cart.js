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

export const deleteItemFromCart = async (cart_id, product_id) => {
  const response = await axios.delete(
    `${API_BASE_URL}/cart/${cart_id}/items/${product_id}`,
    {
      cart_id,
      product_id,
    }
  );
  return response;
};

export const deleteAllItemsFromCart = async (cart_id) => {
  const response = await axios.delete(`${API_BASE_URL}/cart/${cart_id}`);
  return response.data;
};

export const getCartItems = async (cart_id) => {
  const response = await axios.get(`${API_BASE_URL}/cart/${cart_id}/items`);
  return response.data;
};

export const putCartItemQuantity = async (cart_id, product_id, quantity) => {
  const response = await axios.put(
    `${API_BASE_URL}/cart/${cart_id}/items/${product_id}`,
    { quantity }
  );
  return response;
};
