import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Kiraayo",
  description:
    "Learn about India's leading digital marketplace for heavy construction machinery and vehicle rentals.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.15)_0%,transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Bridging the Gap in{" "}
              <span className="gradient-text text-amber-400">
                Construction Rentals
              </span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Kiraayo (meaning &quot;Rent&quot; in Sanskrit/Hindi origins) is
              India&apos;s digital-first heavy machinery marketplace. We are
              replacing verbal agreements and delayed payments with secure
              escrow systems and live telematics tracking.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white dark:bg-zinc-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  Our Mission
                </h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                  India is building at an unprecedented rate, yet the equipment
                  rental sector remains fragmented, trust-deficient, and slow.
                  Owners lose crores to unpaid rentals, and contractors lose
                  hours waiting for unverified machines.
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                  At Kiraayo, we are building a trust layer using IoT trackers,
                  central KYC APIs, and digital RBI-regulated escrows. We
                  empower builders to secure their timelines and fleet owners to
                  scale their income safely.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">
                      Escrow Guarantee
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      No delayed payments or double bookings. Payments are held
                      securely and settled automatically.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">
                      Live Billing Logs
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Engine run-time is tracked with GPS sensors, creating an
                      indisputable log of active project hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">
                      Verified Fleet Operators
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Every machinery listing comes with option of verified,
                      certified, and background-checked crew.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Stats or Achievements */}
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/30 border-t border-b border-zinc-200/50 dark:border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-10">
              Our Footprint
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                  20+
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-450 mt-1 uppercase tracking-wider font-bold">
                  Indian Cities
                </div>
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                  3,500+
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-450 mt-1 uppercase tracking-wider font-bold">
                  Verified Contractors
                </div>
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                  5,000+
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-450 mt-1 uppercase tracking-wider font-bold">
                  Heavy Vehicles
                </div>
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                  24/7
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-450 mt-1 uppercase tracking-wider font-bold">
                  On-site Support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-white dark:bg-zinc-950 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
              Ready to streamline your fleet?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-455 max-w-xl mx-auto leading-relaxed">
              Join thousands of contractors and owners leveraging the digital
              speed of Kiraayo. Sign up in under 5 minutes.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/#waitlist"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-md shadow-amber-500/10"
              >
                Join the Waitlist <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
              <Link
                href="/catalog"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-850 dark:text-zinc-250 text-xs font-bold transition-all"
              >
                Explore Fleet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
