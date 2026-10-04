import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/ui/StatsStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import WhyMeSection from "@/components/sections/WhyMeSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TechMarquee from "@/components/ui/TechMarquee";
import FooterSection from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <WorkSection />
      <WhyMeSection />
      <ProcessSection />
      <TestimonialsSection />
      <TechMarquee />
      <FooterSection />
    </>
  );
}
