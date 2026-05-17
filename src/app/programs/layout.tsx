import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preschool Programs in Kolhapur | WOW Saplings",
  description: "Explore Playgroup, Nursery, Jr KG, Sr KG, Phonics & Abacus at WOW Saplings. Age-appropriate learning with certified teachers in Kolhapur.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
