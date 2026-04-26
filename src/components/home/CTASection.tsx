"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTASection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (ctaRef.current) {
        gsap.to(".cta-parallax-1", {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
        gsap.to(".cta-parallax-2", {
            y: -80,
            ease: "none",
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });
    }
  }, []);

  return (
    <section className="py-24 md:py-32 px-4 bg-white" ref={ctaRef}>
      {/* Top Wave Decor */}
      <div className="absolute top-0 left-0 w-full h-32 bg-primary-light/40 wavy-bottom -scale-y-100 origin-top pointer-events-none"></div>

      <div className="container mx-auto bg-gradient-to-br from-accent-yellow to-[#FFB74D] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-center shadow-2xl relative overflow-hidden border-4 md:border-8 border-white sticker-shadow">
        <div className="cta-parallax-1 absolute -top-10 -right-10 w-48 h-48 md:w-80 md:h-80 opacity-60 pointer-events-none">
           <img src="/sticker-sun.png" alt="Sticker" className="w-full h-full object-contain" />
        </div>
        <div className="cta-parallax-2 absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 opacity-50 pointer-events-none -rotate-12">
            <img src="/sticker-blocks.png" alt="Sticker" className="w-full h-full object-contain" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="font-heading font-black text-4xl md:text-8xl text-[#5D4037] mb-8 leading-[1.1] md:leading-[0.9]">
              Start Your <br/> <span className="text-white drop-shadow-xl block mt-2">WOW Journey!</span>
           </h2>
           <p className="text-lg md:text-2xl text-[#5D4037] font-bold mb-10 md:mb-14 opacity-80 underline decoration-white decoration-2 underline-offset-8">
             Admissions are open for 2025-26.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
             <Link href="/admission" className="bg-primary text-white px-10 md:px-14 py-4 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-xl hover:scale-105 transition-all sticker-shadow border-2 md:border-4 border-white">
                Enrol Today 🚀
             </Link>
             <Link href="/contact" className="bg-white text-primary px-10 md:px-14 py-4 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-xl hover:scale-105 transition-all sticker-shadow border-2 md:border-4 border-primary/20">
                Contact Us
             </Link>
           </div>
        </div>
      </div>
    </section>
  );
}
