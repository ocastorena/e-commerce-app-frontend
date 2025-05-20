import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import {
  fetchCartItems,
  selectCartItems,
  selectCartItemsLoading,
  fetchUserCartById,
  selectCartId,
  removeItemFromCart,
  updateCartItemQuantity,
} from "./CartSlice";
import { selectUserId } from "../auth/AuthSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const cartItems = useSelector(selectCartItems);
  const cartId = useSelector(selectCartId);
  const cartItemsLoading = useSelector(selectCartItemsLoading);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserCartById(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (cartId) {
      dispatch(fetchCartItems(cartId));
    }
  }, [dispatch, cartId]);

  if (cartItemsLoading || !cartItems) {
    return <div>Loading...</div>;
  }

  const handleRemove = (productId) => {
    dispatch(removeItemFromCart({ cart_id: cartId, product_id: productId }));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(
      updateCartItemQuantity({
        cart_id: cartId,
        product_id: productId,
        quantity,
      })
    );
  };

  const handleCheckout = () => {
    console.log("handling checkout");
  };

  return (
    <>
      <CartList
        cartItems={cartItems}
        onRemove={handleRemove}
        onQuantityChange={handleQuantityChange}
      />
      <CartSummary cartItems={cartItems} onCheckout={handleCheckout} />
    </>
  );
};

export default Cart;
