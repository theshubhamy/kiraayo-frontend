import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Eye, Lock, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Kiraayo",
  description:
    "Learn how Kiraayo Tech Private Limited protects your KYC details, Aadhaar, PAN, and GPS telemetry data in compliance with India's DPDP Act.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 text-zinc-800 dark:text-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-850 pb-8 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-500 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> DPDP Act (2023) Compliant
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Privacy & Data Security Policy
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500">
              Effective Date: June 24, 2026 &bull; Last Updated: June 24, 2026
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-center text-center">
              <Eye className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-550 mb-1">
                Data Minimization
              </h3>
              <p className="text-[11px] text-zinc-500">
                We only collect data necessary to complete KYC and coordinate
                machinery delivery.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-center text-center">
              <Lock className="w-6 h-6 text-blue-500 mb-3" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-550 mb-1">
                High-Grade Encryption
              </h3>
              <p className="text-[11px] text-zinc-500">
                Your documents (Aadhaar/PAN) are encrypted in transit and at
                rest in local cloud zones.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-center text-center">
              <FileText className="w-6 h-6 text-emerald-500 mb-3" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-550 mb-1">
                Consent Revocation
              </h3>
              <p className="text-[11px] text-zinc-500">
                You retain the right to delete your listing records and request
                full deletion of KYC data.
              </p>
            </div>
          </div>

          {/* Detailed Policy Text */}
          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-zinc-650 dark:text-zinc-350">
            <p>
              Kiraayo Tech Private Limited (&quot;Kiraayo&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) is dedicated to protecting the
              privacy and personal data of our users (including Contractors,
              Owners, and Normal Users). This Policy governs the collection,
              processing, and storage of your information in compliance with
              India&apos;s{" "}
              <strong>
                Digital Personal Data Protection Act (DPDP Act) 2023
              </strong>{" "}
              and related regulations.
            </p>

            <h2 className="text-lg font-bold text-zinc-900 dark:text-white pt-4 border-b border-zinc-100 dark:border-zinc-850 pb-2">
              1. Information We Collect
            </h2>
            <p>
              To provide a verified equipment rental marketplace, we must
              collect specific identifiers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Identity and KYC Details:</strong> For Contractors and
                Users renting machinery, we collect PAN numbers, Aadhaar details
                (processed via secure third-party DigiLocker/UIDAI bridges), and
                bank account numbers for escrow disbursements.
              </li>
              <li>
                <strong>Telemetry and GPS Location Data:</strong> Listed heavy
                machinery is fitted with IoT GPS telematics sensors. We monitor
                real-time coordinate data, route playback, active engine hours,
                and ignition logs to bill active hours accurately and protect
                assets.
              </li>
              <li>
                <strong>Transactional and Payment Records:</strong> Details of
                escrow payments, GST invoices, Razorpay transaction tokens, and
                billing histories are securely stored for legal audit
                compliance.
              </li>
            </ul>

            <h2 className="text-lg font-bold text-zinc-900 dark:text-white pt-4 border-b border-zinc-100 dark:border-zinc-850 pb-2">
              2. How We Use Your Data
            </h2>
            <p>Your data is processed strictly for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>KYC Verification and fraud prevention.</li>
              <li>
                Calculating engine run times to prevent price disputes between
                owners and contractors.
              </li>
              <li>
                Resolving claims for damage or delayed returns via standard
                tri-party contracts.
              </li>
              <li>Fulfilling legal tax (GST) and accounting requirements.</li>
            </ul>

            <h2 className="text-lg font-bold text-zinc-900 dark:text-white pt-4 border-b border-zinc-100 dark:border-zinc-850 pb-2">
              3. Data Retention and Sharing
            </h2>
            <p>
              We do not sell your personal data. We only share details with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>The other party in a booking:</strong> Sharing the
                contractor&apos;s name and machine location with the user, or
                the user&apos;s contact detail with the lister to coordinate
                transport.
              </li>
              <li>
                <strong>RBI-Authorized Payments Partners:</strong> Gateways and
                escrow banks to manage security deposits and payouts.
              </li>
              <li>
                <strong>Government/Legal Authorities:</strong> Only when legally
                compelled or to enforce the terms of the tri-party agreement.
              </li>
            </ul>

            <h2 className="text-lg font-bold text-zinc-900 dark:text-white pt-4 border-b border-zinc-100 dark:border-zinc-850 pb-2">
              4. Data Fiduciary Contact
            </h2>
            <p>
              Under the DPDP Act 2023, you have the right to access, correct, or
              erase your personal data. To exercise these rights or file a
              grievance, contact our Data Protection Officer:
            </p>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-855 text-xs">
              <strong>Grievance Officer:</strong> Data Security Team
              <br />
              <strong>Email:</strong> privacy@kiraayo.com
              <br />
              <strong>Address:</strong> Kiraayo Tech Private Limited, Bangalore,
              Karnataka, India.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
