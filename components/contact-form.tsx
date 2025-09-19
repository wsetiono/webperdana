"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-green-500" size={32} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  Pesan Terkirim!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Terima kasih atas minat Anda. Tim kami akan menghubungi Anda
                  dalam 2 jam kerja.
                </p>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full"
              >
                Kirim Pesan Lain
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Kirim Pesan</CardTitle>
            <CardDescription>
              Ceritakan kebutuhan proyek Anda dan kami akan memberikan solusi
              terbaik
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap *</Label>
                  <Input
                    id="name"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Nama Perusahaan</Label>
                  <Input
                    id="company"
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+62 812-3456-7890"
                    required
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label htmlFor="service">Jenis Layanan *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website Development</SelectItem>
                    <SelectItem value="mobile">
                      Mobile App Development
                    </SelectItem>
                    <SelectItem value="ecommerce">
                      E-Commerce Platform
                    </SelectItem>
                    <SelectItem value="webapp">Web Application</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="maintenance">
                      Maintenance & Support
                    </SelectItem>
                    <SelectItem value="consultation">Konsultasi</SelectItem>
                    <SelectItem value="other">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Estimasi</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih range budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10">Di bawah 10 juta</SelectItem>
                      <SelectItem value="10-25">10 - 25 juta</SelectItem>
                      <SelectItem value="25-50">25 - 50 juta</SelectItem>
                      <SelectItem value="50-100">50 - 100 juta</SelectItem>
                      <SelectItem value="over-100">Di atas 100 juta</SelectItem>
                      <SelectItem value="discuss">Akan didiskusikan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline Proyek</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Kapan ingin mulai?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">
                        Segera (&lt; 1 bulan)
                      </SelectItem>
                      <SelectItem value="1-2months">1-2 bulan</SelectItem>
                      <SelectItem value="2-3months">2-3 bulan</SelectItem>
                      <SelectItem value="3-6months">3-6 bulan</SelectItem>
                      <SelectItem value="flexible">Fleksibel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Detail Kebutuhan *</Label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan detail tentang proyek yang ingin Anda kerjakan, fitur yang dibutuhkan, target audience, dll."
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <Label>Metode Komunikasi Preferensi</Label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="whatsapp" defaultChecked />
                    <Label htmlFor="whatsapp" className="text-sm">
                      WhatsApp
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email-pref" />
                    <Label htmlFor="email-pref" className="text-sm">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="phone-call" />
                    <Label htmlFor="phone-call" className="text-sm">
                      Telepon
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="meeting" />
                    <Label htmlFor="meeting" className="text-sm">
                      Meeting Langsung
                    </Label>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="flex items-start space-x-2">
                <Checkbox id="agreement" required />
                <Label htmlFor="agreement" className="text-sm leading-relaxed">
                  Saya setuju dengan{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    kebijakan privasi
                  </a>{" "}
                  dan{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    syarat & ketentuan
                  </a>{" "}
                  WebPerdana. *
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Kirim Pesan
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Tim kami akan merespon dalam 2 jam kerja. Untuk respon lebih
                cepat, hubungi WhatsApp kami.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
