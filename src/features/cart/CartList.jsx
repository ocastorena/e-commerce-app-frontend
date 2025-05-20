import React from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0;
  border-bottom: 1px solid #2b2b2b;
`;

const PriceText = styled.label`
  font-size: 1.25rem;
  margin-right: 6rem;
`;

const List = styled.ul`
  display: grid;
  width: 100%;
  padding: 0;
`;

const CartList = ({ cartItems, onRemove, onQuantityChange }) => {
  return (
    <Container>
      <Top>
        <h2>Shopping Cart</h2>
        <PriceText>Price</PriceText>
      </Top>
      <List>
        {cartItems.map((item) => (
          <ItemCard
            key={item.product_id}
            item={item}
            onRemove={onRemove}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </List>
    </Container>
  );
};

export default CartList;
