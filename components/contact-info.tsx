import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    details: ["Jl. Sudirman No. 123", "Jakarta Selatan 12190", "Indonesia"],
    action: "Lihat di Maps",
    actionUrl: "https://maps.google.com/?q=Jakarta+Selatan+Indonesia",
  },
  {
    icon: Phone,
    title: "Telepon & WhatsApp",
    details: [
      "Telepon: +62 21-1234-5678",
      "WhatsApp: +62 812-3456-7890",
      "Emergency: +62 811-9876-5432",
    ],
    action: "Hubungi Sekarang",
    actionUrl: "tel:+622112345678",
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "General: info@webperdana.com",
      "Sales: sales@webperdana.com",
      "Support: support@webperdana.com",
    ],
    action: "Kirim Email",
    actionUrl: "mailto:info@webperdana.com",
  },
  {
    icon: Globe,
    title: "Website & Social Media",
    details: [
      "Website: webperdana.com",
      "LinkedIn: /company/webperdana",
      "Instagram: @webperdana_id",
    ],
    action: "Kunjungi Website",
    actionUrl: "https://webperdana.com",
  },
];

const officeHours = [
  { day: "Senin - Jumat", hours: "09:00 - 18:00 WIB" },
  { day: "Sabtu", hours: "09:00 - 15:00 WIB" },
  { day: "Minggu", hours: "Emergency Only" },
  { day: "WhatsApp", hours: "24/7 Available", highlight: true },
];

export default function ContactInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-heading font-bold text-3xl">
              Informasi Kontak
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Berbagai cara untuk menghubungi tim WebPerdana dan mendapatkan
              bantuan yang Anda butuhkan.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactDetails.map((contact, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 bg-background"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {contact.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {contact.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  <a
                    href={contact.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    {contact.action} →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Hours */}
          <Card className="bg-background">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-foreground">
                  Jam Operasional
                </h3>
              </div>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-muted-foreground">
                      {schedule.day}:
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        schedule.highlight
                          ? "text-green-600"
                          : "text-foreground"
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Info */}
          <Card className="bg-background">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-foreground">Tim Support</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Sales Consultant:
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    5 orang
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Technical Support:
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    8 orang
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Project Manager:
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    3 orang
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Response Time:
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    &lt; 2 jam
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="bg-background">
            <CardContent className="p-0">
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="text-muted-foreground mx-auto" size={32} />
                  <p className="text-muted-foreground">Peta Lokasi Kantor</p>
                  <p className="text-sm text-muted-foreground">
                    Jakarta Selatan, Indonesia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
