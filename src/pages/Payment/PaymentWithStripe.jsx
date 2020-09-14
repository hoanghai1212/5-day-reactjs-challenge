import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { pkStripe } from "../../config/keys";
import Payment from "./Payment";

const promise = loadStripe(pkStripe);

function PaymentWithStripe() {
  return (
    <Elements stripe={promise}>
      <Payment></Payment>
    </Elements>
  );
}

export default PaymentWithStripe;
