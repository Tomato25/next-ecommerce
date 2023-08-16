export const listVariant = {
    visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.6
        }
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren"
        }
      }
    };
  
 export const itemVariant = {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 }
    };