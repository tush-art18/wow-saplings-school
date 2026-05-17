"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";

export default function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const upcomingEvents = [
    { id: 1, title: "Annual Sports Meet 2025", date: "24", month: "FEB", desc: "A day filled with races, games, and medals for our little champions.", time: "9:00 AM - 1:00 PM", location: "WOW Campus Ground", color: "bg-accent-blue" },
    { id: 2, title: "Spring Art Exhibition", date: "15", month: "MAR", desc: "Showcasing the creative masterpieces crafted by Nursery and KG students.", time: "10:30 AM - 12:30 PM", location: "Main Hall", color: "bg-accent-pink" },
  ];

  const pastEvents = [
    { id: 3, title: "Diwali Festiva", date: "12", month: "NOV", desc: "Celebrating the festival of lights with safe diya painting and sweets.", img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Grandparents Day", date: "05", month: "OCT", desc: "A special day dedicated to the pillars of our families, with special performances.", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Local Excursion", date: "22", month: "SEP", desc: "Field trip to the local botanical garden to learn about plants and nature.", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <ScrollReveal animation="fade-up">
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-primary-dark mb-6">
              School Calendar & Events
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with everything happening inside the campus. From competitive sports to creative exhibitions.
            </p>
          </ScrollReveal>
        </div>

        {/* Custom Tab Toggle */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="flex bg-white p-2 rounded-full border border-gray-200 max-w-sm mx-auto mb-16 relative shadow-sm">
            <button
              className={`flex-1 py-3 text-sm font-bold rounded-full z-10 transition-colors ${tab === "upcoming" ? "text-white" : "text-gray-500 hover:text-primary-dark"}`}
              onClick={() => setTab("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={`flex-1 py-3 text-sm font-bold rounded-full z-10 transition-colors ${tab === "past" ? "text-white" : "text-gray-500 hover:text-primary-dark"}`}
              onClick={() => setTab("past")}
            >
              Past Highlights
            </button>

            <div className={`absolute top-2 bottom-2 w-[calc(50%-0.5rem)] bg-primary rounded-full transition-transform duration-300 ease-in-out ${tab === "upcoming" ? "translate-x-0" : "translate-x-full ml-1"}`}></div>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {/* UPCOMING EVENTS */}
          {tab === "upcoming" && (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {upcomingEvents.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                  <div className="text-5xl mb-4">📅</div>
                  <h3 className="font-heading font-bold text-xl text-primary-dark">No upcoming events scheduled.</h3>
                </div>
              ) : (
                upcomingEvents.map((event, i) => (
                  <ScrollReveal key={event.id} animation="fade-up" delay={i * 0.1}>
                    <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">

                      {/* Glowing effect if close date (mocked via pulse block) */}
                      {i === 0 && <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/10 blur-3xl animate-pulse rounded-full pointer-events-none"></div>}

                      {/* Date Block */}
                      <div className="shrink-0 text-center bg-gray-50 border border-gray-100 rounded-2xl p-6 min-w-[140px] flex flex-col justify-center relative overflow-hidden">
                        <div className={`absolute top-0 left-0 right-0 h-2 ${event.color}`}></div>
                        <div className={`font-heading font-extrabold text-5xl mb-1 ${event.color.replace('bg-', 'text-')}`}>{event.date}</div>
                        <div className="font-bold text-gray-500 tracking-widest">{event.month}</div>
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        {i === 0 && <span className="inline-block bg-accent-pink/10 text-accent-pink text-xs font-bold px-3 py-1 rounded-full mb-3 border border-accent-pink/20">SOON</span>}
                        <h2 className="font-heading font-bold text-3xl text-primary-dark mb-4">{event.title}</h2>
                        <p className="text-gray-600 mb-6 font-medium leading-relaxed">{event.desc}</p>
                        <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-500">
                          <span className="flex items-center gap-2"><Clock size={16} /> {event.time}</span>
                          <span className="flex items-center gap-2"><MapPin size={16} /> {event.location}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center md:items-end justify-center md:justify-end shrink-0 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                        <Link href="/contact" className="w-full md:w-auto text-center bg-white border-2 border-primary text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                          Register Interest
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))
              )}
            </motion.div>
          )}

          {/* PAST EVENTS */}
          {tab === "past" && (
            <motion.div
              key="past"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {pastEvents.map((event, i) => (
                <ScrollReveal key={event.id} animation="fade-up" delay={i * 0.1}>
                  <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group">
                    <div className="h-48 overflow-hidden relative">
                      <img src={event.img} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-primary-dark shadow-sm">
                        {event.date} {event.month}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl text-primary-dark mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2">{event.desc}</p>
                      <Link href={`/gallery`} className="text-primary font-bold flex items-center gap-2 text-sm hover:text-primary-dark group">
                        View Photos <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
