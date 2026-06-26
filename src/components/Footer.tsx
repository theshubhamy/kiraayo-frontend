"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="download"
      className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Visual top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Call to Download Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-zinc-900">
          <div className="lg:col-span-7 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get Started with Kiraayo Mobile App
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl mx-auto lg:mx-0">
              Download the application on your mobile device to complete KYC,
              manage equipment, track GPS sensors, and coordinate bookings
              on-site.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap justify-center lg:justify-end gap-4">
            {/* Google Play Store SVG badge */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all text-white text-left active:scale-95"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 3.25a1.25 1.25 0 0 0-1.25 1.25v15a1.25 1.25 0 0 0 2.015 1.002L18.42 12.87a1.25 1.25 0 0 0 0-2.003L5.765 3.136A1.25 1.25 0 0 0 5 3.25z" />
              </svg>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                  GET IT ON
                </div>
                <div className="text-sm font-extrabold -mt-0.5">
                  Google Play
                </div>
              </div>
            </a>

            {/* Apple App Store SVG badge */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all text-white text-left active:scale-95"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.5-.63.73-1.18 1.87-1.03 2.97 1.11.08 2.27-.58 2.96-1.41z" />
              </svg>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                  Download on the
                </div>
                <div className="text-sm font-extrabold -mt-0.5">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Kiraayo Logo"
                width={36}
                height={36}
                className="rounded-lg object-contain"
              />
              <span className="text-lg font-bold text-white">Kiraayo</span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-zinc-500 leading-relaxed">
              India&apos;s digital marketplace for construction vehicle rentals.
              Bringing transparency, speed, and safety to builders and owners
              alike.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-amber-500 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="hover:text-amber-500 transition-colors"
                >
                  Explore Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Compliance & Guidelines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Legal & Compliance
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-500">
              <li className="flex items-center gap-1.5 hover:text-zinc-300">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                <Link
                  href="/privacy-policy"
                  className="hover:text-amber-500 transition-colors"
                >
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li className="flex items-center gap-1.5 hover:text-zinc-300">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                RBI Payment Guidelines
              </li>
              <li className="flex items-center gap-1.5 hover:text-zinc-300">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                KYC Verification Rules
              </li>
            </ul>
          </div>

          {/* Support Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Support & Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <span className="text-zinc-550">Email:</span>{" "}
                <Link
                  href="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  support@kiraayo.com
                </Link>
              </li>
              <li>
                <span className="text-zinc-550">HQ:</span> Bangalore, KA, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-650">
          <div className="flex flex-wrap items-center gap-3">
            <span>
              &copy; {new Date().getFullYear()} Kiraayo. All rights reserved.
            </span>
            <span>&bull;</span>
            <Link
              href="/privacy-policy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy
            </Link>
            <span>&bull;</span>
            <Link
              href="/about"
              className="hover:text-zinc-300 transition-colors"
            >
              About
            </Link>
            <span>&bull;</span>
            <Link
              href="/contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-4">
            <span className="text-zinc-600">
              Made with{" "}
              <Heart className="inline-block h-3.5 w-3.5 text-amber-500 fill-current" />{" "}
              in India.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
