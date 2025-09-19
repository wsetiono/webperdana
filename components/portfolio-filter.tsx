"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "Semua Proyek", count: 24 },
  { id: "website", label: "Website", count: 12 },
  { id: "mobile", label: "Mobile App", count: 8 },
  { id: "ecommerce", label: "E-Commerce", count: 6 },
  { id: "webapp", label: "Web App", count: 4 },
];

interface PortfolioFilterProps {
  onFilterChange?: (category: string) => void;
}

export default function PortfolioFilter({
  onFilterChange,
}: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    onFilterChange?.(categoryId);
  };

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent hover:bg-muted"
              } transition-colors duration-200`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">
                ({category.count})
              </span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
