"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function GalleryPreview() {
  const photos = [
    { title: "Fun with Colors", cat: "Activity", color: "bg-accent-yellow", text: "text-[#5D4037]", img: "/fun-with-colors.jpeg" },
    { title: "Story Time", cat: "Creative", color: "bg-accent-blue", text: "text-white", img: "/storytime.jpeg" },
    { title: "Outdoor Play", cat: "Sports", color: "bg-accent-orange", text: "text-white", img: "/outdoor-play.jpeg" },
    { title: "Building Blocks", cat: "Learning", color: "bg-accent-pink", text: "text-white", img: "/child-activiti-04.jpeg" },
    { title: "celebration and events", cat: "Events", color: "bg-accent-purple", text: "text-white", img: "/celebration and events.png" },
    { title: "Junior Scientists", cat: "Science", color: "bg-accent-blue", text: "text-white", img: "/Junior-Scientists.jpeg" },
    { title: "Music & Movement", cat: "Music", color: "bg-accent-yellow", text: "text-[#5D4037]", img: "/child-activiti-07.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [translateX, setTranslateX] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const gap = window.innerWidth < 768 ? 24 : 32;
    const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 320 : 380;
    setTranslateX(`-${currentIndex * (cardWidth + gap)}px`);
  }, [currentIndex, visibleCards]);

  const nextSlide = () => {
    if (currentIndex < photos.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#FDFAF0]/60 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-primary-light/20 wavy-bottom"></div>
      <motion.div
        animate={{ rotate: [0, 15, 0, -10, 0], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 md:top-16 right-8 w-28 h-28 md:w-36 md:h-36 opacity-90 pointer-events-none z-0"
      >
        <Image src="/sticker-sun.png" alt="" role="presentation" width={144} height={144} className="w-full h-full object-contain" />
      </motion.div>

      {/* Header Content */}
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-6xl text-primary-dark leading-tight"
          >
            Life at WOW! 🌈
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-gray-500 mt-3 text-base md:text-lg font-bold uppercase tracking-widest"
          >
            A peek into our magical world
          </motion.p>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="max-w-[1400px] mx-auto px-12 md:px-16 relative z-10">
        
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-1 lg:left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 bg-white hover:bg-primary text-primary-dark hover:text-white disabled:opacity-30 border-2 border-gray-100 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-primary-dark"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= photos.length - visibleCards}
          className="absolute right-1 lg:right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 bg-white hover:bg-primary text-primary-dark hover:text-white disabled:opacity-30 border-2 border-gray-100 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-primary-dark"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Viewport viewport */}
        <div className="w-full overflow-hidden py-4 rounded-[2.5rem]">
          <motion.div
            animate={{ x: translateX }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flex gap-6 md:gap-8 px-2 w-max"
          >
            {photos.map((item, i) => (
              <div
                key={i}
                className="w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[480px] rounded-[2rem] md:rounded-[3rem] bg-gray-100 flex-shrink-0 relative overflow-hidden shadow-xl border-4 md:border-8 border-white transition-all duration-300"
              >
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 320px, 400px"
                    className="object-cover"
                  />
                ) : (
                  <div className={`absolute inset-0 ${item.color} flex items-center justify-center text-6xl md:text-8xl`}>
                    🎭
                  </div>
                )}

                {/* Always-visible card caption */}
                <div className="absolute inset-x-3 md:inset-x-6 bottom-3 md:bottom-6 z-10">
                  <div className="bg-white text-primary-dark p-4 md:p-6 rounded-[1.8rem] md:rounded-[2.5rem] border-2 md:border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                    <div className={`inline-block ${item.color} text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 shadow-sm`}>
                      {item.cat}
                    </div>
                    <h3 className="font-heading font-extrabold text-lg md:text-2xl leading-tight text-primary-dark">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
