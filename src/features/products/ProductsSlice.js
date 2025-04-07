import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getAllCategories,
  getProductsByCategory,
} from "../../api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await getAllProducts();
      return response;
    } catch (productsError) {
      return thunkAPI.rejectWithValue(
        productsError.response.data ||
          productsError.message ||
          "Failed to fetch products"
      );
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await getAllCategories();
      return response;
    } catch (productsError) {
      return thunkAPI.rejectWithValue(
        productsError.response.data ||
          productsError.message ||
          "Failed to fetch categories"
      );
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category, thunkAPI) => {
    try {
      const response = await getProductsByCategory(category);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data ||
          error.message ||
          "Failed to fetch products by category"
      );
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsLoading: false,
    productsError: null,
    categories: [],
    categoriesLoading: false,
    categoriesError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Products Reducers
      .addCase(fetchProducts.pending, (state) => {
        state.productsLoading = true;
        state.productsError = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError =
          action.payload || "There was an error fetching the products.";
      })
      // Categories Reducers
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoading = true;
        state.categoriesError = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesError =
          action.payload || "There was an error fetching the categories.";
      })
      // Products By Category Reducers
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.productsLoading = true;
        state.productsError = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsLoading = false;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError =
          action.payload || "There was an error fetching products by category.";
      });
  },
});

export const selectProducts = (state) => state.products.products;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectCategories = (state) => state.products.categories;
export const selectCategoriesLoading = (state) =>
  state.products.categoriesLoading;
export const selectCategoriesError = (state) => state.products.categoriesError;

export default productsSlice.reducer;
