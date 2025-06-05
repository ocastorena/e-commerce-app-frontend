import styled from "styled-components";
import ItemCard from "./ItemCard";

const List = styled.ul`
  display: grid;
  width: 100%;
  padding: 0;
  list-style: none;
`;

const CartList = ({ cartItems, onRemove, onQuantityChange }) => (
  <>
    <h2>Shopping Cart</h2>
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
  </>
);

export default CartList;
