// src/features/register/RegisterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle user registration.
// Adjust the endpoint '/api/register' as needed for your backend.
export const register = createAsyncThunk(
  "register/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/api/register", userData);
      return response.data;
    } catch (error) {
      // Return a rejected promise with error message.
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Registration failed"
      );
    }
  }
);

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    // You can add synchronous actions here if needed.
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
