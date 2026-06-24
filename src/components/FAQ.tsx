"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Who can list equipment on Kiraayo?",
    a: "Any fleet owner, construction company, or individual owning commercial construction machinery, earthmovers, or transport vehicles can list their equipment. A valid registration paper (RC) and standard business KYC (Aadhaar, PAN, and Bank details) are required to verify your listings.",
  },
  {
    q: "How does the secure Escrow Payment system work?",
    a: "When a renter books equipment, the payment is processed via Razorpay and held in a secure, digital Escrow account. Once the rental period concludes and the renter verifies the machinery has successfully completed the job, the funds are automatically settled into the lister's bank account.",
  },
  {
    q: "What happens if the equipment is damaged during rental?",
    a: "Every rental is bound by a legally binding Digital Agreement signed by both parties. We also partner with construction insurance providers to offer optional Accidental Damage Shields, safeguarding the equipment against accidents, operational failures, or transport mishaps.",
  },
  {
    q: "Can I rent equipment without hiring an operator?",
    a: "Yes! Kiraayo supports both 'Wet Rentals' (operator included in the price) and 'Dry Rentals' (machinery only). You can filter listings based on your preference. If you opt for wet rentals, the operators are verified, certified professionals.",
  },
  {
    q: "What fees does Kiraayo charge?",
    a: "It is 100% free to register and list your machinery. Kiraayo charges a flat 10% commission on successful bookings to cover payment gateway charges, escrow audits, GPS maintenance, and administrative support.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
            Everything you need to know about heavy machinery rental terms, payouts, and legal compliance.
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 transition-colors"
                >
                  <span className="text-base font-bold text-zinc-900 dark:text-white pr-4">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 p-1.5 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400">
                    {isOpen ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[250px] border-t border-zinc-200/50 dark:border-zinc-800/50" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed bg-white dark:bg-zinc-900/20">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
