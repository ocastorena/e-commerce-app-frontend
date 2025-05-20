import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserCartById } from "../../api/users";
import {
  postAddItemsToCart,
  deleteItemFromCart,
  getCartItems,
  putCartItemQuantity,
} from "../../api/cart";

export const fetchUserCartById = createAsyncThunk(
  "cart/fetchUserCartById",
  async (id, thunkAPI) => {
    try {
      const data = await getUserCartById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data || error.message || "Failed to fetch cart"
      );
    }
  }
);

export const addItemsToCart = createAsyncThunk(
  "cart/addItemsToCart",
  async ({ cart_id, product_id, quantity }, thunkAPI) => {
    try {
      const data = await postAddItemsToCart(cart_id, product_id, quantity);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data || error.message || "Failed to add to cart"
      );
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ cart_id, product_id }, thunkAPI) => {
    try {
      await deleteItemFromCart(cart_id, product_id);
      // Optionally, you can return product_id to remove it from state directly
      return product_id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data ||
          error.message ||
          "Failed to remove item from cart"
      );
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (cart_id, thunkAPI) => {
    try {
      const data = await getCartItems(cart_id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data || error.message || "Failed to get cart items"
      );
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ cart_id, product_id, quantity }, thunkAPI) => {
    try {
      await putCartItemQuantity(cart_id, product_id, quantity);
      return { product_id, quantity };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data ||
          error.message ||
          "Failed to update cart item quantity"
      );
    }
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: null,
    cartIdLoading: false,
    cartIdError: null,
    addItemsError: false,
    cartItems: null,
    cartItemsLoading: false,
    cartItemsError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCartById.pending, (state) => {
        state.cartId = null;
        state.cartIdLoading = true;
        state.cartIdError = null;
      })
      .addCase(fetchUserCartById.fulfilled, (state, action) => {
        state.cartId = action.payload.cart_id;
        state.cartIdLoading = false;
        state.cartIdError = null;
      })
      .addCase(fetchUserCartById.rejected, (state, action) => {
        state.cartId = null;
        state.cartIdLoading = false;
        state.cartIdError =
          action.payload || "There was an error fetching the cart.";
      })
      .addCase(addItemsToCart.fulfilled, (state) => {
        state.addItemsError = false;
      })
      .addCase(addItemsToCart.rejected, (state, action) => {
        state.addItemsError =
          action.payload || "There was an error adding items to the cart.";
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        // Remove the item from cartItems in state if you want instant UI update
        if (state.cartItems) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product_id !== action.payload
          );
        }
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.cartItemsError =
          action.payload ||
          "There was an error removing the item from the cart.";
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.cartItems = null;
        state.cartItemsLoading = true;
        state.cartItemsError = false;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.cartItemsLoading = false;
        state.cartItemsError = false;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.cartItems = null;
        state.cartItemsLoading = true;
        state.cartItemsError =
          action.payload || "There was an error getting items by cart id.";
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        if (state.cartItems) {
          const item = state.cartItems.find(
            (item) => item.product_id === action.payload.product_id
          );
          if (item) {
            item.quantity = action.payload.quantity;
          }
        }
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.cartItemsError =
          action.payload || "There was an error updating the quantity.";
      });
  },
});

export const selectCartId = (state) => state.cart.cartId;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartItemsLoading = (state) => state.cart.cartItemsLoading;

export default CartSlice.reducer;
