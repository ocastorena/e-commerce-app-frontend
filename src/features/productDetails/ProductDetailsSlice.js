import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById } from "../../api/products";

export const fetchProductById = createAsyncThunk(
  "productDetails/fetchProductById",
  async (id, thunkAPI) => {
    try {
      const data = await getProductById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data || error.message || "Failed to fetch product"
      );
    }
  }
);

const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    productDetails: [],
    productDetailsLoading: false,
    productDetailsError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.productDetailsLoading = true;
        state.productDetailsError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productDetails = action.payload;
        state.productDetailsLoading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productDetailsLoading = false;
        state.productDetailsError =
          action.payload || "There was an error fetching the product.";
      });
  },
});

export const selectProductDetails = (state) =>
  state.productDetails.productDetails;
export const selectProductDetailsLoading = (state) =>
  state.productDetails.productDetailsLoading;
export const selectProductDetailsError = (state) =>
  state.productDetails.productDetailsError;

export default ProductDetailsSlice.reducer;
