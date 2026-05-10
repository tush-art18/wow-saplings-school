"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  duration?: number;
  className?: string;
  width?: "fit-content" | "100%";
}

export default function ScrollReveal({ 
  children, 
  animation = "fade-up", 
  delay = 0, 
  duration = 0.5,
  className = "",
  width = "100%"
}: ScrollRevealProps) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: animation === "fade-up" ? 40 : 0,
      x: animation === "fade-left" ? 40 : animation === "fade-right" ? -40 : 0,
      scale: animation === "zoom-in" ? 0.9 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1 
    }
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        variants={variants}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
