import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import RoleTabs from "@/components/RoleTabs";
import EquipmentSearch from "@/components/EquipmentSearch";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        <Hero />
        <FeatureCards />
        <RoleTabs />
        <EquipmentSearch />
        <Reviews />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
