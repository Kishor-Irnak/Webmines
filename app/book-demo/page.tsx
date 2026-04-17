"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    revenue: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Images for the carousel
  const carouselImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200", // Team/Office
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200", // Tech/Laptop
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", // Collaboration
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200", // Modern Workspace
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Changes image every 4 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }

    // Phone validation: exactly 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.category) {
      newErrors.category = "Please select a product category";
    }

    if (!formData.revenue) {
      newErrors.revenue = "Please select your monthly revenue range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6 md:p-12 lg:p-20 flex items-center justify-center relative">
      {/* Top Left Navigation - Return Home */}
      <Link
        href="/"
        className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors group z-20"
      >
        <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span>Back to Home</span>
      </Link>

      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-8">
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.1] max-w-2xl">
            Get Started
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xs lg:text-right leading-relaxed mb-2">
            Tell us when you'd like to meet and we'll confirm availability
            within 24 hours.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Form Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {isSubmitted ? (
              <div className="bg-[#171717] border border-green-500/20 rounded-2xl p-10 text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold">Request Received!</h2>
                <p className="text-neutral-400">
                  Thank you, {formData.name}. Our team will call you at{" "}
                  <span className="text-white">+91 {formData.phone}</span>{" "}
                  shortly to schedule your customized demo.
                </p>
                <div className="flex flex-col items-center gap-3 pt-6">
                  <Link
                    href="/"
                    className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    Return to Home
                  </Link>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    Edit your request
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Your Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider ml-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className={`w-full bg-[#171717] border ${errors.name ? "border-red-500/50" : "border-transparent"} focus:border-neutral-700 hover:bg-[#1f1f1f] transition-colors rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-500 mt-1 ml-1 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider ml-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex">
                    <span className="bg-[#171717] border-r border-neutral-800 rounded-l-xl px-4 py-3 text-sm text-neutral-400 flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10 Digit Phone Number"
                      maxLength={10}
                      className={`w-full bg-[#171717] border ${errors.phone ? "border-red-500/50" : "border-transparent"} focus:border-neutral-700 hover:bg-[#1f1f1f] transition-colors rounded-r-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[10px] text-red-500 mt-1 ml-1 font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Category Dropdown */}
                <div className="space-y-2 flex flex-col">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider ml-1">
                    Category of products you sell?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full bg-[#171717] border ${errors.category ? "border-red-500/50" : "border-transparent"} focus:border-neutral-700 hover:bg-[#1f1f1f] transition-colors rounded-xl px-4 py-3 text-sm ${formData.category ? "text-white" : "text-neutral-400"} outline-none appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="electronics">Electronics & Gadgets</option>
                      <option value="home">Home & Living</option>
                      <option value="food">Food & Beverage</option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="dropshipping">Dropshipping</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="#737373"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.category && (
                    <p className="text-[10px] text-red-500 mt-1 ml-1 font-medium">
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Revenue Dropdown */}
                <div className="space-y-2 flex flex-col">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider ml-1">
                    Monthly revenue range{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className={`w-full bg-[#171717] border ${errors.revenue ? "border-red-500/50" : "border-transparent"} focus:border-neutral-700 hover:bg-[#1f1f1f] transition-colors rounded-xl px-4 py-3 text-sm ${formData.revenue ? "text-white" : "text-neutral-400"} outline-none appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="20k-30k">₹20,000-₹30,000</option>
                      <option value="30k-50k">₹30,000-₹50,000</option>
                      <option value="50k-70k">₹50,000-₹70,000</option>
                      <option value="70k-100k">₹70,000-₹1,00,000</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="#737373"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.revenue && (
                    <p className="text-[10px] text-red-500 mt-1 ml-1 font-medium">
                      {errors.revenue}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all shrink-0 flex items-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Request a Call"
                    )}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black p-3.5 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors shrink-0 group disabled:opacity-70"
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Image Carousel Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative min-h-[400px] lg:min-h-[550px] rounded-3xl overflow-hidden group">
            {/* Carousel Images */}
            {carouselImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Demo illustration ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Subtle overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 to-transparent z-10 pointer-events-none"></div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {carouselImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentImageIndex
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
