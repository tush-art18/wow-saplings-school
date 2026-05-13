"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import ScrollReveal from "@/components/global/ScrollReveal";
import { CheckCircle2, ChevronDown, Award, Briefcase, GraduationCap, Heart, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TeacherTrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Testimonials State
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const syllabus = [
    { title: "Module 1: Child Psychology & Development", content: "Understanding cognitive, emotional, and physical stages of early childhood." },
    { title: "Module 2: Modern Pedagogy & Methodologies", content: "Montessori, Reggio Emilia, and Play-way methods tailored to CBSE structures." },
    { title: "Module 3: Classroom Management", content: "Techniques for maintaining engagement, handling discipline, and creating safe environments." },
    { title: "Module 4: Practical Teaching & Internship", content: "1-month hands-on training inside regular WOW Saplings classrooms." }
  ];

  const alumni = [
    { name: "Sneha Kulkarni", role: "Certified Teacher, Batch '24", content: "The teacher training program here is top-notch. I feel so confident after my certification and getting placed was a breeze.", img: "https://randomuser.me/api/portraits/women/24.jpg", location: "KOLHAPUR" },
    { name: "Priya Sharma", role: "Preschool Teacher, Pune", content: "The practical internship module gave me exactly what I needed to face a real classroom. Highly recommended!", img: "https://randomuser.me/api/portraits/women/33.jpg", location: "PUNE" },
    { name: "Ayesha Khan", role: "Educator, Mumbai", content: "Flexible online classes allowed me to complete the course while managing my family. The trainers are incredibly supportive.", img: "https://randomuser.me/api/portraits/women/42.jpg", location: "MUMBAI" },
    { name: "Pooja Deshmukh", role: "Special Ed Assistant", content: "WOW Saplings provides the best early childhood education training. The syllabus is perfectly aligned with modern methodologies.", img: "https://randomuser.me/api/portraits/women/62.jpg", location: "KOLHAPUR" },
    { name: "Ritu Patel", role: "Preschool Founder", content: "Thanks to this certification, I successfully opened my own preschool. The management module was a game-changer!", img: "https://randomuser.me/api/portraits/women/8.jpg", location: "KOLHAPUR" }
  ];

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
    setActiveIndex((prev) => (prev + 1) % alumni.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + alumni.length) % alumni.length);
  };

  const setSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [activeIndex]);

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
    <div className="min-h-screen bg-background pt-28 font-sans">
      
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
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
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
                    <div className="text-3xl md:text-4xl text-accent-yellow font-bold mb-2">1 Year</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl text-accent-yellow font-bold mb-2">100%</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Placement Help</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl text-accent-yellow font-bold mb-2">Offline</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Flexible Mode</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl text-accent-yellow font-bold mb-2">200+</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Certified Alumni</div>
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
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-dark mb-8">Course Curriculum</h2>
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
                          <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed">
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
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-primary-dark mb-6">Career Opportunities</h3>
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
                       <span className="font-bold text-gray-700 text-sm md:text-base">{career}</span>
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
                <h3 className="font-sans font-bold text-xl md:text-2xl text-primary-dark mb-6">Apply for Next Batch</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted (Mock)'); }}>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" placeholder="Jane Doe" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Date of Birth</label>
                      <input type="date" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" placeholder="+91 XXXXX" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Education Qualification</label>
                    <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm">
                      <option>Graduate</option>
                      <option>Undergraduate</option>
                      <option>Post Graduate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Residential Address</label>
                    <textarea rows={2} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm resize-none" placeholder="Enter full address" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-1 mt-4">
                    Submit Application
                  </button>
                </form>
                <p className="text-[10px] text-gray-500 text-center mt-4 font-medium uppercase tracking-widest">
                  Our counselor will call you within 24 hours.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </section>

      {/* Testimonials Section - PROFESSIONAL TTC VERSION */}
      <section className="py-24 relative overflow-hidden bg-[#1a2f1c]">
        
        {/* Professional Texture Layer */}
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.05] pointer-events-none"></div>
        
        {/* Radial highlight for the center content */}
        <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,rgba(249,200,70,0.08)_0%,transparent_70%)]"></div>

        {/* Huge Background Text - Refined for professional look */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center overflow-hidden pointer-events-none opacity-[0.03] z-0 w-full select-none">
          <div className="text-[12rem] md:text-[20rem] font-black leading-[0.85] text-center whitespace-nowrap text-white">ALUMNI</div>
          <div className="text-[12rem] md:text-[20rem] font-black leading-[0.85] text-center whitespace-nowrap text-white">ALUMNI</div>
        </div>

        {/* Subtle Animated Geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center z-[2]">
          {[500, 800].map((size, i) => (
            <motion.div
              key={size}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: size, height: size }}
              className="border border-white rounded-full absolute"
            />
          ))}
        </div>

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
                  {/* Professional Quote Icon */}
                  <div className="mb-8">
                    <Quote size={64} className="text-accent-yellow opacity-20 fill-accent-yellow/10" />
                  </div>

                  {/* Quote Text - High contrast White for dark background */}
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white italic font-bold leading-snug md:leading-relaxed mb-10 max-w-4xl px-4 md:px-0">
                    &quot;{alumni[activeIndex].content}&quot;
                  </blockquote>

                  {/* Avatar with Professional Framing */}
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-full border-[4px] border-accent-yellow overflow-hidden shadow-2xl bg-white relative z-10">
                      <img
                        src={alumni[activeIndex].img}
                        alt={alumni[activeIndex].name}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${alumni[activeIndex].name}&background=random` }}
                      />
                    </div>
                    {/* Subtle Yellow Aura */}
                    <div className="absolute inset-0 bg-accent-yellow/10 blur-2xl rounded-full scale-150 z-0"></div>
                  </div>

                  {/* Attribution */}
                  <div className="flex flex-col items-center">
                    <h4 className="font-bold text-xl md:text-2xl text-accent-yellow mb-1">
                      {alumni[activeIndex].name}
                    </h4>
                    <div className="flex items-center gap-3">
                       <div className="h-px w-6 bg-white/20"></div>
                       <p className="text-xs md:text-sm font-black text-white/60 uppercase tracking-[0.2em]">
                         {alumni[activeIndex].role}
                       </p>
                       <div className="h-px w-6 bg-white/20"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls - Professional Row */}
            <div className="mt-12 flex items-center gap-6 md:gap-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:text-accent-yellow hover:border-accent-yellow transition-all active:scale-90 bg-white/5 backdrop-blur-sm shadow-md group z-20"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 z-20">
                {alumni.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`transition-all duration-300 rounded-full ${activeIndex === i
                        ? "w-8 md:w-10 h-2 bg-accent-yellow"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:text-accent-yellow hover:border-accent-yellow transition-all active:scale-90 bg-white/5 backdrop-blur-sm shadow-md group z-20"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
