"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Anjali Patil",
      role: "Parent of Aarav, Nursery",
      content: "The dedication to serving the cause of education is evident in their impressive infrastructure, dedicated faculty, and result-oriented teaching approach.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "KOLHAPUR"
    },
    {
      name: "Rahul Deshmukh",
      role: "Parent of Riya, Playgroup",
      content: "WOW Saplings is more than a preschool. It's a place where my child found her second family! Highly recommended for every parent.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "KOLHAPUR"
    },
    {
      name: "Neha Sharma",
      role: "Parent of Vihaan, Jr KG",
      content: "The curriculum is perfectly balanced between play and learning. My daughter wakes up excited to go to school every single day.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      location: "KOLHAPUR"
    }
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden font-sans bg-white">
      
      {/* Background Image - ABSOLUTELY NO BLUR */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/try-bg.png')" }}
      ></div>
      
      {/* Very light tint for readability, but NO blur */}
      <div className="absolute inset-0 z-1 bg-white/40"></div>

      {/* Sharp Background Concentric Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center opacity-30 z-2">
        <div className="w-[400px] h-[400px] border border-gray-400 rounded-full absolute"></div>
        <div className="w-[600px] h-[600px] border border-gray-400 rounded-full absolute"></div>
        <div className="w-[800px] h-[800px] border border-gray-400 rounded-full absolute"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="relative min-h-[500px] flex flex-col items-center justify-center text-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Quote Icon */}
              <div className="mb-10">
                <Quote size={64} className="text-gray-400/50 fill-gray-400/20" />
              </div>

              {/* Quote Text - High contrast for sharp background */}
              <blockquote className="text-2xl md:text-4xl text-[#1a2f1c] italic font-bold leading-snug md:leading-relaxed mb-12 max-w-4xl px-4 md:px-0">
                &quot;{reviews[activeIndex].content}&quot;
              </blockquote>

              {/* Avatar with Yellow Border */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 rounded-full border-[4px] border-accent-yellow overflow-hidden shadow-xl bg-white">
                  <img
                    src={reviews[activeIndex].img}
                    alt={reviews[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Attribution */}
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-xl md:text-2xl text-primary-dark mb-1">
                  {reviews[activeIndex].name}
                </h4>
                <p className="text-xs md:text-sm font-black text-primary-dark/80 uppercase tracking-[0.2em]">
                  {reviews[activeIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-16 flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-800 hover:text-primary hover:border-primary transition-all active:scale-95 bg-white/80"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Pagination */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${activeIndex === i
                      ? "w-8 h-2 bg-primary-dark"
                      : "w-2 h-2 bg-gray-500 hover:bg-gray-700"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-800 hover:text-primary hover:border-primary transition-all active:scale-95 bg-white/80"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
