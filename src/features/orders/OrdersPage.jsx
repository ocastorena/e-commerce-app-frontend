import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrdersByUserId,
  fetchOrderItems,
  selectOrders,
  selectOrderItems,
  selectOrdersLoading,
  selectOrdersError,
  clearOrderState,
} from "./OrdersSlice";
import { selectUserId } from "../auth/AuthSlice";
import OrdersList from "./OrdersList";

const OrdersPage = () => {
  const dispatch = useDispatch();

  const userId = useSelector(selectUserId);
  const orders = useSelector(selectOrders);
  const orderItems = useSelector(selectOrderItems);
  const loading = useSelector(selectOrdersLoading);
  const error = useSelector(selectOrdersError);

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Fetch all orders for the user when userId changes
  useEffect(() => {
    if (userId) {
      dispatch(fetchOrdersByUserId(userId));
    }
    return () => {
      dispatch(clearOrderState());
    };
  }, [dispatch, userId]);

  // Fetch order items when selectedOrderId changes
  useEffect(() => {
    if (selectedOrderId) {
      dispatch(fetchOrderItems(selectedOrderId));
    }
  }, [dispatch, selectedOrderId]);

  // Handler for clicking an order
  const handleOrderClick = (orderId) => {
    setSelectedOrderId(orderId);
    // orderItems will be updated by useEffect above
  };

  // Find the selected order object
  const selectedOrder = orders?.find((o) => o.order_id === selectedOrderId);

  return (
    <OrdersList
      orders={orders}
      onOrderClick={handleOrderClick}
      selectedOrderId={selectedOrderId}
      selectedOrder={selectedOrder}
      orderItems={orderItems}
      loading={loading}
      error={error}
    />
  );
};

export default OrdersPage;
