"use client"; // Required for intersection observer (useEffect) in Next.js App Router

import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Work() {
  useEffect(() => {
    // Scroll Observer Script converted to React useEffect hook
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(
      "#collection .animate-on-scroll",
    );
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="collection"
      className="bg-[#F2EBE1] text-neutral-900 py-24 md:py-32 relative overflow-hidden"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

          @keyframes animationIn {
            0% {
              opacity: 0;
              transform: translateY(30px);
              filter: blur(8px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0px);
            }
          }

          .animate-on-scroll {
            opacity: 0;
          }

          .animate-on-scroll.animate {
            animation: animationIn 0.8s ease-out forwards;
            opacity: 1;
          }

          .font-bricolage {
            font-family: 'Bricolage Grotesque', sans-serif;
          }

          .font-serif {
            font-family: 'Playfair Display', serif;
          }
        `,
        }}
      />

      {/* Meaningful Background Decor (Replacing the "02") */}
      <div className="absolute top-8 left-2 md:left-8 z-0 opacity-5 font-bricolage font-bold text-[14rem] md:text-[18rem] leading-none text-black pointer-events-none select-none tracking-tighter">
        &lt;/&gt;
      </div>

      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Area */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 animate-on-scroll"
          style={{ animationDelay: "0.1s" }}
        >
          <div>
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-4 block">
              <Icon icon="solar:monitor-smartphone-linear" width="16" />
              Featured Case Studies
            </span>
            <h2 className="text-5xl md:text-7xl leading-[0.95] tracking-tighter font-bricolage font-light text-neutral-900">
              Crafting <br />
              <span className="text-neutral-500 font-bricolage font-light">
                Digital Realities.
              </span>
            </h2>
          </div>

          <div className="flex gap-8 items-baseline border-b border-neutral-200 pb-2 flex-wrap">
            <button className="text-2xl md:text-3xl text-neutral-900 font-bricolage font-light border-b-2 border-black pb-1">
              All Work
            </button>
            <button className="text-2xl md:text-3xl text-neutral-400 hover:text-neutral-700 transition-colors font-bricolage font-light pb-1">
              E-Commerce
            </button>
            <button className="text-2xl md:text-3xl text-neutral-400 hover:text-neutral-700 transition-colors font-bricolage font-light pb-1">
              SaaS
            </button>
            <button className="text-2xl md:text-3xl text-neutral-400 hover:text-neutral-700 transition-colors font-bricolage font-light pb-1">
              Corporate
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Project Card 1: E-Commerce */}
          <div
            className="group relative aspect-[16/10] w-full bg-[#151515] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-40 z-20 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm text-white">
                <Icon icon="solar:arrow-right-up-linear" width="24" />
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://i.pinimg.com/736x/5d/e0/93/5de093ef89b1ccb4d72a41b9a88120e5.jpg"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-80"
                alt="Minimalist E-Commerce Interface Design"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            </div>
            <div className="mt-auto relative z-10">
              <div className="mb-4">
                <Icon
                  icon="simple-icons:nextdotjs"
                  width="32"
                  height="32"
                  className="text-white/80"
                />
              </div>
              <h3 className="text-white text-3xl md:text-4xl tracking-tight leading-none mb-4 font-bricolage font-light">
                Aura Headless Store
              </h3>
              <div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-5">
                <span className="text-xl font-serif italic">2024</span>
                <span className="text-xs tracking-wide uppercase text-white/50">
                  Next.js & Shopify
                </span>
              </div>
            </div>
          </div>

          {/* Project Card 2: SaaS Dashboard */}
          <div
            className="group relative aspect-[16/10] w-full bg-[#151515] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-40 z-20 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm text-white">
                <Icon icon="solar:arrow-right-up-linear" width="24" />
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://i.pinimg.com/1200x/d3/61/06/d361061b6e68a7da5c8d38f1f8133131.jpg"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-80"
                alt="SaaS Analytics Dashboard UI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            </div>
            <div className="mt-auto relative z-10">
              <div className="mb-4">
                <Icon
                  icon="simple-icons:react"
                  width="32"
                  height="32"
                  className="text-white/80"
                />
              </div>
              <h3 className="text-white text-3xl md:text-4xl tracking-tight leading-none mb-4 font-bricolage font-light">
                MetricsPro Platform
              </h3>
              <div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-5">
                <span className="text-xl font-serif italic">2023</span>
                <span className="text-xs tracking-wide uppercase text-white/50">
                  React & Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          {/* Project Card 3: Corporate/Agency */}
          <div
            className="group relative aspect-[16/10] w-full bg-[#151515] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-40 z-20 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm text-white">
                <Icon icon="solar:arrow-right-up-linear" width="24" />
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://i.pinimg.com/736x/ce/8e/1f/ce8e1f60a97cab3f9137677e66edb679.jpg"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-80"
                alt="Modern Corporate Web Design"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            </div>
            <div className="mt-auto relative z-10">
              <div className="mb-4">
                <Icon
                  icon="simple-icons:figma"
                  width="32"
                  height="32"
                  className="text-white/80"
                />
              </div>
              <h3 className="text-white text-3xl md:text-4xl tracking-tight leading-none mb-4 font-bricolage font-light">
                FinEdge Corporate
              </h3>
              <div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-5">
                <span className="text-xl font-serif italic">2023</span>
                <span className="text-xs tracking-wide uppercase text-white/50">
                  UI/UX Design & Webflow
                </span>
              </div>
            </div>
          </div>

          {/* Project Card 4: Creative Development */}
          <div
            className="group relative aspect-[16/10] w-full bg-[#151515] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-40 z-20 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm text-white">
                <Icon icon="solar:arrow-right-up-linear" width="24" />
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://i.pinimg.com/1200x/5f/26/81/5f26813372e8df83a35831389b757450.jpg"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-80"
                alt="Creative Web Development Code"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            </div>
            <div className="mt-auto relative z-10">
              <div className="mb-4">
                <Icon
                  icon="simple-icons:greensock"
                  width="32"
                  height="32"
                  className="text-white/80"
                />
              </div>
              <h3 className="text-white text-3xl md:text-4xl tracking-tight leading-none mb-4 font-bricolage font-light">
                Lumina Creative
              </h3>
              <div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-5">
                <span className="text-xl font-serif italic">2024</span>
                <span className="text-xs tracking-wide uppercase text-white/50">
                  WebGL & GSAP Animations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div
          className="mt-16 flex justify-center animate-on-scroll"
          style={{ animationDelay: "0.6s" }}
        >
          <button className="group flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl">
            <span className="font-bricolage font-medium tracking-wide">
              View All Work
            </span>
            <Icon
              icon="solar:arrow-right-linear"
              width="20"
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
