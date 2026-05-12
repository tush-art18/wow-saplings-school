"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import ScrollReveal from "@/components/global/ScrollReveal";
import { CheckCircle2, ChevronDown, Award, Briefcase, GraduationCap, Heart } from "lucide-react";

export default function TeacherTrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const syllabus = [
    { title: "Module 1: Child Psychology & Development", content: "Understanding cognitive, emotional, and physical stages of early childhood." },
    { title: "Module 2: Modern Pedagogy & Methodologies", content: "Montessori, Reggio Emilia, and Play-way methods tailored to CBSE structures." },
    { title: "Module 3: Classroom Management", content: "Techniques for maintaining engagement, handling discipline, and creating safe environments." },
    { title: "Module 4: Practical Teaching & Internship", content: "1-month hands-on training inside regular WOW Saplings classrooms." }
  ];

  useEffect(() => {
    // Floating particles simple animation
    gsap.to(".flying-hat", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      rotation: "random(-15, 15)",
      ease: "sine.inOut",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-28">

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-dark text-white overflow-hidden py-24 px-4">
        {/* Particles */}
        <div className="absolute top-10 right-20 text-4xl opacity-50 flying-hat">🎓</div>
        <div className="absolute bottom-20 right-1/4 text-5xl opacity-30 flying-hat">📚</div>
        <div className="absolute top-32 left-20 text-3xl opacity-40 flying-hat">🌟</div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 backdrop-blur-sm">
                <Award size={18} className="text-accent-yellow" />
                University Certified Course
              </div>
              <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-6 leading-tight">
                Transform Your Passion Into a <span className="text-accent-yellow">Profession</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-sans mb-8">
                Join Kolhapur&apos;s most comprehensive Pre-Primary Teacher Training Course. Gain hands-on experience, university certification, and 100% placement assistance.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="bg-accent-yellow text-primary-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-colors text-lg shadow-lg">
                  Apply for Batch
                </a>
                <a href="#syllabus" className="bg-transparent border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg">
                  View Syllabus
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl text-accent-yellow font-bold mb-2 font-heading">1 Year</div>
                    <div className="text-sm font-bold text-gray-400 uppercase">Duration</div>
                  </div>
                  <div>
                    <div className="text-4xl text-accent-yellow font-bold mb-2 font-heading">100%</div>
                    <div className="text-sm font-bold text-gray-400 uppercase">Placement Help</div>
                  </div>
                  <div>
                    <div className="text-4xl text-accent-yellow font-bold mb-2 font-heading">Offline</div>
                    <div className="text-sm font-bold text-gray-400 uppercase">Flexible Mode</div>
                  </div>
                  <div>
                    <div className="text-4xl text-accent-yellow font-bold mb-2 font-heading">200+</div>
                    <div className="text-sm font-bold text-gray-400 uppercase">Certified Alumni</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-8" id="syllabus">
            <ScrollReveal animation="fade-up">
              <h2 className="font-heading font-bold text-4xl text-primary-dark mb-8">Course Curriculum</h2>
            </ScrollReveal>

            <div className="space-y-4">
              {syllabus.map((mod, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                  <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-lg text-primary-dark">{mod.title}</span>
                      <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : "text-gray-400"}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-gray-600 font-medium">
                            {mod.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="mt-16 bg-primary-light rounded-3xl p-8 md:p-12">
                <h3 className="font-heading font-bold text-3xl text-primary-dark mb-6">Career Opportunities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Pre-Primary School Teacher",
                    "Childcare Center Director",
                    "Education Consultant",
                    "Curriculum Developer",
                    "Special Education Assistant",
                    "Start Your Own Preschool"
                  ].map((career, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-white">
                      <Briefcase className="text-primary shrink-0" size={20} />
                      <span className="font-bold text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            {/* Sticky Application Form Form Mock */}
            <ScrollReveal animation="fade-left" delay={0.2}>
              <div id="apply" className="sticky top-32 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="font-heading font-bold text-2xl text-primary-dark mb-6">Apply for Next Batch</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted (Mock)'); }}>
                  <div>
                    <label className="block text-sm font-bold text-gray-600 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Jane Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-600 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-600 mb-2">Education Qualification</label>
                    <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                      <option>Graduate</option>
                      <option>Undergraduate</option>
                      <option>Post Graduate</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-1 mt-4">
                    Submit Application
                  </button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4 font-medium">
                  Our counselor will call you within 24 hours with fee and schedule details.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#c3cfab] relative overflow-hidden font-sans">
        {/* Huge Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center overflow-hidden pointer-events-none opacity-[0.04] z-0 w-full select-none">
          <div className="text-[12rem] md:text-[20rem] font-black leading-[0.85] text-center whitespace-nowrap text-[#1a2f1c]">ALUMNI</div>
          <div className="text-[12rem] md:text-[20rem] font-black leading-[0.85] text-center whitespace-nowrap text-[#1a2f1c]">ALUMNI</div>
          <div className="text-[12rem] md:text-[20rem] font-black leading-[0.85] text-center whitespace-nowrap text-[#1a2f1c]">ALUMNI</div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-24">
              <h2 className="font-heading font-extrabold text-5xl md:text-6xl text-[#1a2f1c] mb-4">Alumni Success</h2>
              <p className="text-[#1a2f1c]/70 font-bold uppercase tracking-widest text-lg">Hear from our certified teachers</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-y-16 gap-x-6 md:gap-8">
            {[
              { name: "Sneha Kulkarni", role: "Certified Teacher, Batch '24", content: "The teacher training program here is top-notch. I feel so confident after my certification and getting placed was a breeze.", img: "https://randomuser.me/api/portraits/women/24.jpg" },
              { name: "Priya Sharma", role: "Preschool Teacher, Pune", content: "The practical internship module gave me exactly what I needed to face a real classroom. Highly recommended!", img: "https://randomuser.me/api/portraits/women/33.jpg" },
              { name: "Ayesha Khan", role: "Educator, Mumbai", content: "Flexible online classes allowed me to complete the course while managing my family. The trainers are incredibly supportive.", img: "https://randomuser.me/api/portraits/women/42.jpg" },
              { name: "Pooja Deshmukh", role: "Special Ed Assistant", content: "WOW Saplings provides the best early childhood education training. The syllabus is perfectly aligned with modern methodologies.", img: "https://randomuser.me/api/portraits/women/62.jpg" },
              { name: "Ritu Patel", role: "Preschool Founder", content: "Thanks to this certification, I successfully opened my own preschool. The management module was a game-changer!", img: "https://randomuser.me/api/portraits/women/8.jpg" }
            ].map((r, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 0.1} width="fit-content" className="relative pt-12 pb-4 w-[calc(100%-20px)] sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-24px)] max-w-[380px] group">

                {/* Main Dark Body */}
                <div className="bg-[#1a2f1c] text-[#e8eddf] rounded-[2rem] p-8 pt-16 border-2 border-[#1a2f1c] shadow-2xl relative h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                  {/* Hearts */}
                  <div className="flex justify-center gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Heart key={s} size={20} fill="#f9c846" className="text-[#f9c846]" />)}
                  </div>

                  {/* Text */}
                  <p className="text-center text-[15px] leading-relaxed mb-8 font-medium flex-1">
                    {r.content}
                  </p>

                  {/* Bottom Info */}
                  <p className="text-center text-[11px] opacity-50 uppercase tracking-widest font-bold">WOW TTC | 2024</p>
                </div>

                {/* Top overlapping Avatar Box */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#e8eddf] text-[#1a2f1c] px-4 py-3 rounded-[1.2rem] border-2 border-[#1a2f1c] shadow-lg flex items-center gap-3 w-[85%] z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#1a2f1c]/10 bg-white flex items-center justify-center">
                    <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm leading-tight truncate">{r.name}</p>
                    <p className="text-[10px] font-bold text-[#1a2f1c]/60 truncate">{r.role}</p>
                  </div>
                </div>

              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
