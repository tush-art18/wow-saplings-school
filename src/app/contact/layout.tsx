import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | WOW Saplings Kolhapur",
  description: "Get in touch with WOW Saplings. Find our address, phone number, and email. We are here to answer all your queries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
