import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Zap, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description:
      "Kami memiliki passion yang tinggi dalam menghasilkan karya terbaik. Setiap proyek dikerjakan dengan dedikasi penuh dan perhatian terhadap detail.",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description:
      "Integritas adalah fondasi bisnis kami. Kami berkomitmen untuk selalu jujur, transparan, dan dapat dipercaya dalam setiap interaksi dengan klien.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description:
      "Kami selalu mengikuti perkembangan teknologi terbaru dan menerapkan inovasi dalam setiap solusi yang kami berikan untuk klien.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Kami percaya bahwa kolaborasi yang baik dengan klien dan tim internal adalah kunci kesuksesan setiap proyek yang kami kerjakan.",
  },
  {
    icon: Target,
    title: "Result Oriented",
    description:
      "Fokus kami adalah memberikan hasil yang terukur dan memberikan dampak positif bagi pertumbuhan bisnis klien di era digital.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Tim kami terus belajar dan mengembangkan skill untuk memastikan kami selalu memberikan solusi terdepan dan berkualitas tinggi.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            <span className="text-primary">Nilai-Nilai</span> yang Kami Junjung
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Nilai-nilai fundamental yang menjadi panduan dalam setiap keputusan
            dan tindakan kami untuk memberikan layanan terbaik kepada klien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-background"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
