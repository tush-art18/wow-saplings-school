"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import ScrollReveal from "@/components/global/ScrollReveal";
import Image from "next/image";
import { Clock, Users, ArrowRight, CheckCircle2, Award, BookOpen, ShieldCheck, MonitorPlay, CalendarHeart, UserCheck, Baby, Tent, HeartHandshake, Utensils, MessageCircle } from "lucide-react";

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Playgroup", "Nursery", "Jr KG", "Sr KG", "Phonics", "Abacus"];

  const programs = [
    {
      id: "playgroup",
      title: "Playgroup",
      age: "2 to 3 Years",
      category: "Playgroup",
      img: "/playgroup.jpeg",
      icon: "/sapling-stage-1.png",
      points: ["Sensorimotor skills", "Basic vocabulary", "Social interaction", "Musical activities"],
      ratio: "1:10",
      time: "11:45 AM - 2:00 PM",
    },
    {
      id: "nursery",
      title: "Nursery",
      age: "3 to 4 Years",
      category: "Nursery",
      img: "/playgroup-nursery-02.jpeg",
      icon: "/sapling-stage-2.png",
      points: ["Pre-writing skills", "Number recognition", "Creative arts", "Physical development"],
      ratio: "1:12",
      time: "10:00 AM - 1:00 PM",
    },
    {
      id: "jr-kg",
      title: "Junior KG",
      age: "4 to 5 Years",
      category: "Jr KG",
      img: "/junior-classroom.png",
      icon: "/sapling-stage-3.png",
      points: ["Phonics basics", "Simple math concepts", "Environmental awareness", "Collaborative play"],
      ratio: "1:15",
      time: "10:00 AM - 1:30 PM",
    },
    {
      id: "sr-kg",
      title: "Senior KG",
      age: "5 to 6 Years",
      category: "Sr KG",
      img: "/senior-classroom.png",
      icon: "/sapling-stage-4.png",
      points: ["Reading fluency", "Addition & Subtraction", "Scientific inquiry", "School readiness"],
      ratio: "1:15",
      time: "10:00 AM - 1:30 PM",
    },
    {
      id: "phonics",
      title: "Phonics Classes",
      age: "4 to 8 Years",
      category: "Phonics",
      img: "/child-activiti-11.jpeg",
      icon: "/sapling-stage-5.png",
      points: ["Letter sounds", "Blending & Segmenting", "Spelling rules", "Reading comprehension"],
      ratio: "1:8",
      time: "1:30 PM - 2:00 PM",
    },
    {
      id: "abacus",
      title: "Abacus Learning",
      age: "5 to 12 Years",
      category: "Abacus",
      img: "/Abacus.png",
      icon: "/sapling-stage-6.png",
      points: ["Mental arithmetic", "Concentration focus", "Speed calculation", "Memory enhancement"],
      ratio: "1:8",
      time: "1:30 PM - 2:00 PM",
    },
  ];

  const filteredPrograms = activeCategory === "All"
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="min-h-screen bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] pt-32 pb-20 relative overflow-hidden">
        {/* Playful Floating Shapes */}
        <div className="absolute top-48 left-10 w-16 h-16 bg-accent-yellow/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-[500px] right-16 w-24 h-24 bg-accent-pink/10 rounded-full blur-2xl" />
        <div className="absolute top-[1000px] left-12 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-24 right-1/4 text-6xl opacity-10 animate-bounce duration-1000 select-none">🎈</div>
        <div className="absolute top-[600px] left-1/4 text-6xl opacity-10 animate-bounce duration-750 select-none">⭐️</div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16 relative">
            <ScrollReveal animation="bounce-in">
              <div className="inline-block bg-accent-yellow/20 text-primary-dark font-bold px-6 py-2 rounded-full text-sm mb-6 border-2 border-accent-yellow/30 animate-bounce">
                🌈 Discover the Joy of Learning
              </div>
            </ScrollReveal>

            <ScrollReveal animation="wobble-in" delay={0.1}>
              <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-6 leading-[1.1]">
                <span className="text-primary-dark block md:inline">Helping</span>{" "}
                <span className="text-accent-pink">Every</span>{" "}
                <span className="text-primary-dark block md:inline">Little</span>{" "}
                <span className="text-accent-blue">Sapling</span>{" "}
                <span className="text-primary-dark block md:inline">to</span>{" "}
                <span className="text-accent-orange">Bloom</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.25}>
              <p className="text-gray-600 text-lg md:text-2xl font-sans max-w-2xl mx-auto font-medium leading-relaxed">
                From their first steps in <span className="text-primary font-bold">Playgroup</span> to mastering skills in <span className="text-accent-purple font-bold">Abacus</span>, we help every child grow. 🌟
              </p>
            </ScrollReveal>

            {/* Decorative Accents */}
            <div className="absolute -top-10 -left-10 text-6xl opacity-20 hidden lg:block select-none">🎨</div>
            <div className="absolute -top-10 -right-10 text-6xl opacity-20 hidden lg:block select-none">📚</div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeCategory === cat
                  ? "text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                  }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((program, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={program.id}
                  className="group relative"
                  id={program.id}
                >
                  <motion.div 
                    whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1.5 : -1.5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col shadow-lg hover:shadow-2xl border-2 border-white bg-white cursor-pointer"
                  >
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image 
                        src={program.img} 
                        alt={`${program.title} program learning activities at WOW Saplings Preschool, Kolhapur`} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary-dark shadow-sm">
                        {program.age}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 flex flex-col flex-1 relative pt-12">
                      {/* Floating Theme Icon */}
                      <div className="absolute -top-10 left-8 bg-white p-2 rounded-full shadow-lg border border-gray-100 z-10">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-50 relative p-1.5 overflow-hidden">
                          <Image src={program.icon} alt={`${program.title} Stage Icon`} width={64} height={64} className="object-contain w-full h-full" />
                        </div>
                      </div>

                      <h2 className="font-heading font-extrabold text-3xl mb-5 text-primary-dark">
                        {program.title}
                      </h2>

                      <ul className="space-y-3 mb-8 flex-1 text-sm md:text-base text-gray-600">
                        {program.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 font-medium">
                            <CheckCircle2 size={20} className="text-[#2D6A4F] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-gray-700">
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <Users size={18} className="text-[#F4C542]" /> {program.ratio}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <Clock size={18} className="text-[#2D6A4F]" /> {program.time}
                        </div>
                      </div>

                      <Link
                        href={`/admission?program=${program.id}`}
                        className="w-full py-4 bg-primary-light/10 text-primary-dark rounded-xl font-bold text-center hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        Enquire Now <ArrowRight size={18} />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── WHY CHOOSE WOW SAPLINGS ── */}
          <div className="mt-32 relative">
            {/* Large editorial heading — full bleed, no box */}
            <ScrollReveal animation="fade-up">
              <div className="mb-20">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-3">Our Exclusive Features</p>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <h2 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary-dark leading-[1.05]">
                    Why Choose<br /><span className="text-primary">WOW Saplings?</span>
                  </h2>
                  <p className="text-gray-400 font-medium text-base max-w-xs hidden md:block leading-relaxed">
                    Everything we do is designed to help your child thrive — safely, joyfully, brilliantly.
                  </p>
                </div>
                {/* Full-width accent line */}
                <div className="mt-10 h-px bg-gradient-to-r from-primary via-accent-yellow to-transparent" />
              </div>
            </ScrollReveal>

            {/* Features — alternating two-column list, no boxes */}
            <div className="space-y-0">
              {[
                { n: "01", color: "#7C3AED", icon: <Award size={20}/>, title: "10 Years of Excellence", desc: "Our school proudly celebrates a decade of shaping young learners into confident, curious individuals trusted by 1000+ families." },
                { n: "02", color: "#0EA5E9", icon: <BookOpen size={20}/>, title: "CBSE Curriculum & NEP 2020", desc: "Our curriculum is fully aligned with NEP 2020 — holistic, future-ready, and designed for every child's developmental pace." },
                { n: "03", color: "#EC4899", icon: <HeartHandshake size={20}/>, title: "Holistic Development", desc: "We foster physical, mental, emotional, and social growth every single day — not just academics." },
                { n: "04", color: "#F59E0B", icon: <Tent size={20}/>, title: "Keedo's Activity Lab", desc: "Activity-based learning, playful practical life, and hands-on exploration that children genuinely love." },
                { n: "05", color: "#10B981", icon: <ShieldCheck size={20}/>, title: "Safe & Secure Play Zone", desc: "A fully enclosed outdoor play zone with quality toys — safe, clean, and designed for active movement." },
                { n: "06", color: "#F97316", icon: <Users size={20}/>, title: "Expert & Trained Faculties", desc: "All our teachers are MTTC-certified, experienced, and deeply committed to every child's individual growth." },
                { n: "07", color: "#9C6DD8", icon: <MonitorPlay size={20}/>, title: "Smart TV & Projectors", desc: "Digital classrooms with animation, smart demos, and visual learning that makes concepts stick." },
                { n: "08", color: "#2D8C4E", icon: <ShieldCheck size={20}/>, title: "Round-The-Clock CCTV", desc: "Comprehensive 24/7 CCTV surveillance ensuring a secure, hygienic environment at all times." },
                { n: "09", color: "#6366F1", icon: <CalendarHeart size={20}/>, title: "Monthly Activity Calendar", desc: "A pre-planned, theme-based activity and event calendar shared with parents every month." },
                { n: "10", color: "#0891B2", icon: <Utensils size={20}/>, title: "Nutrition Menu Chart", desc: "A healthy, nutrition-based tiffin menu chart provided to every family at the start of each term." },
                { n: "11", color: "#25D366", icon: <MessageCircle size={20}/>, title: "WhatsApp Daily Updates", desc: "Daily photos and updates sent directly to parents' WhatsApp — stay connected every moment." },
                { n: "12", color: "#EAB308", icon: <UserCheck size={20}/>, title: "Individual Child Attention", desc: "Continuous evaluation with regular Parent-Teacher Meetings to track and celebrate every milestone." },
                { n: "13", color: "#A855F7", icon: <Baby size={20}/>, title: "Day Care Facilities", desc: "Reliable, supervised day care and activity center for working parents — safe and engaging." },
                { n: "14", color: "#4A90D9", icon: <CheckCircle2 size={20}/>, title: "Transport Facility", desc: "Safe, GPS-tracked transport service covering major localities across Kolhapur." },
                { n: "15", color: "#F06292", icon: <CheckCircle2 size={20}/>, title: "Well-Furnished Building", desc: "A beautiful, peaceful, child-friendly building that feels welcoming from the very first visit." },
              ].map((feat, i) => (
                <ScrollReveal key={i} animation="rotate-in" delay={i * 0.02}>
                  <motion.div
                    whileHover={{ y: -3, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_300px] items-center gap-6 md:gap-10 py-7 border-b border-gray-100 group hover:bg-gray-50/60 px-2 rounded-xl cursor-pointer"
                  >
                    {/* Number */}
                    <span className="font-black text-4xl md:text-5xl leading-none select-none transition-colors duration-300" style={{ color: `${feat.color}20` }}>
                      {feat.n}
                    </span>
                    {/* Title + Icon */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: `${feat.color}15`, color: feat.color }}>
                        {feat.icon}
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-primary-dark leading-tight">{feat.title}</h3>
                    </div>
                    {/* Description — hidden on mobile, inline on md+ */}
                    <p className="hidden md:block text-gray-500 text-sm font-medium leading-relaxed">{feat.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Mobile: descriptions shown below each title handled via single column */}
          </div>




          {/* Extra Activities & Special Programs */}
          <div className="mt-32">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mb-4">Extra Curricular & Special Focus</h2>
                <p className="text-gray-600 text-lg uppercase tracking-widest font-bold">Beyond the regular classroom</p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: "Life Skill Education", desc: "Monthly themes focusing on essential daily life skills", icon: "🌱", color: "bg-[#2D8C4E]/10", img: "/child-activiti-01.jpeg" },
                { title: "Keedo's Activity Lab", desc: "Activity based learning & hands-on practical life", icon: "🧪", color: "bg-accent-pink/10", img: "/child-activiti-03.jpeg" },
                { title: "Montessori Teaching", desc: "Child-centered educational approach for holistic growth", icon: "🧩", color: "bg-accent-yellow/10", img: "/child-activiti-04.jpeg" },
                { title: "STEAM Education", desc: "Science, Innovation, Creativity & Thinking Ability", icon: "🔬", color: "bg-accent-blue/10", img: "/child-activiti-06.jpeg" },
                { title: "Story Telling", desc: "Enhances Imaginations & Listening Abilities", icon: "📖", color: "bg-accent-yellow/10", img: "/child-activiti-02.jpeg" },
                { title: "Karate", desc: "Building self-confidence, Discipline, Self Defence", icon: "🥋", color: "bg-accent-pink/10", img: "/Karate.jpeg" },
                { title: "Dance", desc: "Builds Physical Skills & Encourages Creativity", icon: "💃", color: "bg-accent-purple/10", img: "/celebration and events.png" },
              ].map((activity, i) => (
                <ScrollReveal key={i} animation="bounce-in" delay={i * 0.05}>
                  <motion.div 
                    whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl h-full bg-white cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <Image 
                        src={activity.img} 
                        alt={`${activity.title} extra-curricular activity at WOW Saplings Preschool, Kolhapur`} 
                        fill 
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md">
                        {activity.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl text-primary-dark mb-2">{activity.title}</h3>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed">{activity.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* TTC CALLOUT BANNER */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="mt-20 bg-[#2D6A4F] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-[#1b4332] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg border-4 border-[#F4C542]">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-2 leading-tight">
                      We also train the next generation of teachers
                    </h3>
                    <p className="text-[#F4C542] text-sm md:text-base font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                      <Award size={18} /> Shivaji University Certified MTTC Course
                    </p>
                  </div>
                </div>

                <Link href="/teacher-training" className="relative z-10 shrink-0 bg-[#F4C542] text-[#2D6A4F] font-extrabold px-8 py-4 rounded-full hover:bg-white transition-all hover:scale-105 shadow-xl flex items-center gap-2 border-b-4 border-yellow-600 hover:border-gray-200">
                  Join MTTC Program <ArrowRight size={20} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </>
  );
}
