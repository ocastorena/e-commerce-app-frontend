import styled from "styled-components";

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #181818;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #232323;
  transition: box-shadow 0.2s, border-color 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 16px rgba(108, 57, 210, 0.15);
    border-color: #6c39d2;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ItemsList = styled.ul`
  margin-top: 1.5rem;
  margin-bottom: -2rem;
  margin-left: -2rem;
  margin-right: -2rem;
  padding: 1.25rem 2rem 1.5rem 2.5rem;
  background: #222;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top: 1px solid #292929;
  box-shadow: 0 4px 16px rgba(108, 57, 210, 0.06);
  list-style: none; /* Remove dots */
  color: #ccc;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
`;

const ItemInfo = styled.span`
  font-weight: 500;
`;

const ItemPrice = styled.span``;

const OrderCard = ({ order, items, open, onClick }) => (
  <Card onClick={onClick}>
    <CardHeader>
      <h3>Arriving Soon</h3>
      <span style={{ fontWeight: 500, color: "#aaa" }}>
        Order #: {order.order_id}
      </span>
    </CardHeader>
    <CardDetails>
      <div>
        <p style={{ margin: 0, fontWeight: 500 }}>Order Placed:</p>
        <p style={{ margin: 0 }}>
          {new Date(order.order_date).toLocaleDateString()}
        </p>
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 500 }}>Total:</p>
        <p style={{ margin: 0 }}>${Number(order.total_amount).toFixed(2)}</p>
      </div>
    </CardDetails>
    {open && items && (
      <ItemsList>
        {items.length === 0 ? (
          <Item>No items in this order.</Item>
        ) : (
          items.map((item) => (
            <Item key={item.product_id}>
              <ItemInfo>
                {item.product.title} &mdash; Qty: {item.quantity}
              </ItemInfo>
              <ItemPrice>
                ${Number(item.unit_price * item.quantity).toFixed(2)}
              </ItemPrice>
            </Item>
          ))
        )}
      </ItemsList>
    )}
  </Card>
);

export default OrderCard;
