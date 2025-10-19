"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #272C6C 0px, #272C6C 1px, transparent 1px, transparent 10px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[#FFC107] rounded-full mb-4">
                <p className="text-sm font-semibold text-[#272C6C]">
                  GET IN TOUCH
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#272C6C] mb-4">
                Ready to Power Your Project?
              </h2>
              <p className="text-xl text-gray-600">
                Get a free consultation and quote for your electrical needs.
                We're here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#272C6C] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div>
                  <p className="font-semibold text-[#272C6C] mb-1">Phone</p>
                  <a
                    href="tel:+16145551234"
                    className="text-gray-600 hover:text-[#FFC107] transition-colors"
                  >
                    (614) 555-1234
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#272C6C] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div>
                  <p className="font-semibold text-[#272C6C] mb-1">Email</p>
                  <a
                    href="mailto:info@budgetelectric.com"
                    className="text-gray-600 hover:text-[#FFC107] transition-colors"
                  >
                    info@budgetelectric.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#272C6C] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div>
                  <p className="font-semibold text-[#272C6C] mb-1">Location</p>
                  <p className="text-gray-600">
                    Serving Columbus, Ohio
                    <br />
                    and surrounding areas
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 bg-gradient-to-br from-[#272C6C] to-[#3a4199] text-white rounded-xl"
            >
              <h3 className="font-bold text-xl mb-4 text-[#FFC107]">
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl shadow-2xl border-2 border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#272C6C] mb-6">
              Request a Free Quote
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    placeholder="John"
                    className="border-gray-300 focus:border-[#FFC107] focus:ring-[#FFC107]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    placeholder="Doe"
                    className="border-gray-300 focus:border-[#FFC107] focus:ring-[#FFC107]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="border-gray-300 focus:border-[#FFC107] focus:ring-[#FFC107]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  placeholder="(614) 555-1234"
                  className="border-gray-300 focus:border-[#FFC107] focus:ring-[#FFC107]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#FFC107] focus:ring-[#FFC107] focus:outline-none">
                  <option value="">Select a service</option>
                  <option value="custom-design">Custom Design</option>
                  <option value="installation">Electrical Installation</option>
                  <option value="commercial">Commercial Services</option>
                  <option value="outdoor">Outdoor Lighting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#FFC107] focus:ring-[#FFC107] focus:outline-none resize-none"
                />
              </div>

              <ShimmerButton className="w-full shadow-2xl bg-[#FFC107] hover:bg-[#FFD54F] text-[#272C6C] px-8 py-4 text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Get Your Free Quote
              </ShimmerButton>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted by Budget
                Electric LLC regarding your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
