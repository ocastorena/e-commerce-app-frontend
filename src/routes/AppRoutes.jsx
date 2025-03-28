import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../features/home/HomePage";
import Login from "../features/auth/LoginPage";
import RegisterPage from "../features/user/RegisterPage";
import Account from "../features/user/AccountPage";
import Cart from "../features/cart/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes that share Header and Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      {/* Routes without Header and Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
