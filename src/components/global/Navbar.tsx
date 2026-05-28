"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 24,
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring" as const, 
      stiffness: 300, 
      damping: 20 
    } 
  }
};

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

  const isDarkPage = pathname === "/teacher-training" || pathname === "/events";
  const isSolid = scrolled || isDarkPage;

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 py-4 ${isSolid ? "md:py-2" : "md:py-6"
        }`}
    >
      <div className={`container mx-auto transition-all duration-500 ${isSolid
        ? "bg-white/95 backdrop-blur-xl shadow-xl rounded-full border-b-4 border-primary/10 max-w-6xl px-6"
        : "bg-transparent max-w-7xl px-8"
        }`}>
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-1 shadow-md group-hover:rotate-6 transition-transform overflow-hidden">
              <Image
                src="/sapling-logo-0003.png"
                alt="Logo"
                width={48}
                height={48}
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
                  className={`font-bold transition-all relative pb-2 group ${pathname === link.href ? "text-primary font-extrabold" : "text-primary-dark/80 hover:text-primary"
                    }`}
                  style={!scrolled && !isDarkPage ? { textShadow: "0 2px 8px rgba(255, 255, 255, 0.95)" } : {}}
                >
                  {link.name}
                  {/* Underline slides in from left on hover (CSS Transition) */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                  
                  {/* Active page: green dot indicator below link */}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#2D6A4F] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* CTA Button: scale 1.05 + shadow on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/admission"
                className="bg-accent-yellow text-primary-dark hover:bg-primary hover:text-white px-8 py-3 rounded-full font-extrabold shadow-md hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 border-b-4 border-black/10 inline-block"
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
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="xl:hidden absolute top-24 left-4 right-4 bg-white rounded-[3rem] shadow-2xl p-8 border-4 border-primary-light z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                >
                  <Link
                    href={link.href}
                    className={`font-heading font-bold text-2xl relative inline-block py-1 ${pathname === link.href ? "text-primary font-extrabold" : "text-primary-dark"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2D6A4F] rounded-full" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <motion.div variants={itemVariants}>
                <Link
                  href="tel:+918999640602"
                  className="flex items-center justify-center gap-3 text-primary font-bold text-lg"
                >
                  <Phone size={20} /> +91 89996 40602
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/admission"
                  className="bg-primary text-white py-5 rounded-[2rem] font-bold text-2xl shadow-xl block hover:bg-primary-dark transition-colors"
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
