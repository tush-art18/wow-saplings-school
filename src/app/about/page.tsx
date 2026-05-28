"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Heart, Target, Star, BookOpen, Quote, Shield } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    { title: "Our Mission", icon: <Target className="text-accent-yellow" size={32} />, content: "To provide a secure, nurturing environment where every child discovers their innate potential through play and guided learning." },
    { title: "Our Vision", icon: <Star className="text-accent-blue" size={32} />, content: "To be Kolhapur's leading foundational institute, continuously evolving modern pedagogical practices while rooted in strong values." },
    { title: "Our Core", icon: <Heart className="text-accent-pink" size={32} />, content: "Love, safety, and curiosity form the trinity of our daily interactions with your little ones." },
  ];

  return (
    <>
      <div className="min-h-screen bg-background font-sans">

        {/* 1. HERO — Modern Redesign */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-gradient-to-br from-primary-light/30 via-white to-background overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-20 right-10 text-6xl opacity-20 -rotate-12 blur-[1px] pointer-events-none">🌟</div>
          <div className="absolute bottom-20 left-10 text-5xl opacity-20 rotate-12 blur-[1px] pointer-events-none">🎓</div>
          <div className="absolute top-1/2 left-1/4 w-[30rem] h-[30rem] bg-accent-yellow/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] bg-accent-pink/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <ScrollReveal animation="fade-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm mb-6">
                    <span className="text-accent-pink">✨</span>
                    <span className="text-sm font-bold text-primary-dark tracking-wide uppercase">Since 2016</span>
                  </div>
                  <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-primary-dark mb-6 leading-tight">
                    10 Years of <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Excellence</span>
                  </h1>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={0.15}>
                  <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                    Started with a vision to revolutionize early childhood education in Kolhapur, WOW Saplings has grown into a bustling campus where thousands of little minds have taken their first steps into learning.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={0.25}>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                    <div className="flex items-center gap-[-10px]">
                      <div className="w-12 h-12 rounded-full border-4 border-white bg-accent-yellow flex items-center justify-center text-xl z-30 shadow-md">😊</div>
                      <div className="w-12 h-12 rounded-full border-4 border-white bg-accent-pink flex items-center justify-center text-xl z-20 -ml-4 shadow-md">🎨</div>
                      <div className="w-12 h-12 rounded-full border-4 border-white bg-accent-blue flex items-center justify-center text-xl z-10 -ml-4 shadow-md">🚀</div>
                    </div>
                    <div className="text-left">
                      <div className="font-black text-xl text-primary-dark leading-none">500+</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Happy Students</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Image Container */}
              <div className="order-1 lg:order-2 relative px-4 md:px-8 lg:px-0 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
                  <ScrollReveal animation="fade-left">
                    <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[10px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-white w-full">
                      <Image
                        src="/hero-bg-2.png"
                        alt="WOW Saplings Infrastructure"
                        width={600}
                        height={450}
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-8 bg-white p-3 md:p-5 rounded-2xl md:rounded-[2rem] shadow-xl border-2 border-primary/5 flex items-center gap-3 md:gap-4 z-20"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-accent-yellow rounded-full flex items-center justify-center text-2xl shadow-inner">
                        🏆
                      </div>
                      <div>
                        <div className="font-black text-lg md:text-xl text-primary-dark leading-tight">Top Rated</div>
                        <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Preschool in Kolhapur</div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. MISSION, VISION & CORE Cards */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-6xl">
            {values.map((v, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow h-full"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm"
                  >
                    {v.icon}
                  </motion.div>
                  <h3 className="font-sans font-bold text-2xl text-primary-dark mb-4">{v.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{v.content}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. FOUNDER MESSAGE */}
        <section className="py-24 px-4 overflow-hidden">
          <ScrollReveal animation="fade-up">
            <div className="container mx-auto max-w-6xl">
              <div className="bg-primary-dark rounded-[3rem] p-8 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center relative">
                <div className="relative z-10">
                  <Quote size={64} className="text-primary-light/20 mb-6" />
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">A Message from Our Director</h2>
                  <p className="text-base md:text-lg text-gray-300 font-medium mb-8 leading-relaxed italic">
                  &quot;Our philosophy is simple: we believe that when children feel completely loved and secure, their natural curiosity instantly turns them into brilliant learners. We don&apos;t just school them; we nurture their saplings of thought.&quot;
                  </p>
                  <div>
                    <div className="font-bold text-xl md:text-2xl font-heading text-accent-yellow">Mrs. Yasmeen Shaikh</div>
                    <div className="text-gray-400 font-bold tracking-widest uppercase text-sm">Principal & Founder</div>
                  </div>
                </div>

                <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden group">
                  <Image
                    src="/principal.jpeg"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transform transition-transform duration-[10000ms] group-hover:scale-110"
                    alt="Principal"
                  />
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. OUR STORY */}
        <section className="py-20 px-4 bg-white border-y border-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-heading font-extrabold text-4xl text-primary-dark mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2016, Wow Saplings School began with a small dream—to create a happy and safe place where little children can learn, grow, and shine.
                </p>
                <p>
                  From a humble beginning, our school has grown into a nurturing environment where every child is valued and encouraged. With love, care, and dedication, we have shaped many young learners into confident and curious individuals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 5. MILESTONES */}
        <section className="py-24 bg-primary-light/10 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              {[
                { number: "10+", label: "Years of Excellence", color: "text-primary", sub: "Since 2016" },
                { number: "500+", label: "Happy Students", color: "text-accent-pink", sub: "Growing with us" },
                { number: "200+", label: "MTTC Alumni", color: "text-accent-purple", sub: "Certified Educators" },
              ].map((milestone, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                  <div className="text-center group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`font-heading font-black text-5xl md:text-6xl ${milestone.color} mb-4 flex items-center justify-center`}
                    >
                      {milestone.number}
                    </motion.div>
                    <h4 className="font-sans font-bold text-xl md:text-2xl text-primary-dark mb-2">{milestone.label}</h4>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{milestone.sub}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black opacity-[0.03] select-none pointer-events-none -rotate-12">
            WOW
          </div>
        </section>

        {/* 6. A DAY AT WOW */}
        <section className="py-24 px-4 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-16">A Day at WOW Saplings</h2>
            </ScrollReveal>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:left-0 md:before:right-0 before:h-full before:w-1 before:bg-gray-100">

              {[
                { time: "10:00 AM", title: "Assembly & Sports", desc: "Circle time and sports activities including Karate sessions." },
                { time: "11:00 AM", title: "Learning & Writing", desc: "Core academic part focused on writing and fundamental learning." },
                { time: "12:00 PM", title: "Lunch & Activity", desc: "Healthy meal time followed by engaging activity sessions." },
                { time: "01:00 PM", title: "Creativity Exploration", desc: "Crafting, art, and immersive storytelling for creative minds." },
                { time: "02:00 PM", title: "Skill Focus", desc: "Specialized sessions for Phonics and Abacus development." }
              ].map((schedule, i) => (
                <ScrollReveal key={i} animation={i % 2 === 0 ? "fade-right" : "fade-left"} delay={i * 0.1}>
                  <div className="relative flex items-center justify-between md:justify-around group">
                    <div className="hidden md:block w-5/12 text-right pr-8">
                      <div className="font-heading font-bold text-xl md:text-2xl text-primary">{schedule.time}</div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="absolute left-0 md:left-1/2 -ml-2 md:-ml-4 w-8 h-8 rounded-full bg-accent-yellow border-4 border-white shadow-md z-10"
                    />

                    <div className="pl-12 md:pl-0 md:w-5/12 text-left md:ml-8">
                      <div className="md:hidden font-heading font-bold text-lg text-primary mb-1">{schedule.time}</div>
                      <h3 className="font-sans font-bold text-lg md:text-xl text-primary-dark mb-2">{schedule.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{schedule.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
