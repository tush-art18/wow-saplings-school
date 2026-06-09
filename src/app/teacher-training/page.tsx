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
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    qualification: "Graduate",
    address: ""
  });
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (localErrors[field]) {
      setLocalErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    const validateIndianPhone = (value: string) => {
      const cleaned = value.replace(/[\s\-\(\)]/g, '').replace(/^(\+91|91|0)/, '');
      return /^[6-9]\d{9}$/.test(cleaned);
    };

    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!formData.dob) {
      errors.dob = "Date of birth is required.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!validateIndianPhone(formData.phone)) {
      errors.phone = "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    } else if (formData.address.trim().length < 10) {
      errors.address = "Address must be at least 10 characters.";
    }

    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
    { name: "Mrs. Ashwini Vishal Jadhav", role: " -Pre primary school teacher", content: "Teacher training course gives me practical knowledge of teaching in classroom and confidence to interact with students. Grateful for guidance, support and cooperation.", img: "/teacher-training-student-1.jpeg" },
    { name: "Alumni", role: "Preschool Teacher", content: "Teacher Training Course improved my teaching skills through guidance, practical learning, lesson planning, and classroom management. Valuable, inspiring, and beneficial for teachers.", img: "/teacher-training-student-2.jpeg" },
    { name: "Alumni", role: "Preschool Teacher", content: "Successfully completed Montessori Teacher Training Course at Wow Saplings School under Yasmeen Ma’am. Learned classroom management, childcare, creative teaching, confidence, and effective teaching-learning materials.", img: "/teacher-training-student-3.jpeg" },
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
          img: a.photo_url || "https://randomuser.me/api/portraits/women/24.jpg"
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
      <div className="min-h-screen bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] font-sans relative overflow-hidden">

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
                <p className="text-lg text-gray-300 mb-6 leading-relaxed font-medium">
                  Shivaji University Affiliated | Kolhapur
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm shadow-xl">
                  <h3 className="text-accent-yellow font-bold text-lg mb-4 flex items-center gap-2">
                    <BadgeCheck size={20} /> Certifications Offered:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-accent-yellow/20 border border-accent-yellow/30 flex items-center justify-center shrink-0"><span className="text-accent-yellow font-bold text-sm">1</span></div>
                      <div>
                        <div className="font-bold text-white text-base leading-snug">Diploma in Early Childhood Care and Education Course (ECCE)</div>
                        <div className="text-gray-400 text-sm flex items-center gap-1.5 mt-1.5"><Clock size={14}/> Duration: 1 Year</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-accent-yellow/20 border border-accent-yellow/30 flex items-center justify-center shrink-0"><span className="text-accent-yellow font-bold text-sm">2</span></div>
                      <div>
                        <div className="font-bold text-white text-base leading-snug">Advanced Diploma in Early Childhood Care and Education Course (ECCE)</div>
                        <div className="text-gray-400 text-sm flex items-center gap-1.5 mt-1.5"><Clock size={14}/> Duration: 1 Year</div>
                      </div>
                    </li>
                  </ul>
                </div>

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
                  <Image src="/teacher-training.jpeg" alt="Aspiring teachers participating in a training session in WOW Saplings Preschool classroom, Kolhapur" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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
        <section className="py-10 bg-white border-b border-gray-100 shadow-sm relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Clock size={28} className="text-accent-yellow" />, num: "1 Year", label: "Duration" },
                { icon: <Users size={28} className="text-accent-pink" />, num: "200+", label: "Alumni" },
                { icon: <BadgeCheck size={28} className="text-[#2D8C4E]" />, num: "100%", label: "Placement Support" },
                { icon: <GraduationCap size={28} className="text-accent-purple" />, num: "Shivaji Univ.", label: "Certified" },
              ].map((s, i) => (
                <ScrollReveal key={i} animation="bounce-in" delay={i * 0.05}>
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
              <div className="mt-16">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary-dark mb-8">Career Opportunities</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {careers.map((c, i) => (
                    <ScrollReveal key={i} animation="rotate-in" delay={i * 0.04} width="100%">
                      <motion.div
                        whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1, scale: 1.03 }}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-all cursor-default h-full"
                      >
                        <div className="text-4xl mb-1">{c.emoji}</div>
                        <h4 className="font-bold text-gray-800 text-base leading-tight">{c.title}</h4>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Sticky Application Form */}
            <div className="lg:col-span-4">
              <ScrollReveal animation="fade-left" delay={0.2}>
                <div id="apply" className="sticky top-32 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="font-sans font-bold text-xl md:text-2xl text-primary-dark mb-2">Apply for Next Batch</h3>
                  <p className="text-sm text-gray-500 mb-6 font-medium">📍 Offline — Classroom Based | Kolhapur</p>
                  <form className="space-y-4" onSubmit={(e) => { 
                    e.preventDefault(); 
                    const isValid = validateForm();
                    if (!isValid) return;
                    
                    const text = `*New Teacher Training Enquiry*%0A%0A*Name:* ${formData.name}%0A*DOB:* ${formData.dob}%0A*Phone:* ${formData.phone}%0A*Qualification:* ${formData.qualification}%0A*Address:* ${formData.address}`;
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=918999640602&text=${text}`;
                    window.open(whatsappUrl, "_blank");
                  }} noValidate>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={e => handleInputChange("name", e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-50 rounded-xl border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm ${localErrors.name ? 'border-red-300 focus:ring-red-400' : 'border-gray-200'}`} 
                        placeholder="Jane Doe" 
                      />
                      {localErrors.name && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.name}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Date of Birth *</label>
                        <input 
                          type="date" 
                          name="dob" 
                          value={formData.dob}
                          onChange={e => handleInputChange("dob", e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-50 rounded-xl border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm ${localErrors.dob ? 'border-red-300 focus:ring-red-400' : 'border-gray-200'}`} 
                        />
                        {localErrors.dob && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.dob}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Phone *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={e => handleInputChange("phone", e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-50 rounded-xl border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm ${localErrors.phone ? 'border-red-300 focus:ring-red-400' : 'border-gray-200'}`} 
                          placeholder="+91 XXXXX" 
                        />
                        {localErrors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Qualification</label>
                      <select 
                        name="qualification" 
                        value={formData.qualification}
                        onChange={e => handleInputChange("qualification", e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                      >
                        <option value="Graduate">Graduate</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Address *</label>
                      <textarea 
                        name="address" 
                        rows={2} 
                        value={formData.address}
                        onChange={e => handleInputChange("address", e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-50 rounded-xl border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none ${localErrors.address ? 'border-red-300 focus:ring-red-400' : 'border-gray-200'}`} 
                        placeholder="Enter full address" 
                      ></textarea>
                      {localErrors.address && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.address}</p>}
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
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#FFF9E6]/90 via-[#FDF0F6]/95 to-[#EBF5FF]/90 border-t border-primary-light/40">
          <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.05] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[18rem] font-black leading-none text-center text-primary-dark opacity-[0.03] select-none pointer-events-none whitespace-nowrap">ALUMNI</div>

          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="relative min-h-[500px] flex flex-col items-center justify-center text-center">
              <div className="relative w-full overflow-hidden py-10">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div key={activeIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }} className="flex flex-col items-center w-full">
                    <Quote size={56} className="text-accent-pink opacity-20 fill-accent-pink/10 mb-6" />
                    <blockquote className="text-2xl md:text-3xl text-primary-dark italic font-bold leading-snug mb-8 max-w-3xl">
                      &quot;{alumni[activeIndex].content}&quot;
                    </blockquote>
                    <div className="relative mb-5">
                      <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-white relative z-10">
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
                      <div className="absolute inset-0 bg-accent-yellow/30 blur-2xl rounded-full scale-150 z-0" />
                    </div>
                    <h4 className="font-bold text-xl text-primary mb-1">{alumni[activeIndex].name}</h4>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{alumni[activeIndex].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all bg-white shadow-sm group">
                  <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3">
                  {alumni.map((_, i) => (
                    <button key={i} onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }} className={`transition-all duration-300 rounded-full ${activeIndex === i ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"}`} />
                  ))}
                </div>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all bg-white shadow-sm group">
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
