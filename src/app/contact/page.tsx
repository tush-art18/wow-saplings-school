"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Phone, Mail, Clock, Map } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center max-w-3xl mb-16">
        <ScrollReveal animation="fade-up">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-primary-dark mb-6">
            Find Us — We&apos;re Right Here For You
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="text-xl text-gray-600">
            Whether you have a quick question or want to schedule a full campus tour, we&apos;re always happy to connect.
          </p>
        </ScrollReveal>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12">
        
        {/* Left Col - Cards & Map */}
        <div className="lg:col-span-7 space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <ScrollReveal animation="fade-right" delay={0.1}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-accent-yellow/20 text-accent-yellow rounded-full flex items-center justify-center shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600 text-sm">Main Road, Layout no.2, Kaman, Baba Jaragnagar, near Baba Jarag Nagar, Kolhapur, Maharashtra 416008</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={0.2}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-accent-blue/20 text-accent-blue rounded-full flex items-center justify-center shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm">+91 89996 40602<br/>+91 91683 14566</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={0.3}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-accent-pink/20 text-accent-pink rounded-full flex items-center justify-center shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm">wowsaplingsschool666@gmail.com</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={0.4}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                  <Clock />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">School Hours</h3>
                  <p className="text-gray-600 text-sm">Mon - Fri: 10:00 AM - 1:00 PM<br/>Sat: 10:00 AM - 1:00 PM</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="zoom-in" delay={0.2}>
            <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7644.3353919311885!2d74.21827267771!3d16.6684897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ff918c44f717%3A0x885bba4f5208489d!2sWow%20Saplings%20School!5e0!3m2!1sen!2sin!4v1777144512785!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Col - Form */}
        <div className="lg:col-span-5">
          <ScrollReveal animation="fade-left" delay={0.3}>
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-32">
              <h2 className="font-heading font-bold text-3xl text-primary-dark mb-2">Drop a Message</h2>
              <p className="text-gray-500 mb-8 font-medium">We&apos;ll get back to you within 2 working hours.</p>

              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                      ✓
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-primary-dark mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label className="block text-sm font-bold text-gray-600 mb-2">Your Name</label>
                      <input type="text" required className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-600 mb-2">Phone Number</label>
                      <input type="tel" required className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="+91 99999 99999" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-600 mb-2">Message</label>
                      <textarea required rows={4} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button 
                      disabled={formStatus === "submitting"}
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {formStatus === "submitting" ? "Sending..." : "Send Message"} <Send size={18} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Local SEO Block */}
      <ScrollReveal animation="fade-up">
        <div className="container mx-auto px-4 mt-20">
          <div className="bg-primary-light rounded-3xl p-8 text-center max-w-4xl mx-auto border border-primary/10">
            <Map className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-heading font-bold text-2xl text-primary-dark mb-4">Proudly Serving Kolhapur</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              WOW Saplings is the best preschool near you, easily accessible for families residing in Rajarampuri, Shahupuri, Tarabai Park, Ruikar Colony, Nagala Park, Pratibha Nagar, and surrounding localities in Kolhapur. We provide safe transport facilities across the city.
            </p>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
