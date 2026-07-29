"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsAppButton from "@/components/global/WhatsAppButton";
import AnnouncementBar from "@/components/global/AnnouncementBar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/dashboard/login";
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    if (isLoginPage) {
      return (
        <div className="min-h-screen bg-[#FDFAF0] text-gray-800 flex items-center justify-center w-full">
          {children}
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-[#FDFAF0] text-gray-800 flex w-full">
        <Sidebar />
        <div className="pl-64 flex-1 flex flex-col">
          <main className="p-8 md:p-10 max-w-7xl mx-auto w-full min-h-screen">
            {children}
          </main>
        </div>
      </div>
    );
  }

  // Public website layout: wrap with public header/footer/widgets
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full relative">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
