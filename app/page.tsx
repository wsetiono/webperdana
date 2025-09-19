import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import HeroSection from "@/components/hero-section";
import PortfolioGallery from "@/components/portfolio-gallery";
import ServicesOverview from "@/components/services-overview";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <PortfolioGallery />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
