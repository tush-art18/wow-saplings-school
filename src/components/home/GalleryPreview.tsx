"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function GalleryPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const photos = [
    { title: "Fun with Colors", cat: "Activity", color: "bg-accent-yellow", text: "text-[#5D4037]", img: "/child-activiti-01.jpeg" },
    { title: "Story Time", cat: "Creative", color: "bg-accent-blue", text: "text-white", img: "/child-activiti-02.jpeg" },
    { title: "Outdoor Play", cat: "Sports", color: "bg-accent-orange", text: "text-white", img: "/child-activiti-03.jpeg" },
    { title: "Building Blocks", cat: "Learning", color: "bg-accent-pink", text: "text-white", img: "/child-activiti-04.jpeg" },
    { title: "Annual Day Prep", cat: "Events", color: "bg-accent-purple", text: "text-white", img: "/child-activiti-05.jpeg" },
    { title: "Junior Scientists", cat: "Science", color: "bg-accent-blue", text: "text-white", img: "/child-activiti-06.jpeg" },
    { title: "Music & Movement", cat: "Music", color: "bg-accent-yellow", text: "text-[#5D4037]", img: "/child-activiti-07.jpeg" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-primary-light/30 wavy-bottom"></div>
      <motion.div
        animate={{ rotate: [0, 15, 0, -10, 0], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 md:top-20 right-10 w-32 h-32 md:w-48 md:h-48 opacity-100 pointer-events-none"
      >
        <img src="/sticker-sun.png" alt="Sticker" className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 mb-12 md:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-extrabold text-4xl md:text-7xl text-primary-dark leading-tight"
            >Life at WOW! 🌈</motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-gray-500 mt-3 md:mt-4 text-base md:text-xl font-bold uppercase tracking-widest"
            >A peek into our magical world</motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="flex gap-4"
          >
            <motion.button
              onClick={() => scroll('left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white border-4 border-primary text-primary p-4 rounded-full shadow-lg hover:bg-primary-light transition-all cursor-pointer"
              title="Previous"
            >
              <ArrowLeft />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all cursor-pointer"
              title="Next"
            >
              <ArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory px-4 md:px-8 pb-12 pt-4 relative z-10"
      >
        {photos.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.08, type: "spring", stiffness: 130 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="min-w-[240px] h-64 sm:min-w-[320px] sm:h-[400px] md:min-w-[380px] md:h-[480px] rounded-[2rem] md:rounded-[3rem] bg-gray-100 flex-shrink-0 relative overflow-hidden group sticker-shadow border-4 md:border-8 border-white snap-center"
          >
            {item.img ? (
              <Image
                src={item.img}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
            ) : (
              <div className={`absolute inset-0 ${item.color} flex items-center justify-center text-6xl md:text-8xl`}>
                🎭
              </div>
            )}

            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-x-3 md:inset-x-6 bottom-3 md:bottom-6"
            >
              <div className={`${item.color} ${item.text} p-4 md:p-6 rounded-[1.8rem] md:rounded-[2.5rem] border-2 md:border-4 border-white shadow-xl`}>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-1 md:mb-2 opacity-80">{item.cat}</span>
                <h3 className="font-heading font-extrabold text-lg md:text-2xl leading-tight">{item.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
        {/* End Spacer */}
        <div className="min-w-[40px] md:min-w-[100px] h-full flex-shrink-0"></div>
      </div>
    </section>
  );
}
