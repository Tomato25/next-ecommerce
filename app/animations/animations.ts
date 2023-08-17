import { delay } from "framer-motion";

export const listVariant = {
    visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.4,
          delay:0.2
          
          
        }
      },
      hidden: {
        opacity: 0,
      }
    };
  
 export const itemVariant = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -100 }
    };