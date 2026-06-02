"use client";

import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail, Clock, Map } from "lucide-react";
import ScrollReveal from "@/components/global/ScrollReveal";

export default function ContactPage() {

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

      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Cards & Map */}
        <div className="space-y-8">
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
