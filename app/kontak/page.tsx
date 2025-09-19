import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import ContactHero from "@/components/contact-hero";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import ContactMethods from "@/components/contact-methods";
import FAQSection from "@/components/faq-section";

export const metadata: Metadata = {
  title: "Kontak WebPerdana - Konsultasi Gratis Website & Aplikasi Mobile",
  description:
    "Hubungi WebPerdana untuk konsultasi gratis tentang kebutuhan website dan aplikasi mobile bisnis Anda. Tim expert siap membantu 24/7 via WhatsApp, email, atau telepon.",
  keywords:
    "kontak webperdana, konsultasi gratis, hubungi webperdana, jasa website, aplikasi mobile, software house jakarta",
  alternates: {
    canonical: "https://webperdana.com/kontak",
  },
  openGraph: {
    title: "Kontak WebPerdana - Konsultasi Gratis Solusi Digital",
    description:
      "Dapatkan konsultasi gratis untuk kebutuhan digital bisnis Anda. Tim expert WebPerdana siap membantu via berbagai channel komunikasi.",
    url: "https://webperdana.com/kontak",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactMethods />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <FAQSection />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
