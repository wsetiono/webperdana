import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <Award className="w-4 h-4 mr-2" />
              150+ Proyek Sukses
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance leading-tight">
              <span className="text-primary">Portofolio</span> Karya Terbaik
              Kami
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Jelajahi berbagai proyek digital yang telah kami kerjakan untuk
              klien dari berbagai industri. Setiap proyek adalah bukti komitmen
              kami dalam menghadirkan solusi digital berkualitas tinggi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8"
            >
              <Link href="/kontak">
                Diskusi Proyek Anda
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              <Link href="/layanan">Lihat Layanan</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="text-center">
              <div className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                150+
              </div>
              <div className="text-sm text-muted-foreground">
                Proyek Selesai
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                100+
              </div>
              <div className="text-sm text-muted-foreground">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                15+
              </div>
              <div className="text-sm text-muted-foreground">Industri</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                5+
              </div>
              <div className="text-sm text-muted-foreground">Tahun</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
