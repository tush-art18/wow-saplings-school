"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProgramsHighlight() {
  const [activeTab, setActiveTab] = useState<"child" | "teacher">("child");

  const childPrograms = [
    { name: "Playgroup", age: "2-3 Years", icon: "🧸", outcomes: ["Social Skills", "Sensory Play", "Motor Skills"], color: "bg-accent-pink", lightBg: "bg-accent-pink/10", textColor: "text-accent-pink" },
    { name: "Nursery", age: "3-4 Years", icon: "🎨", outcomes: ["Pre-writing", "Creative Art", "Vocabulary"], color: "bg-accent-orange", lightBg: "bg-accent-orange/10", textColor: "text-accent-orange" },
    { name: "Jr KG", age: "4-5 Years", icon: "🧩", outcomes: ["Phonics Intro", "Early Math", "Independence"], color: "bg-accent-blue", lightBg: "bg-accent-blue/10", textColor: "text-accent-blue" },
  ];

  return (
    <section className="py-24 bg-primary-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Dual Tab Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <div className="bg-white p-2 rounded-full shadow-md inline-flex border border-gray-100 relative">
            <div
              className="absolute top-2 bottom-2 w-1/2 bg-primary rounded-full transition-transform duration-300 ease-in-out shadow-sm"
              style={{ transform: activeTab === "child" ? "translateX(0)" : "translateX(96%)", width: "calc(50% - 4px)" }}
            ></div>
            <button
              onClick={() => setActiveTab("child")}
              className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm md:text-base transition-colors duration-300 ${activeTab === 'child' ? 'text-white' : 'text-gray-600 hover:text-primary'}`}
            >
              For Your Child
            </button>
            <button
              onClick={() => setActiveTab("teacher")}
              className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm md:text-base transition-colors duration-300 ${activeTab === 'teacher' ? 'text-white' : 'text-gray-600 hover:text-primary'}`}
            >
              Become a Teacher
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {activeTab === "child" ? (
              <motion.div
                key="child"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {childPrograms.map((prog, i) => (
                  <div key={i} className="group relative w-full h-80 perspective-1000">
                    <div className="w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180 relative">

                      {/* Front Face */}
                      <div className="absolute w-full h-full backface-hidden bg-white rounded-[2rem] p-8 shadow-md border border-gray-100 flex flex-col items-center justify-center text-center">
                        <div className={`text-6xl mb-6 ${prog.lightBg} w-24 h-24 rounded-full flex items-center justify-center shadow-inner border border-white`}>{prog.icon}</div>
                        <h3 className={`font-heading font-bold text-3xl ${prog.textColor} mb-3`}>{prog.name}</h3>
                        <span className={`inline-block ${prog.lightBg} ${prog.textColor} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`}>{prog.age}</span>
                      </div>

                      {/* Back Face */}
                      <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${prog.color} text-white rounded-[2rem] p-8 shadow-xl flex flex-col justify-center border border-white/20`}>
                        <h3 className="font-heading font-bold text-2xl mb-4 border-b border-white/20 pb-2">Key Outcomes</h3>
                        <ul className="mb-6 space-y-3">
                          {prog.outcomes.map((out, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm font-sans font-medium">
                              <span className="w-2 h-2 bg-white rounded-full shadow-sm opacity-80"></span> {out}
                            </li>
                          ))}
                        </ul>
                        <Link href="/programs" className={`mt-auto bg-white ${prog.textColor} text-center py-3 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm shadow-md`}>
                          Enquire About {prog.name}
                        </Link>
                      </div>

                    </div>
                  </div>
                ))}

                <div className="md:col-span-3 text-center mt-10">
                  <Link href="/programs" className="text-primary font-bold hover:text-primary-dark inline-flex items-center gap-2 group text-lg">
                    View All 7 Programs
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="teacher"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-1">
                    <div className="inline-block bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-accent-purple/20">
                      🎓 University Certified
                    </div>
                    <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4 leading-tight">
                      Start your career in Early Childhood Education
                    </h2>
                    <p className="text-gray-600 mb-6 font-sans leading-relaxed">
                      Our 6-month intensive Teacher Training Course equips you with modern teaching methodologies, child psychology insights, and a guaranteed internship.
                    </p>
                    <ul className="grid grid-cols-2 gap-4 mb-8">
                      <li className="flex items-center gap-2 font-semibold text-sm text-gray-700">✅ 100+ Graduates</li>
                      <li className="flex items-center gap-2 font-semibold text-sm text-gray-700">✅ Job Placement</li>
                      <li className="flex items-center gap-2 font-semibold text-sm text-gray-700">✅ Flexible Timing</li>
                      <li className="flex items-center gap-2 font-semibold text-sm text-gray-700">✅ Practical Training</li>
                    </ul>
                    <Link href="/teacher-training" className="bg-accent-purple hover:bg-[#855BBD] text-white px-8 py-4 rounded-full font-bold inline-block transition-transform hover:-translate-y-1 shadow-lg shadow-purple-500/30">
                      View Course Details
                    </Link>
                  </div>
                  <div className="md:w-1/3 bg-gray-50 rounded-3xl p-6 border border-gray-100 relative shadow-inner">
                    <div className="absolute -top-4 -right-4 text-5xl">🌟</div>
                    <p className="italic text-gray-600 text-sm leading-relaxed relative z-10 font-medium">
                      &quot;The TTC program at WOW Saplings completely transformed my teaching approach. I got a placement immediately after my certification!&quot;
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-pink rounded-full flex items-center justify-center text-white font-bold">P</div>
                      <div>
                        <p className="font-bold text-sm text-gray-800">Priya M.</p>
                        <p className="text-xs text-gray-500">2024 Graduate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </section>
  );
}
