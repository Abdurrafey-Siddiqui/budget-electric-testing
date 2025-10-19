"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Custom Lighting Design",
    "Electrical Installation",
    "Commercial Services",
    "Backup Generators",
    "Data Cabling",
    "Outdoor Lighting",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#272C6C] to-[#1a1f4d] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Image
              src="/budget-electric-logo.jpg"
              alt="Budget Electric LLC"
              width={200}
              height={67}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Trusted electrical contractor serving Columbus, Ohio since 2006.
              Quality work, fair pricing, exceptional service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC107] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC107] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC107] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-[#FFC107] transition-colors duration-300 flex items-start"
                  >
                    <span className="mr-2 text-[#FFC107]">›</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFC107] transition-colors duration-300 flex items-start"
                  >
                    <span className="mr-2 text-[#FFC107]">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#FFC107] transition-colors duration-300 flex items-start"
                >
                  <span className="mr-2 text-[#FFC107]">›</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#FFC107] transition-colors duration-300 flex items-start"
                >
                  <span className="mr-2 text-[#FFC107]">›</span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFC107] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a
                    href="tel:+16145551234"
                    className="font-semibold hover:text-[#FFC107] transition-colors"
                  >
                    (614) 555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FFC107] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a
                    href="mailto:info@budgetelectric.com"
                    className="font-semibold hover:text-[#FFC107] transition-colors"
                  >
                    info@budgetelectric.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFC107] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="font-semibold">Columbus, Ohio</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Budget Electric LLC. All rights reserved. |
              Licensed & Insured
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Est. 2006</span>
              <span className="hidden md:inline">|</span>
              <span>18+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#FFC107] via-white to-[#FFC107]" />
    </footer>
  );
}
