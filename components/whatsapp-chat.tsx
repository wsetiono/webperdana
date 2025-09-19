"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppChat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Halo WebPerdana, saya tertarik dengan layanan Anda. Bisakah kita diskusi lebih lanjut?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white text-xl rounded-full w-44 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="icon"
        aria-label="Chat via WhatsApp"
      >
        {/* <MessageCircle size={24} /> */}
        Chat Whatsapp
      </Button>
    </div>
  );
}
