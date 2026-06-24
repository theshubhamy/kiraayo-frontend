"use client";

import React from "react";
import { ShieldCheck, Landmark, Navigation, FileText, UserCheck, HeartHandshake } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: UserCheck,
      title: "KYC Verified Users",
      desc: "Instant authentication utilizing Aadhaar, PAN, Face Verification, and Bank audits for both renters and owners, creating a trusted ecosystem.",
      badge: "Security",
    },
    {
      icon: Landmark,
      title: "Escrow Payment System",
      desc: "Razorpay-integrated digital escrow accounts protect funds. Payment is captured upfront and disbursed only after job approval.",
      badge: "Payments",
    },
    {
      icon: Navigation,
      title: "Real-Time GPS Tracking",
      desc: "Track dispatch route, live geo-location, and diesel active engine hours directly on your mobile app dashboard during active leases.",
      badge: "Real-Time",
    },
    {
      icon: FileText,
      title: "Instant Digital Contracts",
      desc: "State-compliant legal agreements are auto-drafted and digitally signed by both parties, protecting fleet owners from liabilities.",
      badge: "Compliance",
    },
    {
      icon: ShieldCheck,
      title: "Accidental Damage Shield",
      desc: "Optional insurance partnerships provide coverage against transit damages, minor machine faults, and operational mishaps.",
      badge: "Insurance",
    },
    {
      icon: HeartHandshake,
      title: "Certified Operator Option",
      desc: "Rent heavy machinery with verified, licensed, and highly experienced heavy equipment operators included in the booking rate.",
      badge: "Operator",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Built for Transparency and Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
            Kiraayo replaces traditional fragmented renting with modern software features that remove disputes, delays, and hidden costs.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="relative group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white dark:hover:bg-zinc-900 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/[0.02]"
              >
                {/* Badge */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-6 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/10">
                  {feat.badge}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComp className="h-5 w-5 stroke-[2.5]" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
