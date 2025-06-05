import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import { useSelector, useDispatch } from "react-redux";
import ConfirmationModal from "../../components/ConfirmationModal";
import {
  selectCartItems,
  removeAllItemsFromCart,
  selectCartId,
} from "../cart/CartSlice";
import { createOrder } from "../orders/OrdersSlice";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();

  const cartItems = useSelector(selectCartItems);
  const cartId = useSelector(selectCartId);
  const userId = useSelector((state) => state.auth.user?.user_id);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentSuccess = async () => {
    // Build order data
    const orderData = {
      user_id: userId,
      payment_method_id: null, // or get from your payment method logic
      order_date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
      total_amount: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      orderItems: cartItems.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        unit_price: item.price,
      })),
    };

    // Dispatch createOrder
    const resultAction = await dispatch(createOrder(orderData));
    if (createOrder.fulfilled.match(resultAction)) {
      setShowConfirmation(true);
      dispatch(removeAllItemsFromCart(cartId));
    } else {
      // Handle order creation error if needed
      alert("Order creation failed.");
    }
  };

  const handlePlaceOrder = () => {
    if (formRef.current) {
      formRef.current();
    }
  };

  const handleGoToOrders = () => {
    navigate("/orders");
  };

  const handleContinueClick = () => {
    navigate("/products");
  };

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        onSubmitPaymentRef={formRef}
        onPaymentSuccess={handlePaymentSuccess}
      />
      <CheckoutSummary cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
      {showConfirmation && (
        <ConfirmationModal
          message={"Payment processed successfully!"}
          goToMessage={"Go to Orders"}
          onGoToClick={handleGoToOrders}
          onContinueClick={handleContinueClick}
        />
      )}
    </Elements>
  );
};

export default Checkout;
