"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// ── DATA ─────────────────────────────────────────────────────────────────────

const featuredEvents = [
  {
    id: 1,
    label: "Upcoming Event",
    title: "Annual Sports & Fun Fest 2025",
    date: "24 Jun — 2026",
    time: "9:00 AM – 1:00 PM",
    location: "WOW Saplings Campus Ground, Kolhapur",
    img: "/play-area.jpeg",
    category: "Sports & Games",
  },
  {
    id: 2,
    label: "Upcoming Event",
    title: "Spring Art & Craft Exhibition",
    date: "15 Jul — 2026",
    time: "10:30 AM – 12:30 PM",
    location: "Main Hall, WOW Saplings",
    img: "/art-ans-craft.jpeg",
    category: "Academic",
  },
  {
    id: 3,
    label: "Upcoming Event",
    title: "Annual Prize Distribution Ceremony",
    date: "10 Aug — 2026",
    time: "11:00 AM – 2:00 PM",
    location: "Assembly Ground, WOW Saplings",
    img: "/award-distribute-area-01.jpeg",
    category: "Celebrations",
  },
];

type Category = "All" | "Celebrations" | "Sports & Games" | "Academic";

const allEvents = [
  {
    id: 1,
    title: "Annual Sports & Fun Fest 2025",
    date: "24 Jun, 2025",
    time: "9:00 AM – 1:00 PM",
    location: "WOW Campus Ground, Kolhapur",
    img: "/play-area.jpeg",
    category: "Sports & Games" as Category,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Spring Art & Craft Exhibition",
    date: "15 Jul, 2025",
    time: "10:30 AM – 12:30 PM",
    location: "Main Hall, WOW Saplings",
    img: "/art-ans-craft.jpeg",
    category: "Academic" as Category,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Annual Prize Distribution Ceremony",
    date: "10 Aug, 2025",
    time: "11:00 AM – 2:00 PM",
    location: "Assembly Ground, WOW Saplings",
    img: "/award-distribute-area-01.jpeg",
    category: "Celebrations" as Category,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Grandparents' Special Day",
    date: "05 Oct, 2024",
    time: "10:00 AM – 12:00 PM",
    location: "School Auditorium, Kolhapur",
    img: "/function-area-01.jpeg",
    category: "Celebrations" as Category,
    status: "past",
  },
  {
    id: 5,
    title: "Outdoor Activity Day",
    date: "20 Sep, 2024",
    time: "9:30 AM – 12:00 PM",
    location: "WOW Saplings Play Zone",
    img: "/child-activiti-01.jpeg",
    category: "Sports & Games" as Category,
    status: "past",
  },
  {
    id: 6,
    title: "Diwali Celebration & Rangoli",
    date: "12 Nov, 2024",
    time: "10:00 AM – 1:00 PM",
    location: "School Courtyard, Kolhapur",
    img: "/function-area-02.jpeg",
    category: "Celebrations" as Category,
    status: "past",
  },
];

const CATEGORIES: Category[] = ["All", "Celebrations", "Sports & Games", "Academic"];

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const [featured, setFeatured] = useState(0);
  const [direction, setDirection] = useState(0);
  const [category, setCategory] = useState<Category>("All");
  const [page, setPage] = useState(1);

  const PER_PAGE = 3;

  const filtered = allEvents.filter(
    (e) => category === "All" || e.category === category
  );
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goNext = () => {
    setDirection(1);
    setFeatured((p) => (p + 1) % featuredEvents.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setFeatured((p) => (p - 1 + featuredEvents.length) % featuredEvents.length);
  };

  const featuredVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-20 px-4 overflow-hidden flex flex-col items-center justify-center text-center"
        style={{ minHeight: "34vh" }}
      >
        {/* Dark photo backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/function-area-02.jpeg"
            alt="Events background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-3"
          >
            All Events
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-white/60 text-sm font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/90">Events</span>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED CAROUSEL ───────────────────────────────── */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900" style={{ aspectRatio: "16/7" }}>

            {/* Slides */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={featured}
                custom={direction}
                variants={featuredVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={featuredEvents[featured].img}
                  alt={featuredEvents[featured].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                    {featuredEvents[featured].label}
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-2 leading-tight">
                    {featuredEvents[featured].title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm font-medium">
                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {featuredEvents[featured].date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {featuredEvents[featured].time}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} /> {featuredEvents[featured].location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all">
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 right-6 flex gap-2 z-20">
              {featuredEvents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > featured ? 1 : -1); setFeatured(i); }}
                  className={`rounded-full transition-all duration-300 ${i === featured ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS + EVENT LIST ─────────────────────────── */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Category tabs */}
          <div className="bg-white border border-gray-200 rounded-full p-1.5 flex flex-wrap gap-1 mb-8 shadow-sm w-fit">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); setPage(1); }}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  category === cat
                    ? "bg-primary text-white shadow"
                    : "text-gray-500 hover:text-primary-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Event list */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {paginated.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow group"
                >
                  {/* Thumbnail */}
                  <div className="sm:w-44 md:w-52 shrink-0 overflow-hidden relative">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-40 sm:h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category pill on image */}
                    <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                      {event.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-5 flex flex-col justify-center gap-1.5">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {event.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {event.time}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-lg md:text-xl text-primary-dark leading-tight">
                      {event.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                      <MapPin size={13} className="text-primary shrink-0" /> {event.location}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center px-5 py-4 sm:py-0 border-t sm:border-t-0 sm:border-l border-gray-100 shrink-0">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        event.status === "upcoming"
                          ? "bg-primary text-white hover:bg-primary-dark shadow"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {event.status === "upcoming" ? "Register" : "View Photos"}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {paginated.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-xl text-primary-dark">No events in this category yet.</h3>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                    page === p
                      ? "bg-primary text-white shadow"
                      : "border border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
                  }`}
                >
                  {String(p).padStart(2, "0")}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
