import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0 0 0;
  margin-top: 1rem;
  margin-bottom: 20rem;
`;

const SubtotalText = styled.h3`
  color: #fff;
  font-weight: normal;
`;

const CheckoutButton = styled.button`
  width: 16rem;
  height: 3rem;
  padding: 0.75rem;
  margin-right: 6rem;
  background-color: #d9d9d9;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #aaaaaa;
  }
`;

const CartSummary = ({ cartItems, onCheckout }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems
    .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    .toFixed(2);

  return (
    <SummaryContainer>
      <SubtotalText>
        Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}): $
        {subtotal}
      </SubtotalText>
      <CheckoutButton onClick={onCheckout}>Proceed to Checkout</CheckoutButton>
    </SummaryContainer>
  );
};

export default CartSummary;
