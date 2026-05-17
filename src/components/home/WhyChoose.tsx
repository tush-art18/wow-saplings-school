"use client";

import { motion } from "motion/react";
import { Award, ShieldCheck, Heart, GraduationCap, Smile, Bus, Users } from "lucide-react";
import Image from "next/image";

export default function WhyChoose() {
  const features = [
    { icon: <Award size={32} />, title: "Expert Teachers", desc: "University-certified mentors who speak the language of love.", color: "text-accent-yellow", border: "border-accent-yellow/30", bg: "bg-accent-yellow/10" },
    { icon: <ShieldCheck size={32} />, title: "Safe Campus", desc: "A cozy fortress with CCTV and child-safe everything!", color: "text-accent-blue", border: "border-accent-blue/30", bg: "bg-accent-blue/10" },
    { icon: <Heart size={32} />, title: "Holistic Joy", desc: "Nurturing EQ, IQ, and big smiles through creative play.", color: "text-accent-pink", border: "border-accent-pink/30", bg: "bg-accent-pink/10" },
    { icon: <GraduationCap size={32} />, title: "Uni Course", desc: "Home to Kolhapur's elite Teacher Training Program.", color: "text-accent-purple", border: "border-accent-purple/30", bg: "bg-accent-purple/10" },
    { icon: <Smile size={32} />, title: "Yoga & Meditation", desc: "Mindfulness practices for calm, focused, and happy little minds.", color: "text-[#2D8C4E]", border: "border-[#2D8C4E]/30", bg: "bg-[#2D8C4E]/10" },
    { icon: <Bus size={32} />, title: "Field Trips", desc: "Exciting outdoor adventures for real-world learning.", color: "text-[#FF7043]", border: "border-[#FF7043]/30", bg: "bg-[#FF7043]/10" },
    { icon: <Users size={32} />, title: "Parenting Lectures", desc: "Workshops to support and empower our wonderful parents.", color: "text-[#4A90D9]", border: "border-[#4A90D9]/30", bg: "bg-[#4A90D9]/10" }
  ];

  return (
    <section className="py-20 md:py-32 bg-primary-light/20 relative overflow-hidden">

      {/* Stickers */}
      <motion.div
        animate={{ rotate: [-12, -6, -12], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[5%] w-32 h-32 md:w-56 md:h-56 opacity-90 pointer-events-none z-0"
      >
        <Image src="/sticker-blocks.png" alt="Blocks Sticker" fill className="object-contain" />
      </motion.div>

      {/* Image vignettes */}
      <div className="absolute top-40 right-10 w-40 h-40 md:w-64 md:h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden opacity-30 -rotate-6 pointer-events-none hidden lg:block">
        <Image src="/play-area.jpeg" alt="Play Area" fill className="object-cover" />
      </div>
      <div className="absolute bottom-10 left-10 w-32 h-32 md:w-48 md:h-48 rounded-3xl border-4 border-white shadow-xl overflow-hidden opacity-20 rotate-12 pointer-events-none hidden lg:block">
        <Image src="/classroom-01.jpeg" alt="Classroom" fill className="object-cover" />
      </div>

      <div className="absolute bottom-20 right-[10%] text-6xl md:text-8xl opacity-10 pointer-events-none">🧩</div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-extrabold text-4xl md:text-7xl text-primary-dark mb-4 md:mb-6 leading-tight"
          >
            Why We&apos;re WOW! 🌈
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto font-sans font-bold text-sm md:text-xl uppercase tracking-wider"
          >
            More than a school, we&apos;re a second home.
          </motion.p>
        </div>

        {/* Non-card, organic flowing layout */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(25%-2rem)]"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.4 }}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 shadow-sm border-2 ${f.border} ${f.bg} ${f.color} relative cursor-pointer`}
              >
                {/* Decorative floating dots around the icon */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${f.bg} ${f.border} border`}></div>
                <div className={`absolute bottom-2 -left-2 w-2 h-2 rounded-full ${f.bg} ${f.border} border`}></div>
                
                {f.icon}
              </motion.div>
              
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-primary-dark mb-3 relative inline-block">
                {f.title}
                <span className={`absolute -bottom-1 left-1/4 right-1/4 h-1 rounded-full ${f.bg} opacity-50`}></span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-[250px] mx-auto">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
