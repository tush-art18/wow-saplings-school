"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const programs = [
  { name: "Playgroup", icon: "🧸", age: "2-3 Years", color: "bg-[#F06292]", text: "text-white", slug: "#playgroup", img: "/playgroup-nursery-01.jpeg" },
  { name: "Nursery", icon: "🎨", age: "3-4 Years", color: "bg-[#F9C846]", text: "text-[#5D4037]", slug: "#nursery", img: "/playgroup-nursery-02.jpeg" },
  { name: "Jr KG", icon: "🧩", age: "4-5 Years", color: "bg-[#4A90D9]", text: "text-white", slug: "#jr-kg", img: "/junior-classroom.png" },
  { name: "Sr KG", icon: "📚", age: "5-6 Years", color: "bg-[#2D8C4E]", text: "text-white", slug: "#sr-kg", img: "/Senior-classroom.png" },
  { name: "Phonics", icon: "🔤", age: "4+ Years", color: "bg-[#9C6DD8]", text: "text-white", slug: "#phonics" },
  { name: "Abacus", icon: "🧮", age: "4+ Years", color: "bg-[#FF7043]", text: "text-white", slug: "#abacus" },
  { name: "TTC", icon: "👩‍🏫", age: "Graduates", color: "bg-primary-dark", text: "text-white", slug: "/teacher-training" },
];

export default function ProgramsStrip() {
  const centerIndex = Math.floor(programs.length / 2);

  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col items-center">
      {/* Decorative Stickers */}
      <motion.div
        animate={{ rotate: [-12, -6, -12], y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-32 h-32 md:w-48 md:h-48 opacity-90 pointer-events-none"
      >
        <img src="/sticker-crayon.png" alt="Crayon Sticker" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] text-8xl opacity-10 pointer-events-none"
      >🌀</motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 w-full">
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-extrabold text-5xl md:text-8xl text-primary-dark mb-6 tracking-tight"
          >
            Explore Our World 🌏
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="w-32 h-2 bg-accent-yellow mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-gray-500 font-bold text-xl md:text-2xl uppercase tracking-widest max-w-2xl mx-auto"
          >
            A Magical Program for every little dreamer
          </motion.p>
        </div>

        {/* Static Arc Layout */}
        <div className="relative w-full max-w-6xl mx-auto flex justify-center items-end h-[450px] md:h-[550px] mt-10">
          {programs.map((prog, i) => {
            const distance = i - centerIndex; // -3 to 3
            // Calculate static arc values
            const yOffset = Math.abs(distance) * 20 + Math.pow(distance, 2) * 5;
            const rotation = distance * 8;
            const zIndexBase = 10 - Math.abs(distance);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: yOffset + 150, rotate: rotation + 15, scale: 0.8 }}
                whileInView={{ opacity: 1, y: yOffset, rotate: rotation, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + (Math.abs(distance) * 0.1), // Center animates first, then outward
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.08,
                  y: yOffset - 30,
                  rotate: 0, // Straighten up on hover
                  zIndex: 30,
                  transition: { duration: 0.3 }
                }}
                style={{
                  zIndex: zIndexBase,
                  // Tighter overlap on mobile, slightly looser on desktop
                  marginLeft: i === 0 ? 0 : "-8%",
                }}
                className="relative w-[140px] sm:w-[180px] md:w-[240px] flex-shrink-0 origin-bottom"
              >
                <Link
                  href={prog.slug.startsWith('/') ? prog.slug : `/programs${prog.slug}`}
                  className={`group relative rounded-[1.5rem] md:rounded-[2.5rem] p-3 pt-8 md:p-6 md:pt-12 flex flex-col items-center text-center ${prog.color} ${prog.text} sticker-shadow border-2 md:border-4 border-white h-full aspect-[3/4] md:aspect-[2/3]`}
                >
                  {prog.img && (
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity z-0 rounded-[inherit] overflow-hidden pointer-events-none">
                      <img src={prog.img} alt={prog.name} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-6 md:-top-10 bg-white w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-4xl shadow-xl border-2 md:border-4 border-gray-50 z-10"
                  >
                    {prog.icon}
                  </motion.div>

                  <h3 className="font-heading font-extrabold text-sm md:text-2xl mb-1 md:mb-2 leading-tight mt-2 md:mt-4 relative z-10">
                    {prog.name}
                  </h3>
                  <p className="text-[9px] md:text-xs font-bold opacity-80 uppercase tracking-tighter mb-4 relative z-10">
                    {prog.age}
                  </p>

                  <div className="mt-auto bg-black/10 w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors relative z-10">
                    <ChevronRight size={16} className="md:w-5 md:h-5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
