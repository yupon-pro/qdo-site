"use client";

import { ReactElement, useRef } from "react";
import { motion } from "framer-motion";

export default function FadeIn({ children }: { children: ReactElement }) {
  return (
    <motion.div
      variants={{
        offscreen: {
          y: 100,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
}
