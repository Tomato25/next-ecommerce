"use client";

import { useThemeStore } from "@/store";
import { ReactNode, useEffect, useState } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore()

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <body className="font-roboto px-4 lg:px-48" data-theme={themeStore.mode}>{children}</body> : <body><h2>Loading...</h2></body>}</>;
}
