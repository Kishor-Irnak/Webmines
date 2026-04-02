"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Chamber reached do he nothing be?",
    answer:
      "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
  },
  {
    id: 2,
    question: "Stuff sight equal of my woody?",
    answer:
      "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
  },
  {
    id: 3,
    question: "At by pleasure of children be?",
    answer:
      "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
  },
  {
    id: 4,
    question: "Amounted repeated as believed in confined?",
    answer:
      "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
  },
];

export default function FAQ() {
  // Defaulting to 2 to match the expanded state in your reference image
  const [openId, setOpenId] = useState<number | null>(2);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#08070b] overflow-hidden flex items-center justify-center py-12 md:py-20 font-sans text-white">
      {/* Background Graphic 1: Blue Donut (Bottom Left) */}
      <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] md:w-[500px] md:h-[500px] border-[60px] border-[#2563eb] rounded-full opacity-90 pointer-events-none" />

      {/* Background Graphic 2: Squiggly Line (Top Right) */}
      <svg
        className="absolute top-0 right-0 w-full max-w-xl h-full pointer-events-none opacity-40 text-[#8b5cf6]"
        viewBox="0 0 500 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 200 -50 C 300 150, -50 200, 150 350 C 350 500, 250 450, 400 600 C 550 750, 300 850, 200 950"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <path
          d="M 350 -100 C 400 100, 100 150, 250 300 C 450 450, 500 300, 600 500"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-white tracking-tight">
          FAQ's
        </h2>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`
                  rounded-xl transition-all duration-300 ease-in-out
                  ${isOpen ? "bg-[#171717] shadow-lg shadow-black/40 border border-white/10" : "bg-[#121212] hover:bg-[#1a1a1a] border border-transparent"}
                `}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-start gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* Icon */}
                  <div
                    className={`mt-0.5 flex-shrink-0 transition-colors duration-300 ${isOpen ? "" : "opacity-70"}`}
                  >
                    {isOpen ? (
                      <Minus
                        className="w-5 h-5 text-[#f87171]"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        className="w-5 h-5 text-gray-400"
                        strokeWidth={2.5}
                      />
                    )}
                  </div>

                  <div className="flex flex-col w-full">
                    {/* Question */}
                    <span
                      className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300"}`}
                    >
                      {faq.question}
                    </span>

                    {/* Answer with smooth height transition */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2 sm:mt-3"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base leading-relaxed text-gray-400 pr-2 sm:pr-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
