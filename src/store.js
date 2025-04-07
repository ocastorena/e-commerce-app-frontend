import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import productsReducer from "./features/products/ProductsSlice";

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer
  // Add other reducers here, for example:
  // products: productsReducer,
  // cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // Optional: Add middleware or devTools configuration here
});

export default store;
