import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/global/WhatsAppButton";
import LoadingScreen from "@/components/global/LoadingScreen";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import CustomCursor from "@/components/global/CustomCursor";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-baloo",
  preload: true,
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "WOW Saplings Preschool & Teacher Training, Kolhapur",
    template: "%s | WOW Saplings Kolhapur",
  },
  description: "WOW Saplings is Kolhapur's premier preschool chain offering Playgroup, Nursery, Jr KG, Sr KG, Abacus, Phonics & certified Teacher Training (NPTT/MTTC) programs aligned with NEP 2020.",
  keywords: [
    "preschool in Kolhapur",
    "best playgroup in Kolhapur",
    "nursery school Kolhapur",
    "teacher training course in Kolhapur",
    "NPTT course Kolhapur",
    "MTTC teacher training",
    "phonics classes in Kolhapur",
    "abacus classes in Kolhapur",
    "kindergarten school Kolhapur",
    "Shivaji University teacher training",
  ],
  icons: {
    icon: "/sapling-logo-0003.png",
    shortcut: "/sapling-logo-0003.png",
    apple: "/sapling-logo-0003.png",
  },
  openGraph: {
    title: "WOW Saplings Preschool & Teacher Training, Kolhapur",
    description: "Kolhapur's most-loved preschool & certified educator training institute. Providing holistic development and child-centric education.",
    url: "https://wowsaplingspreschool.com",
    siteName: "WOW Saplings Preschool",
    images: [
      {
        url: "/sapling-logo-0003.png",
        width: 512,
        height: 512,
        alt: "WOW Saplings Preschool Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WOW Saplings Preschool & Teacher Training, Kolhapur",
    description: "Kolhapur's most-loved preschool & certified educator training institute.",
    images: ["/sapling-logo-0003.png"],
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
        <CustomCursor />
        <LoadingScreen />
          <Navbar />
          <main className="flex-1 w-full relative">
            {children}
          </main>
          <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
