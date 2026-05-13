"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, GraduationCap, Users, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen pt-32 overflow-hidden flex flex-col bg-cover bg-bottom"
      style={{ backgroundImage: "url('/hero-banner.png')" }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white/10 z-0"></div>


      <div className="container mx-auto px-4 z-10 text-center flex-1 flex flex-col justify-center pt-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
          className="inline-block bg-accent-yellow/20 text-primary-dark font-bold px-6 py-2 rounded-full text-sm mb-8 border-2 border-accent-yellow/30"
        >
          🌈 Step into a world of curiosity, creativity & joyful learning.
        </motion.div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] mb-4 md:mb-6 leading-[1.1] md:leading-[0.85] flex flex-col items-center">
          {/* Line 1 */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4 mb-2">
            {[
              { text: "Chain", color: "text-[#9C6DD8]" },
              { text: "of", color: "text-[#9C6DD8]" },
              { text: "Preschool", color: "text-accent-pink" },
              { text: "where", color: "text-accent-orange" },
              { text: "Every", color: "text-accent-orange" },
            ].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.06 }}
                className={`${word.color} inline-block whitespace-nowrap`}
              >
                {word.text}
              </motion.span>
            ))}
          </div>
          {/* Line 2 */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4">
            {[
              { text: "Child", color: "text-accent-blue" },
              { text: "Blooms", color: "text-accent-blue" },
            ].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + (i + 5) * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.06 }}
                className={`${word.color} inline-block whitespace-nowrap`}
              >
                {word.text}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto font-sans font-bold leading-relaxed"
        >
          Experience the joy of learning where tiny saplings bloom with confidence into bright futures! 🌟
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16"
        >
          <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}>
            <Link href="/admission" className="bg-accent-yellow text-primary-dark px-10 md:px-14 py-4 md:py-5 rounded-full font-black text-lg md:text-2xl shadow-xl hover:shadow-accent-yellow/20 transition-all block text-center border-b-4 border-black/10">
              Apply Now 🚀
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}>
            <Link href="/programs" className="bg-white/50 backdrop-blur-sm text-primary border-4 border-primary px-10 md:px-14 py-4 md:py-5 rounded-full font-black text-lg md:text-2xl hover:bg-primary hover:text-white transition-all block text-center">
              Our Programs
            </Link>
          </motion.div>
        </motion.div>

        {/* Stat Counter - Floating Badge Approach */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {[
            { num: "10+", label: "Years Experience", color: "bg-[#9C6DD8]", icon: <Calendar size={20} /> },
            { num: "1000+", label: "Students Enrolled", color: "bg-accent-pink", icon: <Users size={20} /> },
            { num: "50+", label: "Expert Teachers", color: "bg-accent-blue", icon: <GraduationCap size={20} /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2 + (i * 0.1), duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-lg border-2 border-gray-50 group transition-all"
            >
              <div className={`${stat.color} text-white p-4 rounded-full shadow-inner group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="font-heading font-black text-2xl md:text-3xl text-primary-dark leading-none">{stat.num}</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown />
        </motion.div>
      </div>

    </section>
  );
}
