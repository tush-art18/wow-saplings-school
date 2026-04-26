"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Teacher-Training", href: "/teacher-training" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? "md:py-2" : "md:py-6"
      }`}
    >
      <div className={`container mx-auto transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-xl rounded-full border-b-4 border-primary/10 max-w-6xl px-6" 
          : "bg-white/50 backdrop-blur-md rounded-[2.5rem] max-w-7xl px-8"
      }`}>
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl p-1 shadow-md group-hover:rotate-6 transition-transform">
               <img 
                 src="/sapling-logo-0003.jpg" 
                 alt="Logo" 
                 className="w-full h-full object-contain rounded-lg md:rounded-xl"
               />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl md:text-2xl text-primary-dark tracking-tight leading-none">
                WOW <span className="text-accent-pink">Saplings</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Preschool</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="font-bold text-primary-dark/80 hover:text-primary transition-colors hover:scale-110 active:scale-95"
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/admission" 
              className="bg-accent-yellow text-primary-dark hover:bg-primary hover:text-white px-8 py-3 rounded-full font-extrabold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 border-b-4 border-black/10"
            >
              Enquiry Now 🚀
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden p-3 bg-primary-light text-primary rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-24 left-4 right-4 bg-white rounded-[3rem] shadow-2xl p-8 border-4 border-primary-light z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="font-heading font-bold text-2xl text-primary-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <Link 
                href="tel:+91123456789"
                className="flex items-center justify-center gap-3 text-primary font-bold text-lg"
              >
                <Phone size={20} /> +91 98765 43210
              </Link>
              <Link 
                href="/admission" 
                className="bg-primary text-white py-5 rounded-[2rem] font-bold text-2xl shadow-xl active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Start Admission
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
