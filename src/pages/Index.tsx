import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesGallery from "@/components/PackagesGallery";
import CTAContact from "@/components/CTAContact";
import FloatingElements from "@/components/FloatingElements";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <HeroSection />
      <ServicesSection />
      <PackagesGallery />
      <CTAContact />
      <FloatingElements />
    </div>
  );
}