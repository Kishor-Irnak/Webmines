"use client";

import React from "react";
import Image from "next/image";
import gfx1 from "../public/assets/feature-1.jpg";
import gfx2 from "../public/assets/feature-2.jpg";
import gfx3 from "../public/assets/feature-3.jpg";
import gfx4 from "../public/assets/feature-4.jpg";

const ClusterFeatures = () => {
  return (
    <section className="bg-[#08070b] text-[#f7f8f8] py-20 lg:py-32 font-sans border-b border-white/[0.06]">
      <div className="max-w-[1150px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <h2 className="text-[32px] sm:text-5xl md:text-[56px] lg:text-[64px] tracking-[-0.03em] font-medium max-w-[800px] leading-[1.05] text-[#fafafa]">
            Grow First. Pay Later.
          </h2>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 relative">
          {/* Card 1: Ads Management */}
          <div className="sticky top-[80px] z-10 w-full lg:static transition-transform duration-300">
            <div className="bg-[#0a0a0a] border border-white/8 rounded-[14px] p-1 shadow-2xl">
              <div className="bg-[#141414] border border-white/8 rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] overflow-hidden relative">
                <Image
                  src={gfx1}
                  alt="Ads Management"
                  fill
                  className="object-cover opacity-100 pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#141414] via-[#141414]/70 to-transparent pointer-events-none z-0" />
                <div className="relative z-10">
                  <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                    Ads Management
                  </h3>
                  <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                    Tell us your product. We set up, run, and optimize your ads
                    on Meta & Google — no budget wasted, no guesswork. You focus
                    on your product, we handle the clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Website / Store */}
          <div className="sticky top-[100px] z-20 w-full lg:static transition-transform duration-300">
            <div className="bg-[#0a0a0a] border border-white/8 rounded-[14px] p-1 shadow-2xl">
              <div className="bg-[#141414] border border-white/8 rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden">
                <Image
                  src={gfx3}
                  alt="Website / Store"
                  fill
                  className="object-cover opacity-100 pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#141414] via-[#141414]/70 to-transparent pointer-events-none z-0" />
                <div className="relative z-10 mb-10">
                  <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                    Website / Store
                  </h3>
                  <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                    No website? No problem. We build you a fast,
                    conversion-ready online store — designed to turn visitors
                    into buyers. Fully managed, always updated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Logistics */}
          <div className="sticky top-[120px] z-30 w-full lg:static transition-transform duration-300">
            <div className="bg-[#0a0a0a] border border-white/8 rounded-[14px] p-1 shadow-2xl">
              <div className="bg-[#141414] border border-white/8 rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden">
                <Image
                  src={gfx2}
                  alt="Logistics"
                  fill
                  className="object-cover opacity-100 pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#141414] via-[#141414]/70 to-transparent pointer-events-none z-0" />
                <div className="relative z-20 w-full">
                  <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                    Logistics
                  </h3>
                  <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                    From warehouse to doorstep — connect with multiple delivery
                    partners in one platform, fixed shipping rates, and zero RTO
                    fees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: The Model */}
          <div className="sticky top-[140px] z-40 w-full lg:static transition-transform duration-300">
            <div className="bg-[#0a0a0a] border border-white/8 rounded-[14px] p-1 shadow-2xl">
              <div className="bg-[#141414] border border-white/8 rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden">
                <Image
                  src={gfx4}
                  alt="The Model (How You Pay)"
                  fill
                  className="object-cover opacity-100 pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#141414] via-[#141414]/70 to-transparent pointer-events-none z-0" />
                <div className="relative z-10 w-full mb-10">
                  <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                    The Model (How You Pay)
                  </h3>

                  <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                    We only earn when you earn. No monthly fees, no setup
                    charges. Just 4% per order delivered — that's it. If you
                    don't sell, we don't charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClusterFeatures;
