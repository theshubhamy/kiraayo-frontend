"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Renting Equipment",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
              Need assistance with a booking or completing your KYC? Our customer success team is available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 bg-zinc-900 text-white p-8 rounded-3xl border border-zinc-800 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold">Contact Info</h2>
                  <p className="mt-2 text-xs text-zinc-400">
                    Reach out directly for corporate inquiries or custom fleet partnerships.
                  </p>
                </div>

                <div className="space-y-6">


                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl border border-blue-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Email Coordinates</div>
                      <div className="text-sm font-bold mt-0.5">support@kiraayo.com</div>
                    </div>
                  </div>

                  {/* HQ Address */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl border border-emerald-500/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">India Head Office</div>
                      <div className="text-sm font-bold mt-0.5 leading-relaxed">
                        Bangalore, KA, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Compliances tag in container */}
              <div className="mt-12 border-t border-zinc-800 pt-6 text-[10px] text-zinc-500 leading-relaxed relative z-10">
                Kiraayo (Platform owned by Kiraayo Tech Private Limited) &bull; Corporate Identification Number (CIN): U74999KA2026PTC184711. GSTIN: 29AAACK2026A1Z4.
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Message Dispatched!</h2>
                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thank you <span className="font-semibold text-zinc-800 dark:text-white">{form.name}</span>. Your ticket has been logged. One of our support managers will reach out to you within the hour.
                  </p>
                  <button
                    onClick={() => {
                      setForm({ name: "", email: "", phone: "", subject: "Renting Equipment", message: "" });
                      setSubmitted(false);
                    }}
                    className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-xl transition-all shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Write Us a Message</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 text-zinc-800 dark:text-zinc-200 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 text-zinc-800 dark:text-zinc-200 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 text-zinc-800 dark:text-zinc-200 transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                        Topic of Inquiry
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 text-zinc-800 dark:text-zinc-200 transition-all"
                      >
                        <option value="Renting Equipment">Renting Equipment (Normal User)</option>
                        <option value="Listing Fleet">Listing Fleet (Contractor)</option>
                        <option value="Partnership / Corporate">Partnership / Corporate</option>
                        <option value="Escrow / Payment Help">Escrow / Payment Help</option>
                        <option value="Other Support">Other Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      Detailed Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please specify machinery types, booking dates or support issue detail..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-500 text-zinc-800 dark:text-zinc-200 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold transition-all active:scale-98 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
