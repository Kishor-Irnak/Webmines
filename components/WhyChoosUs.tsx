"use client";

import React, { useRef, useEffect, useState } from "react";
import { Plus } from "lucide-react";

const featureData = [
  {
    title: "No subscription or fixed service fees",
    description:
      "Pay strictly for performance. Our model aligns perfectly with your growth—no hidden monthly retainers.",
    gradient:
      "bg-[radial-gradient(circle_at_bottom_right,_#ea3323_0%,_#0000ff_40%,_#c123ea_100%)]",
  },
  {
    title: "Zero RTO fee",
    description:
      "Stop losing money on returns. We waive RTO fees so you keep more of your hard-earned revenue.",
    gradient:
      "bg-[radial-gradient(circle_at_top_left,_#d4c337_0%,_#2b12cc_50%,_#0f053b_100%)]",
  },
  {
    title: "Single unified growth dashboard",
    description:
      "All your metrics in one view. From ad spend to inventory, manage your entire growth operation seamlessly.",
    gradient:
      "bg-[radial-gradient(ellipse_at_right,_#5c9df5_0%,_#0a18a8_45%,_#184505_100%)]",
  },
  {
    title: "Built for profitability, not vanity metrics",
    description:
      "Real ROI over likes. We optimize for net profit, ensuring every rupee spent contributes to your bottom line.",
    gradient:
      "bg-[radial-gradient(circle_at_bottom,_#f25c1d_0%,_#1530d1_40%,_#bd5cf2_100%)]",
  },
];

export default function WhyChooseUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle active dot update on scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth } = scrollContainerRef.current;

    // Calculate which card is currently in view
    const cardWidth = scrollWidth / featureData.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  // Auto-scroll logic for mobile
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || window.innerWidth >= 768) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth, children } =
        scrollContainer;

      // Calculate the width of one card plus its gap to scroll precisely
      const cardElement = children[0] as HTMLElement;
      // 24px is the gap-6 equivalent
      const scrollAmount = cardElement.offsetWidth + 24;

      // If we've reached the end, reset to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2000); // Scrolls every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual scroll function for the buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#08070b] py-20 lg:py-32 border-b border-white/[0.06] overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f7f8f8] max-w-xl">
            Why brands <br /> choose Evoc Labs
          </h2>
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#8a8f98] hover:text-[#f7f8f8] hover:border-white/30 transition-colors"
              aria-label="Scroll left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#8a8f98] hover:text-[#f7f8f8] hover:border-white/30 transition-colors"
              aria-label="Scroll right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Feature Card Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4 md:pb-0"
        >
          {featureData.map((data, index) => (
            <div
              key={index}
              className="w-[85vw] shrink-0 snap-center md:w-full md:shrink-1"
            >
              <FeatureCard {...data} />
            </div>
          ))}
        </div>

        {/* Instagram-style Pagination Dots (Mobile Only) */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-6">
          {featureData.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ title, description, gradient }: FeatureCardProps) {
  return (
    <div
      className={`group relative h-[380px] w-full rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500 ${gradient}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
      <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.1] backdrop-blur-md border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.2] transition-colors z-10">
        <Plus size={16} strokeWidth={1.5} />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
        <h3 className="text-lg font-medium text-white mb-2 pr-10 leading-snug">
          {title}
        </h3>
        <p className="text-[14px] text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
