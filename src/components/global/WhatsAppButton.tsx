"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi,%20I%20enquired%20about%20admission%20for%20my%20child"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
      <MessageCircle size={28} className="relative z-10" fill="currentColor" />
    </a>
  );
}
