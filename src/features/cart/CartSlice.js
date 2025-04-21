import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserCartById } from "../../api/users";
import { postAddItemsToCart } from "../../api/cart";

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

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: null,
    cartIdLoading: false,
    cartIdError: null,
    addItemsError: false,
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
      });
  },
});

export const selectCartId = (state) => state.cart.cartId;

export default CartSlice.reducer;
