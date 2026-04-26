"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register inside effect for Next.js consistency
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(".program-sticker", 
        { y: 60, opacity: 0, rotation: 5 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            markers: false
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Decorative Stickers */}
      <div className="absolute top-20 right-[10%] w-32 h-32 md:w-48 md:h-48 opacity-90 floating-cloud -rotate-12 pointer-events-none">
        <img src="/sticker-crayon.png" alt="Crayon Sticker" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-[10%] text-8xl opacity-10 animate-bounce pointer-events-none">🌀</div>

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="font-heading font-extrabold text-5xl md:text-8xl text-primary-dark mb-6 tracking-tight hero-bounce">
            Explore Our World 🌏
          </h2>
          <div className="w-32 h-2 bg-accent-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-xl md:text-2xl uppercase tracking-widest max-w-2xl mx-auto">
            A Magical Program for every little dreamer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-16 gap-x-6 md:gap-8">
          {programs.map((prog, i) => (
            <Link
              key={i}
              href={prog.slug.startsWith('/') ? prog.slug : `/programs${prog.slug}`}
              className={`program-sticker group relative rounded-[2rem] md:rounded-[3rem] p-4 pt-12 md:p-8 md:pt-14 flex flex-col items-center text-center transition-all ${prog.color} ${prog.text} sticker-shadow border-4 border-white hover:scale-105 active:scale-95 w-[calc(50%-12px)] sm:w-[calc(33.33%-16px)] lg:w-[calc(25%-24px)] max-w-[280px]`}
            >
              {prog.img && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity z-0 rounded-[inherit] overflow-hidden pointer-events-none">
                  <img src={prog.img} alt={prog.name} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="absolute -top-8 md:-top-10 bg-white w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-3xl md:text-5xl shadow-xl border-4 border-gray-50 group-hover:rotate-12 transition-transform duration-300 z-10">
                {prog.icon}
              </div>

              <h3 className="font-heading font-extrabold text-lg md:text-2xl lg:text-3xl mb-1 md:mb-2 leading-tight mt-2 md:mt-4 relative z-10">
                {prog.name}
              </h3>
              <p className="text-[10px] md:text-sm font-bold opacity-80 uppercase tracking-tighter mb-4 md:mb-8 relative z-10">
                {prog.age}
              </p>

              <div className="mt-auto bg-black/10 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors relative z-10">
                <ChevronRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
