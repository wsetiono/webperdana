"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan website atau aplikasi mobile?",
    answer:
      "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website sederhana biasanya 2-4 minggu, website kompleks 1-3 bulan, dan aplikasi mobile 2-6 bulan. Kami akan memberikan timeline yang detail setelah analisis requirement.",
  },
  {
    question: "Apakah ada garansi untuk proyek yang dikerjakan?",
    answer:
      "Ya, kami memberikan garansi 3-6 bulan untuk bug fixing dan maintenance dasar. Selain itu, kami juga menyediakan layanan support dan maintenance jangka panjang sesuai kebutuhan klien.",
  },
  {
    question: "Bagaimana sistem pembayaran untuk proyek?",
    answer:
      "Sistem pembayaran biasanya dibagi menjadi beberapa tahap: 30% di awal, 40% saat development selesai, dan 30% saat launching. Untuk proyek besar, pembayaran bisa disesuaikan dengan milestone yang disepakati.",
  },
  {
    question:
      "Apakah WebPerdana menyediakan layanan maintenance setelah proyek selesai?",
    answer:
      "Ya, kami menyediakan layanan maintenance dan support berkelanjutan. Paket maintenance mencakup update security, backup data, monitoring performa, dan technical support 24/7.",
  },
  {
    question: "Teknologi apa saja yang digunakan WebPerdana?",
    answer:
      "Kami menggunakan teknologi terdepan seperti React, Next.js, Node.js, React Native, Flutter untuk mobile, dan berbagai database modern. Pemilihan teknologi disesuaikan dengan kebutuhan dan skala proyek klien.",
  },
  {
    question: "Apakah bisa konsultasi gratis sebelum memulai proyek?",
    answer:
      "Tentu saja! Kami menyediakan konsultasi gratis untuk memahami kebutuhan Anda. Tim kami akan membantu menganalisis requirement, memberikan rekomendasi solusi, dan estimasi budget yang sesuai.",
  },
  {
    question: "Bagaimana proses komunikasi selama pengerjaan proyek?",
    answer:
      "Kami menggunakan pendekatan agile dengan komunikasi regular melalui WhatsApp, email, dan meeting mingguan. Klien akan mendapat update progress secara berkala dan bisa memberikan feedback di setiap tahap development.",
  },
  {
    question: "Apakah WebPerdana melayani klien dari luar Jakarta?",
    answer:
      "Ya, kami melayani klien dari seluruh Indonesia bahkan internasional. Sebagian besar komunikasi dan koordinasi bisa dilakukan secara remote melalui video call, WhatsApp, dan tools kolaborasi online.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
              Pertanyaan yang{" "}
              <span className="text-primary">Sering Diajukan</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Temukan jawaban untuk pertanyaan umum tentang layanan WebPerdana.
              Jika pertanyaan Anda tidak ada di sini, jangan ragu untuk
              menghubungi kami.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp
                        className="text-primary flex-shrink-0"
                        size={20}
                      />
                    ) : (
                      <ChevronDown
                        className="text-muted-foreground flex-shrink-0"
                        size={20}
                      />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-muted/30 rounded-2xl">
            <h3 className="font-heading font-bold text-xl mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tim kami siap membantu menjawab pertanyaan spesifik tentang
              kebutuhan proyek Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    "Halo WebPerdana! Saya punya beberapa pertanyaan tentang layanan Anda."
                  );
                  window.open(
                    `https://wa.me/6281234567890?text=${message}`,
                    "_blank"
                  );
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Tanya via WhatsApp
              </button>
              <a
                href="mailto:info@webperdana.com?subject=Pertanyaan%20tentang%20Layanan"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
