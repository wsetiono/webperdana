import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  W
                </span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                WebPerdana
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Software house terpercaya yang menghadirkan solusi digital
              inovatif untuk mengembangkan bisnis Anda di era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/portofolio"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              Layanan
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">
                  Website Development
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Mobile App Development
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  E-Commerce Solutions
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Digital Marketing
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Maintenance & Support
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              Kontak
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  +62 812-3456-7890
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  info@webperdana.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  Jakarta, Indonesia
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 WebPerdana. Semua hak cipta dilindungi. |
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors ml-1"
            >
              Kebijakan Privasi
            </Link>{" "}
            |
            <Link
              href="/terms"
              className="hover:text-primary transition-colors ml-1"
            >
              Syarat & Ketentuan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
