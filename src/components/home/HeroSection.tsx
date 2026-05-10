"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 overflow-hidden bg-primary-light/30 flex flex-col">

      {/* Storybook Elements */}
      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 opacity-100 pointer-events-none"
      >
        <img src="/sticker-plane.png" alt="Sticker" className="w-full h-full object-contain -rotate-12" />
      </motion.div>

      <motion.div
        animate={{ x: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 text-[6rem] opacity-20 pointer-events-none"
      >☁️</motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-1/4 w-32 h-32 md:w-56 md:h-56 opacity-100 pointer-events-none"
      >
        <img src="/sticker-sun.png" alt="Sticker Sun" className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-4 z-10 text-center flex-1 flex flex-col justify-center pt-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
          className="inline-block bg-accent-yellow/20 text-primary-dark font-bold px-6 py-2 rounded-full text-sm mb-8 border-2 border-accent-yellow/30"
        >
          🌈 Welcome to Kolhapur&apos;s Happiest Preschool
        </motion.div>

        {/* Hero Heading */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-[5.5rem] mb-4 md:mb-6 leading-[1] md:leading-[0.85]">
          {[
            { text: "Chain of", color: "text-primary-dark" },
            { text: "Preschool", color: "text-accent-pink" },
            { text: "where Every", color: "text-accent-orange" },
            { text: "Child Blooms", color: "text-accent-blue" },
          ].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.06 }}
              className={`${word.color} inline-block mr-3 mt-2 md:mt-0`}
            >
              {word.text}
              {i === 1 && <br className="hidden md:block" />}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto font-sans font-bold leading-relaxed"
        >
          Experience the joy of learning where curiosity takes flight and every child is a superstar! 🌟
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-12 md:mb-20"
        >
          <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}>
            <Link href="/admission" className="bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-xl hover:bg-primary-dark transition-all sticker-shadow block text-center">
              Apply Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}>
            <Link href="/programs" className="bg-white text-primary border-4 border-primary px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-primary-light transition-all sticker-shadow block text-center">
              Our Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Image Frame */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full mt-12 group shrink-0 overflow-hidden"
      >
        <img
          src="/hero-bg-2.png"
          alt="WOW Saplings Infrastructure"
          className="w-full h-[300px] sm:h-[500px] md:h-[650px] lg:h-[750px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-12 md:px-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl text-left border-t-4 md:border-t-8 border-accent-pink w-full sm:w-auto shadow-2xl"
          >
            <h3 className="font-heading font-bold text-xl md:text-2xl text-primary-dark">A Space to Thrive</h3>
            <p className="text-xs md:text-base text-gray-600 font-medium">Safe, creative, and colorful infrastructure in Kolhapur.</p>
          </motion.div>
        </div>

        {/* Floating Accents */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-10 right-10 text-6xl"
        >🐝</motion.div>
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden sm:block absolute top-1/2 left-10 text-6xl"
        >🎨</motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown />
        </motion.div>
      </div>

    </section>
  );
}
