"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Checkout() {
  const cartStore = useCartStore();
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();

  useEffect(() => {
    //create paymeentIntent as soon as the page loads up
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      }),
    }).then((res) => {
      if (res.status === 403) {
        return router.push("/api/auth/signin");
      }
      return res.json()
      // set client secret and the payment intent associated with it
    })
    .then((data) => {
        setClientSecret(data.paymentIntent.client_secret)
        cartStore.setPaymentIntent(data.paymentIntent.id)
        console.log(data)
    })
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      labels: 'floating',
    }, 
  }

  return (
    <div>
      {clientSecret && (
        <div>
          <Elements options={options} stripe={stripePromise}>
           <CheckoutForm clientSecret={clientSecret}/>
          </Elements>
        </div>
      )}
    </div>
  );
}
