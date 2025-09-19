import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import ServicesHero from "@/components/services-hero";
import WebDevelopmentSection from "@/components/web-development-section";
import MobileDevelopmentSection from "@/components/mobile-development-section";
import ProcessSection from "@/components/process-section";
import PricingSection from "@/components/pricing-section";

export const metadata: Metadata = {
  title: "Layanan Jasa Pembuatan Website & Aplikasi Mobile - WebPerdana",
  description:
    "Layanan profesional WebPerdana: Web Development, Mobile App Development, E-Commerce, UI/UX Design. Konsultasi gratis untuk solusi digital bisnis Anda.",
  keywords:
    "web development, mobile app development, jasa pembuatan website, aplikasi mobile, e-commerce, ui ux design, webperdana",
  alternates: {
    canonical: "https://webperdana.com/layanan",
  },
  openGraph: {
    title: "Layanan Profesional WebPerdana - Web & Mobile Development",
    description:
      "Solusi digital lengkap untuk bisnis Anda. Web development, mobile app development, dan layanan IT profesional.",
    url: "https://webperdana.com/layanan",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <WebDevelopmentSection />
      <MobileDevelopmentSection />
      <ProcessSection />
      <PricingSection />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
