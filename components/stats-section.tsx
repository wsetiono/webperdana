import { Users, Briefcase, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "150+",
    label: "Proyek Selesai",
    description: "Proyek sukses dari berbagai industri",
  },
  {
    icon: Users,
    number: "100+",
    label: "Klien Puas",
    description: "Klien yang mempercayai layanan kami",
  },
  {
    icon: Award,
    number: "5+",
    label: "Tahun Pengalaman",
    description: "Pengalaman dalam industri teknologi",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support",
    description: "Dukungan teknis sepanjang waktu",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            Mengapa Memilih WebPerdana?
          </h2>
          <p className="text-lg text-primary-foreground/80 text-pretty max-w-2xl mx-auto leading-relaxed">
            Angka-angka yang membuktikan komitmen kami dalam memberikan layanan
            terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="text-primary-foreground" size={32} />
              </div>
              <div>
                <div className="font-heading font-bold text-4xl lg:text-5xl mb-2">
                  {stat.number}
                </div>
                <h3 className="font-semibold text-xl mb-1">{stat.label}</h3>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
