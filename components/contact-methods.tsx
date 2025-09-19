"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat langsung dengan tim kami untuk konsultasi cepat",
    contact: "+62 812-3456-7890",
    action: "Chat Sekarang",
    color: "green",
    available: "Online 24/7",
    onClick: () => {
      const message = encodeURIComponent(
        "Halo WebPerdana! Saya tertarik untuk konsultasi tentang layanan Anda."
      );
      window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
    },
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Bicara langsung dengan consultant kami",
    contact: "+62 21-1234-5678",
    action: "Telepon",
    color: "blue",
    available: "Senin-Jumat 09:00-18:00",
    onClick: () => {
      window.open("tel:+622112345678", "_self");
    },
  },
  {
    icon: Mail,
    title: "Email",
    description: "Kirim detail requirement proyek Anda",
    contact: "info@webperdana.com",
    action: "Kirim Email",
    color: "purple",
    available: "Respon dalam 2 jam",
    onClick: () => {
      window.open(
        "mailto:info@webperdana.com?subject=Konsultasi%20Proyek%20Digital&body=Halo%20WebPerdana,%0A%0ASaya%20tertarik%20untuk%20konsultasi%20tentang:%0A%0A1.%20Jenis%20proyek:%20%0A2.%20Timeline:%20%0A3.%20Budget%20estimasi:%20%0A4.%20Detail%20kebutuhan:%20%0A%0ATerima%20kasih!",
        "_self"
      );
    },
  },
  {
    icon: MapPin,
    title: "Kantor",
    description: "Kunjungi kantor kami untuk meeting langsung",
    contact: "Jakarta Selatan, Indonesia",
    action: "Lihat Lokasi",
    color: "orange",
    available: "Appointment Required",
    onClick: () => {
      window.open(
        "https://maps.google.com/?q=Jakarta+Selatan+Indonesia",
        "_blank"
      );
    },
  },
];

export default function ContactMethods() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            Berbagai Cara <span className="text-primary">Menghubungi</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Pilih metode komunikasi yang paling nyaman untuk Anda. Tim kami siap
            memberikan respon cepat dan solusi terbaik untuk kebutuhan digital
            bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-background"
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className={`w-12 h-12 bg-${method.color}-500/10 rounded-lg flex items-center justify-center group-hover:bg-${method.color}-500/20 transition-colors`}
                >
                  <method.icon
                    className={`text-${method.color}-500`}
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {method.description}
                  </p>
                  <p className="font-medium text-foreground mb-1">
                    {method.contact}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {method.available}
                  </p>
                </div>

                <Button
                  onClick={method.onClick}
                  className={`w-full bg-${method.color}-500 hover:bg-${method.color}-600 text-white`}
                  size="sm"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Hours */}
        <div className="mt-16 bg-background rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="text-primary" size={24} />
                <h3 className="font-heading font-bold text-xl">
                  Jam Operasional
                </h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Senin - Jumat:</span>
                  <span className="font-medium">09:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sabtu:</span>
                  <span className="font-medium">09:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minggu:</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">WhatsApp:</span>
                  <span className="font-medium text-green-600">
                    24/7 Available
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="text-primary" size={24} />
                <h3 className="font-heading font-bold text-xl">
                  Jadwalkan Meeting
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Ingin diskusi lebih detail? Jadwalkan meeting dengan tim kami
                untuk konsultasi mendalam tentang proyek Anda.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Halo WebPerdana! Saya ingin menjadwalkan meeting untuk diskusi proyek. Kapan waktu yang tersedia?"
                  );
                  window.open(
                    `https://wa.me/6281234567890?text=${message}`,
                    "_blank"
                  );
                }}
              >
                Jadwalkan Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
