import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance leading-tight">
              Layanan <span className="text-primary">Digital</span> Terlengkap
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Dari konsep hingga implementasi, kami menyediakan solusi digital
              end-to-end yang membantu bisnis Anda berkembang pesat di era
              digital dengan teknologi terdepan dan tim profesional
              berpengalaman.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8"
            >
              <Link href="/kontak">
                Konsultasi Gratis
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              <Link href="/portofolio">Lihat Hasil Kerja</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
