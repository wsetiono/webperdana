import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    category: "E-Commerce",
    description:
      "Platform e-commerce modern untuk brand fashion lokal dengan fitur lengkap dan payment gateway terintegrasi.",
    image: "/modern-ecommerce-fashion-website-interface.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Restaurant Management App",
    category: "Mobile App",
    description:
      "Aplikasi mobile untuk manajemen restoran dengan fitur POS, inventory, dan customer management.",
    image: "/restaurant-management-mobile-app-interface.jpg",
    tags: ["React Native", "Firebase", "Payment Gateway"],
    link: "#",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Website",
    description:
      "Website corporate profesional dengan CMS custom dan optimasi SEO untuk meningkatkan online presence.",
    image: "/corporate-website-design.png",
    tags: ["Next.js", "Tailwind CSS", "CMS", "SEO"],
    link: "#",
  },
  {
    id: 4,
    title: "Learning Management System",
    category: "Web App",
    description:
      "Platform pembelajaran online dengan fitur video streaming, quiz, dan progress tracking untuk institusi pendidikan.",
    image: "/lms-dashboard.png",
    tags: ["Vue.js", "Laravel", "MySQL", "Video Streaming"],
    link: "#",
  },
  {
    id: 5,
    title: "Healthcare Mobile App",
    category: "Mobile App",
    description:
      "Aplikasi kesehatan untuk booking dokter, konsultasi online, dan manajemen rekam medis pasien.",
    image: "/healthcare-mobile-app-doctor-booking.jpg",
    tags: ["Flutter", "Firebase", "Video Call", "Push Notifications"],
    link: "#",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Website",
    description:
      "Platform properti dengan fitur pencarian advanced, virtual tour, dan sistem CRM untuk agen properti.",
    image: "/real-estate-website.png",
    tags: ["React", "Express.js", "PostgreSQL", "Maps API"],
    link: "#",
  },
];

export default function PortfolioGallery() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            <span className="text-primary">Portofolio</span> Terbaik Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Lihat berbagai proyek sukses yang telah kami kerjakan untuk klien
            dari berbagai industri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={item.link}>
                      <ExternalLink size={16} className="mr-2" />
                      Lihat Detail
                    </Link>
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/portofolio">Lihat Semua Portofolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
