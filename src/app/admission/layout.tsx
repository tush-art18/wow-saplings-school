import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Enroll at WOW Saplings Kolhapur",
  description: "Start your child's educational journey with us. Find admission forms, fee structures, and eligibility criteria for WOW Saplings.",
};

export default function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
