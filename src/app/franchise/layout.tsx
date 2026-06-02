import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Preschool Franchise | WOW Saplings Kolhapur",
  description: "Join Kolhapur's fastest-growing preschool chain. Start your own profitable WOW Saplings preschool franchise with a zero royalty model and complete setup support.",
};

export default function FranchiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
