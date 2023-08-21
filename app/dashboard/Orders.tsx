'use client'

import Image from "next/image"
import formatPrice from "@/util/PriceFormat";
import { motion } from "framer-motion";
import { itemVariant, listVariant } from "../animations/animations";



export default function Orders (props) {

    const orders = props.orders


    return (
        <motion.div variants={listVariant} animate="visible" initial="hidden" className="font-medium">
        {orders.map((order) => (
          <motion.div variants={itemVariant} key={order.id} className="rounded-lg p-8 my-4 bg-base-200">
            <h2>Order reference: {order.id}</h2>
            <p className="text-md py-2">
              Status:{" "}
              <span
                className={`${
                  order.status === "complete" ? "bg-teal-500" : "bg-orange-500"
                } text-white py-1 rounded-md px-2 mx-2 text-sm`}
              >
                {order.status}
              </span>
            </p>
            <p>Time: {new Date(order.createDate).toString()}</p>

            <div className=" text-sm lg:flex items-start gap-4 flex-col">
              {order.products.map((product) => (
                <div className="py-2 " key={product.id}>
                  <h2 className="py-2">{product.name}</h2>
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.image!}
                      width={36}
                      height={36}
                      alt={product.name}
                      priority={true}
                      className="w-auto"
                    />
                    <p>{formatPrice(product.unit_amount)}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-medium "> Total: {formatPrice(order.amount)}</p>
          </motion.div>
        ))}
      </motion.div>
    )
}