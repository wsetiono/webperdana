import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, Globe, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2019",
    title: "Berdirinya WebPerdana",
    description:
      "Dimulai dengan visi menghadirkan solusi digital berkualitas untuk UMKM Indonesia.",
    icon: Lightbulb,
  },
  {
    year: "2020",
    title: "Ekspansi Layanan",
    description:
      "Menambah layanan mobile development dan e-commerce solutions untuk melayani kebutuhan yang beragam.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Jangkauan Nasional",
    description:
      "Melayani klien dari berbagai kota di Indonesia dengan tim yang terus berkembang.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "Pencapaian Terbaik",
    description:
      "Meraih berbagai penghargaan dan kepercayaan dari 100+ klien dengan 150+ proyek sukses.",
    icon: Trophy,
  },
];

export default function CompanyStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
              Perjalanan <span className="text-primary">WebPerdana</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Dari startup kecil hingga menjadi software house terpercaya, ini
              adalah cerita perjalanan kami dalam mengembangkan ekosistem
              digital Indonesia.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-2xl">Visi Kami</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi software house terdepan di Indonesia yang menghadirkan
                solusi digital inovatif dan berkualitas tinggi, membantu bisnis
                lokal bersaing di pasar global dengan teknologi terdepan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami percaya bahwa setiap bisnis, dari UMKM hingga enterprise,
                berhak mendapatkan akses ke teknologi terbaik untuk
                mengembangkan potensi mereka di era digital.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading font-bold text-2xl">Misi Kami</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Mengembangkan solusi digital yang user-friendly dan sesuai
                    kebutuhan bisnis klien
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Memberikan layanan konsultasi dan support yang responsif dan
                    profesional
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Terus berinovasi dengan teknologi terbaru untuk memberikan
                    nilai terbaik
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Membangun ekosistem digital Indonesia yang lebih maju dan
                    kompetitif
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="font-heading font-bold text-2xl text-center">
              Milestone Perjalanan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <milestone.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xl text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
