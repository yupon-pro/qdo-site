"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      variants={{
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
      }}
      initial="hidden"
      animate="enter"
      transition={{
        type: "linear",
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
