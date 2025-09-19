import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Andi Pratama",
    position: "CEO & Founder",
    bio: "Visioner dengan pengalaman 8+ tahun di industri teknologi. Memimpin WebPerdana dengan fokus pada inovasi dan pertumbuhan berkelanjutan.",
    image: "/professional-indonesian-businessman-portrait.jpg",
    skills: ["Leadership", "Business Strategy", "Product Management"],
    social: {
      linkedin: "#",
      email: "andi@webperdana.com",
    },
  },
  {
    name: "Sari Indrawati",
    position: "CTO & Co-Founder",
    bio: "Expert dalam arsitektur sistem dan teknologi cloud. Bertanggung jawab atas strategi teknologi dan quality assurance di semua proyek.",
    image: "/professional-indonesian-businesswoman-portrait.jpg",
    skills: ["System Architecture", "Cloud Computing", "DevOps"],
    social: {
      linkedin: "#",
      github: "#",
      email: "sari@webperdana.com",
    },
  },
  {
    name: "Budi Santoso",
    position: "Lead Developer",
    bio: "Full-stack developer dengan spesialisasi dalam React, Node.js, dan mobile development. Memimpin tim development dengan pengalaman 6+ tahun.",
    image: "/professional-indonesian-man-portrait.jpg",
    skills: ["React", "Node.js", "React Native", "MongoDB"],
    social: {
      github: "#",
      linkedin: "#",
      email: "budi@webperdana.com",
    },
  },
];

const departments = [
  {
    name: "Development Team",
    count: "12 orang",
    description:
      "Frontend, Backend, dan Mobile Developers dengan expertise di berbagai teknologi modern",
  },
  {
    name: "Design Team",
    count: "4 orang",
    description:
      "UI/UX Designers yang berpengalaman dalam menciptakan user experience yang optimal",
  },
  {
    name: "Quality Assurance",
    count: "3 orang",
    description:
      "QA Engineers yang memastikan setiap produk memenuhi standar kualitas tertinggi",
  },
  {
    name: "Project Management",
    count: "2 orang",
    description:
      "Project Managers yang mengkoordinasi timeline dan deliverables setiap proyek",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
            Tim <span className="text-primary">Profesional</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Bertemu dengan tim expert yang berdedikasi menghadirkan solusi
            digital terbaik untuk bisnis Anda dengan pengalaman dan keahlian
            yang mumpuni.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-2xl text-center mb-8">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Photo */}
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-2">
                    <h4 className="font-heading font-semibold text-xl">
                      {member.name}
                    </h4>
                    <p className="text-primary font-medium">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-2">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-2xl text-center mb-8">
            Struktur Tim
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="font-heading font-bold text-primary">
                    {dept.count.split(" ")[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {dept.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {dept.count}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
