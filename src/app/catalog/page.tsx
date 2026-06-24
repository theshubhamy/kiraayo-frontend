import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EquipmentSearch from "@/components/EquipmentSearch";
import { BadgeCheck, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "Machinery Catalog | Kiraayo",
  description: "Browse verified heavy construction vehicles, excavators, loaders, cranes and road rollers available for rent across India.",
};

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20 bg-zinc-950 text-white">
        {/* Hero Header */}
        <section className="relative overflow-hidden py-16 border-b border-zinc-900 bg-radial-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08)_0%,transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-500 mb-4 animate-fade-in">
              <BadgeCheck className="w-3.5 h-3.5" /> 100% Verified Fleet
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Machinery & Equipment Catalog
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
              Find and rent certified backhoes, excavators, transit mixers, and cranes. All listings include detailed technical specs, operator choices, and RBI-compliant security escrow.
            </p>
            
            {/* Features Row */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 bg-zinc-900/60 px-4 py-2.5 rounded-2xl border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Escrow Payout Protection
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900/60 px-4 py-2.5 rounded-2xl border border-zinc-800">
                <MapPin className="w-4 h-4 text-blue-500" /> Live GPS Sensor Tracking
              </span>
            </div>
          </div>
        </section>

        {/* Equipment Browser component */}
        <EquipmentSearch />
      </main>

      <Footer />
    </div>
  );
}
