'use client'

import { ItemType } from "@/types/ItemType";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { itemVariant, listVariant } from "../animations/animations";

interface Props {
  products: ItemType[];
}

export default function Product({ products }: Props) {
  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      console.log("inview");
    }
    if (!isInView) {
      controls.start("hidden");
      console.log("NOTinview");
    }
  }, [controls, isInView]);

  return (
    <>
      <motion.div
        variants={listVariant}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="grid grid-cols-fluid gap-12 mb-12"
      >
        {products.map((product) => (
          <Link
            href={{
              pathname: `/product/${product.id}`,
              query: {
                name: product.name,
                image: product.image,
                unit_amount: product.unit_amount,
                id: product.id,
                description: product.description,
              },
            }}
          >
            <motion.div variants={itemVariant} className="flex flex-col">
              <Image
                src={product.image}
                alt={product.name}
                height={800}
                width={800}
                className="w-full h-96 object-cover rounded-lg"
                priority={true}
              />
              <div className="font-medium">
                <h1>{product.name}</h1>
                <h2 className="text-sm text-teal-700 ">
                  {product.unit_amount !== null
                    ? formatPrice(product.unit_amount)
                    : "N/A"}
                </h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </>
  );
}
