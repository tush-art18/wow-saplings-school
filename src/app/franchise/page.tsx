"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, TrendingUp, Users, BookOpen, Building, Handshake, MapPin, Send, ChevronDown, Award, PieChart, Star } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";
import Image from "next/image";

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Franchise Enquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*City:* ${formData.city}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918999640602&text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const faqs = [
    {
      q: "How much investment is needed to start a WOW Saplings Preschool?",
      a: "Starting a WOW Saplings franchise requires an initial investment covering infrastructure setup, essential equipment, branding, and marketing support. Contact us for a detailed breakdown."
    },
    {
      q: "Do I need a background in education to become a franchise partner?",
      a: "No specific educational qualifications are required. We prioritize a passion for early childhood education and entrepreneurship. We provide comprehensive training to equip you and your staff with all the necessary skills."
    },
    {
      q: "Is there a royalty fee associated with owning a WOW Saplings franchise?",
      a: "No! We operate on a Zero Royalty Fee model. You retain 100% of your profits, allowing for faster break-even and sustainable long-term business growth."
    },
    {
      q: "What kind of property is needed to set up a preschool franchise?",
      a: "You’ll need around 1500 - 2000 sq. ft. of built-up space, preferably on the ground floor with an outdoor play area. It should be situated in a safe, accessible residential area with a dense population."
    },
    {
      q: "Will you help in the recruitment and training of my faculty?",
      a: "Absolutely. We provide thorough HR support, including recruitment guidelines, interview processes, and our signature MTTC-certified training for all your teachers."
    },
    {
      q: "How soon can I start after signing the franchise agreement?",
      a: "Once the agreement is signed and the location is finalized, setup and operations can typically commence within 45 to 60 days with our dedicated support team."
    }
  ];

  const supportList = [
    "Site Identification & Evaluation",
    "Guidance in Infrastructure & Interior Design",
    "Legal Documentation & Agreements",
    "Market Survey & Competitor Analysis",
    "HR Support - Recruitment & Appraisals",
    "Branding & Marketing Collateral",
    "Guidance on Fees Structure & Financial Planning",
    "Admission Lead Generation Support",
    "Regular Training & Development (MTTC)",
    "Ongoing Operational Support",
    "Curriculum Product Development",
    "Detailed Standard Operating Procedures (SOPs)"
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 font-sans">
      
      {/* ── HERO ── */}
      <div className="container mx-auto px-4 text-center max-w-5xl mb-16">
        <ScrollReveal animation="fade-up">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/20 text-yellow-700 font-bold px-4 py-2 rounded-full text-sm border border-accent-yellow/30 mb-6">
            <Award size={16} /> Award-Winning Preschool Franchise
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-primary-dark mb-6 leading-tight">
            Create Impact, Earn Success.<br />Start Your Own <span className="text-primary">Play School</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Partner with WOW Saplings and be part of Maharashtra&apos;s fastest-growing preschool network. Step into a world of endless possibilities with a proven Zero-Royalty business model and high ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#enquiry" className="bg-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-1 text-lg">
              Start Your Franchise
            </a>
            <a href="#roi" className="bg-white text-primary-dark border-2 border-gray-200 font-bold px-8 py-4 rounded-full shadow-sm hover:border-primary transition-all hover:-translate-y-1 text-lg">
              View Requirements
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* ── STATS BANNER ── */}
      <div className="container mx-auto px-4 max-w-6xl mb-24">
        <ScrollReveal animation="zoom-in" delay={0.2}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-8 text-center bg-gray-50/50">
                <div className="text-4xl font-black text-accent-yellow mb-2">10+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Legacy</div>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-black text-accent-pink mb-2">Zero</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Royalty Model</div>
              </div>
              <div className="p-8 text-center bg-gray-50/50">
                <div className="text-4xl font-black text-accent-blue mb-2">100%</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Setup Support</div>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-black text-[#2D8C4E] mb-2">High</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Return on Investment</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── ABOUT THE OPPORTUNITY & FORM ── */}
      <div id="enquiry" className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <ScrollReveal animation="fade-right">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-6">Build Tomorrow - Start Your Own Preschool Today!</h2>
            <div className="space-y-4 text-gray-600 font-medium leading-relaxed mb-8">
              <p>At WOW Saplings, we are uncompromising in our pursuit of excellence. As one of the most trusted play school franchise brands, we don’t just create classrooms, we build a foundation for future innovators, thinkers, and leaders.</p>
              <p>Our vision is rooted in the belief that every child deserves an environment that nurtures curiosity, creativity, and confidence, and every franchise partner deserves a business model that ensures growth, stability, and recognition.</p>
              <p>With our Zero Royalty business model, WOW Saplings offers a profitable, high-ROI opportunity for entrepreneurs and educators alike. We blend CBSE-aligned curriculums with modern play-way methods to ensure quality learning.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <PieChart className="text-accent-blue" />
                <span className="font-bold text-gray-800">8.49% Industry CAGR</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <Star className="text-accent-yellow" />
                <span className="font-bold text-gray-800">Low Investment, High ROI</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: WhatsApp Form (Moved Up) */}
          <ScrollReveal animation="fade-left">
            <div className="bg-white text-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-yellow via-primary to-accent-pink"></div>
              
              <h3 className="font-heading font-bold text-3xl text-primary-dark mb-2">Apply for Franchise</h3>
              <p className="text-gray-500 mb-8 font-medium text-sm">Direct enquiry via WhatsApp. Our team connects in 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" required 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                    placeholder="Enter your name" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" required 
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                      placeholder="+91 XXXXX" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">City</label>
                    <input 
                      type="text" required 
                      value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                      placeholder="Proposed City" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Any message or queries?</label>
                  <textarea 
                    rows={3} 
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none" 
                    placeholder="Tell us about your background or property..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex justify-center items-center gap-2 text-lg"
                >
                  <Send size={20} /> Send Enquiry via WhatsApp
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mb-4">Why Partner With WOW Saplings?</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Comprehensive Franchise Support System</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Building size={32} className="text-accent-blue" />, title: "End-to-End Setup", desc: "From interior design, furniture, to play equipment, we guide you in setting up a premium, child-safe environment." },
              { icon: <BookOpen size={32} className="text-accent-pink" />, title: "Proven Curriculum", desc: "Access our NEP 2020 & CBSE aligned curriculum, complete with daily lesson plans and activity materials." },
              { icon: <Users size={32} className="text-accent-yellow" />, title: "Staff Training", desc: "We provide comprehensive MTTC-certified training for your teachers to maintain high educational standards." },
              { icon: <TrendingUp size={32} className="text-[#2D8C4E]" />, title: "Marketing Support", desc: "Get localized marketing strategies, social media templates, and admission generation support." },
              { icon: <Handshake size={32} className="text-[#9C6DD8]" />, title: "Ongoing Operations", desc: "Continuous operational guidance, quality audits, and dedicated support from our expert management team." },
              { icon: <CheckCircle2 size={32} className="text-primary" />, title: "Brand Trust", desc: "Leverage the strong reputation and trust WOW Saplings has built over a decade in early childhood education." }
            ].map((feature, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-primary-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Full Support Checklist */}
          <ScrollReveal animation="fade-up">
            <div className="bg-primary-light/10 rounded-[3rem] p-10 md:p-12 border border-primary/10">
              <h3 className="font-heading font-bold text-2xl text-primary-dark mb-8 text-center">Our Pre-Opening & Post-Opening Support</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                {supportList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── REQUIREMENTS & ROI ── */}
      <div id="roi" className="container mx-auto px-4 max-w-6xl py-24">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-4xl text-primary-dark mb-4">What You Need To Start</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Basic Requirements</p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center h-full">
              <div className="w-20 h-20 bg-accent-blue/10 text-accent-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">Area Requirement</h3>
              <p className="text-gray-600 font-medium text-lg mb-2">1500+ sq.ft Built-up</p>
              <p className="text-gray-500 text-sm">Plus 500 sq.ft of outdoor play area in a dense residential location.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent-yellow"></div>
              <div className="w-20 h-20 bg-accent-yellow/10 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">Investment</h3>
              <p className="text-gray-600 font-medium text-lg mb-2">Cost-Effective Setup</p>
              <p className="text-gray-500 text-sm">Low investment, high ROI. Zero royalty means a faster payback period.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center h-full">
              <div className="w-20 h-20 bg-accent-pink/10 text-accent-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake size={32} />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">Passion & Drive</h3>
              <p className="text-gray-600 font-medium text-lg mb-2">Igniting Young Minds</p>
              <p className="text-gray-500 text-sm">No prior education background needed, just a strong desire to nurture children and succeed.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-white/70">Everything you need to know about the WOW Saplings franchise.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors gap-4"
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    <ChevronDown className={`shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-accent-yellow" : "text-white/50"}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="p-6 pt-0 text-white/70 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}
