"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, TrendingUp, Users, BookOpen, Building, Handshake, MapPin, Send, ChevronDown, Award, PieChart, Star, Loader2, Info } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";
import Image from "next/image";
import { submitFranchiseForm } from "@/lib/api";

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiErrors, setApiErrors] = useState<Record<string, string[]>>({});
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: ""
  });

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
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name cannot exceed 100 characters.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!validateIndianPhone(formData.phone)) {
      errors.phone = "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.";
    }

    if (!formData.city.trim()) {
      errors.city = "Proposed city is required.";
    } else if (formData.city.trim().length < 2) {
      errors.city = "City name must be at least 2 characters.";
    } else if (formData.city.trim().length > 100) {
      errors.city = "City name cannot exceed 100 characters.";
    }

    if (formData.message.trim() && formData.message.trim().length > 1000) {
      errors.message = "Message cannot exceed 1000 characters.";
    }

    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiErrors({});
    setLocalErrors({});
    setGlobalError("");

    const isValid = validateForm();
    if (!isValid) {
      setGlobalError("Please fix the validation errors below.");
      return;
    }

    setSubmitting(true);

    const result = await submitFranchiseForm({
      name: formData.name,
      phone: formData.phone,
      city: formData.city,
      message: formData.message,
    });

    setSubmitting(false);

    if (result.success && result.whatsapp_url) {
      window.open(result.whatsapp_url, "_blank");
      setSuccess(true);
    } else if (result.errors) {
      setApiErrors(result.errors);
      setGlobalError("Please fix the errors below.");
      
      const mappedErrors: Record<string, string> = {};
      Object.entries(result.errors).forEach(([key, val]) => {
        mappedErrors[key] = val.join(" ");
      });
      setLocalErrors(mappedErrors);
    } else {
      setGlobalError(result.error || "Something went wrong. Please try again.");
    }
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
    <div className="min-h-screen bg-background font-sans relative">
      
      {/* ── 1. VIBRANT HERO ── */}
      <div className="relative pt-36 pb-32 overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FFFDF0] to-[#F0F7FF]">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-accent-yellow/20 rounded-full blur-[80px]" />
          <motion.div animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-40 -right-20 w-[35rem] h-[35rem] bg-accent-pink/20 rounded-full blur-[80px]" />
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] bg-accent-blue/15 rounded-full blur-[60px]" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-32 left-[10%] text-6xl opacity-30 animate-bounce select-none z-10">🚀</div>
        <div className="absolute top-[60%] right-[12%] text-5xl opacity-40 animate-pulse select-none z-10">🌟</div>

        <div className="container mx-auto px-4 text-center max-w-5xl relative z-20">
          <ScrollReveal animation="zoom-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-primary-dark font-black uppercase tracking-widest px-5 py-2.5 rounded-full text-xs md:text-sm border-2 border-accent-pink/30 shadow-sm mb-6">
              <Award size={18} className="text-accent-pink" /> 10+ Years of Trust & Excellence
            </div>
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-[5rem] text-primary-dark mb-6 leading-[1.1]">
              Create Impact, Earn Success.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-pink to-accent-yellow">Start Your Own Play School</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
              Partner with WOW Saplings — Maharashtra&apos;s fastest-growing preschool network. Step into a world of endless possibilities with a proven <strong className="text-accent-pink font-extrabold">Zero-Royalty</strong> model and <strong className="text-primary font-extrabold">High ROI</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <motion.a whileHover={{ y: -5, scale: 1.05 }} href="#enquiry" className="bg-primary text-white font-black px-10 py-5 rounded-full shadow-[0_8px_30px_rgb(164,60,140,0.4)] text-lg md:text-xl border-2 border-primary hover:bg-primary-dark transition-all">
                Start Your Franchise 🚀
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.05 }} href="#roi" className="bg-white text-primary-dark border-2 border-gray-200 font-black px-10 py-5 rounded-full shadow-lg hover:border-primary transition-all text-lg md:text-xl">
                View Requirements 📋
              </motion.a>
            </div>
          </ScrollReveal>
        </div>

        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 74" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,74L1320,74C1200,74,960,74,720,74C480,74,240,74,120,74L0,74Z" className="fill-white"></path>
          </svg>
        </div>
      </div>

      {/* ── 2. PLAYFUL STATS BUBBLES ── */}
      <div className="bg-white relative z-20 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 -mt-12 md:-mt-16">
            {[
              { n: "10+", l: "Years Legacy", color: "text-[#d97706]", bg: "bg-[#fef3c7]", border: "border-[#fde68a]", rotate: "-rotate-3" },
              { n: "Zero", l: "Royalty Model", color: "text-[#be185d]", bg: "bg-[#fce7f3]", border: "border-[#fbcfe8]", rotate: "rotate-2" },
              { n: "100%", l: "Setup Support", color: "text-[#1d4ed8]", bg: "bg-[#dbeafe]", border: "border-[#bfdbfe]", rotate: "-rotate-2" },
              { n: "High", l: "ROI", color: "text-[#15803d]", bg: "bg-[#dcfce3]", border: "border-[#bbf7d0]", rotate: "rotate-3" },
            ].map((s, i) => (
              <ScrollReveal key={i} animation="bounce-in" delay={i * 0.1} width="fit-content">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  className={`w-40 h-40 md:w-48 md:h-48 rounded-full border-4 ${s.border} ${s.bg} flex flex-col items-center justify-center shadow-xl ${s.rotate} relative z-30 cursor-pointer`}
                >
                  <div className={`font-heading font-black text-4xl md:text-5xl leading-none mb-1 ${s.color}`}>{s.n}</div>
                  <div className={`text-[10px] md:text-xs font-black uppercase tracking-widest text-center px-4 ${s.color} opacity-80`}>{s.l}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. ABOUT & CLIPBOARD ENQUIRY FORM ── */}
      <div id="enquiry" className="container mx-auto px-4 max-w-6xl pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-right">
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mb-8 leading-tight">
                Build Tomorrow —<br/>
                <span className="relative inline-block">
                  <span className="relative z-10 text-white">Start Your Preschool</span>
                  <span className="absolute bottom-1 left-[-5%] w-[110%] h-[80%] bg-primary -rotate-2 z-0 rounded-lg"></span>
                </span>
                <br/>Today!
              </h2>
              <div className="space-y-5 text-gray-600 font-medium text-lg leading-relaxed mb-10">
                <p>At WOW Saplings, we are uncompromising in our pursuit of excellence. As one of the most trusted play school franchise brands, we don&apos;t just create classrooms, we build a foundation for future innovators, thinkers, and leaders.</p>
                <p>With our <strong className="text-primary-dark font-extrabold">Zero Royalty business model</strong>, we offer a highly profitable opportunity. We blend CBSE-aligned curriculums with modern play-way methods to ensure exceptional quality learning.</p>
              </div>
              
              <div className="flex flex-wrap gap-6 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-inner">
                <div>
                  <div className="font-heading font-black text-4xl text-accent-blue">8.49%</div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400 mt-1">Industry CAGR</div>
                </div>
                <div className="w-px bg-gray-300" />
                <div>
                  <div className="font-heading font-black text-4xl text-primary">Zero</div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400 mt-1">Royalty Fee</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Clipboard Form */}
          <div className="lg:col-span-6 relative flex justify-center">
            <ScrollReveal animation="rotate-in">
              <div className="relative w-full max-w-lg">
                {/* Decorative background tilted card */}
                <div className="absolute inset-0 bg-accent-yellow rounded-[3rem] rotate-3 translate-x-4 translate-y-4 shadow-xl"></div>
                
                {/* Main Form Card */}
                <div className="bg-white text-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative z-10 border-2 border-gray-100">
                  {/* Clipboard Clip SVG */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-gray-300 rounded-lg border-2 border-gray-400 shadow-md flex items-center justify-center">
                    <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-3xl text-primary-dark mb-2 mt-2">Apply for Franchise</h3>
                  <p className="text-gray-500 mb-8 font-bold text-xs uppercase tracking-widest">Direct enquiry via WhatsApp</p>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                      <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-widest">Full Name *</label>
                      <input 
                        type="text" 
                        value={formData.name} onChange={e => handleInputChange("name", e.target.value)}
                        className={`w-full px-5 py-3.5 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 font-medium ${localErrors.name ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`} 
                        placeholder="Jane Doe" 
                      />
                      {localErrors.name && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.name}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-widest">Phone Number *</label>
                        <input 
                          type="tel" 
                          value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)}
                          className={`w-full px-5 py-3.5 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 font-medium ${localErrors.phone ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`} 
                          placeholder="+91 XXXXX" 
                        />
                        {localErrors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-widest">Proposed City *</label>
                        <input 
                          type="text" 
                          value={formData.city} onChange={e => handleInputChange("city", e.target.value)}
                          className={`w-full px-5 py-3.5 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 font-medium ${localErrors.city ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`} 
                          placeholder="Your City" 
                        />
                        {localErrors.city && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.city}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-widest">Message</label>
                      <textarea 
                        rows={3} 
                        value={formData.message} onChange={e => handleInputChange("message", e.target.value)}
                        className={`w-full px-5 py-3.5 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 font-medium resize-none ${localErrors.message ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`} 
                        placeholder="Tell us about your property or background..."
                      ></textarea>
                      {localErrors.message && <p className="text-red-500 text-xs mt-1 font-bold">{localErrors.message}</p>}
                    </div>

                    {globalError && (
                      <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-sm text-red-700 font-bold">
                        {globalError}
                        {apiErrors && Object.entries(apiErrors).map(([field, msgs]) => (
                          <div key={field} className="mt-1 font-medium">• <span className="capitalize">{field.replace(/_/g, ' ')}</span>: {msgs.join(', ')}</div>
                        ))}
                      </div>
                    )}

                    {success ? (
                      <div className="p-6 bg-green-50 border-2 border-green-400 rounded-xl text-center shadow-inner">
                        <div className="text-4xl mb-3">✅</div>
                        <p className="font-black text-green-800 text-lg">Enquiry Sent!</p>
                        <p className="text-green-700 text-xs font-bold mt-1 uppercase tracking-wide">Our team will reach out shortly.</p>
                      </div>
                    ) : (
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] border-b-4 border-[#1da851] text-white font-black py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <><Loader2 size={24} className="animate-spin" /> Validating...</>
                        ) : (
                          <><Send size={24} /> Send via WhatsApp</>
                        )}
                      </motion.button>
                    )}
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* ── 4. WHY PARTNER — Colorful Flashcards ── */}
      <div className="relative py-32 bg-gradient-to-br from-[#FDF3F8]/90 to-[#FAF6FF]/95 overflow-hidden border-t-2 border-primary-light/60">
        {/* Background Decors */}
        <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">⭐</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12">🎨</div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-accent-pink font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] shadow-sm mb-4">
                Comprehensive Support
              </div>
              <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-primary-dark leading-[1.1]">
                Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">WOW Saplings?</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Flashcard Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { n: "01", color: "text-[#1d4ed8]", bg: "bg-[#dbeafe]", border: "border-[#bfdbfe]", icon: <Building size={32}/>, title: "End-to-End Setup", desc: "From interior design to play equipment — we guide every step of setting up a premium, child-safe environment.", rotate: "-rotate-1" },
              { n: "02", color: "text-[#be185d]", bg: "bg-[#fce7f3]", border: "border-[#fbcfe8]", icon: <BookOpen size={32}/>, title: "Proven Curriculum", desc: "Our NEP 2020 & CBSE aligned curriculum comes with daily lesson plans and materials, ready to deploy.", rotate: "rotate-2" },
              { n: "03", color: "text-[#b45309]", bg: "bg-[#fef3c7]", border: "border-[#fde68a]", icon: <Users size={32}/>, title: "Staff Training", desc: "Comprehensive MTTC-certified training for your teachers ensures consistently high standards.", rotate: "-rotate-2" },
              { n: "04", color: "text-[#15803d]", bg: "bg-[#dcfce3]", border: "border-[#bbf7d0]", icon: <TrendingUp size={32}/>, title: "Marketing Support", desc: "Localized marketing strategies, social media templates, and admission generation support.", rotate: "rotate-1" },
              { n: "05", color: "text-[#6d28d9]", bg: "bg-[#f3e8ff]", border: "border-[#e9d5ff]", icon: <Handshake size={32}/>, title: "Ongoing Operations", desc: "Continuous operational guidance, quality audits, and a dedicated support team.", rotate: "-rotate-1" },
              { n: "06", color: "text-[#0f766e]", bg: "bg-[#ccfbf1]", border: "border-[#99f6e4]", icon: <CheckCircle2 size={32}/>, title: "Brand Trust", desc: "Leverage a decade of brand reputation that parents in Maharashtra already know and trust.", rotate: "rotate-2" },
            ].map((f, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 0.05} className="w-full">
                <motion.div 
                  whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
                  className={`p-8 rounded-[2rem] border-4 ${f.border} ${f.bg} shadow-md h-full flex flex-col ${f.rotate} transition-colors`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-white border-2 ${f.border} flex items-center justify-center shadow-sm ${f.color}`}>
                      {f.icon}
                    </div>
                    <span className={`font-black text-4xl opacity-30 ${f.color}`}>{f.n}</span>
                  </div>
                  <h3 className={`font-heading font-extrabold text-2xl mb-3 ${f.color} opacity-90`}>{f.title}</h3>
                  <p className="text-gray-700 font-semibold leading-relaxed text-sm">{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Support Checklist — Floating Stickers */}
          <ScrollReveal animation="fade-up">
            <div className="mt-20 text-center">
              <h3 className="font-heading font-black text-2xl text-primary-dark mb-8">Pre &amp; Post Opening Support Includes</h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {supportList.map((item, i) => (
                  <motion.span 
                    whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                    key={i} 
                    className={`inline-flex items-center gap-2 text-sm font-bold text-primary-dark bg-white border-2 ${i % 2 === 0 ? 'border-accent-yellow/40' : 'border-accent-pink/40'} shadow-sm px-5 py-2.5 rounded-full cursor-default`}
                  >
                    <span className={i % 2 === 0 ? "text-accent-yellow" : "text-accent-pink"}>✦</span> {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── 5. REQUIREMENTS & ROI — Nude Gradient Contrast ── */}
      <div id="roi" className="relative bg-gradient-to-br from-[#FAF8F5] via-[#F4EBE1] to-[#EADECF] py-32 overflow-hidden border-t-2 border-stone-200">
        {/* Playful background line patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_2px,transparent_2px)] [background-size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white border border-stone-200 text-stone-500 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] mb-4 shadow-sm">
                Basic Requirements
              </div>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-stone-800 mb-4">What You Need To Start</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal animation="zoom-in" delay={0.05}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] border-2 border-stone-200 shadow-md text-center h-full relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-stone-100 text-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-stone-200">
                  <MapPin size={36} />
                </div>
                <h3 className="font-heading font-black text-2xl text-stone-800 mb-3">Area Requirement</h3>
                <div className="bg-stone-50 rounded-lg py-2 px-4 inline-block mb-4 border border-stone-100">
                  <p className="text-stone-800 font-bold text-lg">1500+ sq.ft Built-up</p>
                </div>
                <p className="text-stone-600 font-medium text-sm">Plus 500 sq.ft of outdoor play area in a dense residential location.</p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal animation="zoom-in" delay={0.15}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] border-2 border-stone-200 shadow-md text-center h-full relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-stone-100 text-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-stone-200">
                  <TrendingUp size={36} />
                </div>
                <h3 className="font-heading font-black text-2xl text-stone-800 mb-3">Investment</h3>
                <div className="bg-stone-50 rounded-lg py-2 px-4 inline-block mb-4 border border-stone-100">
                  <p className="text-stone-800 font-bold text-lg">Cost-Effective Setup</p>
                </div>
                <p className="text-stone-600 font-medium text-sm">Low investment, high ROI. Zero royalty means a faster payback period.</p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal animation="zoom-in" delay={0.25}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] border-2 border-stone-200 shadow-md text-center h-full relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-stone-100 text-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-stone-200">
                  <Handshake size={36} />
                </div>
                <h3 className="font-heading font-black text-2xl text-stone-800 mb-3">Passion & Drive</h3>
                <div className="bg-stone-50 rounded-lg py-2 px-4 inline-block mb-4 border border-stone-100">
                  <p className="text-stone-800 font-bold text-lg">Igniting Young Minds</p>
                </div>
                <p className="text-stone-600 font-medium text-sm">No prior education background needed, just a strong desire to nurture children and succeed.</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── 6. VIBRANT FAQ ── */}
      <div className="relative bg-gradient-to-br from-white via-[#F4EEF7] to-[#FFF9E6] py-32 overflow-hidden border-t-4 border-white">
        {/* Floating elements */}
        <div className="absolute top-20 right-[15%] text-5xl opacity-40 animate-bounce">🤔</div>
        <div className="absolute bottom-20 left-[15%] text-5xl opacity-40 animate-pulse">💡</div>
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4 text-primary-dark">Got Questions?</h2>
              <p className="text-gray-600 font-bold text-lg">Everything you need to know about partnering with us.</p>
            </div>
            
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-2xl border-2 border-gray-100 shadow-md overflow-hidden relative"
                >
                  {/* Colorful left border strip */}
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${i % 3 === 0 ? 'bg-accent-yellow' : i % 3 === 1 ? 'bg-accent-pink' : 'bg-accent-blue'}`}></div>
                  
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 pl-8 text-left hover:bg-gray-50 transition-colors gap-4"
                  >
                    <span className="font-bold text-lg text-primary-dark">{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${openFaq === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} size={20} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="p-6 pt-0 pl-8 text-gray-600 leading-relaxed font-semibold border-t border-gray-50 mx-6 mt-2 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}
