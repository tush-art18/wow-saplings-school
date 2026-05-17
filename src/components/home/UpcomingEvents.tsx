"use client";

import { motion } from "motion/react";
import { Star, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UpcomingEvents() {
  const upcomingEvents = [
    { title: "Annual Sports Day", date: "15", month: "Mar", category: "Sports" },
    { title: "Parent Orientation", date: "22", month: "Mar", category: "Meeting" },
    { title: "Science Fair", date: "05", month: "Apr", category: "Academic" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Stickers */}
      <motion.div
        animate={{ rotate: [12, 20, 12], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[5%] w-32 h-32 md:w-48 md:h-48 opacity-90 pointer-events-none"
      >
        <img src="/sticker-plane.png" alt="Sticker" className="w-full h-full object-contain" />
      </motion.div>
      <div className="absolute -bottom-10 right-[5%] w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-primary-light shadow-2xl overflow-hidden opacity-20 rotate-6 pointer-events-none hidden lg:block">
        <img src="/function-area-01.jpeg" alt="Function Area" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-extrabold text-4xl md:text-6xl text-primary-dark mb-4"
            >Upcoming Fun! 🎉</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-lg"
            >Mark your calendars for joy</motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/events" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Events <ArrowRight />
            </Link>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 160, damping: 15 }}
            className="w-full max-w-3xl bg-primary-light/30 p-8 md:p-12 rounded-[2.5rem] border-4 border-white shadow-lg text-center flex flex-col items-center justify-center"
          >
            <div className="bg-white w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center border-4 border-primary/20 shadow-inner mb-6">
              <span className="text-3xl md:text-4xl">📅</span>
            </div>
            <h4 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark leading-tight mb-4">Upcoming Events<br/>Coming Soon!</h4>
            <p className="text-gray-600 font-bold text-lg md:text-xl uppercase tracking-widest max-w-md mx-auto opacity-80">
              Check back shortly
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
