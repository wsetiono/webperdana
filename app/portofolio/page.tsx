import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import PortfolioHero from "@/components/portfolio-hero";
import PortfolioFilter from "@/components/portfolio-filter";
import PortfolioGrid from "@/components/portfolio-grid";
import ClientLogos from "@/components/client-logos";

export const metadata: Metadata = {
  title:
    "Portofolio WebPerdana - Hasil Karya Website & Aplikasi Mobile Terbaik",
  description:
    "Lihat portofolio lengkap WebPerdana: website, aplikasi mobile, e-commerce, dan solusi digital untuk berbagai industri. Case study dan hasil kerja profesional.",
  keywords:
    "portofolio webperdana, hasil karya website, aplikasi mobile, case study, project showcase, web development portfolio",
  alternates: {
    canonical: "https://webperdana.com/portofolio",
  },
  openGraph: {
    title: "Portofolio WebPerdana - Showcase Proyek Digital Terbaik",
    description:
      "Jelajahi berbagai proyek sukses yang telah dikerjakan WebPerdana untuk klien dari berbagai industri.",
    url: "https://webperdana.com/portofolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      {/* <ClientLogos /> */}
      <PortfolioFilter />
      <PortfolioGrid />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
