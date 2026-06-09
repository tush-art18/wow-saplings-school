"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";
import Image from "next/image";

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] font-sans relative overflow-hidden">

      {/* ── 1. HERO — Reverted to Two-Column Split, Left Text, Right Image ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-gradient-to-br from-[#FFF9E6]/90 via-[#FDF0F6]/95 to-[#EBF5FF]/90 backdrop-blur-[2px] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-24 left-10 text-5xl opacity-20 -rotate-12 blur-[0.5px] pointer-events-none select-none animate-bounce">🎈</div>
        <div className="absolute top-1/2 left-1/4 w-[30rem] h-[30rem] bg-accent-yellow/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] bg-accent-pink/15 rounded-full blur-3xl pointer-events-none" />

        {/* Floating stickers */}
        <motion.div
          animate={{ rotate: [0, 360], y: [0, -8, 8, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 right-[8%] w-24 h-24 md:w-36 md:h-36 opacity-85 pointer-events-none select-none z-0"
        >
          <Image src="/sticker-sun.png" alt="Playful sun sticker" width={144} height={144} className="object-contain" />
        </motion.div>

        <motion.div
          animate={{ rotate: [-10, 10, -10], y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-[4%] w-20 h-20 md:w-28 md:h-28 opacity-80 pointer-events-none select-none z-0"
        >
          <Image src="/sticker-crayon.png" alt="Crayon box sticker" width={112} height={112} className="object-contain" />
        </motion.div>

        <motion.div
          animate={{ rotate: [-5, 5, -5], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 right-[8%] w-24 h-24 md:w-32 md:h-32 opacity-95 pointer-events-none select-none z-10"
        >
          <Image src="/wow-mascot.png" alt="WOW Saplings mascot" width={128} height={128} className="object-contain" />
        </motion.div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <ScrollReveal animation="wobble-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm mb-6">
                  <span className="text-accent-pink">✨</span>
                  <span className="text-sm font-black text-primary-dark tracking-wide uppercase">Since 2016 · Kolhapur</span>
                </div>
                <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-primary-dark mb-6 leading-tight">
                  10 Years of <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">Wow.</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={0.15}>
                <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  Started with a simple dream — to create a space where little children feel completely loved, safe, and free to grow.
                </p>
              </ScrollReveal>

              {/* Stats — bubble-style cards, no box grids */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8">
                {[
                  { n: "10+", l: "Years of Excellence", bg: "bg-accent-yellow/10", border: "border-accent-yellow/30", text: "text-primary-dark" },
                  { n: "500+", l: "Happy Students", bg: "bg-accent-blue/10", border: "border-accent-blue/30", text: "text-[#1d6fa5]" },
                  { n: "200+", l: "MTTC Alumni", bg: "bg-accent-pink/10", border: "border-accent-pink/30", text: "text-primary" },
                ].map((s, i) => (
                  <ScrollReveal key={i} animation="bounce-in" delay={0.25 + i * 0.05} width="fit-content">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                      className={`px-6 py-4 rounded-[1.5rem] border-2 ${s.border} ${s.bg} flex flex-col items-center justify-center text-center shadow-sm min-w-[140px]`}
                    >
                      <div className={`font-heading font-black text-3xl md:text-4xl ${s.text} leading-none`}>{s.n}</div>
                      <div className="text-gray-500 font-bold text-[9px] uppercase tracking-wider mt-2">{s.l}</div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right Column: Scrapbook styled image */}
            <div className="order-1 lg:order-2 relative px-4 md:px-8 lg:px-0 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg z-10">
                <ScrollReveal animation="fade-left">
                  {/* Decorative tape */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-10 bg-accent-yellow/85 border border-accent-yellow/40 shadow-sm rotate-[-3deg] z-20 flex items-center justify-center font-heading font-black text-xs text-primary-dark select-none rounded-[2px]">
                    ⭐ CAMPUS LIFE ⭐
                  </div>
                  
                  <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-8 border-white outline-4 outline-dashed outline-accent-pink/30 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-white w-full">
                    <Image
                      src="/hero-bg-2.png"
                      alt="WOW Saplings Preschool vibrant classroom infrastructure and play facilities in Kolhapur"
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover block"
                      priority
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div 
                    animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-6 bg-white p-4 rounded-2xl md:rounded-[2rem] shadow-xl border-2 border-primary-light flex items-center gap-3 md:gap-4 z-20"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-accent-yellow rounded-full flex items-center justify-center text-2xl shadow-inner shrink-0 animate-pulse">
                      🏆
                    </div>
                    <div className="text-left">
                      <div className="font-heading font-black text-lg md:text-xl text-primary-dark leading-tight">Top Rated</div>
                      <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Preschool in Kolhapur</div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 74" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
            <path d="M0,42.7L120,32C240,21,480,0,720,0C960,0,1200,21,1320,32L1440,42.7L1440,74L1320,74C1200,74,960,74,720,74C480,74,240,74,120,74L0,74Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* ── 2. STORY — Full-width text, NO cards ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-[#FDF3F8]/90 to-[#FAF6FF]/95 relative overflow-hidden border-b border-primary-light/30">
        {/* Playful background stickers */}
        <div className="absolute top-10 right-12 text-4xl opacity-20 pointer-events-none select-none animate-pulse">⭐</div>
        <div className="absolute bottom-12 left-8 text-5xl opacity-15 pointer-events-none select-none">🎨</div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Single Large Polaroid/Scrapbook Photo */}
            <div className="relative flex items-center justify-center order-2 lg:order-1 w-full">
              <ScrollReveal animation="zoom-in" delay={0.05} className="w-full max-w-lg">
                <div className="relative bg-white p-4 pb-12 shadow-2xl rounded-[2.5rem] rotate-[-2deg] hover:rotate-0 hover:scale-[1.01] transition-all duration-300 border border-gray-100/50 w-full">
                  {/* Tape */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-8 bg-accent-yellow/85 border border-accent-yellow/40 shadow-sm rotate-2 z-20 flex items-center justify-center font-heading font-black text-xs text-primary-dark select-none rounded-[2px]">
                    ⭐ OUR CAMPUS ⭐
                  </div>
                  
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-gray-50 border border-gray-100">
                    <Image
                      src="/Junior-Scientists.jpeg"
                      alt="WOW Saplings Preschool school building campus in Kolhapur"
                      fill
                      sizes="(max-width: 640px) 100vw, 500px"
                      className="object-cover block"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <span className="font-heading font-black text-base text-primary-dark tracking-wide block">Where the Journey Began 🏫</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Text content */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <ScrollReveal animation="fade-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-pink/10 border border-accent-pink/20 shadow-sm mb-4 w-fit">
                  <span className="text-xs font-black text-accent-pink tracking-wide uppercase">Our Story</span>
                </div>
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-dark leading-tight mb-6">
                  A small dream <br className="hidden md:block" />
                  that grew into <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">something beautiful.</span>
                </h2>
                <div className="h-[3px] w-24 bg-gradient-to-r from-primary via-accent-yellow to-transparent mb-8 rounded-full" />
                
                <div className="space-y-6 text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                  <p>
                    Founded in 2016 by <strong className="text-primary-dark font-extrabold">Mrs. Yasmeen Shaikh</strong>, WOW Saplings began with a heartfelt belief — that every child deserves a nurturing start. What began as a small classroom blossomed into Kolhapur&apos;s most trusted early childhood institution.
                  </p>
                  <p>
                    Over the past decade, we have welcomed over <span className="text-accent-pink font-extrabold text-xl">500+</span> young learners, trained <span className="text-[#1d6fa5] font-extrabold text-xl">200+</span> educators through our certified MTTC program, and built a reputation rooted in love, safety, and genuine curiosity.
                  </p>
                  <p>
                    Today, WOW Saplings is more than a school — it&apos;s a community where children discover who they are, and parents find a partner they can trust.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. FOUNDER — Soft elegant card, NO wave dividers ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#FFFDF0]/90 to-[#FAF8F5] py-24 px-6 md:px-12 border-y border-primary-light/40">
        {/* Soft background accents */}
        <div className="absolute -top-10 left-10 text-6xl opacity-10 animate-bounce duration-[3000ms] select-none pointer-events-none">🧸</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-pulse select-none pointer-events-none">✨</div>
        <div className="absolute bottom-8 left-[15%] w-20 h-20 opacity-15 pointer-events-none select-none z-0">
          <Image src="/sticker-blocks.png" alt="" width={80} height={80} className="object-contain" />
        </div>
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Left Column (lg:col-span-5): Framed Polaroid Card - Order 1 so it appears first */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <ScrollReveal animation="fade-right">
                <div className="bg-white p-6 pb-12 shadow-2xl rounded-[2.5rem] rotate-[-2deg] hover:rotate-0 transition-all duration-500 border border-gray-100/85 w-full max-w-[340px] sm:max-w-[380px] group cursor-pointer relative z-20">
                  {/* Decorative tape on principal card */}
                  <div className="absolute -top-3 left-1/4 w-24 h-6 bg-accent-pink/30 rotate-[-12deg] z-20 rounded-[2px]" />
                  <div className="relative aspect-square overflow-hidden rounded-[1.8rem] bg-gray-50 border border-gray-100">
                    <Image
                      src="/principal.png"
                      fill
                      sizes="(max-width: 640px) 300px, 380px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      alt="Mrs. Yasmeen Shaikh, Principal and Founder of WOW Saplings"
                      priority
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="font-heading font-black text-2xl text-primary-dark">Mrs. Yasmeen Shaikh</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Principal &amp; Founder</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column (lg:col-span-7): Notepad style message card - Order 2 */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2">
              <ScrollReveal animation="fade-left">
                <div className="bg-[#FFFDF2] border-2 border-dashed border-[#ecd437]/70 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
                  {/* Lined paper lines background simulation */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(236,212,55,0.08)_1px,transparent_1px)] bg-[size:100%_2.2rem] opacity-40 pointer-events-none" />
                  
                  {/* Paper clip decor */}
                  <div className="absolute -top-2 right-12 w-8 h-12 bg-slate-200 rounded-lg border-2 border-slate-300 rotate-12 flex items-center justify-center shadow-md select-none font-bold text-slate-600 z-10">📎</div>
                  
                  <Quote size={48} className="text-accent-yellow mb-4 shrink-0 relative z-10" />
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-accent-pink mb-4 relative z-10">Founder&apos;s Message</p>
                  
                  <blockquote className="font-heading font-extrabold text-2xl md:text-3xl text-primary-dark leading-snug mb-6 relative z-10">
                    &ldquo;When children feel completely loved and secure, their natural curiosity turns them into brilliant learners.&rdquo;
                  </blockquote>
                  
                  <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed mb-6 relative z-10">
                    At WOW Saplings, we don&apos;t just educate; we build a warm sanctuary of trust where every child can discover their unique potential at their own pace.
                  </p>
                  
                  <div className="h-px bg-gradient-to-r from-accent-yellow to-transparent w-40 mb-6 relative z-10" />
                  
                  <div className="relative z-10">
                    <h4 className="font-heading font-black text-xl text-primary-dark">Mrs. Yasmeen Shaikh</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Principal &amp; Founder</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. VALUES — Playful color-themed cards with custom rotations ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-tr from-[#EBF5FF]/60 via-white to-[#FDF2F9]/60 relative overflow-hidden">
        {/* Decorative stickers */}
        <div className="absolute top-12 left-12 text-5xl opacity-10 pointer-events-none select-none animate-spin-slow">⭐</div>
        <div className="absolute bottom-12 right-12 text-5xl opacity-10 pointer-events-none select-none">🎨</div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center md:text-left mb-16">
            <ScrollReveal animation="wobble-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm mb-4">
                <span className="text-xs font-black text-primary tracking-wide uppercase">What Drives Us</span>
              </div>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-dark leading-tight">
                Our Mission, Vision &amp; Core.
              </h2>
            </ScrollReveal>
          </div>

          {/* Three distinct colored cards with tilt animations */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { 
                label: "Mission", 
                color: "text-accent-yellow", 
                borderColor: "border-[#ecd437]/50",
                bg: "bg-[#FFFDF0]", 
                desc: "To provide a secure, nurturing environment where every child discovers their innate potential through play and guided learning.", 
                icon: "🎯", 
                rotate: "rotate-[-2deg]",
                numBg: "bg-accent-yellow/10",
                numColor: "text-accent-yellow"
              },
              { 
                label: "Vision", 
                color: "text-accent-blue", 
                borderColor: "border-[#4A90D9]/50",
                bg: "bg-[#EDF6FF]", 
                desc: "To be Kolhapur's leading foundational institute, continuously evolving modern pedagogical practices while rooted in strong values.", 
                icon: "🚀", 
                rotate: "rotate-[1.5deg]",
                numBg: "bg-accent-blue/10",
                numColor: "text-accent-blue"
              },
              { 
                label: "Core Values", 
                color: "text-accent-pink", 
                borderColor: "border-[#aa5693]/50",
                bg: "bg-[#FDF2F9]", 
                desc: "Love, safety, and curiosity form the trinity of our daily interactions with your little ones — every single day, without exception.", 
                icon: "💖", 
                rotate: "rotate-[-1deg]",
                numBg: "bg-accent-pink/10",
                numColor: "text-accent-pink"
              },
            ].map((v, i) => (
              <ScrollReveal key={i} animation="bounce-in" delay={i * 0.1} className="w-full">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 15 }}
                  className={`relative p-8 md:p-10 rounded-[2rem] border-2 ${v.borderColor} ${v.bg} shadow-lg flex flex-col justify-between h-full cursor-pointer overflow-hidden ${v.rotate}`}
                >
                  {/* Card Corner Graphic Overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-black/5 rounded-bl-full pointer-events-none opacity-50" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`w-12 h-12 rounded-2xl ${v.numBg} flex items-center justify-center font-heading font-black text-2xl ${v.numColor}`}>
                        {v.icon}
                      </span>
                      <span className="text-sm font-black text-gray-400 uppercase tracking-widest">0{i+1}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-dark mb-4">
                      Our {v.label}
                    </h3>
                    
                    <p className="text-gray-600 text-base font-semibold leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100/50 flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${v.numColor === "text-accent-yellow" ? "bg-accent-yellow" : v.numColor === "text-accent-blue" ? "bg-accent-blue" : "bg-accent-pink"}`} />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">WOW Saplings</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. A DAY AT WOW — Timeline ── */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#FFFDF9] via-[#F4EEF7] to-[#EBF3FC] overflow-hidden">
        {/* Playful background stickers */}
        <div className="absolute top-20 left-10 text-5xl opacity-10 pointer-events-none select-none animate-pulse">🧸</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-10 pointer-events-none select-none">🧩</div>

        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 74" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" className="fill-white"></path>
          </svg>
        </div>
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4 text-center">The Daily Experience</p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mb-20 text-center">
              A Day at WOW Saplings
            </h2>
          </ScrollReveal>
 
          <div className="relative">
            {/* Vertical line - dashed and colorful */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent-yellow to-accent-blue border-l-2 border-dashed border-white md:-translate-x-1/2" />
 
            <div className="space-y-16">
              {[
                { time: "10:00 AM", title: "Assembly & Sports", desc: "Circle time and sports activities including Karate sessions that build discipline and confidence.", icon: "🥋", color: "bg-accent-yellow border-accent-yellow/40", textColor: "text-[#a37910]" },
                { time: "11:00 AM", title: "Learning & Writing", desc: "Core academic part focused on writing, phonics, and fundamental concept learning.", icon: "✏️", color: "bg-accent-blue border-accent-blue/40", textColor: "text-accent-blue" },
                { time: "12:00 PM", title: "Lunch & Activity", desc: "Nutritious meal time followed by engaging Keedo's Activity Lab sessions.", icon: "🧪", color: "bg-[#4caf50] border-[#4caf50]/40", textColor: "text-[#2e7d32]" },
                { time: "01:00 PM", title: "Creativity Exploration", desc: "Crafting, art, storytelling, and Montessori-inspired creative exploration.", icon: "🎨", color: "bg-[#FF7043] border-[#FF7043]/40", textColor: "text-[#d84315]" },
                { time: "02:00 PM", title: "Skill Focus", desc: "Specialized Phonics and Abacus development sessions for advanced learners.", icon: "⏰", color: "bg-accent-pink border-accent-pink/40", textColor: "text-accent-pink" },
              ].map((s, i) => (
                <ScrollReveal key={i} animation="bounce-in" delay={i * 0.08}>
                  <div className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                    {/* Text side */}
                    <div className={`pl-16 md:pl-0 md:w-[45%] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white shadow-sm border border-gray-100 mb-3 font-heading font-black text-xs uppercase tracking-wider ${s.textColor}`}>
                        <span>⭐</span> {s.time}
                      </div>
                      <h3 className="font-heading font-extrabold text-2xl text-primary-dark mb-2">{s.title}</h3>
                      <p className="text-gray-500 font-semibold leading-relaxed text-sm md:text-base">{s.desc}</p>
                    </div>
                    {/* Dot */}
                    <motion.div
                      whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
                      className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full ${s.color} border-4 border-white shadow-lg flex items-center justify-center text-2xl z-10 shrink-0 cursor-pointer`}
                    >
                      {s.icon}
                    </motion.div>
                    {/* Empty spacer on other side */}
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Ending Stamp */}
            <div className="flex justify-center mt-16 relative z-10">
              <ScrollReveal animation="bounce-in">
                <div className="bg-white p-4 rounded-full border-4 border-dashed border-accent-pink/40 shadow-xl flex items-center justify-center w-20 h-20 rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
                  <span className="text-3xl select-none">🎈</span>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
