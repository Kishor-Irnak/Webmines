import React from "react";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 font-sans overflow-hidden border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* COLUMN 1: Brand & Actions */}
          <div className="md:col-span-3 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-5 bg-[#2563EB] rounded-sm" />
              <span className="text-white text-xl font-bold tracking-tight">
                EVOC LABS
              </span>
            </div>
            <button className="w-full sm:w-auto border border-white/20 hover:border-white/50 text-white text-xs font-semibold tracking-wide px-6 py-3 rounded-lg mb-4 transition-all">
              REQUEST A DEMO
            </button>
            <button className="w-full sm:w-auto text-gray-400 hover:text-white text-xs font-semibold tracking-wide px-6 py-2 transition-colors">
              LOG IN
            </button>
          </div>

          {/* COLUMN 2: Platform & Resources */}
          <div className="md:col-span-2 flex flex-col gap-12">
            <div>
              <h3 className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="text-gray-700">///</span> Platform
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Why Evoc Labs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Customer Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="text-gray-700">///</span> Resources
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    dbt Testing Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Quality Ebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: Use Case & Company */}
          <div className="md:col-span-3 flex flex-col gap-12">
            <div>
              <h3 className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="text-gray-700">///</span> Use Case
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CI/CD Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Migration & Validation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Monitoring & Observability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Replication Testing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="text-gray-700">///</span> Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 4: Tech & Newsletter */}
          <div className="md:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="text-gray-700">///</span> Tech
              </h3>
              <ul className="space-y-3 text-sm text-gray-400 flex flex-wrap gap-x-6 gap-y-3">
                <li className="w-[45%]">
                  <a href="#" className="hover:text-white transition-colors">
                    Data Diff
                  </a>
                </li>
                <li className="w-[45%]">
                  <a href="#" className="hover:text-white transition-colors">
                    Lineage
                  </a>
                </li>
                <li className="w-[45%]">
                  <a href="#" className="hover:text-white transition-colors">
                    Monitors
                  </a>
                </li>
                <li className="w-[45%]">
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="text-gray-700">///</span> Newsletter
              </h3>
              <form className="space-y-3 max-w-sm">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 bg-[#0a0a0a] border border-gray-800 text-white placeholder-gray-600 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 bg-[#0a0a0a] border border-gray-800 text-white placeholder-gray-600 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full bg-[#0a0a0a] border border-gray-800 text-white placeholder-gray-600 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold py-3 px-8 rounded-lg mt-2 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-600 text-[10px] mt-4 leading-relaxed max-w-sm">
                By providing this information, you agree to be kept informed
                about EVOC LABS's products and services.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-medium text-gray-500">
          {/* Socials */}
          <div className="flex gap-5 mb-6 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Youtube size={18} strokeWidth={1.5} />
            </a>
          </div>

          {/* Legal */}
          <div className="flex gap-4 mb-6 md:mb-0 tracking-widest">
            <a href="#" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-white transition-colors">
              MSA
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-white transition-colors">
              DPA
            </a>
          </div>

          {/* Copyright */}
          <div className="tracking-widest">© 2024 EVOC LABS. MADE BY TONIK</div>
        </div>
      </div>

      {/* GIANT BACKGROUND TEXT WATERMARK */}
      <div className="absolute bottom-[-8%] left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <h1 className="text-[16vw] font-black text-white/[0.02] whitespace-nowrap text-center leading-none tracking-tighter">
          EVOC LABS
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
