"use client";

import React, { useState, useEffect } from "react";
import { Hammer, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <div className="p-2.5 bg-amber-500 text-black rounded-xl shadow-md shadow-amber-500/20 flex items-center justify-center">
              <Hammer className="h-5 w-5 stroke-[2.5]" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Kiraayo<span className="text-amber-500 font-extrabold">.</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#catalog"
              className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Explore Equipment
            </a>
            <a
              href="#testimonials"
              className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-amber-500 text-black text-sm font-bold transition-all hover:bg-amber-400 active:scale-95 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20"
            >
              Get App
              <ArrowRight className="ml-1.5 h-4 w-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg ${
          isOpen ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-4 sm:px-6">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#catalog"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            Explore Equipment
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3 rounded-xl bg-amber-500 text-black text-base font-bold shadow-md shadow-amber-500/10 hover:bg-amber-400"
            >
              Get App
              <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
