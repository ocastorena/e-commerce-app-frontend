import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postOrder, getOrdersByUserId, getOrderItems } from "../../api/orders";

// Create a new order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, thunkAPI) => {
    try {
      const data = await postOrder(orderData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Failed to create order"
      );
    }
  }
);

// Fetch a single order by ID
export const fetchOrdersByUserId = createAsyncThunk(
  "orders/fetchOrderById",
  async (userId, thunkAPI) => {
    try {
      const data = await getOrdersByUserId(userId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Failed to fetch order"
      );
    }
  }
);

// Fetch items for a specific order
export const fetchOrderItems = createAsyncThunk(
  "orders/fetchOrderItems",
  async (orderId, thunkAPI) => {
    try {
      const data = await getOrderItems(orderId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Failed to fetch order items"
      );
    }
  }
);

const initialState = {
  orders: [], // <-- now an array of orders
  orderItems: [],
  loading: false,
  error: null,
  createOrderSuccess: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearOrderState: (state) => {
      state.orders = [];
      state.orderItems = [];
      state.loading = false;
      state.error = null;
      state.createOrderSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Order
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.createOrderSuccess = false;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        // Add the new order to the orders array
        state.orders.push(action.payload);
        state.createOrderSuccess = true;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.createOrderSuccess = false;
      })
      // Fetch Order
      .addCase(fetchOrdersByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrdersByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Order Items
      .addCase(fetchOrderItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderItems.fulfilled, (state, action) => {
        state.loading = false;
        state.orderItems = action.payload;
      })
      .addCase(fetchOrderItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrderState } = ordersSlice.actions;

export const selectOrders = (state) => state.orders.orders;
export const selectOrderItems = (state) => state.orders.orderItems;
export const selectOrdersLoading = (state) => state.orders.loading;
export const selectOrdersError = (state) => state.orders.error;
export const selectCreateOrderSuccess = (state) =>
  state.orders.createOrderSuccess;

export default ordersSlice.reducer;
