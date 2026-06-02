"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import ScrollReveal from "@/components/global/ScrollReveal";
import { CheckCircle2, ChevronDown, Award, Briefcase, GraduationCap, Quote, ChevronLeft, ChevronRight, Clock, Users, BadgeCheck, BookOpen, Brain, LayoutList, Presentation, FlaskConical } from "lucide-react";
import { fetchTestimonials } from "@/lib/api";
import Image from "next/image";

export default function TeacherTrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [alumniImgErrors, setAlumniImgErrors] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const syllabus = [
    {
      title: "Module 1: Child Psychology & Development",
      icon: <Brain size={22} className="text-accent-yellow" />,
      points: [
        "Cognitive & emotional development stages (0–8 years)",
        "Piaget's, Vygotsky's & Erikson's theories in practice",
        "Identifying learning disabilities & behavioral patterns",
      ],
    },
    {
      title: "Module 2: Modern Pedagogy & Teaching Methodologies",
      icon: <BookOpen size={22} className="text-accent-pink" />,
      points: [
        "Montessori, Reggio Emilia & Play-Way approaches",
        "NEP 2020 & CBSE curriculum alignment for pre-primary",
        "Story-telling, STEAM & activity-based learning techniques",
      ],
    },
    {
      title: "Module 3: Classroom Management & Lesson Planning",
      icon: <LayoutList size={22} className="text-accent-blue" />,
      points: [
        "Designing effective, age-appropriate lesson plans",
        "Positive discipline & behavior management strategies",
        "Creating inclusive, safe & stimulating classroom spaces",
      ],
    },
    {
      title: "Module 4: Practical Teaching & School Internship",
      icon: <FlaskConical size={22} className="text-[#2D8C4E]" />,
      points: [
        "1-month hands-on internship in WOW Saplings classrooms",
        "Supervised micro-teaching sessions & peer feedback",
        "Portfolio development & final assessed practical exam",
      ],
    },
  ];

  const careers = [
    { emoji: "🏫", title: "Pre-Primary School Teacher", desc: "Teach at any CBSE or state board preschool." },
    { emoji: "🏢", title: "Childcare Center Director", desc: "Lead and manage early childhood care centers." },
    { emoji: "📋", title: "Education Consultant", desc: "Advise schools on curriculum & child development." },
    { emoji: "📚", title: "Curriculum Developer", desc: "Design learning materials for publishers or schools." },
    { emoji: "🤝", title: "Special Education Assistant", desc: "Support children with special learning needs." },
    { emoji: "🌱", title: "Start Your Own Preschool", desc: "Use skills to launch your own preschool venture." },
  ];

  const MOCK_ALUMNI = [
    { name: "Sneha Kulkarni", role: "Certified Teacher, Batch '24", content: "The teacher training program here is top-notch. I feel so confident after my certification and getting placed was a breeze.", img: "https://randomuser.me/api/portraits/women/24.jpg" },
    { name: "Priya Sharma", role: "Preschool Teacher, Pune", content: "The practical internship module gave me exactly what I needed to face a real classroom. Highly recommended!", img: "https://randomuser.me/api/portraits/women/33.jpg" },
    { name: "Pooja Deshmukh", role: "Special Ed Assistant", content: "WOW Saplings provides the best early childhood education training. The syllabus is perfectly aligned with modern methodologies.", img: "https://randomuser.me/api/portraits/women/62.jpg" },
    { name: "Ritu Patel", role: "Preschool Founder", content: "Thanks to this certification, I successfully opened my own preschool. The management module was a game-changer!", img: "https://randomuser.me/api/portraits/women/8.jpg" },
  ];

  const [alumni, setAlumni] = useState<any[]>(MOCK_ALUMNI);

  useEffect(() => {
    async function loadAlumni() {
      const apiAlumni = await fetchTestimonials(true); // fetch Shivaji University TTC reviews
      if (apiAlumni && apiAlumni.length > 0) {
        const formatted = apiAlumni.map(a => ({
          name: a.parent_name,
          role: a.child_class || "NPTT Graduate",
          content: a.content,
          img: a.photo || "https://randomuser.me/api/portraits/women/24.jpg"
        }));
        setAlumni(formatted);
      }
    }
    loadAlumni();
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 100 : -100, opacity: 0 }),
  };

  const nextSlide = () => { setDirection(1); setActiveIndex((p) => (p + 1) % alumni.length); };
  const prevSlide = () => { setDirection(-1); setActiveIndex((p) => (p - 1 + alumni.length) % alumni.length); };

  useEffect(() => {
    const t = setInterval(nextSlide, 7000);
    return () => clearInterval(t);
  }, [activeIndex, alumni.length]);

  useEffect(() => {
    gsap.to(".flying-hat", { y: "random(-20,20)", x: "random(-20,20)", rotation: "random(-15,15)", ease: "sine.inOut", duration: "random(2,4)", repeat: -1, yoyo: true });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background font-sans">

        {/* ── HERO ── */}
        <section className="relative bg-primary-dark text-white overflow-hidden pt-36 pb-28 px-4">
          <div className="absolute top-20 right-20 text-4xl opacity-40 flying-hat">🎓</div>
          <div className="absolute bottom-20 right-1/4 text-5xl opacity-20 flying-hat">📚</div>
          <div className="absolute top-32 left-20 text-3xl opacity-30 flying-hat">🌟</div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(156,109,216,0.15),transparent_60%)]" />

          <div className="container mx-auto relative z-10 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                {/* Badge pill */}
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-8 backdrop-blur-sm">
                  <Award size={18} className="text-accent-yellow" /> University Certified NPTT Course
                </div>

                <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-4 leading-tight">
                  Become a <span className="text-accent-yellow">Certified</span><br />Pre-Primary Teacher
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed font-medium">
                  Shivaji University Affiliated NPTT Course | Kolhapur
                </p>

                {/* University Certification Seal */}
                <div className="inline-flex items-center gap-4 bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 border-2 border-yellow-500/60 rounded-2xl px-6 py-4 mb-10 shadow-lg backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center text-2xl shrink-0 bg-yellow-500/10">🏅</div>
                  <div>
                    <div className="text-yellow-300 font-extrabold text-sm uppercase tracking-widest mb-0.5">Official Certification</div>
                    <div className="text-white font-bold text-base leading-tight">Certified by Shivaji University, Kolhapur</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#apply" className="bg-accent-yellow text-primary-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-colors text-lg shadow-lg">Apply for Batch</a>
                  <a href="#syllabus" className="bg-transparent border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg">View Syllabus</a>
                </div>
              </div>
            </ScrollReveal>

            {/* Hero Right — image/visual */}
            <ScrollReveal animation="fade-left">
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] relative">
                  <Image src="/classroom-01.jpeg" alt="Aspiring teachers participating in a training session in WOW Saplings Preschool classroom, Kolhapur" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                </div>
                {/* Floating badge on image */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100">
                  <div className="text-3xl font-black text-primary">200+</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Certified Alumni</div>
                </div>
                <div className="absolute -top-5 -right-5 bg-accent-yellow rounded-2xl px-5 py-3 shadow-xl">
                  <div className="text-3xl font-black text-primary-dark">100%</div>
                  <div className="text-xs font-bold text-primary-dark/70 uppercase tracking-widest">Placement Help</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── HIGHLIGHTS BAR ── */}
        <section className="py-10 bg-white border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Clock size={28} className="text-accent-yellow" />, num: "1 Year", label: "Duration" },
                { icon: <Users size={28} className="text-accent-pink" />, num: "200+", label: "Alumni" },
                { icon: <BadgeCheck size={28} className="text-[#2D8C4E]" />, num: "100%", label: "Placement Support" },
                { icon: <GraduationCap size={28} className="text-accent-purple" />, num: "Shivaji Univ.", label: "Certified" },
              ].map((s, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-3">{s.icon}</div>
                    <div className="font-heading font-extrabold text-2xl md:text-3xl text-primary-dark">{s.num}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="py-20 px-4">
          <div className="container mx-auto grid lg:grid-cols-12 gap-16 max-w-7xl">

            {/* LEFT — Syllabus + Careers */}
            <div className="lg:col-span-8" id="syllabus">
              <ScrollReveal animation="fade-up">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-dark mb-10">Course Curriculum</h2>
              </ScrollReveal>

              <div className="space-y-4">
                {syllabus.map((mod, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                    <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">{mod.icon}</div>
                          <span className="font-bold text-lg text-primary-dark">{mod.title}</span>
                        </div>
                        <ChevronDown className={`shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : "text-gray-400"}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <ul className="px-6 pb-6 pt-2 space-y-2">
                              {mod.points.map((pt, j) => (
                                <li key={j} className="flex items-start gap-3 text-gray-600 font-medium">
                                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                  {pt}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* ── CAREER PATHS ── */}
              <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="mt-16">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary-dark mb-8">Career Opportunities</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {careers.map((c, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5, scale: 1.03 }}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-all cursor-default"
                      >
                        <div className="text-4xl mb-1">{c.emoji}</div>
                        <h4 className="font-bold text-gray-800 text-base leading-tight">{c.title}</h4>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — Sticky Application Form */}
            <div className="lg:col-span-4">
              <ScrollReveal animation="fade-left" delay={0.2}>
                <div id="apply" className="sticky top-32 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="font-sans font-bold text-xl md:text-2xl text-primary-dark mb-2">Apply for Next Batch</h3>
                  <p className="text-sm text-gray-500 mb-6 font-medium">📍 Offline — Classroom Based | Kolhapur</p>
                  <form className="space-y-4" onSubmit={(e) => { 
                    e.preventDefault(); 
                    const fd = new FormData(e.currentTarget);
                    const name = fd.get("name");
                    const dob = fd.get("dob");
                    const phone = fd.get("phone");
                    const qualification = fd.get("qualification");
                    const address = fd.get("address");
                    
                    const text = `*New Teacher Training Enquiry*%0A%0A*Name:* ${name}%0A*DOB:* ${dob}%0A*Phone:* ${phone}%0A*Qualification:* ${qualification}%0A*Address:* ${address}`;
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=918999640602&text=${text}`;
                    window.open(whatsappUrl, "_blank");
                  }}>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Full Name</label>
                      <input type="text" name="name" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm" placeholder="Jane Doe" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Date of Birth</label>
                        <input type="date" name="dob" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm" required />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Phone</label>
                        <input type="tel" name="phone" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm" placeholder="+91 XXXXX" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Qualification</label>
                      <select name="qualification" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm">
                        <option>Graduate</option>
                        <option>Undergraduate</option>
                        <option>Post Graduate</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Address</label>
                      <textarea name="address" rows={2} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none" placeholder="Enter full address" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 mt-2 text-base flex justify-center items-center gap-2">
                      Apply via WhatsApp 📞
                    </button>
                    <p className="text-xs text-gray-500 text-center font-medium">
                      ✅ Redirects to official WhatsApp chat.
                    </p>
                  </form>

                  {/* Certification seal inside form card */}
                  <div className="mt-6 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-4 flex items-center gap-3">
                    <div className="text-2xl">🏅</div>
                    <div>
                      <div className="text-[10px] font-black text-yellow-700 uppercase tracking-widest">Affiliated &amp; Certified</div>
                      <div className="font-bold text-gray-800 text-sm leading-tight">Shivaji University, Kolhapur</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── ALUMNI TESTIMONIALS ── */}
        <section className="py-24 relative overflow-hidden bg-primary-dark">
          <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.05] pointer-events-none" />
          <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,rgba(249,200,70,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[18rem] font-black leading-none text-center text-white opacity-[0.025] select-none pointer-events-none whitespace-nowrap">ALUMNI</div>

          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="relative min-h-[500px] flex flex-col items-center justify-center text-center">
              <div className="relative w-full overflow-hidden py-10">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div key={activeIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }} className="flex flex-col items-center w-full">
                    <Quote size={56} className="text-accent-yellow opacity-20 fill-accent-yellow/10 mb-6" />
                    <blockquote className="text-2xl md:text-3xl text-white italic font-bold leading-snug mb-8 max-w-3xl">
                      &quot;{alumni[activeIndex].content}&quot;
                    </blockquote>
                    <div className="relative mb-5">
                      <div className="w-20 h-20 rounded-full border-4 border-accent-yellow overflow-hidden shadow-2xl bg-white relative z-10">
                        <Image
                          src={
                            alumniImgErrors[activeIndex]
                              ? `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni[activeIndex].name)}&background=random&size=80`
                              : alumni[activeIndex].img
                          }
                          alt={alumni[activeIndex].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          onError={() => setAlumniImgErrors(prev => ({ ...prev, [activeIndex]: true }))}
                        />
                      </div>
                      <div className="absolute inset-0 bg-accent-yellow/10 blur-2xl rounded-full scale-150 z-0" />
                    </div>
                    <h4 className="font-bold text-xl text-accent-yellow mb-1">{alumni[activeIndex].name}</h4>
                    <p className="text-xs font-black text-white/50 uppercase tracking-[0.2em]">{alumni[activeIndex].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:text-accent-yellow hover:border-accent-yellow transition-all bg-white/5 backdrop-blur-sm group">
                  <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3">
                  {alumni.map((_, i) => (
                    <button key={i} onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }} className={`transition-all duration-300 rounded-full ${activeIndex === i ? "w-8 h-2 bg-accent-yellow" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} />
                  ))}
                </div>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:text-accent-yellow hover:border-accent-yellow transition-all bg-white/5 backdrop-blur-sm group">
                  <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
