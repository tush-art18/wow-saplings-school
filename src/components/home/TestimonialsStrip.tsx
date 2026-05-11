"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function TestimonialsStrip() {
  const reviews = [
    { name: "Anjali Patil", role: "Parent of Aarav, Nursery", content: "WOW Saplings is more than a preschool. It's a place where my child found her second family! Highly recommended.", img: "https://randomuser.me/api/portraits/women/44.jpg", color: "bg-[#F06292]" },
    { name: "Rahul Deshmukh", role: "Parent of Riya, Playgroup", content: "I've seen significant growth in my son's social skills in just 6 months. Best decision we've made for his early education!", img: "https://randomuser.me/api/portraits/men/32.jpg", color: "bg-[#4A90D9]" },
    { name: "Neha Sharma", role: "Parent of Vihaan, Jr KG", content: "The curriculum is perfectly balanced between play and learning. My daughter wakes up excited to go to school every single day.", img: "https://randomuser.me/api/portraits/women/68.jpg", color: "bg-[#9C6DD8]" },
    { name: "Vikram Mane", role: "Parent of Ananya, Sr KG", content: "Safe campus, expert teachers, and happy kids. The communication from the school is outstanding.", img: "https://randomuser.me/api/portraits/men/46.jpg", color: "bg-[#FF7043]" },
    { name: "Priya Kulkarni", role: "Parent of Kabir, Phonics", content: "Excellent learning environment! The teachers are super professional and attentive to details. The campus is always impeccable.", img: "https://randomuser.me/api/portraits/women/12.jpg", color: "bg-[#2D8C4E]" }
  ];

  return (
    <section className="py-32 bg-[#c3cfab] relative overflow-hidden font-sans">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-extrabold text-5xl md:text-6xl text-[#1a2f1c] mb-4"
          >Parents Speak</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-[#1a2f1c]/70 font-bold uppercase tracking-widest text-lg"
          >Real stories from our WOW family</motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-16 gap-x-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 120, damping: 14 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative pt-12 pb-4 w-[calc(100%-20px)] sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-24px)] max-w-[380px] group"
            >
              {/* Main Colored Body */}
              <div className={`text-white rounded-[2rem] p-8 pt-16 shadow-2xl relative h-full flex flex-col ${r.color}`}>
                {/* Hearts */}
                <div className="flex justify-center gap-1.5 mb-6">
                  {[1,2,3,4,5].map((s, si) => (
                    <motion.div
                      key={s}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + si * 0.06, type: "spring", stiffness: 300 }}
                    >
                      <Heart size={20} fill="#f9c846" className="text-[#f9c846]" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-center text-[15px] leading-relaxed mb-8 font-medium flex-1">
                  {r.content}
                </p>

                {/* Bottom Info */}
                <p className="text-center text-[11px] opacity-70 uppercase tracking-widest font-bold">Kolhapur | 2025</p>
              </div>

              {/* Top overlapping Avatar Box */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#e8eddf] text-gray-800 px-4 py-3 rounded-[1.2rem] border-4 shadow-lg flex items-center gap-3 w-[85%] z-10"
                style={{ borderColor: r.color.replace('bg-[', '').replace(']', '') }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white bg-white flex items-center justify-center">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm leading-tight truncate text-primary-dark">{r.name}</p>
                  <p className="text-[10px] font-bold text-gray-500 truncate">{r.role}</p>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
