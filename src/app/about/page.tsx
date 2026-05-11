"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Heart, Target, Star, BookOpen, Quote, Shield } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const values = [
    { title: "Our Mission", icon: <Target className="text-accent-yellow" size={32} />, content: "To provide a secure, nurturing environment where every child discovers their innate potential through play and guided learning." },
    { title: "Our Vision", icon: <Star className="text-accent-blue" size={32} />, content: "To be Kolhapur's leading foundational institute, continuously evolving modern pedagogical practices while rooted in strong values." },
    { title: "Our Core", icon: <Heart className="text-accent-pink" size={32} />, content: "Love, safety, and curiosity form the trinity of our daily interactions with your little ones." },
  ];


  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <ScrollReveal animation="fade-up">
            <h1
              className="font-heading font-extrabold text-5xl md:text-7xl text-primary-dark mb-6"
            >
              10 Years of <span className="text-primary hover:text-accent-pink transition-colors">Excellence</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p
              className="text-xl text-gray-600 mb-12"
            >
              Started with a vision to revolutionize early childhood education in Kolhapur, WOW Saplings has grown into a bustling campus where thousands of little minds have taken their first steps into learning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
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
                <h3 className="font-heading font-bold text-2xl text-primary-dark mb-4">{v.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{v.content}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-24 px-4 overflow-hidden">
        <ScrollReveal animation="fade-up">
          <div className="container mx-auto">
            <div
              className="bg-primary-dark rounded-[3rem] p-8 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center relative"
            >
              <div className="relative z-10">
                <Quote size={64} className="text-primary-light/20 mb-6" />
                <h2
                  className="font-heading font-bold text-4xl mb-6"
                >A Message from Our Director</h2>
                <p
                  className="text-lg text-gray-300 font-medium mb-8 leading-relaxed italic"
                >
                &quot;Our philosophy is simple: we believe that when children feel completely loved and secure, their natural curiosity instantly turns them into brilliant learners. We don&apos;t just school them; we nurture their saplings of thought.&quot;
                </p>
                <div>
                  <div className="font-bold text-2xl font-heading text-accent-yellow">Mrs. Yasmeen Shaikh</div>
                  <div className="text-gray-400 font-bold tracking-widest uppercase text-sm">Principal & Founder</div>
                </div>
              </div>
              
              <div
                className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden group"
              >
                <img 
                  src="/principal.jpeg" 
                  className="w-full h-full object-cover transform transition-transform duration-[10000ms] group-hover:scale-110" 
                  alt="Principal" 
                />
                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

   

      {/* A Day at WOW */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal animation="fade-up">
            <h2
              className="font-heading font-extrabold text-4xl text-primary-dark mb-16"
            >A Day at WOW Saplings</h2>
          </ScrollReveal>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:left-0 md:before:right-0 before:h-full before:w-1 before:bg-gray-100">
            
            {[
              { time: " 10:00 AM", title: "Warm Welcome & Circle Time", desc: "Greeting friends, discussing the day, and building social bonds." },
              { time: "11:00 AM", title: "Creative Exploration", desc: "Art, craft, and sensory activities tailored to age groups." },
              { time: "12:00 AM", title: "Snack & Story", desc: "Healthy habits and immersive storytelling sessions." },
              { time: "01:00 PM", title: "Physical Play", desc: "Safe outdoor/indoor activities focusing on motor skills." }
            ].map((schedule, i) => (
              <ScrollReveal key={i} animation={i % 2 === 0 ? "fade-right" : "fade-left"} delay={i * 0.1}>
                <div
                  className="relative flex items-center justify-between md:justify-around group"
                >
                  <div className="hidden md:block w-5/12 text-right pr-8">
                    <div className="font-heading font-bold text-2xl text-primary">{schedule.time}</div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="absolute left-0 md:left-1/2 -ml-2 md:-ml-4 w-8 h-8 rounded-full bg-accent-yellow border-4 border-white shadow-md z-10"
                  />
                  
                  <div className="pl-12 md:pl-0 md:w-5/12 text-left md:ml-8">
                    <div className="md:hidden font-heading font-bold text-lg text-primary mb-1">{schedule.time}</div>
                    <h3 className="font-heading font-bold text-xl text-primary-dark mb-2">{schedule.title}</h3>
                    <p className="text-gray-600 font-medium">{schedule.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
          </div>
        </div>
      </section>

    </div>
  );
}
