"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import run from "@/public/giphy.gif";
import Link from "next/link";
import { useCartStore } from "@/store";
import { useEffect } from "react";

export default function OrderConfirmed() {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  const checkoutOrder = () => {
    setTimeout(() => {
      cartStore.setCheckout("cart");
    }, 1000);
    cartStore.toggleCart();
  };

  return (
    <motion.div
      className="felx items-center justify-center my-12"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="p-12 rounded-md text-center">
        <h1 className="text-xl font-medium">Your order has been placed</h1>
        <h2 className="text-sm my-4">Check you email for the receipt.</h2>
        <Image src={run} className="py-8" alt="running man" />
        <div className="flex items-center justify-center gap-12">
          <Link href={"/dashboard"}>
            <button onClick={checkoutOrder}  className="font-medium">
              Check you order
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
