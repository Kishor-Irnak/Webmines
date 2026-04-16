"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/EvocLab_Logo.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services", hasDropdown: false },
    { name: "How It Works", href: "/#how-it-works", hasDropdown: false },
    { name: "Testimonials", href: "/#testimonials", hasDropdown: false },
    { name: "About", href: "/#about", hasDropdown: false },
    { name: "FAQ", href: "/#faq", hasDropdown: false },
    { name: "Blogs", href: "/blogs", hasDropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center transition-all duration-500 ${
        isScrolled
          ? "bg-[#08070b]/95 backdrop-blur-md border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 relative">
            <Image
              src={logoImg}
              alt="Evoc Labs"
              fill
              className="object-contain object-left filter brightness-125"
              priority
            />
          </div>
          <div
            className="flex items-baseline gap-1"
            style={{ marginLeft: "5px" }}
          >
            <span className="text-white font-bold tracking-tight text-lg inline-block font-geist">
              Web
            </span>
            <span
              className="italic text-white tracking-tight text-xl font-instrument-serif"
              style={{ fontFamily: '\"Playfair Display\", serif' }}
            >
              Mines
            </span>
          </div>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown size={14} className="opacity-70" />
              )}
            </Link>
          ))}
        </div>

        {/* Right: Auth Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/#login"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block"
          >
            Log In
          </Link>
          <Link
            href="/book-demo"
            className="group bg-[#ff4646] text-white text-sm font-medium pl-6 pr-5 py-2.5 rounded-full hidden sm:flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <span>Book a Demo</span>
            <div className="transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-12">
              <FaPaperPlane
                size={12}
                className="rotate-12 transition-colors duration-300 group-hover:text-white"
              />
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-zinc-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-zinc-900 border border-white/10 rounded-2xl p-6 md:hidden z-40 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={18} />}
                </Link>
              ))}

              <Link
                href="/book-demo"
                onClick={() => setIsMenuOpen(false)}
                className="group bg-blue-600 text-white flex items-center justify-center gap-3 py-4 rounded-full font-semibold mt-2 transition-all"
              >
                <span>Book a Demo</span>
                <div className="transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-12">
                  <FaPaperPlane
                    size={16}
                    className="rotate-12 group-hover:text-white"
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
