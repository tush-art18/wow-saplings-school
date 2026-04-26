"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Heart, Target, Star, BookOpen, Quote, Shield } from "lucide-react";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Principal Image Ken Burns effect handled via CSS scale
    gsap.fromTo(".award-badge", 
      { opacity: 0, scale: 0.5, rotation: -90 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)", scrollTrigger: { trigger: ".awards-section" } }
    );
  }, []);

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
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-primary-dark mb-6">
            10 Years of <span className="text-primary hover:text-accent-pink transition-colors">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Started with a vision to revolutionize early childhood education in Kolhapur, WOW Saplings has grown into a bustling campus where thousands of little minds have taken their first steps into learning.
          </p>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {v.icon}
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary-dark mb-4">{v.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{v.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="bg-primary-dark rounded-[3rem] p-8 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center relative">
            <div className="relative z-10">
              <Quote size={64} className="text-primary-light/20 mb-6" />
              <h2 className="font-heading font-bold text-4xl mb-6">A Message from Our Director</h2>
              <p className="text-lg text-gray-300 font-medium mb-8 leading-relaxed italic">
                "Our philosophy is simple: we believe that when children feel completely loved and secure, their natural curiosity instantly turns them into brilliant learners. We don't just school them; we nurture their saplings of thought."
              </p>
              <div>
                <div className="font-bold text-2xl font-heading text-accent-yellow">Mrs. Anjali Desai</div>
                <div className="text-gray-400 font-bold tracking-widest uppercase text-sm">Principal & Founder</div>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transform transition-transform duration-[10000ms] group-hover:scale-110" 
                alt="Principal" 
              />
              <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </section>

   

      {/* A Day at WOW */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading font-extrabold text-4xl text-primary-dark mb-16">A Day at WOW Saplings</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:left-0 md:before:right-0 before:h-full before:w-1 before:bg-gray-100">
            
            {[
              { time: " 10:00 AM", title: "Warm Welcome & Circle Time", desc: "Greeting friends, discussing the day, and building social bonds." },
              { time: "11:00 AM", title: "Creative Exploration", desc: "Art, craft, and sensory activities tailored to age groups." },
              { time: "12:00 AM", title: "Snack & Story", desc: "Healthy habits and immersive storytelling sessions." },
              { time: "01:00 PM", title: "Physical Play", desc: "Safe outdoor/indoor activities focusing on motor skills." }
            ].map((schedule, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-around group">
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <div className="font-heading font-bold text-2xl text-primary">{schedule.time}</div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-4 w-8 h-8 rounded-full bg-accent-yellow border-4 border-white shadow-md z-10 group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="pl-12 md:pl-0 md:w-5/12 text-left md:ml-8">
                  <div className="md:hidden font-heading font-bold text-lg text-primary mb-1">{schedule.time}</div>
                  <h3 className="font-heading font-bold text-xl text-primary-dark mb-2">{schedule.title}</h3>
                  <p className="text-gray-600 font-medium">{schedule.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

    </div>
  );
}
