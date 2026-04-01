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
    <footer className="overflow-hidden bg-background text-text-main pt-32 pb-0 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          {/* Brand/CTA Section */}
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-text-muted">
              The Agency
            </p>
            <p className="text-3xl font-sans mb-6 leading-tight tracking-tight text-text-main">
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
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-text-muted">
              Contact
            </p>
            <a
              href="mailto:hello@evoclabs.com"
              className="block text-lg font-sans mb-2 text-text-main hover:text-primary transition-colors tracking-tight"
            >
              hello@evoclabs.com
            </a>
            <p className="text-sm text-text-secondary mb-6">
              +55 11 99999-9999
            </p>
            <p className="text-[10px] text-text-muted leading-relaxed">
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
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                Explore
              </span>
              {exploreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                Social
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Big Text Section */}
      <div className="w-full text-center leading-none overflow-hidden border-t border-border">
        <h1 className="text-[18vw] font-bold leading-[0.75] font-sans text-text-main/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4">
          EVOC LABS
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
