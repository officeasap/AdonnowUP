import React, { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/who-we-are" },
    { label: "Vision", href: "/our-vision" },
    { label: "Expertise", href: "/expertise" },
    { label: "Minerals", href: "/minerals" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>
        {`
        /* STAND TALL AUTHORITATIVE NAV BUTTONS */
        .nav-button {
          position: relative;
          height: 52px;
          background: linear-gradient(145deg, #0c0c12, #0a0a0f);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.6);
          transform: translateY(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          overflow: hidden;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          font-size: 0.875rem;
        }
        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(120, 119, 198, 0.9) 0%, rgba(86, 85, 165, 0.95) 50%, rgba(120, 119, 198, 0.9) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .nav-button::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 10px;
          right: 10px;
          height: 14px;
          background: rgba(0, 0, 0, 0.5);
          filter: blur(10px);
          border-radius: 50%;
          opacity: 0.8;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -2;
        }
        .nav-button:hover {
          height: 56px;
          transform: translateY(-4px);
          border-color: rgba(120, 119, 198, 0.3);
          border-bottom-color: rgba(120, 119, 198, 0.5);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 30px -5px rgba(0, 0, 0, 0.8), 0 6px 12px -3px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(120, 119, 198, 0.2);
        }
        .nav-button:hover::before { opacity: 1; }
        .nav-button:hover::after {
          opacity: 1;
          bottom: -8px;
          filter: blur(12px);
          left: 14px;
          right: 14px;
          height: 18px;
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 4px 20px rgba(120, 119, 198, 0.2);
        }
        .nav-button.active {
          height: 50px;
          transform: translateY(-1px);
          border-color: rgba(120, 119, 198, 0.4);
          background: linear-gradient(145deg, #12121f, #0f0f1a);
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 2px 15px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.4);
        }
        .nav-button .glow-edge {
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border-radius: inherit;
          background: linear-gradient(45deg, transparent 0%, rgba(120, 119, 198, 0.1) 20%, rgba(255, 255, 255, 0.05) 40%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .nav-button:hover .glow-edge { opacity: 1; }
        .nav-button-text {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        .nav-button:hover .nav-button-text {
          background: linear-gradient(to bottom, #ffffff 0%, #e0ddf9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }
        .nav-button.active .nav-button-text {
          background: linear-gradient(to bottom, #dfd4a2 0%, #c5b98a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes authoritativePulse {
          0%, 100% { transform: translateY(-1px); }
          50% { transform: translateY(-2px); }
        }
        .nav-button.active { animation: authoritativePulse 3s ease-in-out infinite; }
        .navbar-container {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: rgba(10, 10, 15, 0.85) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        .navbar-container.scrolled {
          background: rgba(10, 10, 15, 0.95) !important;
          box-shadow: 0 6px 40px rgba(0, 0, 0, 0.6);
        }
        `}
      </style>

      <nav className={cn("navbar-container fixed w-full z-50 transition-all duration-300", scrolled ? "scrolled py-3" : "py-4")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                  <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-[#0a0a0f] to-[#12121f] border border-[rgba(255,255,255,0.08)] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    <img src="/images/LogoAdonnowOfficial.png" alt="Adonnow Trading" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#7877c6] to-transparent opacity-20 blur-sm rounded-[18px]"></div>
                </motion.div>
                <span className="ml-3 text-xl font-bold text-white tracking-tight">ADONNOW <span className="text-[#dfd4a2]">TRADING</span></span>
              </NavLink>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="nav-button rounded-lg relative overflow-hidden"
                  activeClassName="active"
                >
                  <div className="glow-edge"></div>
                  <span className="nav-button-text font-semibold tracking-wide">{item.label}</span>
                </NavLink>
              ))}
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="nav-button rounded-lg relative overflow-hidden bg-gradient-to-r from-[#7877c6] to-[#5655a5] border-0">
                <div className="glow-edge"></div>
                <span className="text-white font-bold tracking-wide">TRADE NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </motion.a>
            </div>
            <button onClick={() => {
              const mobileMenu = document.querySelector('.mobile-menu-container');
              if (mobileMenu) {
                const button = mobileMenu.querySelector('button');
                button?.click();
              }
            }} className="lg:hidden w-12 h-12 rounded-[14px] flex items-center justify-center bg-[#0c0c12] border border-[rgba(255,255,255,0.08)]">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu />
    </>
  );
};

export default NavBar;