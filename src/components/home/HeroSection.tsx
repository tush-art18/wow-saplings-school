"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, GraduationCap, Users, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* ─── MOBILE LAYOUT (< md) ──────────────────────────────────────── */}
      <section className="md:hidden relative flex flex-col overflow-hidden bg-[#fdf6e3]">

        {/* Top: Girl image — 75vh so she is fully visible even with fixed navbar */}
        <div className="relative w-full pt-16" style={{ height: "75vh", minHeight: 420 }}>
          {/* Girl Image — always fully visible, no max-height cap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            className="absolute inset-0"
          >
            <Image
              src="/home-page-mobile.png"
              alt="Child learning joyfully at WOW Saplings Preschool, Kolhapur"
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>

        {/* Bottom: Content card — slides up 30px over image bottom */}
        <div className="flex flex-col px-5 pt-5 pb-8 bg-white rounded-t-[2.5rem] -mt-8 relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.10)]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block self-center bg-accent-yellow/20 text-primary-dark font-bold px-5 py-2 rounded-full text-xs mb-4 border-2 border-accent-yellow/40"
          >
            🌈 Step into a world of curiosity & joyful learning.
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading font-extrabold text-[2.1rem] leading-[1.15] text-center mb-3"
          >
            <span className="text-[#9C6DD8]">Chain of </span>
            <span className="text-accent-pink">Preschool</span>
            <br />
            <span className="text-accent-orange">Where Every </span>
            <span className="text-accent-blue">Child Blooms</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-sm text-gray-500 font-semibold text-center mb-5 leading-relaxed"
          >
            Experience the joy of learning where tiny saplings bloom with confidence into bright futures! 🌟
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col gap-3 mb-6"
          >
            <motion.div whileTap={{ scale: 0.96 }}>
              <Link href="/admission" className="bg-accent-yellow text-primary-dark px-6 py-3 rounded-full font-black text-sm shadow-lg block text-center border-b-4 border-black/10">
                Apply Now 🚀
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.96 }}>
              <Link href="/programs" className="bg-transparent text-primary border-[3px] border-primary px-6 py-3 rounded-full font-black text-sm block text-center">
                Our Programs
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { num: "12+", label: "Years Exp.", color: "text-[#9C6DD8]", bg: "bg-[#9C6DD8]", icon: <Calendar size={14} /> },
              { num: "500+", label: "Students", color: "text-accent-pink", bg: "bg-accent-pink", icon: <Users size={14} /> },
              { num: "10+", label: "Teachers", color: "text-accent-blue", bg: "bg-accent-blue", icon: <GraduationCap size={14} /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-2 rounded-full shadow-sm"
              >
                <div className={`${stat.bg} text-white p-1.5 rounded-full`}>{stat.icon}</div>
                <div>
                  <div className={`font-heading font-black text-base ${stat.color} leading-none`}>{stat.num}</div>
                  <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── DESKTOP LAYOUT (≥ md) ──────────────────────────────────────── */}
      <section
        className="hidden md:flex relative min-h-screen pt-32 overflow-hidden flex-col bg-cover bg-center md:bg-bottom transition-all duration-500"
        style={{ backgroundImage: "url('/home-page-hero-com.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 z-0" />

        <div className="container mx-auto px-8 xl:px-12 z-10 text-left flex-1 flex flex-col justify-center items-start max-w-7xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-block bg-accent-yellow/20 text-primary-dark font-bold px-6 py-2 rounded-full text-sm mb-8 border-2 border-accent-yellow/30"
          >
            🌈 Step into a world of curiosity, creativity & joyful learning.
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-6xl lg:text-[4.5rem] xl:text-[5.2rem] mb-6 leading-[1.1] flex flex-col items-start">
            <div className="flex flex-wrap justify-start gap-x-3 gap-y-4 mb-2">
              {[
                { text: "Chain", color: "text-[#9C6DD8]" },
                { text: "of", color: "text-[#9C6DD8]" },
                { text: "Preschool", color: "text-accent-pink" },
              ].map((word, i) => (
                <Fragment key={i}>
                  <motion.span
                    initial={{ opacity: 0, y: 50, rotate: -3 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ scale: 1.06 }}
                    className={`${word.color} inline-block whitespace-nowrap`}
                  >
                    {word.text}
                  </motion.span>
                  {" "}
                </Fragment>
              ))}
            </div>
            <div className="flex flex-wrap justify-start gap-x-3 gap-y-4">
              {[
                { text: "Where", color: "text-accent-orange" },
                { text: "Every", color: "text-accent-orange" },
                { text: "Child", color: "text-accent-blue" },
                { text: "Blooms", color: "text-accent-blue" },
              ].map((word, i) => (
                <Fragment key={i}>
                  <motion.span
                    initial={{ opacity: 0, y: 50, rotate: -3 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + (i + 3) * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ scale: 1.06 }}
                    className={`${word.color} inline-block whitespace-nowrap`}
                  >
                    {word.text}
                  </motion.span>
                  {" "}
                </Fragment>
              ))}
            </div>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl font-sans font-bold leading-relaxed"
          >
            Experience the joy of learning where tiny saplings bloom with confidence into bright futures! 🌟
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-row gap-6 mb-16"
          >
            <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}>
              <Link href="/admission" className="bg-accent-yellow text-primary-dark px-8 py-3.5 rounded-full font-black text-lg shadow-xl hover:shadow-accent-yellow/40 transition-all block text-center border-b-4 border-black/10">
                Apply Now 🚀
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}>
              <Link href="/programs" className="bg-white/50 backdrop-blur-sm text-primary border-4 border-primary px-8 py-3.5 rounded-full font-black text-lg hover:bg-primary hover:text-white transition-all block text-center">
                Our Programs
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="flex gap-6">
            {[
              { num: "12+", label: "Years Experience", color: "text-[#9C6DD8]", bg: "bg-[#9C6DD8]", icon: <Calendar size={16} /> },
              { num: "500+", label: "Students Enrolled", color: "text-accent-pink", bg: "bg-accent-pink", icon: <Users size={16} /> },
              { num: "10+", label: "Expert Teachers", color: "text-accent-blue", bg: "bg-accent-blue", icon: <GraduationCap size={16} /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 bg-white p-1.5 pr-5 rounded-full shadow-lg border-2 border-gray-50 group transition-all"
              >
                <div className={`${stat.bg} text-white p-2.5 rounded-full shadow-inner group-hover:rotate-12 transition-transform`}>
                  {stat.icon}
                </div>
                <div>
                  <div className={`font-heading font-black text-2xl text-primary-dark leading-none`}>{stat.num}</div>
                  <div className="text-[9px] font-black text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown />
          </motion.div>
        </div>
      </section>
    </>
  );
}
