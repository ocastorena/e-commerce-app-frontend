import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0 0 0;
  margin-top: 1rem;
  margin-bottom: 20rem;
  border-top: 1px solid #2b2b2b;
`;

const OrderTotalText = styled.h3`
  color: #fff;
  font-weight: normal;
`;

const OrderButton = styled.button`
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

const CheckoutSummary = ({ cartItems, onPlaceOrder }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <SummaryContainer>
      <OrderTotalText>
        Order Total ({totalItems} {totalItems === 1 ? "item" : "items"}): $
        {subtotal}
      </OrderTotalText>
      <OrderButton onClick={onPlaceOrder}>Place Your Order</OrderButton>
    </SummaryContainer>
  );
};

export default CheckoutSummary;
