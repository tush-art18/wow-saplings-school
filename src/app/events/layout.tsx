import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Events & Calendar | WOW Saplings Kolhapur",
  description: "Stay updated with the latest events, sports meets, and exhibitions at WOW Saplings preschool.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
