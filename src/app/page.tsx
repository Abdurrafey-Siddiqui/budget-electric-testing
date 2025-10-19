"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { Phone, Wrench, Home as HomeIcon, MessageCircle } from "lucide-react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <HomeIcon className="h-4 w-4" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <MessageCircle className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Phone className="h-4 w-4" />,
    },
  ];

  return (
    <main className="relative w-full overflow-hidden">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
