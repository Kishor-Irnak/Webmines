"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";
import dashboardImg from "../public/assets/hero-dashboard.jpg";

interface HeroProps {
  onBookDemoClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemoClick }) => {
  return (
    <section className="relative">
      <div className="container flex flex-col text-center max-w-7xl mx-auto pt-46 px-6 pb-24 items-center relative">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Title */}
          <h1 className="max-w-5xl sm:text-5xl md:text-7xl text-4xl tracking-tighter font-geist mx-auto text-[#f7f8f8] mb-6">
            Start at{" "}
            <span
              className="italic text-[#f7f8f8] tracking-tight font-instrument-serif"
              style={{ fontFamily: '\"Playfair Display\", serif' }}
            >
              Zero
            </span>{" "}
            Cost, Scale Fast.
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#f7f8f8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            We build brands that sell themselves. You focus on growing your
            business while we handle the strategy, design, and marketing. Pay
            only when you start making sales.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center mb-4">
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 transition-all duration-300 text-sm font-semibold text-black bg-white rounded-full pt-3.5 px-6 pb-3.5 shadow-lg hover:shadow-white/10"
            >
              <span>Book a Free Demo</span>
              <div className="transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-12">
                <FaPaperPlane
                  size={14}
                  className="rotate-12 text-black group-hover:text-blue-500"
                />
              </div>
            </Link>
            <Link
              href="#"
              className="group relative inline-flex items-center px-6 py-3.5 rounded-full bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              {/* Custom Pixel-Perfect Dashed Border */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='28' ry='28' stroke='white' stroke-width='1.5' stroke-dasharray='6 6' stroke-dashoffset='0'/%3e%3c/svg%3e")`,
                }}
              />
              <span className="relative z-10">See How It Works</span>
            </Link>
          </div>

          {/* Trust Anchor */}
          <div className="text-xs font-medium text-[#e6e6e6] tracking-wide mb-20">
            4Cr+ Ad Spend • 250+ Brands Scaled
          </div>
        </div>

        {/* Dashboard Section Image */}
        <div className="relative w-full max-w-5xl mx-auto mt-8 group z-10">
          <div className="relative bg-[#08070b] rounded-xl border border-white/[0.06] overflow-hidden shadow-2xl">
            <Image
              src={dashboardImg}
              alt="Dashboard Preview"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
