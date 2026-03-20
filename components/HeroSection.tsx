import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-hidden">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/EvocLabs-Next.js/assets/CTA.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Top Navigation */}
      <nav className="relative z-10 flex flex-col md:flex-row justify-between p-6 md:p-10 text-sm uppercase tracking-widest">
        <div className="flex flex-col md:flex-row gap-x-12 gap-y-2">
          <span className="font-bold">Evoc Labs</span>
          <div className="flex flex-col opacity-80 text-[10px] md:text-xs leading-tight">
            <span>Onboard</span>
            <span>Get a Website</span>
            <span>Start Selling</span>
          </div>
        </div>
        <div className="flex gap-8 mt-4 md:mt-0 opacity-80">
          <span>Quick start</span>
          <span>Live in 2 days</span>
        </div>
      </nav>

      {/* 3. Main Headline Area */}
      <main className="relative z-10 flex-grow flex items-center px-6 md:px-12 py-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tighter max-w-4xl">
          Skip the Hold Music. <br />
        </h1>
      </main>

      {/* 4. Bottom Call-to-Action Blocks */}
      <div className="relative z-10 flex flex-col md:flex-row w-full border-t border-white/10">
        {/* Left Block: Test It Yourself */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between min-h-[250px] bg-gradient-to-r from-black to-blue-950/30">
          <p className="text-xs uppercase tracking-widest mb-8">
            Test It Yourself
          </p>
          <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            <input
              type="text"
              placeholder="Your phone number"
              className="w-full md:w-64 bg-white text-black p-4 text-lg outline-none"
            />
            <button className="text-3xl md:text-5xl border-b-2 border-white pb-1 hover:opacity-70 transition-opacity">
              Get a call
            </button>
          </div>
        </div>

        {/* Right Block: Book a Demo */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between min-h-[250px] bg-[#0004ff] text-white">
          <p className="text-xs uppercase tracking-widest mb-8">
            See it in Action
          </p>
          <button className="text-3xl md:text-5xl font-medium border-b-2 border-white self-start pb-1 hover:opacity-70 transition-opacity">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
