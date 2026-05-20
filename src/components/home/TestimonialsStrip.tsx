"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fetchTestimonials } from "@/lib/api";

const MOCK_REVIEWS = [
  {
    name: "Parent",
    role: "",
    content: "We truly appreciate the school’s nurturing environment and dedicated teachers, who helped our daughter grow confidently, happily, and develop a strong love for learning.",
    img: "/parent-1.jpeg",
    location: "KOLHAPUR"
  },
  {
    name: "Ms. Sana",
    role: "Parent of Falak",
    content: "We’ve seen a beautiful change in our daughter’s confidence, creativity, and communication. The caring teachers make learning meaningful, enjoyable, and truly inspiring every day",
    img: "parent-2.jpeg",
    location: "KOLHAPUR"
  },
  {
    name: "Anita Patil",
    role: "Parent of Anish",
    content: "We appreciate the school’s caring teachers, cleanliness, and activity-based learning approach. Our child developed strong reading skills, confidence, good manners, and truly enjoyed learning every day",
    img: "parent-3.jpeg",
    location: "KOLHAPUR"
  },
  {
    name: "Parent",
    role: "Parent of Vanshika",
    content: "Wow Saplings provided our daughter with a nurturing and inspiring environment for four wonderful years, helping her grow academically, emotionally, and confidently with dedicated teacher support",
    img: "/parent-4.jpeg",
    location: "KOLHAPUR"
  },
  {
    name: "Parent",
    role: "Parent of Sarvadnya",
    content: "We are grateful for the warm and nurturing environment at Saplings. In just six months, we saw remarkable growth in our son’s confidence, happiness, and love for school",
    img: "/parent-5.jpeg",
    location: "KOLHAPUR"
  },
  {
    name: "Parent",
    role: "",
    content: "We are extremely happy with the safe, caring, and activity-based learning environment at Wow Saplings. Our child has shown remarkable growth in academics, confidence, and extracurricular activities.",
    img: "/parent-6.jpeg",
    location: "KOLHAPUR"
  },
];

export default function TestimonialsStrip() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [reviews, setReviews] = useState<any[]>(MOCK_REVIEWS);

  useEffect(() => {
    async function loadTestimonials() {
      const apiReviews = await fetchTestimonials(false); // fetch Preschool reviews
      if (apiReviews && apiReviews.length > 0) {
        const formatted = apiReviews.map(r => ({
          name: r.parent_name,
          role: r.child_class,
          content: r.content,
          img: r.photo || "/parent-1.jpeg",
          location: "KOLHAPUR"
        }));
        setReviews(formatted);
      }
    }
    loadTestimonials();
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const setSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="py-24 relative overflow-hidden font-sans bg-white">
      
      {/* 1. Base Layer: Sharp Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ backgroundImage: "url('/try-bg.png')" }}
      ></div>
      
      {/* 2. Perfectional Tint Layer: Radial Gradient for Depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/30 via-white/50 to-white/30"></div>
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-60"></div>

      {/* 3. Subtle Animated Concentric Circles (Breathing Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center z-[3]">
        {[450, 700, 950].map((size, i) => (
          <motion.div
            key={size}
            animate={{ 
              scale: [1, 1.03, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ 
              duration: 6 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ width: size, height: size }}
            className="border border-primary/20 rounded-full absolute"
          />
        ))}
      </div>

      {/* 4. Micro-Texture Overlay (Diamond Pattern for Premium Feel) */}
      <div className="absolute inset-0 z-[4] bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="relative min-h-[550px] flex flex-col items-center justify-center text-center">

          <div className="relative w-full overflow-hidden py-10">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="flex flex-col items-center w-full"
              >
                {/* Quote Icon */}
                <div className="mb-8">
                  <Quote size={64} className="text-gray-400/50 fill-gray-400/20" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#1a2f1c] italic font-bold leading-snug md:leading-relaxed mb-10 max-w-4xl px-4 md:px-0">
                  &quot;{reviews[activeIndex].content}&quot;
                </blockquote>

                {/* Avatar with Yellow Border */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-full border-[4px] border-accent-yellow overflow-hidden shadow-xl bg-white relative z-10">
                    <img
                      src={reviews[activeIndex].img}
                      alt={reviews[activeIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${reviews[activeIndex].name}&background=random` }}
                    />
                  </div>
                  {/* Subtle Glow behind avatar */}
                  <div className="absolute inset-0 bg-accent-yellow/20 blur-xl rounded-full scale-150 z-0"></div>
                </div>

                {/* Attribution */}
                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-xl md:text-2xl text-primary-dark mb-1">
                    {reviews[activeIndex].name} {reviews[activeIndex].role && `— ${reviews[activeIndex].role}`}
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 bg-primary-dark/20"></div>
                    <p className="text-xs md:text-sm font-black text-primary-dark/80 uppercase tracking-[0.2em]">
                      {reviews[activeIndex].location}
                    </p>
                    <div className="h-px w-6 bg-primary-dark/20"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Combined Row */}
          <div className="mt-12 flex items-center gap-6 md:gap-10">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-800 hover:text-primary hover:border-primary transition-all active:scale-90 bg-white shadow-md group z-20"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3 z-20">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`transition-all duration-300 rounded-full ${activeIndex === i
                      ? "w-8 md:w-10 h-2 bg-primary-dark"
                      : "w-2 h-2 bg-gray-400 hover:bg-gray-700"
                    }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-800 hover:text-primary hover:border-primary transition-all active:scale-90 bg-white shadow-md group z-20"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
