"use client";

import { motion, Variants } from "framer-motion";

export default function ProblemStatement() {
  // 1. Define animation variants for the container (staggers the children)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each word revealing
      },
    },
  };

  // 2. Define animation variants for each individual word
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for a smooth spring-like feel
      },
    },
  };

  // Split text into two lines to maintain the <br /> break naturally
  const line1 = "Built for speed, optimized for conversions,".split(" ");
  const line2 = "designed to scale your business.".split(" ");

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center bg-[#08070b] p-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/Webmines/assets/infinte-loop.mp4" type="video/mp4" />
      </video>

      <div className="max-w-[460px] relative z-10">
        <motion.p
          className="font-serif text-3xl text-white leading-snug tracking-tight"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers animation when scrolled into view
          viewport={{ once: true, amount: 0.5 }} // Executes once when 50% of the element is visible
        >
          {line1.map((word, index) => (
            <motion.span
              key={`line1-${index}`}
              variants={wordVariants}
              className="inline-block mr-2" // inline-block is required for 'y' transforms to work
            >
              {word}
            </motion.span>
          ))}
          <br />
          {line2.map((word, index) => (
            <motion.span
              key={`line2-${index}`}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}
