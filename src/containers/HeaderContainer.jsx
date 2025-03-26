import React, { useState } from "react";
import Header from "../components/Header";

const HeaderContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can also include additional logic here,
    // such as debouncing, API calls, etc.
  };

  return (
    <Header
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
    />
  );
};

export default HeaderContainer;
