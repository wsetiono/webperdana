"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance leading-tight">
              Hubungi <span className="text-primary">WebPerdana</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Siap membantu mewujudkan visi digital bisnis Anda. Tim expert kami
              tersedia 24/7 untuk memberikan konsultasi gratis dan solusi
              terbaik sesuai kebutuhan Anda.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8">
            <div className="flex flex-col items-center space-y-3 p-4 bg-background/50 rounded-lg border border-border">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-green-500" size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Respon Cepat</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 p-4 bg-background/50 rounded-lg border border-border">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Phone className="text-blue-500" size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">Telepon</h3>
                <p className="text-sm text-muted-foreground">Langsung Bicara</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 p-4 bg-background/50 rounded-lg border border-border">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Mail className="text-purple-500" size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">Detail Lengkap</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 p-4 bg-background/50 rounded-lg border border-border">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Clock className="text-orange-500" size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Selalu Siap</p>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8"
              onClick={() => {
                const message = encodeURIComponent(
                  "Halo WebPerdana! Saya tertarik untuk konsultasi tentang kebutuhan digital bisnis saya. Bisakah kita diskusi lebih lanjut?"
                );
                window.open(
                  `https://wa.me/6281234567890?text=${message}`,
                  "_blank"
                );
              }}
            >
              <MessageCircle className="mr-2" size={20} />
              Konsultasi Gratis via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
