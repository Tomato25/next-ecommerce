import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import payment from "@/public/payment.json";

export default function OrderAnimation() {
  return (
    <div className="flex flex-col item-center justify-center mt-12 mx-auto" >
      <motion.h1
      className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Prepping your order!
      </motion.h1>
      <Player  autoplay loop src={payment}></Player>
    </div>
  );
}
