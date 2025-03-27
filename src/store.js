import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here, for example:
  // products: productsReducer,
  // cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // Optional: Add middleware or devTools configuration here
});

export default store;
