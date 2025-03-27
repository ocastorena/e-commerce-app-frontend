import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
