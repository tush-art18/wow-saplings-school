"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 py-4 ${scrolled ? "md:py-2" : "md:py-6"
        }`}
    >
      <div className={`container mx-auto transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-xl rounded-full border-b-4 border-primary/10 max-w-6xl px-6"
        : "bg-transparent max-w-7xl px-8"
        }`}>
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-1 shadow-md group-hover:rotate-6 transition-transform overflow-hidden">
              <img
                src="/sapling-logo-0003.png"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl md:text-2xl text-primary-dark tracking-tight leading-none">
                WOW <span className="text-accent-pink">Saplings</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">School</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className={`font-bold transition-colors hover:scale-110 active:scale-95 ${pathname === link.href ? "text-accent-yellow" : "text-primary-dark/80 hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/admission"
                className="bg-accent-yellow text-primary-dark hover:bg-primary hover:text-white px-8 py-3 rounded-full font-extrabold shadow-lg hover:shadow-primary/20 transition-all border-b-4 border-black/10 inline-block"
              >
                Enquiry Now 🚀
              </Link>
            </motion.div>
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
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="xl:hidden absolute top-24 left-4 right-4 bg-white rounded-[3rem] shadow-2xl p-8 border-4 border-primary-light z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`font-heading font-bold text-2xl ${pathname === link.href ? "text-accent-yellow" : "text-primary-dark"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link
                  href="tel:+918999640602"
                  className="flex items-center justify-center gap-3 text-primary font-bold text-lg"
                >
                  <Phone size={20} /> +91 89996 40602
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/admission"
                  className="bg-primary text-white py-5 rounded-[2rem] font-bold text-2xl shadow-xl block"
                  onClick={() => setIsOpen(false)}
                >
                  Start Admission
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
