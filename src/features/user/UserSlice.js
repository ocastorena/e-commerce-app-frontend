import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser } from "../../api/users";

export const register = createAsyncThunk(
  "register/registerUser",
  async ({ username, password, email, address }, thunkAPI) => {
    try {
      const response = await createUser(username, password, email, address);
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

const userSlice = createSlice({
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

export const selectIsLoading = (state) => state.loading;
export const selectError = (state) => state.error;
export default userSlice.reducer;
