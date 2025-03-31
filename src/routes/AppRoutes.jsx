import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MainLayout from "../layouts/MainLayout";
import Home from "../features/home/HomePage";
import Login from "../features/auth/LoginPage";
import RegisterPage from "../features/user/RegisterPage";
import Account from "../features/user/AccountPage";
import Cart from "../features/cart/CartPage";

import { selectIsAuthenticated } from "../features/auth/AuthSlice";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes that share Header and Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Route>
      {/* Routes without Header and Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
