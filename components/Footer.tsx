import React from "react";
import Link from "next/link";

const Footer = () => {
  const exploreLinks = [
    { name: "Shopify Services", href: "/services" },
    { name: "Success Stories", href: "/cases" },
    { name: "Our Methodology", href: "/method" },
    { name: "Shopify Plus", href: "/shopify-plus" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Dribbble", href: "https://dribbble.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer className="overflow-hidden bg-[#F2EBE1] text-[#1A1A1A] pt-32 pb-0 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          {/* Brand/CTA Section */}
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#1A1A1A]/50">
              The Agency
            </p>
            <p className="text-3xl font-sans mb-6 leading-tight tracking-tight text-[#1A1A1A]">
              E-commerce that merges aesthetics with high conversion.
            </p>
            <div className="flex gap-4">
              <button className="text-xs font-medium bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
                Request Proposal
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#1A1A1A]/50">
              Contact
            </p>
            <a
              href="mailto:webmines.in@gmail.com"
              className="block text-lg font-sans mb-2 text-[#1A1A1A] hover:text-blue-600 transition-colors tracking-tight"
            >
              webmines.in@gmail.com
            </a>
            <p className="text-sm text-[#1A1A1A]/70 mb-6">
              +55 11 99999-9999
            </p>
            <p className="text-[10px] text-[#1A1A1A]/50 leading-relaxed">
              São Paulo, SP
              <br />
              Brazil
              <br />
              Shopify Experts
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-medium">
            {/* Explore Links */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2">
                Explore
              </span>
              {exploreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2">
                Social
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Big Text Section */}
      <div className="w-full text-center leading-none overflow-hidden border-t border-[#1A1A1A]/10">
        <h1 className="text-[18vw] font-bold leading-[0.75] font-sans text-[#1A1A1A]/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4">
          Webmines
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
