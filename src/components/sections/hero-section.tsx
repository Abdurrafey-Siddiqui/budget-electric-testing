"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Phone, ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Grid Pattern Background */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className="absolute inset-0 h-full w-full opacity-20"
        strokeDasharray="4 4"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <Image
                src="/budget-electric-logo.jpg"
                alt="Budget Electric LLC"
                width={300}
                height={100}
                className="h-20 w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-[#272C6C] leading-tight">
                Expert Electrical Solutions for{" "}
                <span className="text-[#FFC107]">Columbus, Ohio</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trusted electrical contracting with 18+ years of experience.
                From custom lighting design to commercial installations, we
                deliver quality work on time and on budget.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#FFC107] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#272C6C]">18+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Years of</p>
                  <p className="font-semibold text-[#272C6C]">Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#272C6C] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#FFC107]">✓</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Licensed &</p>
                  <p className="font-semibold text-[#272C6C]">Insured</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#FFC107] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#272C6C]">★</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">5-Star Rated</p>
                  <p className="font-semibold text-[#272C6C]">Service</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <ShimmerButton className="shadow-2xl bg-[#FFC107] hover:bg-[#FFD54F] text-[#272C6C] px-8 py-6 text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </ShimmerButton>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#272C6C] text-[#272C6C] hover:bg-[#272C6C] hover:text-white px-8 py-6 text-lg font-semibold"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder for electrician working image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 text-gray-600">
                  <div className="w-24 h-24 mx-auto bg-gray-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-lg">
                    Professional Electrical Work
                  </p>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-[#FFC107]"
            >
              <p className="text-sm text-gray-600">Established</p>
              <p className="text-3xl font-bold text-[#272C6C]">2006</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
