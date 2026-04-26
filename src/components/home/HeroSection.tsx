"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-bounce", {
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Simple cloud float parallax
      gsap.to(".cloud-l", { x: -40, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".cloud-r", { x: 40, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 overflow-hidden bg-primary-light/30 flex flex-col">

      {/* Storybook Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 opacity-100 floating-cloud cloud-l pointer-events-none">
        <img src="/sticker-plane.png" alt="Sticker" className="w-full h-full object-contain -rotate-12" />
      </div>
      <div className="absolute top-40 right-20 text-[6rem] opacity-20 floating-cloud cloud-r pointer-events-none">☁️</div>
      <div className="absolute top-10 right-1/4 w-32 h-32 md:w-56 md:h-56 opacity-100 animate-spin-slow pointer-events-none">
        <img src="/sticker-sun.png" alt="Sticker Sun" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex-1 flex flex-col justify-center pt-10">

        {/* Playful Hero Text */}
        <div className="inline-block bg-accent-yellow/20 text-primary-dark font-bold px-6 py-2 rounded-full text-sm mb-8 border-2 border-accent-yellow/30 hero-bounce">
          🌈 Welcome to Kolhapur's Happiest Preschool
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-[5.5rem] mb-4 md:mb-6 leading-[1] md:leading-[0.85] hero-bounce">
          <span className="text-primary-dark inline-block hover:scale-105 transition-transform">Chain of</span>{" "}
          <span className="text-accent-pink inline-block hover:scale-105 transition-transform">Preschool</span><br className="hidden md:block" />
          <span className="text-accent-orange inline-block hover:scale-105 transition-transform mt-2 md:mt-0">where Every</span>{" "}
          <span className="text-accent-blue inline-block hover:scale-105 transition-transform">Child Blooms</span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto font-sans font-bold hero-bounce leading-relaxed">
          Experience the joy of learning where curiosity takes flight and every child is a superstar! 🌟
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-12 md:mb-20 hero-bounce">
          <Link href="/admission" className="bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-xl hover:bg-primary-dark transition-all sticker-shadow">
            Apply Now
          </Link>
          <Link href="/programs" className="bg-white text-primary border-4 border-primary px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-primary-light transition-all sticker-shadow">
            Our Programs
          </Link>
        </div>
      </div>

      {/* Feature Image Frame - Full Screen */}
      <div className="relative w-full hero-bounce mt-12 group shrink-0 overflow-hidden">
        <img
          src="/hero-bg-2.png"
          alt="WOW Saplings Infrastructure"
          className="w-full h-[300px] sm:h-[500px] md:h-[650px] lg:h-[750px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-12 md:px-20">
          <div className="bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl text-left border-t-4 md:border-t-8 border-accent-pink w-full sm:w-auto shadow-2xl">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-primary-dark">A Space to Thrive</h3>
            <p className="text-xs md:text-base text-gray-600 font-medium">Safe, creative, and colorful infrastructure in Kolhapur.</p>
          </div>
        </div>

        {/* Floating Accents */}
        <div className="hidden sm:block absolute top-10 right-10 text-6xl animate-bounce">🐝</div>
        <div className="hidden sm:block absolute top-1/2 left-10 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎨</div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400">
        <ArrowDown className="animate-bounce" />
      </div>

    </section>
  );
}
