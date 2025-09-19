import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    description: "Cocok untuk bisnis kecil dan startup",
    price: "Mulai 5jt",
    period: "per proyek",
    popular: false,
    features: [
      "Landing Page Responsif",
      "Optimasi SEO Dasar",
      "Contact Form",
      "Google Analytics",
      "SSL Certificate",
      "1 Bulan Support",
      "Hosting 1 Tahun",
    ],
    cta: "Pilih Starter",
    type: "web",
  },
  {
    name: "Professional",
    description: "Untuk bisnis yang berkembang",
    price: "Mulai 15jt",
    period: "per proyek",
    popular: true,
    features: [
      "Website Multi-halaman",
      "CMS Integration",
      "E-commerce Basic",
      "SEO Advanced",
      "Payment Gateway",
      "Admin Dashboard",
      "3 Bulan Support",
      "Hosting 1 Tahun",
    ],
    cta: "Pilih Professional",
    type: "web",
  },
  {
    name: "Enterprise",
    description: "Solusi lengkap untuk perusahaan",
    price: "Custom",
    period: "sesuai kebutuhan",
    popular: false,
    features: [
      "Custom Web Application",
      "Advanced Features",
      "Third-party Integration",
      "Database Complex",
      "API Development",
      "Security Advanced",
      "6 Bulan Support",
      "Dedicated Server",
    ],
    cta: "Konsultasi",
    type: "web",
  },
];

const mobilePricing = [
  {
    name: "Basic Mobile",
    description: "Aplikasi mobile sederhana",
    price: "Mulai 20jt",
    period: "per platform",
    popular: false,
    features: [
      "Single Platform (iOS/Android)",
      "Basic UI/UX Design",
      "Core Features",
      "Push Notifications",
      "App Store Submission",
      "2 Bulan Support",
    ],
    cta: "Pilih Basic",
    type: "mobile",
  },
  {
    name: "Advanced Mobile",
    description: "Aplikasi dengan fitur lengkap",
    price: "Mulai 35jt",
    period: "cross-platform",
    popular: true,
    features: [
      "iOS & Android",
      "Advanced UI/UX",
      "Backend Integration",
      "User Authentication",
      "Payment Integration",
      "Analytics Dashboard",
      "4 Bulan Support",
    ],
    cta: "Pilih Advanced",
    type: "mobile",
  },
  {
    name: "Enterprise Mobile",
    description: "Solusi mobile enterprise",
    price: "Custom",
    period: "sesuai kompleksitas",
    popular: false,
    features: [
      "Native Development",
      "Complex Features",
      "Enterprise Security",
      "System Integration",
      "Custom Backend",
      "Dedicated Support",
      "Maintenance 1 Tahun",
    ],
    cta: "Konsultasi",
    type: "mobile",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            Paket <span className="text-primary">Harga</span> Terjangkau
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda.
            Semua paket sudah termasuk konsultasi gratis dan garansi kepuasan.
          </p>
        </div>

        {/* Web Development Pricing */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-2xl text-center mb-8">
            Web Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105"
                    : "border-border"
                } hover:shadow-xl transition-all duration-300 bg-background`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Terpopuler
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center space-y-4">
                  <div>
                    <CardTitle className="font-heading text-2xl">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {plan.description}
                    </CardDescription>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/90"
                    }`}
                  >
                    <Link href="/kontak">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Development Pricing */}
        <div>
          <h3 className="font-heading font-bold text-2xl text-center mb-8">
            Mobile Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobilePricing.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105"
                    : "border-border"
                } hover:shadow-xl transition-all duration-300 bg-background`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Terpopuler
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center space-y-4">
                  <div>
                    <CardTitle className="font-heading text-2xl">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {plan.description}
                    </CardDescription>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/90"
                    }`}
                  >
                    <Link href="/kontak">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-8 bg-background rounded-2xl border border-border">
          <h3 className="font-heading font-bold text-xl mb-4">
            Butuh Solusi Custom?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Setiap bisnis memiliki kebutuhan yang unik. Konsultasikan kebutuhan
            spesifik Anda dan dapatkan penawaran yang disesuaikan dengan budget
            dan requirements.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/kontak">Konsultasi Custom Solution</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
