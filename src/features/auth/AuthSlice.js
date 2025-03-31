import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../api/auth";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginUser(email, password);
      // Expecting response to include token and optionally user info
      return response;
    } catch (error) {
      // Return a rejected action containing the error message
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
