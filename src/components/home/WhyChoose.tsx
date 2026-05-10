"use client";

import { motion } from "motion/react";
import { Award, ShieldCheck, Heart, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function WhyChoose() {
  const features = [
    { icon: <Award size={36} />, title: "Expert Teachers", desc: "University-certified mentors who speak the language of love.", color: "bg-accent-yellow", text: "text-[#5D4037]" },
    { icon: <ShieldCheck size={36} />, title: "Safe Campus", desc: "A cozy fortress with CCTV and child-safe everything!", color: "bg-accent-blue", text: "text-white" },
    { icon: <Heart size={36} />, title: "Holistic Joy", desc: "Nurturing EQ, IQ, and big smiles through creative play.", color: "bg-accent-pink", text: "text-white" },
    { icon: <GraduationCap size={36} />, title: "Uni Course", desc: "Home to Kolhapur's elite Teacher Training Program.", color: "bg-accent-purple", text: "text-white" }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 150, damping: 14 }}
              whileHover={{ rotate: 1, y: -6, scale: 1.03 }}
              className={`relative ${f.color} ${f.text} rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 sticker-shadow transition-shadow`}
            >
              {/* Speech Bubble Tail */}
              <div className={`absolute -bottom-3 left-10 w-6 h-6 ${f.color} rotate-45 border-r border-b border-black/5`}></div>

              <motion.div
                whileHover={{ rotate: [0, -15, 15, -8, 0] }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 rotate-3 shadow-inner"
              >
                {f.icon}
              </motion.div>

              <h3 className="font-heading font-extrabold text-xl md:text-2xl mb-2 md:mb-3 leading-tight">{f.title}</h3>
              <p className="text-xs md:text-sm font-medium leading-relaxed opacity-90">{f.desc}</p>

              <div className="absolute top-6 right-6 text-2xl opacity-20">✨</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
