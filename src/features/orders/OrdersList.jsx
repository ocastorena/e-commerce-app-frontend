import OrderCard from "./OrderCard";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  width: 100%;
  padding: 0;
  list-style: none;
`;

const OrdersList = ({
  orders,
  onOrderClick,
  selectedOrderId,
  orderItems,
  loading,
  error,
}) => (
  <>
    <h2>Your Orders</h2>
    {loading && <p>Loading...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}
    <List>
      {orders.map((order) => (
        <OrderCard
          key={order.order_id}
          order={order}
          open={selectedOrderId === order.order_id}
          onClick={() => onOrderClick(order.order_id)}
          items={selectedOrderId === order.order_id ? orderItems : []}
        />
      ))}
    </List>
  </>
);

export default OrdersList;
