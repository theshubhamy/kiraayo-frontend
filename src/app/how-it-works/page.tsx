import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleTabs from "@/components/RoleTabs";
import { ShieldAlert, Cpu, Landmark, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "How It Works | Kiraayo",
  description: "Learn how the secure escrow, live GPS tracking, and automated digital agreement system work on India's heavy machinery rental platform.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20 bg-zinc-50 dark:bg-zinc-950">
        {/* Header Hero */}
        <section className="bg-white dark:bg-zinc-950 py-16 border-b border-zinc-200/50 dark:border-zinc-900 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-500 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> Built for Safety & Trust
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Transparent & Secure Rentals
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              We handle the compliance, agreements, GPS tracking, and payments so contractors and machinery owners can focus on building India.
            </p>
          </div>
        </section>

        {/* The Role Workflow Tabs */}
        <RoleTabs />

        {/* Detailed Features / Safety Grid */}
        <section className="py-20 bg-white dark:bg-zinc-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Four Pillars of the Kiraayo Ecosystem
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
                How we solve the traditional problems of trust, non-payment, machinery theft, and broken verbal agreements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pillar 1: Escrow */}
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-5 items-start">
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl flex-shrink-0">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Secure Escrow Accounts</h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Instead of direct cash payments, customers pay into a secure RBI-compliant digital escrow account. Payout is only dispatched to the contractor once the customer reviews and signs off on the active hours.
                  </p>
                </div>
              </div>

              {/* Pillar 2: GPS Telematics */}
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-5 items-start">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl flex-shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">IoT & GPS Engine Tracking</h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Every piece of heavy machinery listed on Kiraayo must be integrated with our standard GPS telematics device. This enables live tracking of location, route playback, and precise engine run-time hours to prevent rate disputes.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Legal Protection */}
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-5 items-start">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Automated Tri-party Agreements</h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    No more verbal contracts. On booking approval, a digital contract is signed by the Customer, the Contractor, and the platform. It details damage liability policies, security deposits, and extra-hour rates.
                  </p>
                </div>
              </div>

              {/* Pillar 4: Verified KYC */}
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-5 items-start">
                <div className="p-3 bg-red-500/10 text-red-500 rounded-2xl flex-shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Aadhaar, PAN & GST Verification</h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    We verify identities using central APIs. Both contractors listing machinery and customers renting must complete real-time KYC, preventing fraudulent bookings and unauthorized operator access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
