import React from "react";

export default function FounderSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[100dvh] bg-[#0c121e] text-white font-sans">
      {/* Inline style used here to ensure fonts load properly in standalone preview.
        In a real Next.js app, you'd configure these in your layout.tsx using next/font/google.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-signature { font-family: 'Great Vibes', cursive; }
      `,
        }}
      />

      {/* Left Column - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 md:px-12 lg:px-24 bg-[#0a0029]">
        <div className="max-w-xl mx-auto md:mx-0">
          {/* Quote Icon */}
          <div className="text-[#cba265] text-5xl md:text-6xl font-serif-custom leading-none mb-4 opacity-90">
            “
          </div>

          {/* Main Heading/Quote */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif-custom font-medium leading-[1.3] md:leading-[1.2] tracking-wide mb-6 text-slate-50">
            Exceptional legal service, exceeded expectations, highly recommend
            their expertise.
          </h2>

          {/* Paragraph */}
          <p className="text-slate-400 text-sm md:text-base leading-[1.8] mb-8 md:mb-10 max-w-lg font-light tracking-wide">
            Working with Josh and their team was a game-changer for our
            business. Their exceptional legal service exceeded our expectations
            in every aspect. We highly recommend their expertise to anyone
            seeking top-notch legal representation.
          </p>

          {/* Star Rating */}
          <div className="flex gap-1.5 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 text-[#cba265] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>

          {/* Signature */}
          <div className="text-4xl md:text-[2.5rem] font-signature text-slate-200 mt-2">
            Nishant Raj
          </div>
        </div>
      </div>

      {/* Right Column - Image & Overlay */}
      <div className="w-full md:w-1/2 relative min-h-[450px] sm:min-h-[500px] md:min-h-full flex-1">
        {/* Placeholder Image (Matches the handsome businessman aesthetic) */}
        <img
          src="https://i.postimg.cc/yd2s4HFx/founder-Pfp.jpg"
          alt="Nishant Raj"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Subtle Dark Gradient Overlay for better contrast on the right side if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:from-black/40 md:via-transparent"></div>

        {/* Glassmorphism Info Card */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto md:bottom-12 md:left-12 bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 sm:max-w-[320px]">
          <p className="text-[#cba265] text-[10px] font-semibold tracking-[0.2em] uppercase mb-1.5">
            Founder & CEO
          </p>
          <h3 className="text-white text-2xl font-serif-custom mb-2">
            Nishant Raj
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed font-light">
            CEO of a leading tech startup, revolutionizing industries with
            innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
