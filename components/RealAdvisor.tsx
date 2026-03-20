"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import image1 from "../public/assets/image-1.png";
import image2 from "../public/assets/image-2.png";
import image3 from "../public/assets/image-3.png";

export default function EvocSellerMetrics() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update the active dot when the user scrolls manually or via auto-scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;

    // We have 3 cards here
    const cardWidth = scrollWidth / 3;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Only run the interval if we are on a mobile device (width < 768px)
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      const { scrollLeft, offsetWidth, scrollWidth, children } =
        scrollContainer;

      // Precision scrolling matching StatLabel approach
      const cardElement = children[0] as HTMLElement;
      if (!cardElement) return;
      const scrollAmount = cardElement.offsetWidth + 24; // 24px accounts for gap-6

      // If we are at the end, scroll back to the start, otherwise move one "card" width over
      if (scrollLeft + offsetWidth >= scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#08070b] flex border-b border-white/[0.08] items-center justify-center p-6 py-16 md:py-24 text-[#f7f8f8] font-sans selection:bg-[#5e6ad2]/30">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#f7f8f8]">
            Empowering Seller <br className="hidden md:block" />
            Success & Growth
          </h2>
        </div>

        {/* Added ref={scrollRef} and onScroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 no-scrollbar"
        >
          {/* Card 1: Annual Sales */}
          <div className="relative w-[85vw] md:w-full shrink-0 snap-center h-[460px] bg-[#08070b] rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="p-7 relative z-10">
              <button className="absolute top-5 right-5 text-white/40 bg-white/5 rounded-full p-1 border border-white/10 hover:bg-white/10 transition-colors">
                <Plus size={14} />
              </button>
              <p className="text-white/50 text-[12px] leading-[1.6] max-w-[85%] font-light tracking-wide">
                Total platform velocity and volume. Driving massive scale across
                our entire seller ecosystem.
              </p>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={image1}
                alt="Annual Sales"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#08070b] via-[#08070b]/60 to-transparent" />
            </div>
            <div className="p-7 relative z-10 flex items-baseline gap-1 mt-auto">
              <span className="text-6xl font-light tracking-tight text-white">
                $150
              </span>
              <span className="text-2xl text-white/50 font-light">M</span>
              <span className="text-[10px] text-white/40 tracking-wide ml-2 mb-1">
                across sellers
              </span>
            </div>
          </div>

          {/* Card 2: Top Sellers */}
          <div className="relative w-[85vw] md:w-full shrink-0 snap-center h-[460px] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="p-7 relative z-10">
              <button className="absolute top-5 right-5 text-white/40 bg-white/5 rounded-full p-1 border border-white/10 hover:bg-white/10 transition-colors">
                <Plus size={14} />
              </button>
              <p className="text-white/50 text-[12px] leading-[1.6] max-w-[75%] font-light tracking-wide">
                We are building the next generation of top-tier commerce brands.
              </p>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={image2}
                alt="Top Sellers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
            </div>
            <div className="p-7 relative z-10 flex items-baseline gap-2 mt-auto">
              <span className="text-6xl font-light tracking-tight text-white">
                500
              </span>
              <div className="flex flex-col">
                <span className="text-xl text-white/50 font-light leading-none">
                  +
                </span>
                <span className="text-[10px] text-white/40 tracking-wide mt-1">
                  sellers
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Growth */}
          <div className="relative w-[85vw] md:w-full shrink-0 snap-center h-[460px] bg-[#08070b] rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="p-7 relative z-10">
              <button className="absolute top-5 right-5 text-white/40 bg-white/5 rounded-full p-1 border border-white/10 hover:bg-white/10 transition-colors">
                <Plus size={14} />
              </button>
              <p className="text-white/50 text-[12px] leading-[1.6] max-w-[80%] font-light tracking-wide">
                Consistent, explosive year-over-year growth across our user
                base.
              </p>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <Image src={image3} alt="Growth" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#08070b] via-[#08070b]/60 to-transparent" />
            </div>
            <div className="p-7 relative z-10 flex items-baseline gap-1 mt-auto">
              <span className="text-5xl md:text-6xl font-light tracking-tight text-white">
                ~60
              </span>
              <div className="flex flex-col ml-1">
                <span className="text-xl text-white/50 font-light leading-none">
                  %
                </span>
                <span className="text-[10px] text-white/40 tracking-wide mt-1 whitespace-nowrap">
                  of our sellers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram-style Pagination Dots (Mobile Only) */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
