import React from "react";
import Image from "next/image";

export default function HowItWorksSteps() {
  const steps = [
    {
      title: "CHECKOUT",
      description:
        "Ensuring accurate delivery details through secure OTP-based checkout verification.",
      image: "/EvocLabs-Next.js/assets/assets1-dark.jpeg",
    },
    {
      title: "AI CALLING AGENT",
      description:
        "Automated voice calls in a natural human-like manner to confirm and validate orders.",
      image: "/EvocLabs-Next.js/assets/assets3-dark.jpeg",
    },
    {
      title: "WHATSAPP MESSAGING & DISCOUNTS",
      description:
        "Converting abandoned carts into confirmed orders using AI-driven WhatsApp offers.",
      image: "/EvocLabs-Next.js/assets/assets2-dark.jpeg",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto rounded-2xl p-8 md:p-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-8">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center border border-zinc-200 rounded-md px-3 py-1 text-xs text-zinc-600 mb-6 bg-zinc-100">
              <svg
                className="w-3 h-3 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.23.615 1.738 5.42a1 1 0 01-.286 1.05A3.98 3.98 0 0115 15a3.98 3.98 0 01-2.669-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.239 7.58l1.715 5.349a1 1 0 01-.285 1.05A3.98 3.98 0 015 15a3.98 3.98 0 01-2.669-1.019 1 1 0 01-.286-1.05l1.738-5.42-1.23-.615a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              How it works
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-900 leading-[1.1]">
              How we <br />
              <span className="text-[#3b38f2]">secure a order</span>
            </h2>
          </div>

          {/* Subheading text */}
          <div className="max-w-sm lg:pt-14 text-zinc-600 text-sm leading-relaxed">
            <p></p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-zinc-200">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col p-6 lg:p-8 border-r border-b border-zinc-200 hover:bg-zinc-50 transition-colors duration-300"
            >
              {/* Image Section */}
              <div className="w-full aspect-[4/3] relative rounded-md mb-8 overflow-hidden border border-zinc-100 bg-zinc-50/50">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Step Text */}
              <h3 className="text-lg font-medium mb-3 text-zinc-900">
                {step.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
