"use client";

import Image from "next/image";
import image from "../../../public/shoesBig.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y:-200 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        className="flex 2xl:flex-row flex-col xl:gap-12 h-80vh w-full justify-between items-center mb-6  xl:h-60vh bg-black md:p-8 p-4"
      >
        <Image
          priority={true}
          placeholder="blur"
          src={image}
          alt="adidas"
          className="object-none h-full"
        />
        <div className=" xl:w-1/3 w-full py-20">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="sm:text-8xl text-7xl text-center font-roboto text-white"
          >
            Which one next?
          </motion.h1>
        </div>
      </motion.div>
      <motion.div  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}  className="flex flex-row justify-around gap-28 py-20">
        <svg
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.32952 19L0.731445 17.9641L5.06157 15.4641L7.10302 19H1.32952Z"
            fill="#000000"
          />
          <path
            d="M15.1859 19H9.41243L5.79362 12.7321L10.1237 10.2321L15.1859 19Z"
            fill="#000000"
          />
          <path
            d="M23.2688 19H17.4953L10.8558 7.5L15.1859 5L23.2688 19Z"
            fill="#000000"
          />
        </svg>
      </motion.div>
    </>
  );
}
