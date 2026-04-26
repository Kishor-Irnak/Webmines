"use client";

import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const holdAnimationRef = useRef<number | null>(null);
  const startTRef = useRef<number | null>(null);

  const circ = 2 * Math.PI * 38; // Circle circumference for the progress ring

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (innerCursorRef.current) {
        innerCursorRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;

      if (outerCursorRef.current) {
        outerCursorRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      }

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerX = cx - rect.left;
        const containerY = cy - rect.top;
        containerRef.current.style.setProperty("--cursor-x", `${containerX}px`);
        containerRef.current.style.setProperty("--cursor-y", `${containerY}px`);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    loop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleHoldStart = () => {
    startTRef.current = null;
    const dur = 1500; // Duration in ms

    const step = (t: number) => {
      if (!startTRef.current) startTRef.current = t;
      const progress = Math.min((t - startTRef.current) / dur, 1);

      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = `${circ - progress * circ}`;
      }

      if (progress < 1) {
        holdAnimationRef.current = requestAnimationFrame(step);
      } else {
        // Action to trigger when hold is complete
        console.log("Enter triggered!");
        // window.location.href = '/next-page';
      }
    };

    holdAnimationRef.current = requestAnimationFrame(step);
  };

  const handleHoldEnd = () => {
    if (holdAnimationRef.current)
      cancelAnimationFrame(holdAnimationRef.current);
    if (ringRef.current) {
      ringRef.current.style.transition = "stroke-dashoffset 0.3s ease-out";
      ringRef.current.style.strokeDashoffset = `${circ}`;
      setTimeout(() => {
        if (ringRef.current) ringRef.current.style.transition = "none";
      }, 300);
    }
  };

  const handleLinkHover = () => {
    if (outerCursorRef.current) {
      outerCursorRef.current.style.transform += " scale(1.5)";
    }
  };

  const handleLinkLeave = () => {
    if (outerCursorRef.current) {
      outerCursorRef.current.style.transform =
        outerCursorRef.current.style.transform.replace(" scale(1.5)", "");
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-white selection:bg-white selection:text-[#1A1A1A] overflow-hidden font-serif"
      style={
        {
          backgroundColor: "#1a1c1a",
          "--reveal-size": "250px",
        } as React.CSSProperties
      }
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Syncopate:wght@400;700&display=swap');

        .bg-layer {
          position: absolute;
          inset: 0;
          background-image: url('/Webmines/assets/CTA.png');
          background-size: cover;
          background-position: center;
        }

        .layer-sharp {
          z-index: 1;
          filter: brightness(0.9) contrast(1.1);
        }

        .layer-mist {
          z-index: 2;
          filter: blur(25px) grayscale(0.4) brightness(0.9);
          transform: scale(1.05);
          mask-image: radial-gradient(circle var(--reveal-size, 250px) at var(--cursor-x, 50vw) var(--cursor-y, 50vh), transparent 0%, rgba(0, 0, 0, 0.5) 40%, black 100%);
          -webkit-mask-image: radial-gradient(circle var(--reveal-size, 250px) at var(--cursor-x, 50vw) var(--cursor-y, 50vh), transparent 0%, rgba(0, 0, 0, 0.5) 40%, black 100%);
        }

        .noise {
          position: absolute;
          inset: 0;
          z-index: 3;
          opacity: 0.12;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }

        .nav-link {
          position: relative;
          font-family: 'Syncopate', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .cursor-outer {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 100;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s;
          mix-blend-mode: difference;
        }

        .cursor-inner {
          position: fixed;
          top: 0;
          left: 0;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          z-index: 101;
          transform: translate(-50%, -50%);
        }
      `,
        }}
      />

      <div className="bg-layer layer-sharp"></div>
      <div className="bg-layer layer-mist" id="mistLayer"></div>
      <div className="noise"></div>

      {/* Custom Cursors */}
      <div ref={outerCursorRef} className="cursor-outer hidden md:block"></div>
      <div ref={innerCursorRef} className="cursor-inner hidden md:block"></div>

      <div className="absolute inset-0 z-10 p-10 grid grid-cols-3 grid-rows-3 pointer-events-none">
        {/* Top Left - Logo */}
        <div className="col-start-1 row-start-1 flex items-start">
          <a
            href="#"
            className="pointer-events-auto group flex items-center gap-3"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <span
              className="font-sans text-xs tracking-[0.3em] font-bold text-white/90"
              style={{ fontFamily: "'Syncopate', sans-serif" }}
            >
              WEBMINES
            </span>
          </a>
        </div>

        {/* Top Right - Coordinates */}
        <div className="col-start-3 row-start-1 flex justify-end items-start text-right">
          <div
            className="font-sans text-[0.6rem] tracking-widest text-white/50 flex flex-col gap-1"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            <span>45.4215° N</span>
            <span>75.6972° W</span>
          </div>
        </div>

        {/* Center - Hero Title */}
        <div className="col-start-1 col-span-3 row-start-2 flex flex-col items-center justify-center relative">
          <div className="relative z-10 text-center mix-blend-overlay">
            <h1
              className="text-[clamp(4rem,12vw,16rem)] leading-[0.85] font-light italic tracking-tighter opacity-90"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="block hover:translate-x-4 transition-transform duration-1000 ease-out">
                Infinite
              </span>
              <span className="block ml-[20%] hover:-translate-x-4 transition-transform duration-1000 ease-out">
                Growth
              </span>
            </h1>
          </div>
          <p
            className="mt-8 font-sans text-xs tracking-[0.5em] text-white/60 uppercase animate-[bounce_4s_infinite]"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            Crafted experiences that turn attention into revenue.
          </p>
        </div>

        {/* Bottom Left - Navigation */}
        <div className="col-start-1 row-start-3 flex items-end">
          <nav className="flex flex-col gap-6 pointer-events-auto">
            {["Create", "Feel", "Convert"].map((item) => (
              <a
                key={item}
                href="#"
                className="nav-link"
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Center - Hold to Enter Action */}
        <div className="col-start-2 row-start-3 flex flex-col items-center justify-end pb-4">
          <div
            className="relative pointer-events-auto group flex items-center justify-center w-24 h-24 rounded-full cursor-none touch-none transition-transform duration-500 hover:scale-105"
            onMouseDown={handleHoldStart}
            onMouseUp={handleHoldEnd}
            onMouseLeave={(e) => {
              handleHoldEnd();
              handleLinkLeave();
            }}
            onTouchStart={handleHoldStart}
            onTouchEnd={handleHoldEnd}
            onMouseEnter={handleLinkHover}
          >
            {/* Background dashed circle for aesthetics */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              viewBox="0 0 80 80"
            >
              <circle
                cx="40"
                cy="40"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            </svg>

            {/* The active filling progress ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 80 80"
            >
              <circle
                ref={ringRef}
                cx="40"
                cy="40"
                r="38"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray={circ}
                strokeDashoffset={circ}
                strokeLinecap="round"
                className="transition-none"
              />
            </svg>

            {/* Center Text */}
            <span
              className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: "'Syncopate', sans-serif" }}
            >
              Hold
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
