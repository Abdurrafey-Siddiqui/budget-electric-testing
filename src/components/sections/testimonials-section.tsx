"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Mitchell",
      role: "Homeowner, Columbus",
      content:
        "Budget Electric transformed our home's lighting. Their custom design work is exceptional, and they finished on time and within budget. Highly professional team!",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Business Owner",
      content:
        "We needed a complete electrical retrofit for our warehouse. Budget Electric handled everything perfectly—from planning to execution. Outstanding service!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      content:
        "I've worked with Budget Electric on multiple properties. They're reliable, skilled, and always deliver quality work. My go-to electrical contractor.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Homeowner, Dublin",
      content:
        "The team installed our backup generator and outdoor lighting. Professional, courteous, and meticulous. Couldn't be happier with the results!",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Restaurant Owner",
      content:
        "Budget Electric handled our commercial kitchen electrical work flawlessly. They understood our tight timeline and exceeded expectations.",
      rating: 5,
    },
    {
      name: "Jennifer Walsh",
      role: "Homeowner, Westerville",
      content:
        "From panel upgrades to smart home integration, Budget Electric has done it all for us. Trustworthy and knowledgeable—wouldn't use anyone else.",
      rating: 5,
    },
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const TestimonialCard = ({
    name,
    role,
    content,
    rating,
  }: (typeof testimonials)[0]) => (
    <div className="w-[400px] bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#FFC107] transition-all duration-300 mx-4">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-[#272C6C]">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
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
              CLIENT TESTIMONIALS
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#272C6C] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—see what our satisfied customers
            have to say about working with Budget Electric.
          </p>
        </motion.div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:40s] mt-8">
            {secondRow.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Marquee>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white to-transparent"></div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16 bg-[#272C6C] text-white py-12 px-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Join Hundreds of Satisfied Customers
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            Experience the Budget Electric difference—quality work, fair
            pricing, and service you can trust.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFC107]">500+</div>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFC107]">5.0</div>
              <p className="text-sm text-gray-300">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFC107]">100%</div>
              <p className="text-sm text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
