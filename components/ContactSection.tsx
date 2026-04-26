"use client";

import React from "react";
import { ArrowUpRight, ChevronDown, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactFormSection() {
  return (
    <section id="contact" className="bg-[#F2EBE1] text-[#1A1A1A] px-4 py-20 md:px-8 lg:px-16 xl:px-24 font-sans selection:bg-[#1A1A1A] selection:text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-none mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-sm leading-relaxed lg:pb-2">
              Tell us about your project requirements and we'll get back to you
              with a proposal within 24 hours.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Form Container */}
          <div className="bg-[#FCFCFC] rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                {/* Name */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[13px] font-medium text-gray-700 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="bg-[#F4F4F5] w-full rounded-2xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[13px] font-medium text-gray-700 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-[#F4F4F5] w-full rounded-2xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[13px] font-medium text-gray-700 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 234 567 8900"
                    className="bg-[#F4F4F5] w-full rounded-2xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Project Category */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[13px] font-medium text-gray-700 ml-1">
                    What do you want to build?
                  </label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      required
                      className="bg-[#F4F4F5] w-full rounded-2xl px-5 py-4 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select website type ...
                      </option>
                      <option value="landing">Landing Page</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="hotel">Hotel / Booking</option>
                      <option value="corporate">Corporate Website</option>
                      <option value="blog">Blog / Magazine</option>
                      <option value="custom">Custom Web App</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2.5 pt-2">
                <label className="text-[13px] font-medium text-gray-700 ml-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements, goals, and any specific features you need..."
                  className="bg-[#F4F4F5] w-full rounded-2xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 transition-all placeholder:text-gray-400 resize-y min-h-[120px]"
                ></textarea>
              </div>

              {/* Submit Area */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  className="bg-[#111] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#1A1A1A]/80 transition-colors shadow-sm"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  className="bg-[#111] text-white p-4 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/80 transition-colors shadow-sm"
                  aria-label="Submit"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Image Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden h-[400px] lg:h-auto min-h-[500px] shadow-sm hidden lg:block">
            <img
              src="https://i.postimg.cc/vZG04GJW/web-image.jpg"
              alt="Web development coding setup"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Badge overlay */}
            <div className="absolute top-6 right-6">
              <span className="inline-block border border-white/60 bg-white/10 backdrop-blur-md text-white text-[13px] font-medium px-5 py-2 rounded-full shadow-sm">
                Web Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
