import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Konsultasi & Analisis",
    description:
      "Diskusi mendalam tentang kebutuhan, target audience, dan goals bisnis Anda untuk memahami requirements dengan detail.",
    duration: "1-2 hari",
  },
  {
    icon: Lightbulb,
    title: "Planning & Design",
    description:
      "Pembuatan wireframe, mockup, dan prototype untuk memvisualisasikan konsep sebelum development dimulai.",
    duration: "3-5 hari",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Proses coding dengan metodologi agile, regular updates, dan quality assurance di setiap tahap development.",
    duration: "2-8 minggu",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description:
      "Comprehensive testing meliputi functionality, performance, security, dan compatibility testing di berbagai device.",
    duration: "3-7 hari",
  },
  {
    icon: Rocket,
    title: "Launch & Deployment",
    description:
      "Deployment ke production server, app store submission, dan monitoring untuk memastikan launch yang sukses.",
    duration: "1-3 hari",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description:
      "Ongoing support, regular updates, security patches, dan technical assistance untuk menjaga performa optimal.",
    duration: "Berkelanjutan",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            Proses <span className="text-primary">Development</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Metodologi development yang terstruktur dan transparan untuk
            memastikan hasil yang sesuai ekspektasi dan timeline yang tepat
            waktu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="text-primary" size={24} />
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-muted rounded-full">
                    <span className="text-xs font-medium text-muted-foreground">
                      Durasi: {step.duration}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Siap Memulai Proyek Digital Anda?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Konsultasikan kebutuhan digital Anda dengan tim expert kami.
            Dapatkan estimasi timeline dan budget yang akurat untuk proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20WebPerdana,%20saya%20tertarik%20untuk%20konsultasi%20tentang%20proyek%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Konsultasi via WhatsApp
            </a>
            <a
              href="mailto:info@webperdana.com?subject=Konsultasi%20Proyek%20Digital"
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
            >
              Email Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
