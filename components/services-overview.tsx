import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
  Search,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Website responsif dan modern dengan teknologi terdepan untuk meningkatkan online presence bisnis Anda.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan user experience yang optimal.",
    features: [
      "Native & Cross-platform",
      "UI/UX Design",
      "App Store Ready",
      "Push Notifications",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Platform e-commerce lengkap dengan sistem pembayaran, inventory management, dan analytics.",
    features: [
      "Payment Gateway",
      "Inventory System",
      "Admin Dashboard",
      "Mobile Friendly",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang menarik dan user experience yang intuitif untuk meningkatkan konversi.",
    features: ["User Research", "Wireframing", "Prototyping", "Design System"],
  },
  {
    icon: Search,
    title: "Digital Marketing",
    description:
      "Strategi digital marketing komprehensif untuk meningkatkan visibility dan engagement bisnis Anda.",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Layanan maintenance dan technical support 24/7 untuk memastikan sistem Anda berjalan optimal.",
    features: [
      "24/7 Support",
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            Layanan <span className="text-primary">Profesional</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan digital yang komprehensif untuk
            membantu bisnis Anda berkembang di era digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <div>
                  <CardTitle className="font-heading text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/layanan">Lihat Semua Layanan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
