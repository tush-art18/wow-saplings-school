"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="24" cy="38" rx="14" ry="6" fill="#795548" opacity="0.25"/>
        <path d="M24 36 L24 24" stroke="#795548" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 28 C24 28 16 24 15 17 C14 12 18 10 21 14 C22 17 24 28 24 28Z" fill="#4CAF50"/>
        <path d="M24 24 C24 24 32 20 33 13 C34 8 30 6 27 10 C26 13 24 24 24 24Z" fill="#66BB6A"/>
      </svg>
    ),
    hindi: "बीज",
    marathi: "बीज",
    english: "Seed",
    desc: "Every tiny seed holds infinite potential — just like your child!",
    color: "#2D8C4E",
    bg: "#EDFAF1",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="24" cy="40" rx="12" ry="5" fill="#795548" opacity="0.2"/>
        <path d="M24 40 L24 28" stroke="#795548" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="24" cy="24" rx="12" ry="9" fill="#43A047"/>
        <ellipse cx="17" cy="30" rx="8" ry="5" fill="#66BB6A" transform="rotate(-20 17 30)"/>
        <ellipse cx="31" cy="30" rx="8" ry="5" fill="#81C784" transform="rotate(20 31 30)"/>
      </svg>
    ),
    hindi: "अंकुर",
    marathi: "अंकुर",
    english: "Sapling",
    desc: "A sapling = रोपटं in Marathi — a young plant just beginning to grow!",
    color: "#4A90D9",
    bg: "#EEF6FF",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="24" cy="42" rx="14" ry="5" fill="#795548" opacity="0.2"/>
        <path d="M24 42 L24 26" stroke="#795548" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="24" cy="20" rx="15" ry="12" fill="#2E7D32"/>
        <ellipse cx="18" cy="28" rx="10" ry="7" fill="#388E3C" transform="rotate(-18 18 28)"/>
        <ellipse cx="30" cy="28" rx="10" ry="7" fill="#43A047" transform="rotate(18 30 28)"/>
        <ellipse cx="24" cy="13" rx="10" ry="8" fill="#4CAF50"/>
      </svg>
    ),
    hindi: "वृक्ष",
    marathi: "झाड",
    english: "Full Tree",
    desc: "With the right care, every child grows into a confident, strong individual!",
    color: "#a43c8c",
    bg: "#F9EEF7",
  },
];

export default function SaplingsExplainer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 md:py-20 relative overflow-hidden" ref={ref}
      style={{ background: "linear-gradient(to right, #EDFAF1, #fff8fe, #EEF6FF)" }}>

      {/* Dotted soil line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(to right, #a43c8c22 0px, #a43c8c22 12px, transparent 12px, transparent 24px)" }} />

      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-heading font-extrabold text-2xl md:text-3xl text-primary-dark">
            🌱 What is a{" "}
            <span className="text-[#2D8C4E] underline decoration-wavy decoration-[#F9C846] underline-offset-4">Sapling</span>?
          </span>
          <p className="text-gray-500 text-sm md:text-base font-medium mt-2">
            साप्लिंग म्हणजे — एक छोटं रोपटं, जे मोठं झाड बनतं!
          </p>
        </motion.div>

        {/* Three steps */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex-1 max-w-xs mx-auto md:mx-0 flex flex-col items-center text-center rounded-[2rem] p-6 border-2 shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: step.bg, borderColor: step.color + "30" }}
              initial={{ y: 40, opacity: 0, scale: 0.94 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            >
              <motion.div
                className="mb-3"
                animate={isInView ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 2, delay: 0.8 + i * 0.2, repeat: Infinity, repeatDelay: 4 }}
              >
                {step.icon}
              </motion.div>

              {/* Bilingual label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading font-black text-xl" style={{ color: step.color }}>{step.english}</span>
                <span className="text-gray-400 text-xs">·</span>
                <span className="font-bold text-gray-500 text-sm">{step.marathi}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting arrow (desktop) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none items-center justify-center gap-2 opacity-0">
          {/* purely decorative — kept invisible but keeps layout intent */}
        </div>
      </div>
    </section>
  );
}
