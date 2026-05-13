"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const programs = [
  { name: "Playgroup", icon: "🧸", age: "2-3 Years", color: "bg-[#F06292]", text: "text-white", slug: "#playgroup" },
  { name: "Nursery", icon: "🎨", age: "3-4 Years", color: "bg-[#F9C846]", text: "text-[#5D4037]", slug: "#nursery" },
  { name: "Jr KG", icon: "🧩", age: "4-5 Years", color: "bg-[#4A90D9]", text: "text-white", slug: "#jr-kg" },
  { name: "Sr KG", icon: "📚", age: "5-6 Years", color: "bg-[#2D8C4E]", text: "text-white", slug: "#sr-kg" },
  { name: "Phonics", icon: "🔤", age: "4+ Years", color: "bg-[#9C6DD8]", text: "text-white", slug: "#phonics" },
  { name: "Abacus", icon: "🧮", age: "4+ Years", color: "bg-[#FF7043]", text: "text-white", slug: "#abacus" },
  { name: "TTC", icon: "👩‍🏫", age: "Graduates", color: "bg-primary-dark", text: "text-white", slug: "/teacher-training" },
];

export default function ProgramsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ADJUSTED ROTATION RANGE TO PREVENT "EMPTY" FIRST APPEARANCE:
  // Starting at -50 so Card 0 (Top), Card 1 (Middle), and Card 2 (Bottom) are visible immediately.
  // Ending at -350 so Card 6 (TTC) reaches the middle slot.
  const containerRotation = useTransform(scrollYProgress, [0, 1], [-50, -350]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white"
      style={{ height: "550vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[radial-gradient(circle_at_10%_50%,rgba(249,200,70,0.12)_0%,transparent_50%)]">
        
        {/* --- SECTION HEADER --- */}
        <div className="absolute top-12 md:top-20 left-0 right-0 z-40 text-center pointer-events-none px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-4xl md:text-8xl text-primary-dark mb-1 md:mb-4 tracking-tight"
          >
            Explore Our World 🌏
          </motion.h2>
        </div>

        {/* --- DECORATIVE BACKGROUND STICKERS --- */}
        <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute top-[15%] right-[10%] opacity-[0.05] pointer-events-none"
        >
          <img src="/sticker-blocks.png" alt="" className="w-48 md:w-80" />
        </motion.div>
        
        <div className="absolute bottom-[10%] right-[15%] opacity-[0.08] pointer-events-none hidden md:block">
           <img src="/sticker-crayon.png" alt="" className="w-64 rotate-[30deg]" />
        </div>

        {/* --- THE SUN (Fixed Anchor) --- */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-28 md:-ml-48 z-50">
          <motion.div 
            animate={{ 
              rotate: [0, 8, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-[280px] h-[280px] md:w-[650px] md:h-[650px] relative"
          >
            <div className="absolute inset-0 bg-accent-yellow/30 blur-[80px] rounded-full scale-110"></div>
            <img 
              src="/sticker-sun.png" 
              alt="Sun Sticker" 
              className="w-full h-full object-contain drop-shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* --- SYSTEMATIC ORBITING CARDS --- */}
        <motion.div 
          style={{ 
            rotate: containerRotation,
            originX: "0%", 
            originY: "50%"
          }}
          className="absolute left-0 w-full h-full flex items-center"
        >
          {programs.map((prog, i) => {
            const cardAngle = i * 50; 
            return (
              <ProgramPlanet 
                key={i} 
                prog={prog} 
                cardAngle={cardAngle} 
                parentRotation={containerRotation} 
              />
            );
          })}
        </motion.div>

        {/* Scroll Indicator (Refined) */}
        <div className="absolute bottom-10 right-10 flex items-center gap-4 text-gray-400 opacity-60 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark">Scroll Orbit</p>
           <div className="w-6 h-6 border-2 border-accent-yellow rounded-full flex items-center justify-center">
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 h-2 bg-accent-yellow rounded-full" />
           </div>
        </div>

      </div>
    </section>
  );
}

function ProgramPlanet({ prog, cardAngle, parentRotation }: { prog: any, cardAngle: number, parentRotation: any }) {
  const relativeAngle = useTransform(parentRotation, (v) => v + cardAngle);
  
  // Visibility: Cards are visible in the 180deg arc on the right
  const opacity = useTransform(relativeAngle, [-120, -90, 0, 90, 120], [0, 1, 1, 1, 0]);
  
  // High-Performance Scale & Depth
  const scale = useTransform(relativeAngle, [-90, 0, 90], [0.75, 1.25, 0.75]);
  const zIndex = useTransform(relativeAngle, (v) => Math.round(100 - Math.abs(v)));

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "150px", 
        opacity,
        scale,
        zIndex,
        rotate: cardAngle,
        originX: "-150px",
        originY: "50%",
      }}
      className="w-[200px] md:w-[500px] md:translate-x-[250px] md:-left-[-250px]"
    >
       <motion.div 
         style={{ rotate: useTransform(relativeAngle, (v) => -v) }} 
         className="w-full"
       >
        <Link
          href={prog.slug.startsWith('/') ? prog.slug : `/programs${prog.slug}`}
          className={`group block relative rounded-[1.5rem] md:rounded-[3.5rem] p-4 md:p-12 ${prog.color} ${prog.text} sticker-shadow border-4 md:border-8 border-white transition-all hover:scale-105 active:scale-95 shadow-2xl`}
        >
          <div className="flex items-center gap-4 md:gap-10 relative z-10">
            <div className="bg-white w-14 h-14 md:w-32 md:h-32 rounded-2xl md:rounded-[3rem] flex items-center justify-center text-3xl md:text-6xl shadow-inner border-2 md:border-4 border-gray-100 shrink-0">
              {prog.icon}
            </div>
            
            <div className="text-left flex-1 min-w-0">
              <h3 className="font-heading font-black text-lg md:text-6xl leading-none md:leading-tight tracking-tight mb-1 md:mb-2">
                {prog.name}
              </h3>
              <p className="text-[10px] md:text-xl font-bold opacity-90 uppercase tracking-[0.1em] whitespace-nowrap">
                {prog.age}
              </p>
            </div>

            <div className="bg-black/10 w-10 h-10 md:w-20 md:h-20 rounded-full flex items-center justify-center shrink-0">
              <ChevronRight size={24} className="md:w-12 md:h-12" />
            </div>
          </div>
        </Link>
       </motion.div>
    </motion.div>
  );
}
