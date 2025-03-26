// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Overall container for the header
const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #2b2b2b;
  background-color: #0d0d0d;
`;

// Brand name styling
const Brand = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  justify-self: start;
`;
const Span = styled.span`
  color: #6c39d2; /* Purple color for the logo text */
`;

// Search bar container
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px; /* Limit width so it doesn't grow too large */
  background-color: #000; /* Black background for the search bar */
  border: 1px solid #333; /* Subtle border */
  border-radius: 4px;
`;

// Search input field
const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  color: #fff;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
`;

// Search button
const SearchButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

// Nav links container
const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
  justify-self: end;
`;

// Individual link styling
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <HeaderContainer>
      <Brand>
        <Span>Virtu</Span>Mart
      </Brand>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search..."
        />
        <SearchButton>Q</SearchButton>
      </SearchContainer>
      <NavLinks>
        <StyledLink to="/account">Account</StyledLink>
        <StyledLink to="/orders">Orders</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
