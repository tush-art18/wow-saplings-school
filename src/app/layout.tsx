import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/global/LenisProvider";
import WhatsAppButton from "@/components/global/WhatsAppButton";
import ChatBotWidget from "@/components/global/ChatBotWidget";
import LoadingScreen from "@/components/global/LoadingScreen";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WOW Saplings Preschool Kolhapur",
  description: "Chain of Preschool...Where Every Child Blooms. Best preschool in Kolhapur.",
  icons: {
    icon: "/sapling-logo-0003.jpg",
    shortcut: "/sapling-logo-0003.jpg",
    apple: "/sapling-logo-0003.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        <LoadingScreen />
        <LenisProvider>
          <Navbar />
          <main className="flex-1 w-full relative">
            {children}
          </main>
          <Footer />
        </LenisProvider>
        <WhatsAppButton />
        <ChatBotWidget />
      </body>
    </html>
  );
}
