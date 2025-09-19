import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    position: "CEO, TechStart Indonesia",
    content:
      "WebPerdana berhasil mengembangkan aplikasi mobile yang sangat membantu bisnis kami. Tim mereka profesional dan responsif terhadap kebutuhan klien.",
    rating: 5,
    avatar: "/professional-indonesian-businessman-portrait.jpg",
  },
  {
    name: "Sari Dewi",
    position: "Founder, Fashion Boutique",
    content:
      "Website e-commerce yang dibuat WebPerdana sangat membantu meningkatkan penjualan online kami. Desainnya modern dan mudah digunakan.",
    rating: 5,
    avatar: "/professional-indonesian-businesswoman-portrait.jpg",
  },
  {
    name: "Ahmad Rahman",
    position: "Marketing Director, Edu Corp",
    content:
      "Platform pembelajaran yang dikembangkan sangat sesuai dengan kebutuhan kami. Fitur-fiturnya lengkap dan user experience-nya excellent.",
    rating: 5,
    avatar: "/professional-indonesian-man-portrait.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            Apa Kata <span className="text-primary">Klien</span> Kami?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Testimoni dari klien yang telah merasakan layanan profesional
            WebPerdana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
