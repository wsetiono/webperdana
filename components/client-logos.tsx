export default function ClientLogos() {
  const clients = [
    { name: "TechStart Indonesia", logo: "/placeholder.svg?key=client1" },
    { name: "Fashion Boutique", logo: "/placeholder.svg?key=client2" },
    { name: "Edu Corp", logo: "/placeholder.svg?key=client3" },
    { name: "HealthCare Plus", logo: "/placeholder.svg?key=client4" },
    { name: "Restaurant Chain", logo: "/placeholder.svg?key=client5" },
    { name: "Property Group", logo: "/placeholder.svg?key=client6" },
    { name: "Fintech Solutions", logo: "/placeholder.svg?key=client7" },
    { name: "E-Commerce Hub", logo: "/placeholder.svg?key=client8" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
            Dipercaya oleh <span className="text-primary">100+</span> Perusahaan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dari startup hingga enterprise, berbagai perusahaan telah
            mempercayai WebPerdana untuk mengembangkan solusi digital mereka.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                className="max-w-full h-8 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
