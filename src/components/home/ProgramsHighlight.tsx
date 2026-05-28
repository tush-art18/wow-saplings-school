"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const skills = [
  {
    title: "Cognitive Skills",
    desc: "Builds memory, concentration, and problem-solving through hands-on exploration.",
    emoji: "🧠",
    num: "01",
    gradient: "from-[#F4C542] to-[#E2B22E]", // Vibrant Kakao Yellow
    glow: "shadow-yellow-400/30",
  },
  {
    title: "Language Skills",
    desc: "Develops listening, speaking, reading & writing for confident communication.",
    emoji: "🗣️",
    num: "02",
    gradient: "from-[#5DADE2] to-[#3498DB]", // Sky Blue
    glow: "shadow-blue-400/30",
  },
  {
    title: "Life Skills",
    desc: "Teaches self-care, decision-making and adaptability for daily living.",
    emoji: "🌟",
    num: "03",
    gradient: "from-[#58D68D] to-[#2ECC71]", // Soft green
    glow: "shadow-green-400/30",
  },
  {
    title: "Socio-Emotional",
    desc: "Nurtures empathy, self-awareness and positive social interactions.",
    emoji: "🤝",
    num: "04",
    gradient: "from-[#EC7063] to-[#E74C3C]", // Playful Coral Red
    glow: "shadow-red-400/30",
  },
  {
    title: "Fine Motor Skills",
    desc: "Precise hand movements for writing, drawing and detailed creative tasks.",
    emoji: "✏️",
    num: "05",
    gradient: "from-[#A569BD] to-[#8E44AD]", // Lavender Purple
    glow: "shadow-purple-400/30",
  },
  {
    title: "Gross Motor Skills",
    desc: "Builds strength, coordination and balance through physical play & yoga.",
    emoji: "🤸",
    num: "06",
    gradient: "from-[#F39C12] to-[#E67E22]", // Energetic Orange
    glow: "shadow-orange-400/30",
  },
  {
    title: "Universal Values",
    desc: "Instills respect, kindness, honesty and responsibility in young minds.",
    emoji: "🌍",
    num: "07",
    gradient: "from-[#48C9B0] to-[#1ABC9C]", // Soft Emerald
    glow: "shadow-teal-400/30",
  },
];

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{ perspective: "1000px" }}
      className="w-full h-[250px] sm:h-[265px] lg:h-[310px] xl:h-[320px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        {/* --- FRONT SIDE (Kakao Kids Animated Learning Card style) --- */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 w-full h-full rounded-[2rem] bg-gradient-to-b ${skill.gradient} shadow-2xl ${skill.glow} p-5 flex flex-col justify-between overflow-hidden border-[3px] border-white`}
        >
          {/* Card Top Text Header */}
          <div className="text-center relative z-10 pt-2">
            <span className="block text-[10px] uppercase font-black tracking-[0.15em] text-white/90">
              WOW Saplings Trip
            </span>
            <h3 className="font-heading font-black text-white text-[15px] xl:text-[17px] leading-tight tracking-wide mt-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              {skill.title}
            </h3>
            
            {/* Pill Capsule Badge */}
            <div className="flex justify-center mt-2.5">
              <span className="bg-white text-primary-dark px-3.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-md border border-gray-100">
                STAGE {skill.num}
              </span>
            </div>
          </div>

          {/* Bottom Landscape scenery with Mascot Character */}
          <div className="absolute inset-x-0 bottom-0 h-[120px] pointer-events-none overflow-hidden select-none z-0">
            {/* Decorative Sky Clouds */}
            <div className="absolute top-1 left-6 w-8 h-3 bg-white/20 rounded-full blur-[0.5px]" />
            <div className="absolute top-3 right-8 w-10 h-4 bg-white/15 rounded-full blur-[0.5px]" />

            {/* Scenery Hill 1 (Back Layer) */}
            <svg className="absolute bottom-0 w-full h-[70px] fill-current text-white/10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,80 Q30,40 60,75 T100,50 L100,100 L0,100 Z" />
            </svg>

            {/* Scenery Hill 2 (Front grass layer) */}
            <svg className="absolute bottom-0 w-full h-[55px] fill-current text-white/20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,70 Q40,45 75,75 T100,60 L100,100 L0,100 Z" />
            </svg>

            {/* Playful Floating Sparkles */}
            <div className="absolute bottom-12 left-4 text-white/25 text-[8px]">✨</div>
            <div className="absolute bottom-16 right-5 text-white/20 text-[9px]">🎈</div>

            {/* Mascot Character bouncing on top of hills */}
            <div 
              className="absolute bottom-2 left-1/2 -translate-x-1/2 text-5xl filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.2)] animate-bounce"
              style={{ animationDuration: "2.8s" }}
            >
              {skill.emoji}
            </div>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 w-full h-full rounded-[2rem] bg-white shadow-2xl p-5 flex flex-col justify-between overflow-hidden border-[3px] border-[#EADBB8]/40"
        >
          {/* Inner background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#F9C846_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{skill.emoji}</span>
              <h4 className="font-heading font-bold text-primary-dark text-sm md:text-base">
                {skill.title}
              </h4>
            </div>

            <p className="text-gray-700 text-xs sm:text-[13px] md:text-sm leading-relaxed font-semibold">
              {skill.desc}
            </p>
          </div>

          {/* Bottom tag/benefits decoration */}
          <div className="relative z-10 pt-2 border-t border-gray-100 flex items-center justify-center">
            <span className="text-[10px] uppercase font-black tracking-wider text-[#2D8C4E] bg-[#2D8C4E]/10 px-3 py-1 rounded-full">
              WOW Seven Petal
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProgramsHighlight() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#FDFAF0]">

      {/* ── Bg blobs ─────────────────────────────────── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F9C846]/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2D8C4E]/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      {/* Floating stickers */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-10 pointer-events-none hidden lg:block"
      >
        <Image src="/sticker-crayon.png" alt="" role="presentation" width={56} height={56} className="object-contain" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-20 pointer-events-none hidden lg:block"
      >
        <Image src="/sticker-blocks.png" alt="" role="presentation" width={48} height={48} className="object-contain" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ── HERO: Heading + Mascot ───────────────────── */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16 md:mb-20">

          {/* Left */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-6 border border-primary/20"
            >
              🌱 Our Learning Approach
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-extrabold text-4xl md:text-5xl xl:text-[3.2rem] text-primary-dark leading-[1.1] mb-6"
            >
              A Scientifically Designed,{" "}
              <span className="text-primary">Play-Based</span>{" "}
              Curriculum
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base md:text-lg font-sans leading-relaxed max-w-lg"
            >
              The Seven Petal Approach is our proprietary learning method that supports holistic
              development, language, logic, creativity, physical movement, social-emotional
              learning, and more, all through structured play.
            </motion.p>
          </div>

          {/* Right: Mascot */}
          <div className="flex justify-center md:justify-end relative">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#F9C846]/25 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="relative w-64 h-64 md:w-[360px] md:h-[360px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/wow-mascot.png"
                  alt="WOW Saplings mascot"
                  fill
                  sizes="(max-width: 768px) 256px, 360px"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {[
                { icon: "🎨", top: "8%", left: "-10%" },
                { icon: "📚", top: "12%", left: "88%" },
                { icon: "🌟", top: "72%", left: "-12%" },
                { icon: "🎵", top: "76%", left: "86%" },
              ].map(({ icon, top, left }, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="absolute bg-white rounded-2xl w-11 h-11 flex items-center justify-center text-xl shadow-lg border-2 border-white"
                  style={{ top, left }}
                >
                  {icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── STAGGERED "W-SHAPE" LAYOUT ─────────────────────────── */}
        <div className="relative max-w-[1530px] mx-auto mt-16 pb-24 lg:pb-36 px-4 xl:px-8">

          {/* SVG Connection Wave Line (visible on desktop) */}
          <div className="absolute inset-x-0 top-16 bottom-0 pointer-events-none hidden lg:block z-0 opacity-30">
            <svg className="w-full h-[320px]" viewBox="0 0 1120 320" fill="none" preserveAspectRatio="none">
              <path
                d="M 80,105 L 240,225 L 400,105 L 560,225 L 720,105 L 880,225 L 1040,105"
                stroke="url(#w-wave-gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="12 12"
              />
              <defs>
                <linearGradient id="w-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2D8C4E" />
                  <stop offset="33%" stopColor="#F9C846" />
                  <stop offset="66%" stopColor="#FF7043" />
                  <stop offset="100%" stopColor="#2D8C4E" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Cards container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-2.5 xl:gap-3.5 relative z-10">
            {skills.map((skill, i) => {
              const isValley = i % 2 !== 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: isValley ? 60 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, type: "spring", stiffness: 90 }}
                  className={`w-full transition-transform duration-500 ${isValley ? 'lg:translate-y-24' : 'lg:translate-y-0'}`}
                >
                  <SkillCard skill={skill} index={i} />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
