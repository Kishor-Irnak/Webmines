import React from "react";
import dynamic from "next/dynamic";
import RealAdvisor from "@/components/RealAdvisor";
import WhyChoosUs from "@/components/WhyChoosUs";
import HeroSection from "@/components/HeroSection";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import TestimonalCard from "@/components/TestimonalCard";
import FounderSection from "@/components/FounderSection";
import FAQ from "@/components/FAQ";
import MasterStrategy from "../components/Strategy";

// Critical components - load with ssr true but wrap in dynamic for chunking
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const ClusterFeatures = dynamic(() => import("@/components/ClusterFeatures"), {
  ssr: true,
});
const StatLabel = dynamic(() => import("@/components/StatLabel"), {
  ssr: true,
});
const ConnectedKnowledge = dynamic(
  () => import("@/components/ConnectedKnowledge"),
  {
    ssr: true,
  },
);
const ProblemStatement = dynamic(
  () => import("@/components/problem-statement"),
  {
    ssr: true,
  },
);

// Below the fold components - load with ssr true for SEO, but dynamic for bundle splitting
const FooterComponent = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover relative overflow-x-clip bg-[#08070b]">
      <Navbar />
      <main className="relative" style={{ zIndex: 10 }}>
        <Hero />
        <div className="relative z-10 bg-[#08070b]">
          <ProblemStatement />
          <MasterStrategy />
          <StatLabel />
          <RealAdvisor />
          <ClusterFeatures />
          <TestimonalCard />
          <HowItWorksSteps />
          <FounderSection />
          <WhyChoosUs />
          <FAQ />
          <HeroSection />
        </div>
      </main>
      <div className="relative" style={{ zIndex: 10 }}>
        <FooterComponent />
      </div>
    </div>
  );
}
