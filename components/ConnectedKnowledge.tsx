import React from "react";
import {
  SiDiscord,
  SiSlack,
  SiZendesk,
  SiIntercom,
  SiJira,
} from "react-icons/si";
import {
  Layers,
  Book,
  Sparkles,
  Settings,
  FileText,
  Database,
  User,
} from "lucide-react";

const ConnectedKnowledge = () => {
  return (
    <section className="bg-[#08070b] py-20 lg:py-32 relative overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-8">
          {/* Left Text */}
          <div className="w-full xl:w-5/12 flex flex-col justify-center text-center xl:text-left">
            <div className="text-[#5e6ad2] text-sm font-bold tracking-wider uppercase mb-5">
              CONNECTED KNOWLEDGE
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] leading-[1.1] font-medium text-[#f7f8f8] mb-6 tracking-tight">
              A connected layer for product knowledge
            </h2>
            <p className="text-[17px] text-[#8a8f98] leading-[1.6] max-w-[480px] mx-auto xl:mx-0 font-light">
              Unify every knowledge source — from product updates and community
              feedback to on-team expertise — into one intelligent layer that
              lives in your docs, in your product, and far beyond.
            </p>
          </div>

          {/* Right Diagram Container */}
          <div className="w-full xl:w-7/12 relative group perspective-1000">
            <div className="relative aspect-square md:aspect-4/3 w-full max-w-[800px] mx-auto bg-[#0c0c0c] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] flex items-center justify-center">
              {/* Background glowing orbs replacing the image swooshes */}
              <div className="absolute -right-[100px] -top-[100px] w-[500px] h-[500px] bg-[#3b82f6]/15 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute right-[50px] top-[200px] w-[200px] h-[400px] bg-[#d838e0]/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute -right-[50px] -bottom-[100px] w-[400px] h-[400px] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none" />

              {/* The 800x600 Scalable Canvas */}
              <div
                className="absolute origin-center transition-transform duration-500 ease-out 
                           scale-[0.4] min-[400px]:scale-[0.45] sm:scale-[0.6] md:scale-[0.8] 
                           lg:scale-[0.9] xl:scale-[0.8] 2xl:scale-[0.9]"
                style={{ width: "800px", height: "600px" }}
              >
                {/* SVG Connections Container */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 800 600"
                >
                  <defs>
                    <marker
                      id="arrow-primary"
                      viewBox="0 0 10 10"
                      refX="5"
                      refY="5"
                      markerWidth="4"
                      markerHeight="4"
                      orient="auto"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
                    </marker>
                    <marker
                      id="arrow-gray"
                      viewBox="0 0 10 10"
                      refX="5"
                      refY="5"
                      markerWidth="4"
                      markerHeight="4"
                      orient="auto"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#444" />
                    </marker>
                  </defs>

                  {/* Top to Mid Lines (Blue dashed) */}
                  <path
                    d="M 260 180 L 260 225 L 360 225 L 360 266"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeOpacity="0.5"
                    markerEnd="url(#arrow-primary)"
                  />
                  <path
                    d="M 540 180 L 540 225 L 460 225 L 460 266"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeOpacity="0.5"
                    markerEnd="url(#arrow-primary)"
                  />

                  {/* Mid to Bottom Main (Blue dashed) */}
                  <path
                    d="M 360 342 L 360 396"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeOpacity="0.6"
                    markerEnd="url(#arrow-primary)"
                  />
                  <path
                    d="M 460 342 L 460 396"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrow-gray)"
                  />

                  {/* Sparkle horizontal connections (Gray dashed) */}
                  <path
                    d="M 104 480 Q 170 480 240 480"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                  />
                  <path
                    d="M 720 480 Q 645 480 570 480"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                  />
                </svg>

                {/* 1. Apps Box */}
                <div className="absolute top-[120px] left-[140px] w-[240px] h-[60px] bg-[#15141a] rounded-[16px] border border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-between px-5 z-10">
                  <SiDiscord className="text-[#5865F2] w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
                  <div className="w-7 h-7 bg-[#5e6ad2]/20 rounded-[8px] flex items-center justify-center border border-[#5e6ad2]/30 hover:scale-110 transition-transform cursor-pointer">
                    <Database className="w-4 h-4 text-[#5e6ad2]" />
                  </div>
                  <SiJira className="text-[#0052CC] w-6 h-6 bg-white rounded p-0.5 hover:scale-110 transition-transform cursor-pointer" />
                  <SiSlack className="text-[#E01E5A] w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
                  <div className="w-7 h-7 bg-black rounded-[8px] border border-white/20 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <div className="flex gap-[2px]">
                      <div className="w-1 h-3 bg-white rounded-full bg-opacity-80" />
                      <div className="w-1 h-3 bg-white rounded-full bg-opacity-80" />
                      <div className="w-1 h-3 bg-white rounded-full bg-opacity-80" />
                    </div>
                  </div>
                </div>

                {/* 2. Avatars Box */}
                <div className="absolute top-[120px] left-[440px] w-[200px] h-[60px] bg-[#1a1a1a] rounded-[16px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center px-4 z-10">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 rounded-full border-[3px] border-[#1a1a1a] overflow-hidden bg-[#2a2a2a] flex items-center justify-center hover:z-20 hover:scale-110 transition-all cursor-pointer shadow-sm relative"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${idx + 10}`}
                          alt="Team member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Middle Left Box (Highlighted in blue) */}
                <div className="absolute top-[270px] left-[324px] w-[72px] h-[72px] bg-[#1a1a1a] rounded-[20px] border border-[#3b82f6]/40 shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center justify-center z-10">
                  <div className="bg-[#3b82f6]/10 w-[50px] h-[50px] rounded-[14px] flex items-center justify-center border border-[#3b82f6]/20">
                    <Layers className="text-[#3b82f6] w-7 h-7" />
                  </div>
                </div>

                {/* 4. Middle Right Box (Standard gray) */}
                <div className="absolute top-[270px] left-[424px] w-[72px] h-[72px] bg-[#1a1a1a] rounded-[20px] border border-white/10 shadow-lg flex items-center justify-center z-10">
                  <div className="bg-white/5 w-[50px] h-[50px] rounded-[14px] flex items-center justify-center border border-white/5 relative">
                    <Book className="text-[#8b8b8f] w-7 h-7" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
                  </div>
                </div>

                {/* 5. Main Bottom Window */}
                <div className="absolute top-[400px] left-[250px] w-[320px] h-[180px] bg-[#141414] rounded-[20px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] flex flex-col z-10 overflow-hidden group-hover:border-white/20 transition-colors">
                  {/* Window Header */}
                  <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#1a1a1a]">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  {/* Window Content */}
                  <div className="flex-1 flex items-center justify-center relative bg-[#0f0f0f] border-t border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-[#3b82f6]/5 to-transparent pointer-events-none" />
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg glow">
                      <FileText className="text-white w-8 h-8" />
                    </div>
                    {/* Abstract content blocks */}
                    <div className="absolute bottom-5 right-5 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Settings className="text-[#8b8b8f] w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Sub-node Sparkles around window */}
                <div className="absolute top-[456px] left-[80px] w-[48px] h-[48px] bg-[#1a1a1a] rounded-full border border-white/10 flex items-center justify-center shadow-lg z-10">
                  <Sparkles className="text-[#5865F2] w-5 h-5" />
                </div>

                <div className="absolute top-[456px] left-[170px] w-[48px] h-[48px] bg-[#1a1a1a] rounded-full border border-white/10 flex items-center justify-center shadow-lg z-10">
                  <div className="w-5 h-5 rounded-full border-2 border-dashed border-[#8b8b8f] flex items-center justify-center animate-spin-slow" />
                </div>

                <div className="absolute top-[456px] left-[600px] w-[48px] h-[48px] bg-[#1a1a1a] rounded-full border border-white/10 flex items-center justify-center shadow-lg z-10">
                  <Sparkles className="text-[#3b82f6] w-5 h-5" />
                </div>

                <div className="absolute top-[456px] left-[690px] w-[48px] h-[48px] bg-[#1a1a1a] rounded-full border border-white/10 flex items-center justify-center shadow-lg z-10">
                  <div className="w-6 h-6 border-[3px] border-[#d838e0]/60 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedKnowledge;
