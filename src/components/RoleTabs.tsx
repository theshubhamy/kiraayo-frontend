"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  CreditCard,
  Navigation,
  CheckCircle,
  PlusCircle,
  UserCheck,
  Inbox,
  Shield,
  Wallet,
} from "lucide-react";

export default function RoleTabs() {
  const [activeTab, setActiveTab] = useState<"renter" | "lister">("renter");

  const customerSteps = [
    {
      icon: Search,
      title: "1. Discover Fleet",
      desc: "Browse certified heavy machinery or vehicles. Filters make it easy to find nearby listings.",
    },
    {
      icon: Calendar,
      title: "2. Reserve Dates",
      desc: "Select booking dates for your private project, home construction, or development work.",
    },
    {
      icon: CreditCard,
      title: "3. Pay via Escrow",
      desc: "Funds are held in secure escrow. Payout is only dispatched after the work is approved.",
    },
    {
      icon: Navigation,
      title: "4. GPS Tracking",
      desc: "Track dispatch, delivery, and engine-run times of the machine in real time.",
    },
    {
      icon: CheckCircle,
      title: "5. Return & Review",
      desc: "Sign off on active hours, release escrow payment, and leave a review for the operator.",
    },
  ];

  const contractorSteps = [
    {
      icon: PlusCircle,
      title: "1. List Fleet & Rent Others",
      desc: "List your idle vehicles to generate revenue. You can also rent heavy gear from other contractors.",
    },
    {
      icon: UserCheck,
      title: "2. KYC Verification",
      desc: "Verify identity with Aadhaar, PAN, and bank accounts to list or lease machinery.",
    },
    {
      icon: Inbox,
      title: "3. Track Inbound & Outbound",
      desc: "Approve bookings for your listings and manage machinery you are renting from others.",
    },
    {
      icon: Shield,
      title: "4. Tri-Party Contracts",
      desc: "Legally protect your gear with digital contracts covering damage and late return rules.",
    },
    {
      icon: Wallet,
      title: "5. Payouts & Billing",
      desc: "Get rent payouts directly to your bank account. Invoices are automatically GST-compliant.",
    },
  ];

  const currentSteps = activeTab === "renter" ? customerSteps : contractorSteps;

  return (
    <section
      id="how-it-works"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/20 border-y border-zinc-200/50 dark:border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            How Kiraayo Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
            A secure ecosystem where normal users can easily rent machinery, while contractors can list their idle fleet to monetize it AND lease specialized gear from fellow contractors.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-zinc-200/60 dark:bg-zinc-800/60 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("renter")}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "renter"
                  ? "bg-amber-500 text-black shadow-md"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Normal Users (Rent Only)
            </button>
            <button
              onClick={() => setActiveTab("lister")}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "lister"
                  ? "bg-amber-500 text-black shadow-md"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Contractors (List & Rent)
            </button>
          </div>
        </div>

        {/* Dynamic Workflow List */}
        <div className="mt-16 relative">
          {/* Progress Connector Line (desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {currentSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-sm">
                    <IconComponent className="h-6 w-6 stroke-[2]" />
                  </div>
                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
