"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 Welcome to WOW Saplings! I'm here to help you.", sender: "bot" }
  ]);

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[400px]"
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <img src="/sapling-logo-0001.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                 <span className="font-bold">WOW Support</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
               {messages.map((m, i) => (
                 <div key={i} className={`max-w-[85%] rounded-2xl p-3 text-sm ${m.sender === 'bot' ? 'bg-white text-gray-800 border border-gray-100 self-start rounded-tl-sm' : 'bg-primary text-white self-end rounded-tr-sm'}`}>
                   {m.text}
                 </div>
               ))}
               <div className="flex gap-2 overflow-x-auto pb-2 mt-2 hide-scrollbar">
                  {["Programs", "Fees", "Timings"].map((qr) => (
                    <button key={qr} className="whitespace-nowrap border border-primary text-primary px-3 py-1 rounded-full text-xs hover:bg-primary-light transition-colors font-semibold">
                      {qr}
                    </button>
                  ))}
               </div>
            </div>
            
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input type="text" placeholder="Type a message..." className="flex-1 outline-none text-sm bg-gray-50 rounded-full px-4 py-2" />
              <button className="bg-primary text-white p-2 rounded-full flex items-center justify-center hover:bg-primary-dark">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform relative group"
      >
        {!isOpen && <span className="absolute w-full h-full rounded-full bg-primary opacity-30 animate-pulse"></span>}
        {isOpen ? <X size={24} className="relative z-10" /> : <MessageSquare size={24} className="relative z-10" />}
      </button>
    </div>
  );
}
