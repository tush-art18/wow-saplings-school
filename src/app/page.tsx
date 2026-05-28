import HeroSection from "@/components/home/HeroSection";
import ProgramsStrip from "@/components/home/ProgramsStrip";
import ProgramsHighlight from "@/components/home/ProgramsHighlight";
import WhyChoose from "@/components/home/WhyChoose";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsStrip from "@/components/home/TestimonialsStrip";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProgramsStrip />
      <ProgramsHighlight />
      <WhyChoose />
      <GalleryPreview />
      <TestimonialsStrip />
      <CTASection />
    </div>
  );
}
