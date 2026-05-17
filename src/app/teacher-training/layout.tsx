import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NPTT Teacher Training Course Kolhapur | WOW Saplings TTC",
  description: "Shivaji University-affiliated NPTT course in Kolhapur. 1 year, 100% placement help, 200+ alumni. Apply for next batch.",
};

export default function TeacherTrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
