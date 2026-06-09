import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/global/LoadingScreen";
import CustomCursor from "@/components/global/CustomCursor";
import LayoutWrapper from "@/components/dashboard/LayoutWrapper";

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
    url: "https://wowsaplingsschool.in",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "name": "WOW Saplings Preschool & Teacher Training",
              "image": "https://wowsaplingsschool.in/sapling-logo-0003.png",
              "@id": "https://wowsaplingsschool.in/#school",
              "url": "https://wowsaplingsschool.in",
              "telephone": "+918999640602",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Road, Layout no.2, Kaman, Baba Jaragnagar",
                "addressLocality": "Kolhapur",
                "addressRegion": "Maharashtra",
                "postalCode": "416008",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 16.6684897,
                "longitude": 74.2182726
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "13:00"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        <CustomCursor />
        <LoadingScreen />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
