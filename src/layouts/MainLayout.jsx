import React from "react";
import { Outlet } from "react-router-dom";
import HeaderContainer from "../features/headerSearch/HeaderContainer";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
