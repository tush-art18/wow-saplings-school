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

  const containerRotation = useTransform(scrollYProgress, [0, 1], [-50, -350]);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "var(--section-height, 550vh)" }}
    >
      <style jsx>{`
        section { --section-height: 550vh; }
        @media (min-width: 1280px) {
          section { --section-height: 100vh; }
        }
      `}</style>

      {/* --- MOBILE/TABLET ORBIT LAYOUT --- */}
      <div className="xl:hidden sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[radial-gradient(circle_at_10%_50%,rgba(249,200,70:0.12)_0%,transparent_50%)]">
        <div className="absolute top-12 left-0 right-0 z-40 text-center pointer-events-none px-4">
          <h2 className="font-heading font-extrabold text-4xl text-primary-dark mb-1 tracking-tight">
            Explore Our World 🌏
          </h2>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-28 z-50">
          <motion.div animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }} transition={{ rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="w-[280px] h-[280px]">
            <img src="/sticker-sun.png" alt="Sun" className="w-full h-full object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
        <motion.div style={{ rotate: containerRotation, originX: "0%", originY: "50%" }} className="absolute left-0 w-full h-full flex items-center">
          {programs.map((prog, i) => (
            <ProgramPlanet key={i} prog={prog} cardAngle={i * 50} parentRotation={containerRotation} />
          ))}
        </motion.div>
      </div>

      {/* --- DESKTOP GRID LAYOUT (STRICT 100VH FIT) --- */}
      <div className="hidden xl:flex flex-col h-full w-full container mx-auto pt-24 pb-8 justify-center gap-12 2xl:gap-16">
        
        {/* Header - Account for Navbar */}
        <div className="text-center shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-5xl 2xl:text-6xl text-primary-dark mb-2 tracking-tight"
          >
            Explore Our World 🌏
          </motion.h2>
          <div className="w-16 h-1 bg-accent-yellow mx-auto rounded-full" />
        </div>

        {/* Dynamic Grid - Fills remaining space with more breathing room */}
        <div className="grid grid-cols-12 gap-4 2xl:gap-6 max-w-5xl 2xl:max-w-6xl mx-auto w-full flex-1 max-h-[calc(100vh-280px)] items-stretch">

          {/* Column 1 */}
          <div className="col-span-4 flex flex-col gap-4 h-full">
            <DesktopCard prog={programs[0]} h="h-1/3" />
            <DesktopCard prog={programs[2]} h="h-1/3" />
            <DesktopCard prog={programs[4]} h="h-1/3" />
          </div>

          {/* Column 2 */}
          <div className="col-span-4 flex flex-col gap-4 h-full">
            <DesktopCard prog={programs[1]} h="h-1/3" />
            <DesktopCard prog={programs[5]} h="h-1/3" />
            <DesktopCard prog={programs[6]} h="h-1/3" />
          </div>

          {/* Column 3 - Large Featured */}
          <div className="col-span-4 h-full">
            <DesktopCard prog={programs[3]} isLarge={true} h="h-full" />
          </div>

        </div>
      </div>
    </section>
  );
}

function ProgramPlanet({ prog, cardAngle, parentRotation }: { prog: any, cardAngle: number, parentRotation: any }) {
  const relativeAngle = useTransform(parentRotation, (v: number) => v + cardAngle);
  const opacity = useTransform(relativeAngle, [-120, -90, 0, 90, 120], [0, 1, 1, 1, 0]);
  const scale = useTransform(relativeAngle, [-90, 0, 90], [0.75, 1.25, 0.75]);
  const zIndex = useTransform(relativeAngle, (v: number) => Math.round(100 - Math.abs(v)));

  return (
    <motion.div style={{ position: "absolute", left: "150px", opacity, scale, zIndex, rotate: cardAngle, originX: "-150px", originY: "50%" }} className="w-[200px]">
      <motion.div style={{ rotate: useTransform(relativeAngle, (v: number) => -v) }} className="w-full">
        <Link href={prog.slug.startsWith('/') ? prog.slug : `/programs${prog.slug}`} className={`group block relative rounded-[1.5rem] p-4 ${prog.color} ${prog.text} sticker-shadow border-4 border-white transition-all hover:scale-105 active:scale-95 shadow-2xl`}>
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner border-2 border-gray-100 shrink-0">{prog.icon}</div>
            <div className="text-left flex-1 min-w-0">
              <h3 className="font-heading font-black text-lg leading-tight truncate">{prog.name}</h3>
              <p className="text-[10px] font-bold opacity-80 uppercase">{prog.age}</p>
            </div>
            <ChevronRight size={24} />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function DesktopCard({ prog, isLarge = false, h }: { prog: any, isLarge?: boolean, h: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`relative rounded-[1.5rem] 2xl:rounded-[2rem] p-4 2xl:p-6 transition-all group overflow-hidden ${prog.color} ${prog.text} ${h} shadow-lg border-2 2xl:border-4 border-white/20`}
    >
      <div className={`absolute ${isLarge ? 'top-5 -right-5 w-[85%]' : 'top-1/2 -translate-y-1/2 -right-4 w-[40%]'} pointer-events-none transition-transform duration-700 group-hover:rotate-6`}>
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 blur-[40px] 2xl:blur-[60px] rounded-full scale-125"></div>
          <div className={`${isLarge ? 'text-[8rem] 2xl:text-[12rem]' : 'text-[4rem] 2xl:text-[7rem]'} drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] text-center animate-float`}>
            {prog.icon}
          </div>
        </div>
      </div>

      <div className={`relative z-10 h-full flex flex-col ${isLarge ? 'justify-end pb-2' : 'justify-center w-[60%]'}`}>
        <h3 className="font-heading font-black text-lg 2xl:text-2xl mb-0.5 leading-tight">
          {prog.name}
        </h3>
        <p className="text-[8px] 2xl:text-[10px] font-bold opacity-80 uppercase tracking-widest mb-2 2xl:mb-3">
          {prog.age}
        </p>

        <Link
          href={prog.slug.startsWith('/') ? prog.slug : `/programs${prog.slug}`}
          className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 2xl:px-4 2xl:py-2 rounded-full font-black text-[9px] 2xl:text-xs hover:bg-white hover:text-primary-dark transition-all self-start"
        >
          Explore <ChevronRight size={10} />
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"></div>
    </motion.div>
  );
}
