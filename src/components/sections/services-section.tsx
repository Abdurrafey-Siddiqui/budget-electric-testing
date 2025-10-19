"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Lightbulb,
  Zap,
  Building2,
  Settings,
  Network,
  Sun,
  LucideIcon,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFC107] h-full"
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#272C6C] to-[#3a4199] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-[#FFC107]" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#272C6C] mb-3 group-hover:text-[#FFC107] transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Items List */}
      <ul className="space-y-2">
        {service.items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-gray-700"
          >
            <span className="text-[#FFC107] mt-1 flex-shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Hover Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/5 to-[#272C6C]/5 rounded-2xl pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function ServicesSection() {
  const services: ServiceItem[] = [
    {
      title: "Custom Design",
      description:
        "Innovative lighting and electrical design solutions tailored to your unique vision and space.",
      icon: Lightbulb,
      items: [
        "Custom & Specialty Lighting Design",
        "Custom Home Lighting Solutions",
        "Design-Build Contracts",
        "Lutron Smart Lighting Control Systems",
      ],
    },
    {
      title: "Electrical Installation",
      description:
        "Professional installation services for residential and commercial properties with precision and care.",
      icon: Zap,
      items: [
        "New Construction Wiring",
        "Electrical Installations",
        "Service Panel Upgrades",
        "Grounding Improvements",
      ],
    },
    {
      title: "Power Solutions",
      description:
        "Reliable backup power and UPS systems to keep your home or business running smoothly.",
      icon: Settings,
      items: [
        "Backup Generator Installation",
        "Uninterruptible Power Supply (UPS)",
        "Power Distribution",
        "Emergency Systems",
      ],
    },
    {
      title: "Data & Communications",
      description:
        "Modern networking and communication infrastructure for seamless connectivity.",
      icon: Network,
      items: [
        "Data Network Cabling",
        "Intercom Systems",
        "Structured Cabling",
        "Smart Home Integration",
      ],
    },
    {
      title: "Outdoor Lighting",
      description:
        "Transform your exterior spaces with professional landscape and architectural lighting.",
      icon: Sun,
      items: [
        "Landscape Lighting",
        "Architectural Lighting",
        "Security Lighting",
        "LED Upgrades",
      ],
    },
    {
      title: "Commercial Services",
      description:
        "Comprehensive electrical solutions for businesses, warehouses, and industrial facilities.",
      icon: Building2,
      items: [
        "General Electrical Repairs",
        "Retrofit Projects",
        "Interior Fit-Outs",
        "Warehouse & Industrial Wiring",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#272C6C] via-[#FFC107] to-[#272C6C]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#FFC107] rounded-full mb-4">
            <p className="text-sm font-semibold text-[#272C6C]">
              OUR EXPERTISE
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#272C6C] mb-4">
            Comprehensive Electrical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential upgrades to large commercial projects, we provide
            expert electrical solutions for every need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call-to-Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-[#272C6C] mb-2">
            Don't See What You're Looking For?
          </h3>
          <p className="text-gray-600 mb-6">
            We handle a wide range of electrical projects. Contact us to discuss
            your specific needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#272C6C] text-white font-semibold rounded-lg hover:bg-[#3a4199] transition-colors duration-300"
          >
            Request a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
