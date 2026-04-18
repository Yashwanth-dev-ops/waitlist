"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    setMobileOpen(false);
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-none outline-none ${
        scrolled
          ? "bg-[#0A0A0C]/95 backdrop-blur-2xl shadow-xl shadow-black/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Waveform icon */}
          <div className="flex items-end gap-[2px] h-6">
            {[0.4, 0.7, 1, 0.6, 0.8, 0.5].map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-accent-purple to-accent-blue transition-all duration-300 group-hover:animate-waveform"
                style={{
                  height: `${h * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <span className="text-xl font-bold tracking-tight font-heading">
            <span className="text-white">Voxera</span>
            <span className="gradient-text-static"> AI</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("demo")}
            className="text-sm text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Demo
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("waitlist")}
            className="text-sm text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Results
          </button>
          
          <button
            onClick={scrollToForm}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white text-sm font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-all active:scale-95 cursor-pointer"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-4 glass-nav mt-2 mx-4 rounded-2xl">
          <button
            onClick={() => scrollToSection("demo")}
            className="text-sm text-text-secondary hover:text-white transition-colors py-2 text-left cursor-pointer"
          >
            Demo
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm text-text-secondary hover:text-white transition-colors py-2 text-left cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("waitlist")}
            className="text-sm text-text-secondary hover:text-white transition-colors py-2 text-left cursor-pointer"
          >
            Results
          </button>
          <button
            onClick={scrollToForm}
            className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold text-center cursor-pointer"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
}
