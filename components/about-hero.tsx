import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Award, Target } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance leading-tight">
                Tentang <span className="text-primary">WebPerdana</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
                Kami adalah software house terpercaya yang berkomitmen
                menghadirkan solusi digital inovatif untuk membantu bisnis
                Indonesia berkembang di era digital dengan teknologi terdepan
                dan layanan profesional.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tim Expert</h3>
                  <p className="text-sm text-muted-foreground">20+ Developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Berpengalaman
                  </h3>
                  <p className="text-sm text-muted-foreground">5+ Tahun</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Fokus Kualitas
                  </h3>
                  <p className="text-sm text-muted-foreground">100% Kepuasan</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              >
                <Link href="/kontak">
                  Bergabung dengan Kami
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/portofolio">Lihat Karya Kami</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/modern-software-development-team-working-on-laptop.jpg"
                alt="Tim WebPerdana sedang bekerja mengembangkan solusi digital"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
