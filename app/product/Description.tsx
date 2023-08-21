"use client";

import AddCart from "./[id]/AddCart";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariant, listVariant } from "../animations/animations";
import formatPrice from "@/util/PriceFormat";
import { AddCartType } from "@/types/AddCartType";

export default function Description( {name,
  id,
  image,
  unit_amount,
  description,
  quantity,
}: AddCartType) {

  return (
    <motion.div
      variants={listVariant}
      animate="visible"
      initial="hidden"
      className="flex flex-col 2xl:flex-row items-center justify-between gap-16"
    >
      <motion.div className="min-w-min lg:min-w-max" variants={itemVariant}>
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="w-full  rounded-lg"
          priority={true}
        />
      </motion.div>
      <div className="font-medium">
        <motion.h1 variants={itemVariant} className="text-2xl  py-2">{name}</motion.h1>
        <motion.p variants={itemVariant} className="py-2">{description}</motion.p>

        <motion.div variants={itemVariant} className="flex gap-2">
          <p className="font-bold text-primary">
            {unit_amount && formatPrice(unit_amount)}
          </p>
        </motion.div>
        <AddCart name={name} image={image} id={id} unit_amount={unit_amount} quantity={quantity} description={description} />
      </div>
    </motion.div>
  );
}
