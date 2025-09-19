import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Zap, Shield, Search, Smartphone, Code } from "lucide-react";

const webServices = [
  {
    icon: Globe,
    title: "Corporate Website",
    description:
      "Website perusahaan profesional dengan desain modern dan fitur lengkap untuk meningkatkan kredibilitas bisnis.",
    features: [
      "Responsive Design",
      "CMS Integration",
      "SEO Optimized",
      "Fast Loading",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "WordPress"],
  },
  {
    icon: Search,
    title: "E-Commerce Platform",
    description:
      "Platform jual beli online dengan sistem pembayaran terintegrasi dan manajemen inventory yang canggih.",
    features: [
      "Payment Gateway",
      "Inventory Management",
      "Admin Dashboard",
      "Multi-vendor Support",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solution"],
  },
  {
    icon: Code,
    title: "Web Application",
    description:
      "Aplikasi web custom sesuai kebutuhan bisnis dengan fitur kompleks dan performa tinggi.",
    features: [
      "Custom Features",
      "Database Integration",
      "API Development",
      "Cloud Hosting",
    ],
    technologies: ["React", "Vue.js", "Laravel", "Node.js"],
  },
  {
    icon: Zap,
    title: "Landing Page",
    description:
      "Halaman landing yang dioptimalkan untuk konversi dengan desain menarik dan loading super cepat.",
    features: [
      "High Conversion",
      "A/B Testing",
      "Analytics Integration",
      "Mobile Optimized",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Optimization Tools"],
  },
];

const webFeatures = [
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description:
      "SSL certificate, firewall protection, dan security monitoring 24/7",
  },
  {
    icon: Zap,
    title: "Performa Optimal",
    description:
      "Loading speed di bawah 3 detik dengan optimasi gambar dan caching",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Tampilan sempurna di semua device dari smartphone hingga desktop",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Struktur kode dan konten yang dioptimalkan untuk mesin pencari",
  },
];

export default function WebDevelopmentSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            <span className="text-primary">Web Development</span> Profesional
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Kami mengembangkan website yang tidak hanya terlihat menarik, tetapi
            juga memiliki performa tinggi, keamanan terjamin, dan dioptimalkan
            untuk mesin pencari.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {webServices.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-3">
                    Fitur Utama:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-3">
                    Teknologi:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-2xl text-center mb-8">
            Mengapa Memilih Web Development Kami?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
