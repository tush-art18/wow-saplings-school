"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "bounce-in" | "rotate-in" | "wobble-in";
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
      y: animation === "fade-up" ? 45 : animation === "wobble-in" ? 50 : 0,
      x: animation === "fade-left" ? 45 : animation === "fade-right" ? -45 : 0,
      scale: animation === "zoom-in" ? 0.9 : animation === "bounce-in" ? 0.35 : animation === "rotate-in" ? 0.8 : 1,
      rotate: animation === "rotate-in" ? -12 : animation === "wobble-in" ? -6 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      rotate: 0
    }
  };

  // Select spring transitions for playful/creative animations, and ease-out for others
  const isSpring = ["bounce-in", "rotate-in", "wobble-in"].includes(animation);
  const transition = isSpring 
    ? {
        type: "spring" as const,
        stiffness: animation === "bounce-in" ? 280 : animation === "rotate-in" ? 220 : 180,
        damping: animation === "bounce-in" ? 14 : animation === "rotate-in" ? 15 : 12,
        delay
      }
    : {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const
      };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
        variants={variants}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
