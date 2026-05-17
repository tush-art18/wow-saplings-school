import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | WOW Saplings Kolhapur",
  description: "Browse our beautiful campus, happy students, and engaging classroom activities at WOW Saplings.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
