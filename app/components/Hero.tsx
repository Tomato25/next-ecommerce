'use client'

import { AnimatePresence, motion } from "framer-motion"

export default function () {

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:1}} className="bg-hero-pattern bg-center flex xl:flex-row flex-col-reverse gap-12 w-full justify-between items-end mb-12 h-80vh">
            <div className=" xl:w-1/3 w-full py-20 overflow-hidden">
                <motion.h1 initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{delay:1.3}} className="sm:text-8xl text-7xl text-start pl-12 font-roboto text-white">Embrace the stripes</motion.h1>
            </div>
        </motion.div>
    )
}