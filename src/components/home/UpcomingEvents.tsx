"use client";

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
      {/* Decorative Stickers & Images */}
      <div className="absolute top-10 left-[5%] w-32 h-32 md:w-48 md:h-48 opacity-90 floating-cloud rotate-12 pointer-events-none">
        <img src="/sticker-plane.png" alt="Sticker" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -bottom-10 right-[5%] w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-primary-light shadow-2xl overflow-hidden opacity-20 rotate-6 pointer-events-none hidden lg:block">
        <img src="/function-area-01.jpeg" alt="Function Area" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-primary-dark mb-4">Upcoming Fun! 🎉</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-lg">Mark your calendars for joy</p>
          </div>
          <Link href="/events" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View All Events <ArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((ev, i) => (
            <div key={i} className="group bg-primary-light/30 p-6 rounded-[2.2rem] border-4 border-white shadow-lg transition-all hover:scale-105 active:scale-95">
              <div className="bg-white w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 md:border-4 border-primary/20 group-hover:rotate-6 transition-transform shadow-inner mb-4">
                <span className="font-heading font-black text-xl text-primary">{ev.date}</span>
                <span className="text-[10px] uppercase font-bold text-gray-400">{ev.month}</span>
              </div>
              <div>
                <span className="inline-block bg-accent-yellow px-3 py-1 rounded-full text-[10px] font-bold text-[#5D4037] mb-2 uppercase tracking-widest">{ev.category}</span>
                <h4 className="font-heading font-bold text-xl text-primary-dark leading-tight mb-4">{ev.title}</h4>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Calendar size={16} /> Add to Calendar
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
