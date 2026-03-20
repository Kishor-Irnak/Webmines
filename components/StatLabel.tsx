"use client";

import React, { useEffect, useRef, useState } from "react";

const StatLabel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const stats = [
    {
      value: "₹0",
      label: "Subscription fees",
      dotColor: "bg-[#00e576]", // Vibrant green
      lineColor: "from-[#00e576]/40 to-transparent",
    },
    {
      value: "₹0",
      label: "Website Setup & Maintenance Cost",
      dotColor: "bg-[#d838e0]", // Vibrant magenta/purple
      lineColor: "from-[#d838e0]/40 to-transparent",
    },
    {
      value: "₹0",
      label: "No Charges on RTO",
      dotColor: "bg-[#00c2ff]", // Vibrant cyan
      lineColor: "from-[#00c2ff]/40 to-transparent",
    },
    {
      value: "₹0",
      label: "No Marketing Charges",
      dotColor: "bg-[#3b82f6]", // Vibrant blue
      lineColor: "from-[#3b82f6]/40 to-transparent",
    },
    {
      value: "4%",
      label: "all we earn, per order",
      dotColor: "bg-[#ff6b00]", // Vibrant orange
      lineColor: "from-[#ff6b00]/40 to-transparent",
    },
  ];

  // Update the active dot when the user scrolls manually or via auto-scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;

    // Calculate which card is currently in view
    const cardWidth = scrollWidth / stats.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || window.innerWidth >= 768) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth, children } =
        scrollContainer;

      // Calculate the width of one card plus its gap to scroll precisely
      const cardElement = children[0] as HTMLElement;
      const scrollAmount = cardElement.offsetWidth + 40; // 40px accounts for gap-10

      // If we've reached the end, reset to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 1500); // Scrolls every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#08070b] border border-white/[0.06] py-16 lg:py-24 overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-[1150px] mx-auto px-6 lg:px-12">
        <h2 className="text-[24px] lg:text-[28px] font-medium text-[#f7f8f8] mb-12 tracking-tight">
          No upfront cost, only success based fees
        </h2>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-6 gap-10 md:gap-6 lg:gap-12 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-4 md:pb-0"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative pl-5 md:pl-6 shrink-0 w-[80vw] md:w-auto snap-center md:col-span-2 ${
                index === 3 ? "md:col-start-2" : ""
              }`}
            >
              {/* Vertical line with dot */}
              <div className="absolute left-0 top-1 bottom-[-10px] flex flex-col items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-[1px] ${stat.dotColor}`}
                />
                <div
                  className={`w-px h-full bg-gradient-to-b ${stat.lineColor} mt-2`}
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-[44px] md:text-[48px] lg:text-[56px] leading-none text-[#f7f8f8] tracking-tight font-medium">
                  {stat.value}
                </div>
                <div className="text-[13px] md:text-[14px] text-[#8a8f98] leading-[1.4] max-w-[130px] font-light">
                  {stat.label.split("—").length > 1 ? (
                    <>
                      <span className="font-normal text-[#f7f8f8]">
                        {stat.label.split("—")[0]}
                      </span>
                      —<br />
                      {stat.label.split("—")[1].trim()}
                    </>
                  ) : (
                    stat.label
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram-style Pagination Dots (Mobile Only) */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-6">
          {stats.map((_, index) => (
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
};

export default StatLabel;
