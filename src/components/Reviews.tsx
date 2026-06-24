"use client";

import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: "Renter (Contractor)" | "Lister (Fleet Owner)";
  company: string;
  text: string;
  rating: number;
  avatarInitials: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Renter (Contractor)",
    company: "RK Infrastructure & Builders",
    text: "Renting excavators was always a headache with pricing disputes and late arrivals. With Kiraayo, I booked two Tata Hitachi excavators in Pune. The GPS engine hours matched my reports perfectly. Released escrow with full confidence.",
    rating: 5,
    avatarInitials: "RK",
    verified: true,
  },
  {
    id: 2,
    name: "Vikram Rathore",
    role: "Lister (Fleet Owner)",
    company: "Rathore Fleet & Logistics",
    text: "I have 4 JCBs that used to sit idle between projects. Listing them on Kiraayo has opened up consistent rental requests. The digital agreements are robust, and Razorpay automatically handles settlements directly to my bank.",
    rating: 5,
    avatarInitials: "VR",
    verified: true,
  },
  {
    id: 3,
    name: "Ananya Sharma",
    role: "Renter (Contractor)",
    company: "Urban Housing Projects Ltd.",
    text: "We needed dry-rental rollers and a mobile crane for a building construction. Kiraayo allowed us to search local machines, view specifications, and secure bookings in minutes. Customer support and operator checks are outstanding.",
    rating: 4,
    avatarInitials: "AS",
    verified: true,
  },
];

export default function Reviews() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-50 dark:bg-zinc-900/10 border-b border-zinc-200/50 dark:border-zinc-800/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute left-10 top-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Loved by Fleet Owners & Builders
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
            Hear from construction contractors and heavy equipment owners who have digitised their operations on Kiraayo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm relative group hover:border-amber-500/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon overlay */}
              <Quote className="absolute right-8 top-8 h-10 w-10 text-zinc-100 dark:text-zinc-800 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 italic leading-relaxed relative z-10">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* User Identity Info */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-sm flex items-center justify-center border border-amber-500/20">
                  {test.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                    {test.name}
                    {test.verified && (
                      <span className="inline-flex items-center text-[10px] text-emerald-500 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded-md">
                        <ShieldCheck className="h-3 w-3 mr-0.5" /> Verified
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium mt-0.5">
                    {test.role} &bull; {test.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
