import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WOW Saplings — 10 Years of Excellence in Kolhapur",
  description: "Learn about our mission, faculty, and decade-long journey as Kolhapur's most trusted preschool.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
