"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    quote:
      "Every hour spent chasing bugs is time away from building features that users actually want. Interfere gives your team time to focus on what actually matters.",
    author: "Dylan Bebbs",
    role: "CTO of Profound",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dylan",
  },
  {
    id: 2,
    quote:
      "The speed at which we can now ship reliable code is night and day. It's not just a tool; it's a fundamental shift in our development culture.",
    author: "Sarah Chen",
    role: "VP of Engineering at Flux",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 3,
    quote:
      "We reduced our technical debt by 40% in the first quarter. Our developers are finally happy again because they are building, not just fixing.",
    author: "Marcus Thorne",
    role: "Lead Architect at Zenith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
];

const TestimonialCard = ({ testimonials = testimonialData }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative flex min-h-[450px] w-full items-center justify-center bg-transparent px-4 py-12 sm:p-8 overflow-hidden z-10">
      {/* Background intentionally left fully transparent to inherit global #08070b and keep consistent with Hero */}

      <div className="relative z-10 w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#08070b] p-6 sm:p-10 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              {/* Quote Text - Responsive sizing */}
              <blockquote
                className="mb-6 sm:mb-10 text-lg sm:text-2xl md:text-3xl font-normal leading-relaxed text-[#f7f8f8] italic tracking-tight"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                “{testimonials[index].quote}”
              </blockquote>

              {/* Author Section - Layout stays consistent but scales down */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative">
                  <div className="h-10 w-10 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-white/[0.06]">
                    <img
                      src={testimonials[index].avatar}
                      alt={testimonials[index].author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#08070b] border border-white/[0.06]">
                    <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#f7f8f8]">
                    {testimonials[index].author}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#e6e6e6] uppercase tracking-widest font-normal">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots - Tappable size for mobile */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
