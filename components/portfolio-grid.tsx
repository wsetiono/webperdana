"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";
import Link from "next/link";

const portfolioProjects = [
  {
    id: 1,
    title: "FashionHub E-Commerce Platform",
    category: "ecommerce",
    client: "Fashion Boutique Indonesia",
    year: "2024",
    duration: "3 bulan",
    team: "5 orang",
    description:
      "Platform e-commerce lengkap untuk brand fashion lokal dengan fitur multi-vendor, payment gateway terintegrasi, dan sistem inventory management yang canggih.",
    image: "/modern-ecommerce-fashion-website-interface.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    features: [
      "Multi-vendor Support",
      "Payment Gateway",
      "Inventory Management",
      "Mobile Responsive",
      "SEO Optimized",
    ],
    results: [
      "Peningkatan penjualan online 300%",
      "Waktu loading halaman < 2 detik",
      "Mobile conversion rate 85%",
      "Customer satisfaction 4.8/5",
    ],
    link: "#",
    award: "Best E-Commerce 2024",
  },
  {
    id: 2,
    title: "RestaurantPro Management App",
    category: "mobile",
    client: "Restaurant Chain Group",
    year: "2024",
    duration: "4 bulan",
    team: "6 orang",
    description:
      "Aplikasi mobile comprehensive untuk manajemen restoran dengan fitur POS, inventory tracking, staff management, dan customer loyalty program.",
    image: "/restaurant-management-mobile-app-interface.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
    features: [
      "POS System",
      "Inventory Tracking",
      "Staff Management",
      "Customer Loyalty",
      "Real-time Analytics",
    ],
    results: [
      "Efisiensi operasional meningkat 40%",
      "Pengurangan waste inventory 25%",
      "Customer retention rate 90%",
      "ROI tercapai dalam 6 bulan",
    ],
    link: "#",
    award: "Innovation Award 2024",
  },
  {
    id: 3,
    title: "TechCorp Corporate Website",
    category: "website",
    client: "Technology Corporation",
    year: "2024",
    duration: "2 bulan",
    team: "4 orang",
    description:
      "Website corporate modern dengan CMS custom, multi-language support, dan optimasi SEO untuk meningkatkan online presence perusahaan teknologi.",
    image: "/corporate-website-design.png",
    technologies: ["Next.js", "Tailwind CSS", "Strapi CMS", "Vercel"],
    features: [
      "Multi-language",
      "CMS Integration",
      "SEO Optimized",
      "Fast Loading",
      "Responsive Design",
    ],
    results: [
      "Organic traffic meningkat 250%",
      "Page speed score 98/100",
      "Lead generation naik 180%",
      "Bounce rate turun 45%",
    ],
    link: "#",
    award: null,
  },
  {
    id: 4,
    title: "EduLearn Learning Management System",
    category: "webapp",
    client: "Educational Institute",
    year: "2023",
    duration: "5 bulan",
    team: "8 orang",
    description:
      "Platform pembelajaran online dengan fitur video streaming, interactive quiz, progress tracking, dan virtual classroom untuk institusi pendidikan.",
    image: "/lms-dashboard.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS S3"],
    features: [
      "Video Streaming",
      "Interactive Quiz",
      "Progress Tracking",
      "Virtual Classroom",
      "Certificate System",
    ],
    results: [
      "10,000+ siswa aktif",
      "Completion rate 85%",
      "Student satisfaction 4.7/5",
      "Pengurangan biaya operasional 30%",
    ],
    link: "#",
    award: "Education Tech Award 2023",
  },
  {
    id: 5,
    title: "HealthCare+ Mobile Application",
    category: "mobile",
    client: "Healthcare Provider",
    year: "2023",
    duration: "6 bulan",
    team: "7 orang",
    description:
      "Aplikasi kesehatan untuk booking dokter, telemedicine, manajemen rekam medis, dan reminder obat dengan keamanan data tinggi.",
    image: "/healthcare-mobile-app-doctor-booking.jpg",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "WebRTC"],
    features: [
      "Doctor Booking",
      "Telemedicine",
      "Medical Records",
      "Medicine Reminder",
      "Secure Messaging",
    ],
    results: [
      "50,000+ pengguna aktif",
      "Booking success rate 95%",
      "Consultation satisfaction 4.9/5",
      "Compliance dengan standar HIPAA",
    ],
    link: "#",
    award: "Healthcare Innovation 2023",
  },
  {
    id: 6,
    title: "PropertyHub Real Estate Platform",
    category: "website",
    client: "Real Estate Group",
    year: "2023",
    duration: "4 bulan",
    team: "6 orang",
    description:
      "Platform properti dengan fitur pencarian advanced, virtual tour 360°, sistem CRM untuk agen, dan integrasi dengan maps API.",
    image: "/real-estate-website.png",
    technologies: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Google Maps API",
      "Cloudinary",
    ],
    features: [
      "Advanced Search",
      "Virtual Tour",
      "CRM System",
      "Maps Integration",
      "Agent Dashboard",
    ],
    results: [
      "Property listing meningkat 400%",
      "Lead conversion rate 35%",
      "Agent productivity naik 60%",
      "Customer inquiries naik 300%",
    ],
    link: "#",
    award: null,
  },
];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink size={16} className="mr-2" />
                    Lihat Detail
                  </Button>
                </div>
                {project.award && (
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900">
                    <Award className="w-3 h-3 mr-1" />
                    {project.award}
                  </Badge>
                )}
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground capitalize">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {project.team}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {selectedProject.client}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </Button>
                </div>

                {/* Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  {selectedProject.award && (
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900">
                      <Award className="w-3 h-3 mr-1" />
                      {selectedProject.award}
                    </Badge>
                  )}
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Informasi Proyek</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tahun:</span>
                        <span>{selectedProject.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Durasi:</span>
                        <span>{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tim:</span>
                        <span>{selectedProject.team}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Teknologi</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Fitur Utama</h3>
                    <ul className="space-y-1 text-sm">
                      {selectedProject.features
                        .slice(0, 5)
                        .map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold mb-2">Deskripsi Proyek</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="font-semibold mb-2">Hasil & Dampak</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-muted/30 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/kontak">Diskusi Proyek Serupa</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/layanan">Lihat Layanan Kami</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Menampilkan {filteredProjects.length} dari 150+ proyek
          </p>
          <Button variant="outline" size="lg">
            Muat Lebih Banyak
          </Button>
        </div>
      </div>
    </section>
  );
}
