"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 800ms max school logo reveal before content per specs
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-[-20px] inset-y-[-20px] border-4 border-dashed border-primary/20 rounded-full"
              />
              <motion.img 
                src="/sapling-logo-0003.jpg" 
                alt="WOW Saplings Logo" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="flex flex-col items-center">
               <motion.h2 
                 initial={{ scale: 0.8 }}
                 animate={{ scale: 1 }}
                 className="font-heading font-black text-4xl md:text-5xl text-primary-dark mb-2"
               >
                 WOW <span className="text-accent-pink">Saplings</span>
               </motion.h2>
               <motion.div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      className="w-3 h-3 rounded-full bg-accent-yellow"
                    />
                  ))}
               </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
