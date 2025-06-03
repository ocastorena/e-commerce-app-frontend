import { useEffect } from "react";
import styled from "styled-components";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 4fr;
  row-gap: 2rem;
  column-gap: 2rem;
  align-items: center;
  padding: 4rem 0 6rem 0;
  border-top: 1px solid #222;
  border: none;
`;

const Legend = styled.legend`
  font-size: 1.5rem;
  border-bottom: 1px solid #2b2b2b;
  padding-bottom: 0.25rem;
  margin-bottom: 1.5rem;
  width: 100%;
  display: block;
`;

const Label = styled.label`
  font-size: 1.25rem;
  padding-right: 1rem;
  text-align: right;
`;

const Input = styled.input`
  width: 36rem;
  padding: 0.75rem;
  background: #111;
  color: #fff;
  border: 1px solid #222;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-color: #6c39d2;
  }
`;

const StripeInputWrapper = styled.div`
  width: 36rem;
  padding: 0.8rem;
  background: #111;
  color: #fff;
  border: 1px solid #222;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-color: #6c39d2;
  }
`;

const CheckoutForm = ({ onSubmitPaymentRef, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    const cardNumberElement = elements.getElement(CardNumberElement);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });

    if (error) {
      alert("Payment failed: " + error.message);
    } else {
      if (onPaymentSuccess) {
        onPaymentSuccess();
      }
    }
  };

  // Assign the handler to the ref so the parent can call it
  useEffect(() => {
    if (onSubmitPaymentRef) {
      onSubmitPaymentRef.current = handlePayment;
    }
  });

  return (
    <Form>
      <Fieldset>
        <Legend>Delivery Address</Legend>
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" name="fullName" type="text" autoComplete="name" />

        <Label htmlFor="address1">Address line 1</Label>
        <Input
          id="address1"
          name="address1"
          type="text"
          autoComplete="address-line1"
        />

        <Label htmlFor="address2">Address line 2</Label>
        <Input
          id="address2"
          name="address2"
          type="text"
          autoComplete="address-line2"
        />

        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          type="text"
          autoComplete="address-level2"
        />

        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          name="state"
          type="text"
          autoComplete="address-level1"
        />

        <Label htmlFor="zip">ZIP Code</Label>
        <Input id="zip" name="zip" type="text" autoComplete="postal-code" />
      </Fieldset>
      <Fieldset>
        <Legend>Payment Method</Legend>
        <Label htmlFor="cardNumber">Card number</Label>
        <StripeInputWrapper>
          <CardNumberElement
            id="cardNumber"
            options={{
              disableLink: true,
              style: {
                base: {
                  color: "#fff",
                  fontFamily: "inherit",
                  fontSize: "1.1rem",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#fa755a" },
              },
            }}
          />
        </StripeInputWrapper>

        <Label htmlFor="cardExpiry">Expiration date</Label>
        <StripeInputWrapper>
          <CardExpiryElement
            id="cardExpiry"
            options={{
              style: {
                base: {
                  color: "#fff",
                  fontFamily: "inherit",
                  fontSize: "1.1rem",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#fa755a" },
              },
            }}
          />
        </StripeInputWrapper>

        <Label htmlFor="cardCvc">CVC</Label>
        <StripeInputWrapper>
          <CardCvcElement
            id="cardCvc"
            options={{
              style: {
                base: {
                  color: "#fff",
                  fontFamily: "inherit",
                  fontSize: "1.1rem",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#fa755a" },
              },
            }}
          />
        </StripeInputWrapper>
      </Fieldset>
    </Form>
  );
};

export default CheckoutForm;
