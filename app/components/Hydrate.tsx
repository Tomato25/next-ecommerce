"use client";

import { useThemeStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();
  const pathname = usePathname();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <body
          className="font-roboto px-4 lg:px-48"
          data-theme={themeStore.mode}
        >
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({top:0})}>
            <motion.div key={pathname}>
              {children}
              <motion.div
                className="slide-in"
                animate={{ scaleY: 0 }}
                initial={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
              ></motion.div>
              <motion.div
                className="slide-out"
                animate={{ scaleY: 0 }}
                initial={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
              ></motion.div>
            </motion.div>
          </AnimatePresence>
        </body>
      ) : (
        <body>
          <h2>Loading...</h2>
        </body>
      )}
    </>
  );
}
