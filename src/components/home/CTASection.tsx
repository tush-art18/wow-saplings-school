"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">

      <div className="container mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-accent-yellow to-[#FFB74D] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-center shadow-2xl relative overflow-hidden border-4 md:border-8 border-white sticker-shadow"
        >
          {/* Parallax Sticker Top-Right */}
          <motion.div
            whileInView={{ x: 0, rotate: 0, opacity: 0.6 }}
            initial={{ x: 40, rotate: 20, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute -top-10 -right-10 w-48 h-48 md:w-80 md:h-80 opacity-60 pointer-events-none"
          >
            <Image src="/sticker-sun.png" alt="" role="presentation" width={320} height={320} className="w-full h-full object-contain" />
          </motion.div>

          {/* Parallax Sticker Bottom-Left */}
          <motion.div
            whileInView={{ x: 0, rotate: -12, opacity: 0.5 }}
            initial={{ x: -40, rotate: -30, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 pointer-events-none"
          >
            <Image src="/sticker-blocks.png" alt="" role="presentation" width={256} height={256} className="w-full h-full object-contain" />
          </motion.div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
              className="font-heading font-black text-4xl md:text-8xl text-[#5D4037] mb-8 leading-[1.1] md:leading-[0.9]"
            >
              Start Your <br />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-white drop-shadow-xl block mt-2"
              >WOW Journey!</motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-lg md:text-2xl text-[#5D4037] font-bold mb-10 md:mb-14 opacity-80 underline decoration-white decoration-2 underline-offset-8"
            >
              Admissions are open for 2026-27.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.95 }}>
                <Link href="/admission" className="bg-primary text-white px-10 md:px-14 py-4 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-xl sticker-shadow border-2 md:border-4 border-white block text-center transition-colors hover:bg-primary-dark">
                  Enquiry Today 🚀
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-primary px-10 md:px-14 py-4 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-xl sticker-shadow border-2 md:border-4 border-primary/20 block text-center">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
