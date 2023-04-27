"use client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { useState } from "react";

export default function AddCart({name,id,image, unit_amount, quantity} : AddCartType) {
const cartStore = useCartStore()
const [added, setAdded] = useState(false)


  return (
    <>
      <button onClick={() => cartStore.addProduct({id,image,unit_amount,quantity,name})} className="my-12 text-white py-2 px-6 bg-teal-700 rounded-lg">
        Add to cart
      </button>
    </>
  );
}
