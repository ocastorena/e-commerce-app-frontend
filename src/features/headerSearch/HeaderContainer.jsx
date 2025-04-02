import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { logout } from "../auth/AuthSlice";

const HeaderContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can also include additional logic here,
    // such as debouncing, API calls, etc.
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Header
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      onLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
