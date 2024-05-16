"use client";

import { motion, useTransform, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        width: "100%",
        height: "5px",
        backgroundColor: "lightblue",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "blue",
          scaleX: scaleX,
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}
