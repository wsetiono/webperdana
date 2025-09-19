import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Coffee,
  Gamepad2,
  GraduationCap,
  Heart,
  Users,
  Zap,
} from "lucide-react";

const cultureItems = [
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Kami percaya produktivitas terbaik datang dari keseimbangan hidup yang sehat dan lingkungan kerja yang supportif.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Budget khusus untuk training, sertifikasi, dan conference untuk mengembangkan skill tim secara berkelanjutan.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Budaya kerja yang terbuka, saling mendukung, dan menghargai kontribusi setiap anggota tim.",
  },
  {
    icon: Zap,
    title: "Innovation Time",
    description:
      "20% waktu kerja dialokasikan untuk eksplorasi teknologi baru dan pengembangan ide-ide inovatif.",
  },
  {
    icon: Gamepad2,
    title: "Fun Activities",
    description:
      "Team building, game sessions, dan aktivitas seru lainnya untuk mempererat hubungan antar tim.",
  },
  {
    icon: Heart,
    title: "Care for Team",
    description:
      "Benefit kesehatan, flexible working hours, dan perhatian terhadap kesejahteraan setiap anggota tim.",
  },
];

export default function CultureSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            <span className="text-primary">Budaya</span> Kerja Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Lingkungan kerja yang positif, supportif, dan mendorong inovasi
            adalah kunci kesuksesan tim kami dalam menghasilkan karya terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cultureItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-background"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career CTA */}
        <div className="text-center p-8 bg-background rounded-2xl border border-border">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Bergabung dengan Tim Kami
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kami selalu mencari talenta terbaik untuk bergabung dengan tim
            WebPerdana. Jika Anda passionate tentang teknologi dan ingin
            berkontribusi dalam mengembangkan ekosistem digital Indonesia, mari
            bergabung dengan kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/kontak">Kirim CV Anda</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portofolio">Lihat Proyek Kami</Link>
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Punya pertanyaan tentang WebPerdana?{" "}
            <Link
              href="/kontak"
              className="text-primary hover:underline font-medium"
            >
              Hubungi kami
            </Link>{" "}
            atau{" "}
            <a
              href="https://wa.me/6281234567890?text=Halo%20WebPerdana,%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20perusahaan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              chat via WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
