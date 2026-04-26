"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { Clock, Users, ArrowRight, CheckCircle2, Award, BookOpen, ShieldCheck, MonitorPlay, CalendarHeart, UserCheck, Baby, Palette, Music, Tent } from "lucide-react";

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Playgroup", "Nursery", "Jr KG", "Sr KG", "Phonics", "Abacus"];

  const programs = [
    {
      id: "playgroup",
      title: "Playgroup",
      age: "2 to 3 Years",
      category: "Playgroup",
      color: "bg-accent-yellow text-foreground",
      icon: "🎨",
      points: ["Sensorimotor skills", "Basic vocabulary", "Social interaction", "Musical activities"],
      ratio: "1:10",
      time: "9:00 AM - 12:00 PM",
    },
    {
      id: "nursery",
      title: "Nursery",
      age: "3 to 4 Years",
      category: "Nursery",
      color: "bg-accent-blue text-white",
      icon: "🌱",
      points: ["Pre-writing skills", "Number recognition", "Creative arts", "Physical development"],
      ratio: "1:12",
      time: "9:00 AM - 1:00 PM",
    },
    {
      id: "jr-kg",
      title: "Junior KG",
      age: "4 to 5 Years",
      category: "Jr KG",
      color: "bg-accent-pink text-white",
      icon: "📚",
      points: ["Phonics basics", "Simple math concepts", "Environmental awareness", "Collaborative play"],
      ratio: "1:15",
      time: "9:00 AM - 1:30 PM",
    },
    {
      id: "sr-kg",
      title: "Senior KG",
      age: "5 to 6 Years",
      category: "Sr KG",
      color: "bg-primary text-white",
      icon: "🎓",
      points: ["Reading fluency", "Addition & Subtraction", "Scientific inquiry", "School readiness"],
      ratio: "1:15",
      time: "9:00 AM - 2:00 PM",
    },
    {
      id: "phonics",
      title: "Phonics Classes",
      age: "4 to 8 Years",
      category: "Phonics",
      color: "bg-[#FF7043] text-white",
      icon: "🔤",
      points: ["Letter sounds", "Blending & Segmenting", "Spelling rules", "Reading comprehension"],
      ratio: "1:8",
      time: "4:00 PM - 5:00 PM",
    },
    {
      id: "abacus",
      title: "Abacus Learning",
      age: "5 to 12 Years",
      category: "Abacus",
      color: "bg-[#9C6DD8] text-white",
      icon: "🧮",
      points: ["Mental arithmetic", "Concentration focus", "Speed calculation", "Memory enhancement"],
      ratio: "1:8",
      time: "5:00 PM - 6:00 PM",
    },
  ];

  const filteredPrograms = activeCategory === "All" 
    ? programs 
    : programs.filter(p => p.category === activeCategory);



  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <div className="inline-block bg-accent-yellow/20 text-primary-dark font-bold px-6 py-2 rounded-full text-sm mb-6 border-2 border-accent-yellow/30 animate-bounce">
            🌈 Discover the Joy of Learning
          </div>
          
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-6 leading-[1.1]">
            <span className="text-primary-dark block md:inline">Programs</span>{" "}
            <span className="text-accent-pink">Designed</span>{" "}
            <span className="text-primary-dark block md:inline">for Every</span>{" "}
            <span className="text-accent-blue">Stage</span>{" "}
            <span className="text-primary-dark block md:inline">of</span>{" "}
            <span className="text-accent-orange">Growth</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-2xl font-sans max-w-2xl mx-auto font-medium leading-relaxed">
            From their first steps in <span className="text-primary font-bold">Playgroup</span> to mastering skills in <span className="text-accent-purple font-bold">Abacus</span>, we nurture every child's potential. 🌟
          </p>

          {/* Decorative Accents */}
          <div className="absolute -top-10 -left-10 text-6xl opacity-20 hidden lg:block">🎨</div>
          <div className="absolute -top-10 -right-10 text-6xl opacity-20 hidden lg:block">📚</div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === cat 
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
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={program.id}
                className="group relative h-[450px] perspective-1000"
                id={program.id}
              >
                {/* Card Inner Container (handles the 3D flip) */}
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  
                  {/* FRONT OF CARD */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border-2 border-white ${program.color}`}>
                    <div className="text-7xl mb-6 bg-white/20 w-32 h-32 rounded-full flex items-center justify-center shadow-inner">
                      {program.icon}
                    </div>
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                      {program.age}
                    </span>
                    <h2 className="font-heading font-extrabold text-4xl mb-4 drop-shadow-sm">
                      {program.title}
                    </h2>
                    <p className="font-medium opacity-90 mt-auto flex items-center gap-2">
                      Hover for highlights <ArrowRight size={18} className="animate-pulse" />
                    </p>
                  </div>

                  {/* BACK OF CARD */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl p-8 flex flex-col bg-white shadow-xl rotate-y-180 border-t-8 border-primary">
                    <h3 className="font-heading font-bold text-2xl text-primary-dark mb-4 border-b border-gray-100 pb-3">
                      What They'll Learn
                    </h3>
                    <ul className="space-y-3 mb-6 flex-1">
                      {program.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="text-accent-yellow font-bold mt-0.5">🌟</span>
                          <span className="font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-bold">
                        <Users size={16} className="text-primary" /> {program.ratio}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-bold">
                        <Clock size={16} className="text-primary" /> {program.time}
                      </div>
                    </div>

                    <Link 
                      href={`/admission?program=${program.id}`}
                      className="w-full py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary-dark transition-colors shadow-md"
                    >
                      Enquire Now
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Our Features Section (From Poster) */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mb-4">Why Choose WOW Saplings?</h2>
            <p className="text-gray-600 text-lg uppercase tracking-widest font-bold">Our Exclusive Features</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award size={24} className="text-accent-yellow" />, title: "10 Years of Excellence", desc: "Our school proudly celebrates 10 years of excellence in education." },
              { icon: <BookOpen size={24} className="text-primary" />, title: "CBSE Curriculum", desc: "Aligned with NEP 2020 for holistic, future-ready child development." },
              { icon: <Tent size={24} className="text-accent-pink" />, title: "Keedo's Activity Lab", desc: "Activity based learning, playful practical life, hands-on activities." },
              { icon: <ShieldCheck size={24} className="text-accent-blue" />, title: "Safe & Secure Play Zone", desc: "Secure Saplings play zone area with lots of outdoor toys." },
              { icon: <Users size={24} className="text-[#FF7043]" />, title: "Expert Faculties", desc: "Experienced, MTTC well-trained, and expert friendly teachers." },
              { icon: <MonitorPlay size={24} className="text-[#9C6DD8]" />, title: "Smart TV & Projectors", desc: "Teaching through practical demos, animation, smart class, and digital learning." },
              { icon: <ShieldCheck size={24} className="text-[#2D8C4E]" />, title: "Round-The-Clock CCTV", desc: "Ensuring a highly secure and healthy hygienic environment at all times." },
              { icon: <CalendarHeart size={24} className="text-accent-pink" />, title: "Nutrition & Updates", desc: "Monthly Calendar, Nutrition based tiffin menu chart, and WhatsApp updates." },
              { icon: <UserCheck size={24} className="text-accent-yellow" />, title: "Individual Attention", desc: "Continuous evaluation of every child, with regular Parents Teachers Meetings." },
              { icon: <Baby size={24} className="text-primary" />, title: "Day Care Facilities", desc: "Reliable day care and activity center for working parents." },
              { icon: <CheckCircle2 size={24} className="text-[#4A90D9]" />, title: "Transport Facility", desc: "Safe and convenient transport options available." },
              { icon: <CheckCircle2 size={24} className="text-[#F06292]" />, title: "Well Furnished", desc: "A peaceful atmosphere inside a beautiful, child-friendly building." }
            ].map((feat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                <div className="shrink-0 mt-1 bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center border border-gray-100">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 leading-tight">{feat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Activities & Special Programs (From Poster Page 2) */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mb-4">Extra Curricular & Special Focus</h2>
            <p className="text-gray-600 text-lg uppercase tracking-widest font-bold">Beyond the regular classroom</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "STEAM Education", desc: "Science, Innovation, Creativity & Thinking Ability", icon: "🔬", color: "bg-[#e8f4f8]" },
              { title: "Story Telling", desc: "Enhances Imaginations & Listening Abilities", icon: "📖", color: "bg-[#fff6e5]" },
              { title: "Karate", desc: "Building self-confidence, Discipline, Self Defence", icon: "🥋", color: "bg-[#fbebe9]" },
              { title: "Dance", desc: "Builds Physical Skills & Encourages Creativity", icon: "💃", color: "bg-[#f4ebf8]" },
            ].map((activity, i) => (
              <div key={i} className={`rounded-3xl p-6 flex flex-col items-center text-center ${activity.color} border border-white shadow-sm hover:scale-105 transition-transform`}>
                <div className="text-5xl mb-4">{activity.icon}</div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{activity.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-light/20 rounded-[3rem] p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-8 shadow-inner">
             <div className="text-6xl md:text-8xl">👩‍🏫</div>
             <div>
               <h3 className="font-heading font-extrabold text-3xl text-primary-dark mb-3">Shivaji University Affiliated TTC</h3>
               <p className="text-lg text-gray-700 font-medium mb-4">We don't just teach kids; we train the next generation of educators. Enroll in our specialized Teacher Training Course.</p>
               <Link href="/teacher-training" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-colors">
                 Explore TTC Program
               </Link>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
