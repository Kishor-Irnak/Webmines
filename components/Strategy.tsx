"use client";

import React, { useEffect, useRef } from "react";

export default function MasterStrategy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width: number;
    let height: number;
    let time = 0;
    let animationFrameId: number;
    let currentBlocks: any[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      if (canvas) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx?.scale(dpr, dpr);
      }

      // Responsive canvas blocks based on screen width
      const isMobile = width < 768;

      if (isMobile) {
        // Clean, vertically staggered layout for mobile
        currentBlocks = [
          { t: 35, l: 5, w: 70, h: 10, r: 218, g: 178, b: 239 }, // Purple
          { t: 47, l: 15, w: 70, h: 10, r: 241, g: 172, b: 255 }, // Pink
          { t: 59, l: 25, w: 70, h: 10, r: 245, g: 184, b: 103 }, // Orange
          { t: 71, l: 15, w: 70, h: 10, r: 255, g: 224, b: 112 }, // Yellow
          { t: 83, l: 25, w: 70, h: 10, r: 128, g: 178, b: 255 }, // Blue
        ];
      } else {
        // Original detailed layout for desktop
        currentBlocks = [
          { t: 40, l: 5, w: 26, h: 9, r: 218, g: 178, b: 239 }, // Purple
          { t: 49, l: 24, w: 26, h: 9, r: 241, g: 172, b: 255 }, // Pink
          { t: 58, l: 49, w: 22, h: 9, r: 245, g: 184, b: 103 }, // Orange
          { t: 67, l: 64, w: 20, h: 9, r: 255, g: 224, b: 112 }, // Yellow
          { t: 76, l: 83, w: 15, h: 9, r: 128, g: 178, b: 255 }, // Blue
        ];
      }
    }

    window.addEventListener("resize", resize);
    resize();

    function drawPixelFade(
      x: number,
      y: number,
      w: number,
      h: number,
      r: number,
      g: number,
      b: number,
    ) {
      if (!ctx) return;
      const solidPct = 0.35; // Percentage of block that is solid
      const solidW = w * solidPct;
      const fadeW = w * (1 - solidPct);

      // Draw solid left portion
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, solidW, h);

      // Draw pixelated fade right portion
      const blockSize = Math.max(6, Math.floor(h / 8)); // Dynamic pixel size
      const cols = Math.ceil(fadeW / blockSize);
      const rows = Math.ceil(h / blockSize);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const px = x + solidW + col * blockSize;
          const py = y + row * blockSize;

          // Base fade based on distance from solid part
          const normalizedDist = col / cols;

          // Create blocky noise pattern
          let noise =
            Math.sin(col * 12.9898 + row * 78.233 + time * 0.05) * 43758.5453;
          noise = noise - Math.floor(noise);

          // Calculate alpha: drops off horizontally, modulated by animated noise
          let alpha = 1.0 - normalizedDist * 1.2;
          alpha += (noise - 0.5) * 0.4;

          // Shimmering effect
          const shimmer = Math.sin(time * 0.02 + col * 0.2 + row * 0.5) * 0.15;
          alpha += shimmer;

          // Clamp alpha
          alpha = Math.max(0, Math.min(1, alpha));

          // Only draw visible pixels to create the 'scattered' edge
          if (alpha > 0.05) {
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.fillRect(px, py, blockSize + 0.5, blockSize + 0.5); // +0.5 prevents tiny gaps
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw each block dynamically
      currentBlocks.forEach((b) => {
        const px = (b.l / 100) * width;
        const py = (b.t / 100) * height;
        const pw = (b.w / 100) * width;
        const ph = (b.h / 100) * height;

        drawPixelFade(px, py, pw, ph, b.r, b.g, b.b);
      });

      time++;
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden antialiased text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white"
      style={{
        backgroundColor: "#F2EBE1",
        fontFamily: "'Space Mono', monospace",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Space+Mono:wght@400;700&display=swap');
        `,
        }}
      />

      {/* Background Animated Canvas (WebGL feel) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full"
      />

      {/* Grid Lines Container - Hidden on Mobile for clean view */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:flex justify-between px-[5vw]">
        <div className="relative w-px h-full bg-[#1A1A1A]/10">
          <span className="absolute bottom-[8vh] left-4 text-[10px] uppercase tracking-widest text-[#1A1A1A]/30 font-bold">
            Phase 1
          </span>
        </div>
        <div className="relative w-px h-full bg-[#1A1A1A]/10">
          <span className="absolute bottom-[8vh] left-4 text-[10px] uppercase tracking-widest text-[#1A1A1A]/30 font-bold">
            Phase 2
          </span>
        </div>
        <div className="relative w-px h-full bg-[#1A1A1A]/10">
          <span className="absolute bottom-[8vh] left-4 text-[10px] uppercase tracking-widest text-[#1A1A1A]/30 font-bold">
            Phase 3
          </span>
        </div>
        <div className="relative w-px h-full bg-[#1A1A1A]/10">
          <span className="absolute bottom-[8vh] left-4 text-[10px] uppercase tracking-widest text-[#1A1A1A]/30 font-bold">
            Phase 4
          </span>
        </div>
      </div>

      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full p-[5vw] lg:p-12 xl:p-16 flex flex-col md:flex-row justify-between items-start z-30">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#1A1A1A]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          How We Scale
          <br className="hidden md:block" /> Your Brand
        </h1>
        <div className="mt-6 md:mt-2 max-w-md flex flex-col gap-4 text-left">
          <div className="flex items-start gap-2 font-bold tracking-tight text-sm md:text-base md:justify-start">
            <span className="text-lg leading-none font-sans block transform -rotate-45 relative top-0.5">
              →
            </span>
            <div className="flex flex-col md:flex-row md:gap-2">
              <span>Built for conversions.</span>
              <span className="text-[#1A1A1A]/40 font-normal">
                Designed to scale.
              </span>
            </div>
          </div>
          {/* Paragraph hidden on mobile for clean design */}
          <p className="hidden md:block text-xs md:text-sm leading-relaxed text-[#444] tracking-tight font-normal">
            We don’t just design websites — we build conversion systems that
            turn traffic into real revenue.
          </p>
        </div>
      </header>

      {/* Timeline Text Overlay Container */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Block 1: Purple */}
        <div className="absolute top-[35vh] left-[5vw] w-[70vw] h-[10vh] md:top-[40vh] md:left-[5vw] md:w-[26vw] md:h-[9vh]">
          <span className="absolute top-2.5 left-3 text-xs uppercase tracking-widest font-bold text-[#111]">
            1. Core Research
          </span>
        </div>
        <div className="absolute hidden md:block md:top-[50vh] md:left-[5vw] md:w-[22vw]">
          <p className="text-xs uppercase tracking-wider text-[#666] leading-relaxed font-medium pr-4">
            Analyze audience and competitors to uncover real conversion drivers.
          </p>
        </div>

        {/* Block 2: Pink */}
        <div className="absolute top-[47vh] left-[15vw] w-[70vw] h-[10vh] md:top-[49vh] md:left-[24vw] md:w-[26vw] md:h-[9vh]">
          <span className="absolute top-2.5 left-3 text-xs uppercase tracking-widest font-bold text-[#111]">
            2. Conversion Design
          </span>
        </div>
        <div className="absolute hidden md:block md:top-[59vh] md:left-[24vw] md:w-[22vw]">
          <p className="text-xs uppercase tracking-wider text-[#666] leading-relaxed font-medium pr-4">
            Design high-converting Shopify stores and landing pages.
          </p>
        </div>

        {/* Block 3: Orange */}
        <div className="absolute top-[59vh] left-[25vw] w-[70vw] h-[10vh] md:top-[58vh] md:left-[49vw] md:w-[22vw] md:h-[9vh]">
          <span className="absolute top-2.5 left-3 text-xs uppercase tracking-widest font-bold text-[#111]">
            3. Dev & Launch
          </span>
        </div>
        <div className="absolute hidden md:block md:top-[68vh] md:left-[49vw] md:w-[22vw]">
          <p className="text-xs uppercase tracking-wider text-[#666] leading-relaxed font-medium pr-4">
            optimized builds ready for immediate launch.
          </p>
        </div>

        {/* Block 4: Yellow */}
        <div className="absolute top-[71vh] left-[15vw] w-[70vw] h-[10vh] md:top-[67vh] md:left-[64vw] md:w-[20vw] md:h-[9vh]">
          <span className="absolute top-2.5 left-3 text-xs uppercase tracking-widest font-bold text-[#111]">
            4. Optimization
          </span>
        </div>
        <div className="absolute hidden md:block md:top-[77vh] md:left-[64vw] md:w-[22vw]">
          <p className="text-xs uppercase tracking-wider text-[#666] leading-relaxed font-medium pr-4">
            Continuous A/B testing and data-driven improvements.
          </p>
        </div>

        {/* Block 5: Blue */}
        <div className="absolute top-[83vh] left-[25vw] w-[70vw] h-[10vh] md:top-[76vh] md:left-[83vw] md:w-[15vw] md:h-[9vh]">
          <span className="absolute top-2.5 left-3 text-xs uppercase tracking-widest font-bold text-[#111]">
            5. Scale & Growth
          </span>
        </div>
        <div className="absolute hidden md:block md:top-[86vh] md:left-[83vw] md:w-[15vw]">
          <p className="text-xs uppercase tracking-wider text-[#666] leading-relaxed font-medium pr-2">
            Transform your website into a scalable revenue engine.
          </p>
        </div>
      </div>
    </div>
  );
}
