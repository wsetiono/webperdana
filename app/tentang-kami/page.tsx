import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import AboutHero from "@/components/about-hero";
import CompanyStory from "@/components/company-story";
import TeamSection from "@/components/team-section";
import ValuesSection from "@/components/values-section";
import CultureSection from "@/components/culture-section";

export const metadata: Metadata = {
  title: "Tentang WebPerdana - Software House Terpercaya Indonesia",
  description:
    "Kenali lebih dekat WebPerdana, software house terpercaya dengan tim profesional berpengalaman. Visi, misi, dan nilai-nilai yang mendorong inovasi digital Indonesia.",
  keywords:
    "tentang webperdana, software house indonesia, tim developer, visi misi, company profile, teknologi indonesia",
  alternates: {
    canonical: "https://webperdana.com/tentang-kami",
  },
  openGraph: {
    title: "Tentang WebPerdana - Tim Profesional Software House Indonesia",
    description:
      "Software house terpercaya dengan tim berpengalaman, berkomitmen menghadirkan solusi digital inovatif untuk bisnis Indonesia.",
    url: "https://webperdana.com/tentang-kami",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <ValuesSection />
      <TeamSection />
      <CultureSection />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
