"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Award, ShieldCheck, Heart, GraduationCap } from "lucide-react";

export default function WhyChoose() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const bubbles = containerRef.current.querySelectorAll('.bubble-card');
      gsap.fromTo(bubbles,
        { scale: 0, opacity: 0, rotation: -15 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  const features = [
    { icon: <Award size={36} />, title: "Expert Teachers", desc: "University-certified mentors who speak the language of love.", color: "bg-accent-yellow", text: "text-[#5D4037]" },
    { icon: <ShieldCheck size={36} />, title: "Safe Campus", desc: "A cozy fortress with CCTV and child-safe everything!", color: "bg-accent-blue", text: "text-white" },
    { icon: <Heart size={36} />, title: "Holistic Joy", desc: "Nurturing EQ, IQ, and big smiles through creative play.", color: "bg-accent-pink", text: "text-white" },
    { icon: <GraduationCap size={36} />, title: "Uni Course", desc: "Home to Kolhapur's elite Teacher Training Program.", color: "bg-accent-purple", text: "text-white" }
  ];

  return (
    <section className="py-20 md:py-32 bg-primary-light/20 relative overflow-hidden" ref={containerRef}>

      {/* Dynamic Background Stickers & Images */}
      <div className="absolute top-20 left-[5%] w-32 h-32 md:w-56 md:h-56 opacity-90 floating-cloud -rotate-12 pointer-events-none z-0">
        <img src="/sticker-blocks.png" alt="Blocks Sticker" className="w-full h-full object-contain" />
      </div>

      {/* Real Image Vignettes */}
      <div className="absolute top-40 right-10 w-40 h-40 md:w-64 md:h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden opacity-30 -rotate-6 pointer-events-none hidden lg:block">
        <img src="/play-area.jpeg" alt="Play Area" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-10 left-10 w-32 h-32 md:w-48 md:h-48 rounded-3xl border-4 border-white shadow-xl overflow-hidden opacity-20 rotate-12 pointer-events-none hidden lg:block">
        <img src="/classroom-01.jpeg" alt="Classroom" className="w-full h-full object-cover" />
      </div>

      <div className="absolute bottom-20 right-[10%] text-6xl md:text-8xl opacity-10 pointer-events-none">🧩</div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-heading font-extrabold text-4xl md:text-7xl text-primary-dark mb-4 md:mb-6 leading-tight">
            Why We're WOW! 🌈
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans font-bold text-sm md:text-xl uppercase tracking-wider">
            More than a school, we're a second home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-16">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bubble-card relative ${f.color} ${f.text} rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 sticker-shadow hover:rotate-1 transition-all duration-300`}
            >
              {/* Speech Bubble Tail */}
              <div className={`absolute -bottom-3 left-10 w-6 h-6 ${f.color} rotate-45 border-r border-b border-black/5`}></div>

              <div className="bg-white/20 w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 rotate-3 shadow-inner">
                {f.icon}
              </div>

              <h3 className="font-heading font-extrabold text-xl md:text-2xl mb-2 md:mb-3 leading-tight">{f.title}</h3>
              <p className="text-xs md:text-sm font-medium leading-relaxed opacity-90">{f.desc}</p>

              {/* Cute Doodle Accent */}
              <div className="absolute top-6 right-6 text-2xl opacity-20 group-hover:opacity-100 transition-opacity">✨</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
