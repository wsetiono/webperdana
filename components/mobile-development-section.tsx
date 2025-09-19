import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Tablet, Zap, Bell, Shield, Users } from "lucide-react";

const mobileServices = [
  {
    icon: Smartphone,
    title: "Native Mobile App",
    description:
      "Aplikasi mobile native untuk iOS dan Android dengan performa optimal dan akses penuh ke fitur device.",
    features: [
      "Native Performance",
      "Device Integration",
      "App Store Ready",
      "Offline Capability",
    ],
    technologies: ["Swift", "Kotlin", "Objective-C", "Java"],
  },
  {
    icon: Tablet,
    title: "Cross-Platform App",
    description:
      "Satu kode untuk multiple platform dengan efisiensi development dan maintenance yang tinggi.",
    features: [
      "Code Reusability",
      "Faster Development",
      "Cost Effective",
      "Consistent UI/UX",
    ],
    technologies: ["React Native", "Flutter", "Xamarin", "Ionic"],
  },
  {
    icon: Zap,
    title: "Progressive Web App",
    description:
      "Aplikasi web yang berfungsi seperti aplikasi mobile dengan fitur offline dan push notification.",
    features: [
      "Offline Access",
      "Push Notifications",
      "App-like Experience",
      "No App Store Required",
    ],
    technologies: ["PWA", "Service Workers", "Web App Manifest", "IndexedDB"],
  },
  {
    icon: Users,
    title: "Enterprise Mobile App",
    description:
      "Solusi aplikasi mobile untuk kebutuhan enterprise dengan keamanan tinggi dan integrasi sistem.",
    features: [
      "Enterprise Security",
      "System Integration",
      "User Management",
      "Analytics Dashboard",
    ],
    technologies: [
      "Custom Framework",
      "Enterprise APIs",
      "Cloud Integration",
      "Security Protocols",
    ],
  },
];

const mobileFeatures = [
  {
    icon: Shield,
    title: "Keamanan Tinggi",
    description:
      "Enkripsi data, secure authentication, dan compliance dengan standar keamanan mobile",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Sistem notifikasi real-time untuk engagement dan retention user yang optimal",
  },
  {
    icon: Zap,
    title: "Performa Cepat",
    description:
      "Optimasi kode dan resource untuk loading time minimal dan battery efficiency",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "Interface intuitif dengan navigation pattern yang familiar untuk user mobile",
  },
];

export default function MobileDevelopmentSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            <span className="text-primary">Mobile Development</span> Terdepan
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Kembangkan aplikasi mobile yang powerful dan user-friendly untuk iOS
            dan Android. Dari konsep hingga publikasi di App Store dan Google
            Play Store.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mobileServices.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-background"
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
        <div className="bg-background rounded-2xl p-8 border border-border">
          <h3 className="font-heading font-bold text-2xl text-center mb-8">
            Keunggulan Mobile App Development Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileFeatures.map((feature, index) => (
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
