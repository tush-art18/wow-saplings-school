"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/api";

interface Message {
  text: string;
  sender: "bot" | "user";
}

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! 👋 Welcome to WOW Saplings! I'm here to help you.", sender: "bot" }
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [collectingStep, setCollectingStep] = useState<"none" | "name" | "phone">("none");
  const [tempLead, setTempLead] = useState({ name: "", phone: "" });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const addBotMessage = (text: string) => {
    setMessages((prev) => [...prev, { text, sender: "bot" }]);
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    // Add user message
    setMessages((prev) => [...prev, { text, sender: "user" }]);
    if (!textToSend) setInputText("");

    // State machine for lead capturing
    if (collectingStep === "name") {
      setTempLead((prev) => ({ ...prev, name: text }));
      setCollectingStep("phone");
      setTimeout(() => {
        addBotMessage(`Thanks ${text}! Now, please share your Phone Number so we can reach you.`);
      }, 500);
      return;
    }

    if (collectingStep === "phone") {
      setSubmitting(true);
      const name = tempLead.name || "Chatbot Lead";
      const payload = {
        parent_name: name,
        child_name: "Not specified",
        phone: text,
        email: "",
        program_interest: "Other",
        message: `Captured via homepage AI chatbot widget. WhatsApp/Phone: ${text}`,
        source: "chatbot" as const
      };

      const res = await submitLead(payload);
      setSubmitting(false);
      setCollectingStep("none");
      setLeadCaptured(true);

      if (res.success) {
        setTimeout(() => {
          addBotMessage(`Perfect! Your enquiry is registered. Our admissions officer will call you shortly on ${text}! 🎉`);
        }, 500);
      } else {
        setTimeout(() => {
          addBotMessage("Got it! We have recorded your interest, but had an issue matching the system. We will follow up!");
        }, 500);
      }
      return;
    }

    // Default automated responses
    const lower = text.toLowerCase();
    setTimeout(() => {
      if (lower.includes("program") || lower.includes("class") || lower.includes("admission")) {
        addBotMessage("We offer high-quality Playgroup (2-3 yrs), Nursery (3-4 yrs), Junior KG (4-5 yrs), and Senior KG (5-6 yrs) classes. We also provide safe daycare and professional baby-sitting!");
      } else if (lower.includes("fee") || lower.includes("cost") || lower.includes("price")) {
        addBotMessage("Our fee structure is premium yet extremely affordable. To receive a detailed fee sheet, let's schedule a call! What is your name?");
        setCollectingStep("name");
      } else if (lower.includes("time") || lower.includes("hour") || lower.includes("schedule")) {
        addBotMessage("Our school timings are 9:00 AM to 12:00 PM for preschool. Our daycare center is open from 9:00 AM up to 6:30 PM.");
      } else if (lower.includes("enquire") || lower.includes("join") || lower.includes("call") || lower.includes("contact")) {
        addBotMessage("We would love to help you! May I know your name first?");
        setCollectingStep("name");
      } else {
        addBotMessage("Thank you for your message! To help you best, would you like to know about our Programs, Fees, or Timings? Or type 'Enquire' to have our team contact you.");
      }
    }, 600);
  };

  const handleQuickReply = (qr: string) => {
    handleSend(qr);
  };

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
                 <div>
                   <span className="font-bold block text-sm">WOW Saplings</span>
                   <span className="text-[10px] text-white/80 block">Local Assistant</span>
                 </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
               {messages.map((m, i) => (
                 <div key={i} className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${m.sender === 'bot' ? 'bg-white text-gray-800 border border-gray-100 self-start rounded-tl-sm' : 'bg-primary text-white self-end rounded-tr-sm'}`}>
                   {m.text}
                 </div>
               ))}
               {submitting && (
                 <div className="self-start bg-white border border-gray-100 rounded-2xl px-4 py-2 text-xs text-gray-500 flex items-center gap-2 rounded-tl-sm">
                   <Loader2 size={12} className="animate-spin" /> Saving details...
                 </div>
               )}
               <div ref={chatEndRef} />
               
               {!leadCaptured && collectingStep === "none" && (
                 <div className="flex gap-2 overflow-x-auto pb-2 mt-2 shrink-0 scrollbar-none">
                    {["Programs", "Fees", "Timings", "Enquire Now"].map((qr) => (
                      <button 
                        key={qr} 
                        onClick={() => handleQuickReply(qr)}
                        className="whitespace-nowrap border border-primary text-primary px-3 py-1.5 rounded-full text-xs hover:bg-primary/5 transition-colors font-bold shrink-0 bg-white"
                      >
                        {qr}
                      </button>
                    ))}
                 </div>
               )}
            </div>
            
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center"
            >
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  collectingStep === "name" 
                    ? "Type your Name..." 
                    : collectingStep === "phone" 
                      ? "Type your Phone/WhatsApp..." 
                      : "Ask about fees, programs..."
                } 
                className="flex-1 outline-none text-sm bg-gray-50 rounded-full px-4 py-2.5 focus:bg-white focus:ring-1 focus:ring-primary border border-transparent transition-all" 
              />
              <button 
                type="submit" 
                className="bg-primary text-white p-2.5 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
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

