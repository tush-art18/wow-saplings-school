"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Check, Loader2 } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";


export default function AdmissionPage() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fathersName: "",
    mothersName: "",
    phone: "",
    whatsapp: "",
    address: "",
    childName: "",
    gender: "",
    dob: "",
    program: "",
    hearSource: "",
    visitTime: "",
    notes: ""
  });

  const steps = [
    { num: 1, title: "Parent Details", desc: "Basic contact info" },
    { num: 2, title: "Child Details", desc: "Age & program logic" },
    { num: 3, title: "Finish", desc: "Reference & visit slot" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitting(true);
      
      const text = `*New Admission Enquiry*%0A%0A*Parent:* ${formData.fathersName} / ${formData.mothersName}%0A*Phone:* ${formData.phone}%0A*WhatsApp:* ${formData.whatsapp}%0A*Address:* ${formData.address}%0A%0A*Child:* ${formData.childName}%0A*Gender:* ${formData.gender}%0A*DOB:* ${formData.dob}%0A*Program:* ${formData.program}%0A%0A*Source:* ${formData.hearSource}%0A*Visit Time:* ${formData.visitTime}%0A*Notes:* ${formData.notes}`;
      
      const whatsappUrl = `https://api.whatsapp.com/send?phone=918999640602&text=${text}`;
      window.open(whatsappUrl, "_blank");
      
      setSubmitting(false);
      setSuccess(true);
    }
  };

  const resetForm = () => {
    setFormData({
      fathersName: "",
      mothersName: "",
      phone: "",
      whatsapp: "",
      address: "",
      childName: "",
      gender: "",
      dob: "",
      program: "",
      hearSource: "",
      visitTime: "",
      notes: ""
    });
    setSuccess(false);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <ScrollReveal animation="fade-up">
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-primary-dark mb-6">
              Admissions Open 2026–27
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards a vibrant foundation for your child. Follow our simple application process below.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Timeline */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-gray-100 pb-16">
          {[
            { step: "01", name: "Enquire Online", icon: "💻" },
            { step: "02", name: "Campus Tour", icon: "🏫" },
            { step: "03", name: "Submit Docs", icon: "📄" },
            { step: "04", name: "Welcome to WOW", icon: "🎉" },
          ].map((item, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 mx-auto bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm"
                >
                  {item.icon}
                </motion.div>
                <div className="text-[10px] font-bold text-accent-yellow tracking-widest mb-1 uppercase">STEP {item.step}</div>
                <div className="font-bold text-gray-800 text-sm md:text-base">{item.name}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Required Documents Callout */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <div className="bg-accent-yellow/10 border-2 border-accent-yellow/30 rounded-[2rem] p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="w-16 h-16 bg-accent-yellow rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto md:mx-0 shadow-md">
                📄
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-dark mb-2">
                Required Documents
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Please keep these ready for a smooth admission process.
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                "Birth Certificate",
                "Aadhar Card",
                "2 Photos of Student",
                "Registration Fees"
              ].map((doc, i) => (
                <div key={i} className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm border border-gray-100">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-gray-800">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Multi-Step Form Layout */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            
            {/* Left info panel */}
            <div className="bg-primary-dark w-full md:w-1/3 p-10 text-white relative overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative z-10">
                 <h3 className="font-heading font-bold text-2xl mb-8">Application Status</h3>
                 <div className="space-y-8">
                   {steps.map((s, i) => (
                     <div key={i} className={`flex items-start gap-4 transition-opacity ${step >= s.num ? "opacity-100" : "opacity-40"}`}>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${step > s.num ? "bg-accent-yellow text-primary-dark" : step === s.num ? "border-2 border-white text-white" : "border-2 border-white/20 text-white/20"}`}>
                         {step > s.num ? <Check size={16} /> : s.num}
                       </div>
                       <div>
                         <div className="font-bold">{s.title}</div>
                         <div className={`text-sm ${step === s.num ? "text-primary-light" : "text-gray-400"}`}>{s.desc}</div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Right Form Area */}
            <div className="w-full md:w-2/3 p-10 md:p-16">
               <AnimatePresence mode="wait">
                 {success ? (
                   <motion.div
                     key="success"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="flex flex-col items-center text-center py-10"
                   >
                     <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex flex-col items-center justify-center mb-6 shadow-inner">
                       <CheckCircle2 size={48} />
                     </div>
                     <h2 className="font-heading font-extrabold text-3xl text-primary-dark mb-4">Application Received!</h2>
                     <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                       Thank you. Your details have been securely passed to our admissions team. We will call you within 24 hours to schedule your campus tour.
                     </p>
                     <button onClick={resetForm} className="text-primary font-bold border-b border-primary pb-1">
                       Submit another application
                     </button>
                   </motion.div>
                 ) : (
                   <motion.form
                     key={`step-${step}`}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     onSubmit={handleSubmit}
                     className="space-y-6"
                   >
                     <h2 className="font-heading font-bold text-3xl text-primary-dark mb-8">
                       {steps[step-1].title}
                     </h2>

                     {step === 1 && (
                        <>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">Father&apos;s Name</label>
                             <input type="text" name="fathersName" value={formData.fathersName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                           </div>
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">Mother&apos;s Name</label>
                             <input type="text" name="mothersName" value={formData.mothersName} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                           </div>
                         </div>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">Phone Number *</label>
                             <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                           </div>
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">WhatsApp Number *</label>
                             <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="Required for updates" />
                           </div>
                         </div>
                         <div>
                           <label className="block text-sm font-bold text-gray-600 mb-2">House Address *</label>
                           <textarea rows={2} name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Enter your full residential address"></textarea>
                         </div>
                        </>
                     )}

                     {step === 2 && (
                        <>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div className="md:col-span-1">
                             <label className="block text-sm font-bold text-gray-600 mb-2">Child&apos;s Full Name</label>
                             <input type="text" name="childName" value={formData.childName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                           </div>
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">Gender</label>
                             <select name="gender" value={formData.gender} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                               <option value="">Select Gender</option>
                               <option value="Boy">Boy</option>
                               <option value="Girl">Girl</option>
                             </select>
                           </div>
                         </div>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">Date of Birth</label>
                             <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                           </div>
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">Program Applying For</label>
                             <select name="program" value={formData.program} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                               <option value="">Select an option...</option>
                               <option value="Playgroup (2-3 yrs)">Playgroup (2-3 yrs)</option>
                               <option value="Nursery (3-4 yrs)">Nursery (3-4 yrs)</option>
                               <option value="Junior KG (4-5 yrs)">Junior KG (4-5 yrs)</option>
                               <option value="Senior KG (5-6 yrs)">Senior KG (5-6 yrs)</option>
                               <option value="Phonics / Abacus">Phonics / Abacus</option>
                               <option value="Day-care (Baby sitting)">Day-care (Baby sitting)</option>
                             </select>
                           </div>
                         </div>
                        </>
                     )}

                     {step === 3 && (
                        <>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">How did you hear about us?</label>
                             <select name="hearSource" value={formData.hearSource} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                               <option value="">Select an option...</option>
                               <option value="Visited website">Visited website</option>
                               <option value="Neighbour">Neighbour</option>
                               <option value="Already one student is in our school">Already one student is in our school</option>
                               <option value="Newspaper">Newspaper</option>
                               <option value="Instagram">Instagram</option>
                             </select>
                           </div>
                           <div>
                             <label className="block text-sm font-bold text-gray-600 mb-2">Preferred Campus Visit Time</label>
                             <select name="visitTime" value={formData.visitTime} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                               <option value="">Select a slot...</option>
                               <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                             </select>
                           </div>
                         </div>
                         <div>
                           <label className="block text-sm font-bold text-gray-600 mb-2">Any additional notes?</label>
                           <textarea rows={3} name="notes" value={formData.notes} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none"></textarea>
                         </div>
                        </>
                     )}

                     <div className="flex gap-4 pt-6 border-t border-gray-100">
                       {step > 1 && (
                         <motion.button 
                           type="button" 
                           disabled={submitting}
                           onClick={() => setStep(step - 1)}
                           className="px-6 py-4 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
                           whileTap={{ scale: 0.96 }}
                         >
                           Back
                         </motion.button>
                       )}
                       <motion.button 
                         type="submit" 
                         disabled={submitting}
                         className="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 disabled:opacity-80"
                         whileHover={{ scale: 1.02, y: -2 }}
                         whileTap={{ scale: 0.97 }}
                       >
                         {submitting ? (
                           <>
                             <Loader2 size={18} className="animate-spin" />
                             Submitting...
                           </>
                         ) : (
                           <>
                             {step === 3 ? "Submit Application" : "Next Step"} 
                             {step < 3 && <ChevronRight size={18} />}
                           </>
                         )}
                       </motion.button>
                     </div>
                   </motion.form>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

