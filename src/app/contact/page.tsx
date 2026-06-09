"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    { emoji: "📋", color: "#7C3AED", q: "What is the admission process?", a: "The process is simple and parent-friendly. Fill out the admission form on our website or walk into our campus. Our admissions team schedules a warm interaction session with the child and parents, and enrollment is finalized within a few days." },
    { emoji: "👶", color: "#EC4899", q: "What is the ideal age for preschool?", a: "We welcome children from 2 years of age. Programs are structured into Playgroup (2–3 yrs), Nursery (3–4 yrs), Junior KG (4–5 yrs), and Senior KG (5–6 yrs) — each carefully crafted for that developmental stage." },
    { emoji: "👩‍🏫", color: "#0EA5E9", q: "What is the student-to-teacher ratio?", a: "We maintain a low 10:1 student-to-teacher ratio. Every child gets personal attention, nurturing guidance, and tailored support throughout the day — no child is left unnoticed." },
    { emoji: "🚌", color: "#F59E0B", q: "Do you provide transport facilities?", a: "Yes! We offer safe, GPS-tracked transport covering Rajarampuri, Shahupuri, Tarabai Park, Nagala Park, and surrounding Kolhapur localities. All vehicles have trained staff on board." },
    { emoji: "🔒", color: "#10B981", q: "How is child safety ensured on campus?", a: "Our campus runs 24/7 CCTV surveillance with trained security at every entry and exit point. We enforce a strict pick-up authorization policy — only pre-registered guardians can collect your child." },
    { emoji: "🕙", color: "#6366F1", q: "What are your campus visiting hours?", a: "Parents and visitors are welcome Monday to Saturday from 10:00 AM to 1:00 PM. We recommend booking an appointment in advance so we can arrange a personal guided tour just for you." },
    { emoji: "🏢", color: "#2D8C4E", q: "How do I open a WOW Saplings franchise?", a: "We'd love to grow with you! Submit the franchise inquiry form on our Franchise page. Our expansion team will reach out to discuss investment brackets, site selection, and our full support model." },
    { emoji: "🤝", color: "#F97316", q: "What franchise support do you provide?", a: "You're never alone. We provide end-to-end handholding: site selection, interior design, staff recruitment, our proprietary curriculum kit, teacher training, and dedicated marketing support from day one." },
    { emoji: "🎓", color: "#8B5CF6", q: "Who is eligible for the Teacher Training Course?", a: "Any passionate individual who has completed 10+2 (HSC) or holds a bachelor's degree can apply. Whether you're a fresh graduate or a career changer, our ECCE program is designed for you." },
    { emoji: "🏅", color: "#EF4444", q: "Is the Teacher Training Certificate government recognized?", a: "Yes, absolutely. Our course is officially affiliated and certified by Shivaji University, Kolhapur — one of Maharashtra's most respected universities. Graduates confidently secure placements in CBSE, ICSE, and State Board schools." },
  ];

  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] font-sans relative overflow-hidden">

      {/* ── HERO ── Full-bleed, no boxes */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        {/* Soft background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-36 left-1/3 text-6xl opacity-10 animate-bounce duration-[1200ms] select-none">✏️</div>
        <div className="absolute top-80 right-1/4 text-6xl opacity-10 animate-pulse select-none">🎨</div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Eyebrow */}
          <ScrollReveal animation="bounce-in">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Kolhapur, Maharashtra</p>
          </ScrollReveal>

          {/* Giant Headline */}
          <ScrollReveal animation="wobble-in" delay={0.05}>
            <h1 className="font-heading font-extrabold text-6xl md:text-8xl lg:text-[7rem] text-primary-dark leading-[0.95] mb-12">
              Let&apos;s<br />
              <span className="text-primary">Talk.</span>
            </h1>
          </ScrollReveal>

          {/* Horizontal divider with accent */}
          <div className="h-px bg-gradient-to-r from-primary via-accent-yellow to-transparent mb-12" />

          {/* Contact info as open inline text — NO boxes, staggered reveal */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">

            {/* Phone */}
            <ScrollReveal animation="bounce-in" delay={0.1}>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-3">Call Us</p>
                <a href="tel:+918999640602" className="block font-heading font-extrabold text-2xl text-primary-dark hover:text-primary transition-colors leading-tight">+91 89996 40602</a>
                <a href="tel:+919168314566" className="block font-heading font-extrabold text-2xl text-primary-dark hover:text-primary transition-colors leading-tight mt-1">+91 91683 14566</a>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal animation="bounce-in" delay={0.15}>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-3">Email Us</p>
                <a href="mailto:wowsaplingsschool666@gmail.com" className="font-bold text-lg text-primary-dark hover:text-primary transition-colors break-all">wowsaplingsschool666<br />@gmail.com</a>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal animation="bounce-in" delay={0.2}>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-3">School Hours</p>
                <p className="font-bold text-lg text-primary-dark leading-relaxed">Mon – Sat<br />10:00 AM – 1:00 PM</p>
              </div>
            </ScrollReveal>

            {/* Address */}
            <ScrollReveal animation="bounce-in" delay={0.25}>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-3">Visit Us</p>
                <p className="font-bold text-base text-primary-dark leading-relaxed">Main Road, Layout no.2, Kaman,<br />Baba Jaragnagar, Kolhapur<br /><span className="text-primary">Maharashtra – 416008</span></p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── MAP — framed container ── */}
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal animation="bounce-in">
            <div className="w-full h-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7644.3353919311885!2d74.21827267771!3d16.6684897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ff918c44f717%3A0x885bba4f5208489d!2sWow%20Saplings%20School!5e0!3m2!1sen!2sin!4v1777144512785!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LOCAL SEO — Accent strip, no box ── */}
      <section className="py-16 px-4 bg-primary-light/20 border-y border-primary/10">
        <ScrollReveal animation="fade-up">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">Serving All of Kolhapur</p>
            <p className="text-gray-600 leading-relaxed font-medium text-lg max-w-3xl mx-auto">
              WOW Saplings is the best preschool near you — easily accessible for families in{" "}
              <span className="font-bold text-primary-dark">Rajarampuri, Shahupuri, Tarabai Park, Ruikar Colony, Nagala Park, Pratibha Nagar</span>{" "}
              and surrounding localities. Safe transport is available across the city.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FAQ — Split Panel ── */}
      <section className="py-28 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-3">Support &amp; Information</p>
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark leading-tight">
                  Questions?<br />
                  <span className="text-primary">We&apos;ve got answers.</span>
                </h2>
              </div>
              <p className="text-gray-400 font-medium max-w-xs text-right hidden md:block">
                Click any question on the left to read the full answer instantly.
              </p>
            </div>
          </ScrollReveal>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* LEFT — Scrollable Question List */}
            <div className="lg:col-span-2 flex flex-col gap-2">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} animation="rotate-in" delay={i * 0.03}>
                  <button
                    onClick={() => setActiveFaq(i)}
                    className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group border-l-4 ${
                      activeFaq === i
                        ? "bg-white shadow-lg scale-[1.02]"
                        : "bg-white/60 border-transparent hover:bg-white hover:shadow-md"
                    }`}
                    style={activeFaq === i ? { borderLeftColor: faq.color } : {}}
                  >
                    <span className={`text-2xl shrink-0 transition-transform duration-300 ${
                      activeFaq === i ? "scale-110" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                    }`}>{faq.emoji}</span>
                    <span className={`text-sm font-bold leading-snug transition-colors ${
                      activeFaq === i ? "text-primary-dark" : "text-gray-500 group-hover:text-gray-800"
                    }`}>{faq.q}</span>
                    <ArrowRight size={16} className={`ml-auto shrink-0 transition-all duration-300 ${
                      activeFaq === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`} style={activeFaq === i ? { color: faq.color } : {}} />
                  </button>
                </ScrollReveal>
              ))}
            </div>

            {/* RIGHT — Answer Panel */}
            <div className="lg:col-span-3 sticky top-32">
              <ScrollReveal animation="bounce-in">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFaq}
                    initial={{ opacity: 0, y: 25, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -25, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                  >
                    <div className="h-2 w-full" style={{ backgroundColor: faqs[activeFaq].color }} />
                    <div className="p-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md border border-gray-100">
                          {faqs[activeFaq].emoji}
                        </div>
                        <span className="text-8xl font-black leading-none select-none" style={{ color: faqs[activeFaq].color, opacity: 0.07 }}>
                          {String(activeFaq + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-heading font-extrabold text-2xl text-primary-dark mb-5 leading-snug">{faqs[activeFaq].q}</h3>
                      <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: faqs[activeFaq].color }} />
                      <p className="text-gray-600 text-lg leading-relaxed font-medium">{faqs[activeFaq].a}</p>
                      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{activeFaq + 1} / {faqs.length}</span>
                        <div className="flex gap-2">
                          {activeFaq > 0 && (
                            <button onClick={() => setActiveFaq(activeFaq - 1)} className="flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all">← Prev</button>
                          )}
                          {activeFaq < faqs.length - 1 && (
                            <button onClick={() => setActiveFaq(activeFaq + 1)} className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition-all hover:shadow-md"
                              style={{ color: faqs[activeFaq + 1].color, backgroundColor: `${faqs[activeFaq + 1].color}15` }}>
                              Next <ArrowRight size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
