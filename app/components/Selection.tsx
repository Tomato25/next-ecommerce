'use client'

import shoes from "../../public/shoes.jpg";
import shirts from "../../public/shirts.jpg";
import tracksuits from "../../public/tracksuits.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { itemVariant, listVariant } from "../animations/animations";



export default function () {

    return(
        <div>
            <h1 className="text-3xl font-bold py-6 self-center text-left">What are you looking for?</h1>
        <motion.div variants={listVariant} initial="hidden" animate="visible" className="grid grid-cols-fluid gap-12 w-full">
        <motion.div variants={itemVariant} className="flex flex-col ">
        <Link href={"/shoes"}>
          <Image
            src={shoes}
            alt="shoes"
          />
          <h1 className="text-2xl py-4 self-center text-center font-bold">Shoes</h1>
        </Link>
        </motion.div>
        <motion.div variants={itemVariant} className="flex flex-col ">
        <Link href={"/shoes"}>
          <Image
            src={shirts}
            alt="shoes"
          />
          <h1 className="text-2xl py-4 self-center text-center font-bold">T-shirts</h1>
        </Link>
        </motion.div>
        <motion.div variants={itemVariant} className="flex flex-col ">
        <Link href={"/shoes"}>
          <Image
            src={tracksuits}
            alt="shoes"
          />
          <h1 className="text-2xl py-4 self-center text-center font-bold">Tracksuits</h1>
        </Link>
        </motion.div>
      </motion.div>
      </div>
    )
}