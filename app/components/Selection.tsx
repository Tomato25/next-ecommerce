"use client";

import shoes from "../../public/shoes.jpg";
import shirts from "../../public/shirts.jpg";
import tracksuits from "../../public/tracksuits.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { itemVariant, listVariant } from "../animations/animations";

export default function () {
  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, amount:0.2,  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      console.log("inview")
    }
    if (!isInView) {
      controls.start("hidden");
      console.log("NOTinview")

    }
  }, [controls, isInView]);

  return (
    <motion.div
      variants={listVariant}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <motion.h1 variants={itemVariant} className="text-3xl font-bold py-6 self-center text-left">
        What are you looking for?
      </motion.h1>
      <div className="grid grid-cols-fluid gap-12 w-full">
        <motion.div variants={itemVariant} className="flex flex-col ">
          <Link href={"/shoes"}>
            <Image src={shoes} alt="shoes" />
            <h1 className="text-2xl py-4 self-center text-center font-bold">
              Shoes
            </h1>
          </Link>
        </motion.div>
        <motion.div variants={itemVariant} className="flex flex-col ">
          <Link href={"/shoes"}>
            <Image src={shirts} alt="shoes" />
            <h1 className="text-2xl py-4 self-center text-center font-bold">
              T-shirts
            </h1>
          </Link>
        </motion.div>
        <motion.div variants={itemVariant} className="flex flex-col ">
          <Link href={"/shoes"}>
            <Image src={tracksuits} alt="shoes" />
            <h1 className="text-2xl py-4 self-center text-center font-bold">
              Tracksuits
            </h1>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
