import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MainLayout from "../layouts/MainLayout";
import ProductPage from "../features/products/ProductPage";
import ProductDetailsPage from "../features/productDetails/ProductDetailsPage";
import Login from "../features/auth/LoginPage";
import RegisterPage from "../features/user/RegisterPage";
import Account from "../features/user/AccountPage";
import Cart from "../features/cart/CartPage";
import Checkout from "../features/checkout/CheckoutPage";

import { selectIsAuthenticated } from "../features/auth/AuthSlice";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated === null) {
    // Render a loading indicator while authentication is being checked
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      {/* Routes that share Header and Footer */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:product_id" element={<ProductDetailsPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      {/* Routes without Header and Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
