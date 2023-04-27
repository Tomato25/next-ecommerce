"use client";
import Image from "next/image";
import { useCartStore } from "@/store";
import formatPrice from "@/util/PriceFormat";


export default function Cart() {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <div onClick={(e) => e.stopPropagation()} className="bg-white absolute top-0 right-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">
        <h1>shopping list</h1>
        {cartStore.cart.map((item) => (
            <div className="flex py-4 gap-4">
                <Image  src={item.image} alt={item.name} width={120} height={120} className="rounded-md h-24" />
                <div>
                <h2>{item.name}</h2>
                <h2>Quantity: {item.quantity}</h2>
                <p>{item.unit_amount && formatPrice( item.unit_amount)}</p>
                </div>
            </div>
        ))}
        <button  className="mt-4 w-full  text-white py-2 px-6 bg-teal-700 rounded-lg">Checkout</button>
      </div>
    </div>
  );
}
