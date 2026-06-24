"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistJoined, setWaitlistJoined] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setWaitlistJoined(true);
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden gradient-bg">
      {/* Visual background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            {/* Tagline pill */}
            <div className="inline-flex items-center self-center lg:self-start gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Coming Soon &bull; India&apos;s Digital Rental Hub
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Rent Smart.
              <br />
              <span className="gradient-text">Build Fast.</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Digitizing equipment discovery, booking, and management. Connect
              directly with verified equipment owners, secure your payments in
              escrow, and track machinery in real-time.
            </p>

            {/* Key Value Checklist */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 stroke-[2.5]" />
                100% Verified Listings
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 stroke-[2.5]" />
                Escrow Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 stroke-[2.5]" />
                Real-Time GPS Tracking
              </span>
            </div>

            {/* Waitlist Signup Section */}
            <div
              id="waitlist"
              className="mt-10 max-w-md w-full mx-auto lg:mx-0"
            >
              {waitlistJoined ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-2.5 text-sm font-semibold shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  You&apos;re on the list! We&apos;ll notify you at{" "}
                  {waitlistEmail}.
                </div>
              ) : (
                <form onSubmit={handleJoinWaitlist} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email to join the waitlist..."
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="flex-grow px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 text-zinc-800 dark:text-zinc-200 transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all active:scale-95 shadow-sm shrink-0"
                  >
                    Join Waitlist
                  </button>
                </form>
              )}
              <div className="mt-3.5 text-xs text-zinc-500 dark:text-zinc-400 text-center lg:text-left">
                Coming soon to Web, App Store & Google Play &bull; For direct
                inquiries:{" "}
                <a
                  href="mailto:support@kiraayo.com"
                  className="text-amber-500 hover:underline font-semibold"
                >
                  support@kiraayo.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Interactive Mockups */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-8">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] bg-gradient-to-tr from-amber-500/20 to-blue-500/10 p-1 border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl overflow-hidden glassmorphism flex flex-col justify-between p-6">
              {/* App Shell mockup styling */}
              <div className="flex items-center justify-between border-b border-zinc-200/20 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-bold text-xs">
                    K
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">
                      Kiraayo App
                    </div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                      Verifying machinery...
                    </div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">
                  Online
                </span>
              </div>

              {/* Central Map Graphic mockup */}
              <div className="flex-1 my-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/20 relative overflow-hidden flex flex-col justify-center items-center">
                {/* Simulated map circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-500/10 rounded-full animate-ping pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-amber-500/25 rounded-full pointer-events-none" />
                <div className="absolute top-[40%] left-[35%] p-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/25 dark:border-zinc-800 shadow-lg flex items-center gap-1.5 animate-float">
                  <MapPin className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-[9px] font-bold">
                    Excavator: Active
                  </span>
                </div>
                <div className="absolute bottom-[25%] right-[20%] p-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/25 dark:border-zinc-800 shadow-lg flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-500" />
                  <span className="text-[9px] font-bold">Transit: 1.2km</span>
                </div>
              </div>

              {/* Floating Status Cards */}
              <div className="space-y-2">
                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800 shadow-lg flex items-center justify-between hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">KYC Verified</div>
                      <div className="text-[10px] text-zinc-500">
                        Aadhaar & Bank Verified
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-medium">
                    9.8/10 Rating
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800 shadow-lg flex items-center justify-between hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Escrow Settlement</div>
                      <div className="text-[10px] text-zinc-500">
                        Razorpay Payout Dispatched
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-500">
                    +₹24,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              5,000+
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">
              Machinery Listings
            </div>
          </div>
          <div className="border-l border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">
              KYC Verified Owners
            </div>
          </div>
          <div className="border-l border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              ₹50Cr+
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">
              Rented Bookings
            </div>
          </div>
          <div className="border-l border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              25%
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">
              Average Cost Savings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
