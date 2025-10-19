"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

export function AboutSection() {
  const stats = [
    { icon: Clock, label: "Years in Business", value: 18, suffix: "+" },
    { icon: Users, label: "Projects Completed", value: 500, suffix: "+" },
    { icon: Award, label: "Certified Experts", value: 5, suffix: "" },
    { icon: Shield, label: "Safety Rating", value: 100, suffix: "%" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#272C6C] mb-4">
            Why Choose Budget Electric?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2006, we've been Columbus's trusted partner for safe,
            reliable, and professional electrical services.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFC107]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#272C6C] to-[#3a4199] flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-[#FFC107]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#272C6C] mb-2">
                    <NumberTicker value={stat.value} />
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 text-gray-700">
                  <div className="w-20 h-20 mx-auto bg-gray-600 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-semibold text-lg">Team Photo</p>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#FFC107] rounded-full">
              <p className="text-sm font-semibold text-[#272C6C]">
                TRUSTED SINCE 2006
              </p>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-[#272C6C]">
              Committed to Excellence, Safety, and Customer Satisfaction
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Budget Electric LLC has been serving the Columbus, Ohio area for
              over 18 years. Our team of licensed, certified electricians brings
              decades of combined experience to every project—big or small.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in residential and commercial electrical work, from
              custom lighting installations to complete commercial fit-outs.
              Every job is handled with professionalism, precision, and a focus
              on delivering outstanding results.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#272C6C] font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#272C6C] mb-1">
                    Licensed & Insured
                  </h4>
                  <p className="text-sm text-gray-600">
                    Fully certified and compliant with all codes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#272C6C] font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#272C6C] mb-1">
                    On-Time, On-Budget
                  </h4>
                  <p className="text-sm text-gray-600">
                    Transparent pricing and reliable timelines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#272C6C] font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#272C6C] mb-1">
                    Expert Craftsmanship
                  </h4>
                  <p className="text-sm text-gray-600">
                    Quality workmanship guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#272C6C] font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#272C6C] mb-1">
                    Safety First
                  </h4>
                  <p className="text-sm text-gray-600">
                    Strict adherence to safety protocols
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
