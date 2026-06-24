/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  BadgeCheck,
  Check,
  Sparkles,
  X,
  Star,
} from "lucide-react";

interface Equipment {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  operator: boolean;
  specs: {
    label: string;
    value: string;
  }[];
  imagePath: string;
  svgPath: string; // fallback SVG representation if image is missing
}

const mockEquipment: Equipment[] = [
  {
    id: 1,
    name: "Tata Hitachi EX200 Excavator",
    category: "Excavators",
    location: "Bengaluru, Karnataka",
    price: "₹8,500",
    rating: 4.8,
    reviews: 24,
    operator: true,
    specs: [
      { label: "Operating Weight", value: "20,100 kg" },
      { label: "Engine Power", value: "133 HP" },
      { label: "Bucket Capacity", value: "1.0 m³" },
    ],
    imagePath: "/images/excavator.png",
    svgPath: "M5 19h14M8 12l4-4 4 4m-4-4v11",
  },
  {
    id: 2,
    name: "JCB 3DX Backhoe Loader",
    category: "Loaders",
    location: "Pune, Maharashtra",
    price: "₹6,200",
    rating: 4.9,
    reviews: 42,
    operator: true,
    specs: [
      { label: "Engine Power", value: "74 HP" },
      { label: "Operating Weight", value: "7,460 kg" },
      { label: "Loader Bucket", value: "1.1 m³" },
    ],
    imagePath: "/images/jcb.png",
    svgPath: "M3 10h18M6 6l6 6 6-6",
  },
  {
    id: 3,
    name: "Sany SCC800C Crawler Crane",
    category: "Cranes",
    location: "Mumbai, Maharashtra",
    price: "₹38,000",
    rating: 4.7,
    reviews: 12,
    operator: true,
    specs: [
      { label: "Lifting Capacity", value: "80 Tons" },
      { label: "Boom Length", value: "57 meters" },
      { label: "Engine", value: "Cummins 210 kW" },
    ],
    imagePath: "/images/crane.png",
    svgPath: "M12 3v16M8 7l4-4 4 4",
  },
  {
    id: 4,
    name: "Schwing Stetter Concrete Pump",
    category: "Mixers & Pumps",
    location: "New Delhi, Delhi",
    price: "₹12,500",
    rating: 4.6,
    reviews: 18,
    operator: false,
    specs: [
      { label: "Output Capacity", value: "90 m³/hr" },
      { label: "Concrete Pressure", value: "112 Bar" },
      { label: "Delivery Cylinder", value: "230 mm" },
    ],
    imagePath: "/images/pump.png",
    svgPath: "M5 8h14M5 12h14M5 16h14",
  },
  {
    id: 5,
    name: "Case 1107EX Vibratory Roller",
    category: "Rollers",
    location: "Chennai, Tamil Nadu",
    price: "₹7,000",
    rating: 4.8,
    reviews: 31,
    operator: true,
    specs: [
      { label: "Operating Weight", value: "11,030 kg" },
      { label: "Drum Width", value: "2,150 mm" },
      { label: "Engine Power", value: "110 HP" },
    ],
    imagePath: "/images/roller.png",
    svgPath: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
  },
  {
    id: 6,
    name: "Mahindra EarthMaster VX",
    category: "Loaders",
    location: "Hyderabad, Telangana",
    price: "₹5,800",
    rating: 4.5,
    reviews: 15,
    operator: true,
    specs: [
      { label: "Engine Power", value: "79.8 HP" },
      { label: "Operating Weight", value: "7,430 kg" },
      { label: "Backhoe Bucket", value: "0.27 m³" },
    ],
    imagePath: "/images/earthmaster.png",
    svgPath: "M3 12h18M12 3v18",
  },
];

const categories = [
  "All",
  "Excavators",
  "Loaders",
  "Cranes",
  "Mixers & Pumps",
  "Rollers",
];

export default function EquipmentSearch() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);

  const filteredEquipment = mockEquipment.filter((eq) => {
    const matchesCategory =
      selectedCategory === "All" || eq.category === selectedCategory;
    const matchesSearch =
      eq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eq.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookNow = (name: string) => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(name);
    }, 1500);
  };

  return (
    <section
      id="catalog"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/10 border-b border-zinc-200/50 dark:border-zinc-800/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Browse Machinery Catalog
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
              Select category and browse available machinery listings directly
              in our database. Live rates listed.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search machinery or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 text-zinc-800 dark:text-zinc-200 transition-all shadow-sm"
            />
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-400" />
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="mt-8 flex gap-2.5 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black border-amber-500 shadow-sm"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        {filteredEquipment.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((eq) => (
              <div
                key={eq.id}
                className="flex flex-col rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm overflow-hidden hover:shadow-xl hover:border-amber-500/20 transition-all duration-300 group"
              >
                {/* Equipment Graphic Header */}
                <div className="relative aspect-[16/9] bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-200/30 dark:border-zinc-800/30">
                  {eq.imagePath ? (
                    <img
                      src={eq.imagePath}
                      alt={eq.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500/10 via-zinc-100 to-amber-500/5 dark:from-amber-500/15 dark:via-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-amber-500 opacity-60 dark:opacity-50 group-hover:scale-110 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d={eq.svgPath}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Dark overlay for text/badge legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 dark:bg-zinc-950/95 text-[10px] font-bold shadow-md text-zinc-800 dark:text-zinc-200">
                    <MapPin className="h-3 w-3 text-amber-500" />
                    {eq.location}
                  </span>
                  {eq.operator && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-500 text-white text-[10px] font-extrabold shadow-md">
                      <Sparkles className="h-3 w-3 fill-current" />
                      Operator
                    </span>
                  )}
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-base text-zinc-900 dark:text-white line-clamp-1">
                        {eq.name}
                      </h3>
                    </div>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-current" />
                      </div>
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        {eq.rating}
                      </span>
                      <span className="text-[10px] text-zinc-400">
                        ({eq.reviews} reviews)
                      </span>
                      <span className="inline-flex items-center ml-auto text-[10px] font-bold text-emerald-500">
                        <BadgeCheck className="h-3.5 w-3.5 mr-0.5 fill-emerald-500/10" />{" "}
                        Verified
                      </span>
                    </div>

                    {/* Specifications List */}
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-b border-zinc-200/50 dark:border-zinc-800/50 py-3.5">
                      {eq.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                            {spec.label}
                          </div>
                          <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Price */}
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Day Rate
                      </div>
                      <div className="text-lg font-black text-zinc-900 dark:text-white mt-0.5">
                        {eq.price}{" "}
                        <span className="text-xs font-bold text-zinc-400">
                          / Day
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookNow(eq.name)}
                      className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black dark:hover:text-black text-white dark:text-white text-xs font-bold transition-all active:scale-95 shadow-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center py-16 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl">
            <div className="text-base font-bold text-zinc-600 dark:text-zinc-400">
              No machinery found matching your query
            </div>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-amber-500 text-black text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Loading Modal Overlay */}
      {isBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/20 max-w-sm w-full mx-4 text-center shadow-2xl flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-4 border-amber-500 border-t-transparent animate-spin mb-4" />
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
              Connecting Lister...
            </h3>
            <p className="mt-2 text-xs text-zinc-400">
              Verifying account credentials and checking available timeline...
            </p>
          </div>
        </div>
      )}

      {/* Booking Success Modal */}
      {bookingSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/20 max-w-sm w-full mx-4 text-center shadow-2xl relative flex flex-col items-center">
            <button
              onClick={() => setBookingSuccess(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-500"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 stroke-[3]" />
            </div>
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
              Booking Requested!
            </h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Your rental request for{" "}
              <span className="font-bold text-zinc-800 dark:text-white">
                {bookingSuccess}
              </span>{" "}
              has been dispatched to the verified owner.
            </p>
            <div className="mt-6 w-full p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-600 dark:text-amber-400 text-center leading-relaxed">
              Complete the security Escrow deposit inside the Kiraayo mobile app
              to lock in these dates.
            </div>
            <button
              onClick={() => setBookingSuccess(null)}
              className="mt-6 w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all"
            >
              Back to Catalog
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
