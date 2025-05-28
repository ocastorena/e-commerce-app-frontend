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

const stripePromise = loadStripe(
  "pk_test_51RRPR8PA3oqa7hWqQxoyRfIjvFh9hNfgmMsifQyvCIADraxDRLhjZmmn98IQgjFVJVV6kxyvtyWdaAYiM2e07Z2V00K7okZrLj"
);

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartId = useSelector(selectCartId);
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentSuccess = () => {
    setShowConfirmation(true);
    dispatch(removeAllItemsFromCart(cartId));
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
