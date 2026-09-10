"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LegacyBanner() {
  const highlights = [
    "Advanced dental implants and full-arch rehabilitation",
    "Invisalign®, clear aligners, and digital smile design",
    "Microscopic, laser, and 3D CT-guided precision dentistry",
    "Internationally recognized multi-speciality clinical faculty",
    "Dedicated global patient concierge and bespoke care pathways",
  ];

  return (
    <section id="international-desk" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[36px] bg-[#5EC4D1] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl">
        {/* Subtle decorative curves */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-black/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold mb-4 text-white">
            <Globe className="w-4 h-4 text-white" />
            <span>Trusted Beyond Borders • International Concierge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why Discerning Patients Choose Dr Sahni&apos;s
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-normal max-w-3xl mb-8">
            At Dr Sahni&apos;s Dental Clinic, patients from across the globe trust us for specialist-led care, transparent digital planning, and technology-driven treatments crafted to be seamless, predictable, and remarkably gentle.
          </p>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-left w-full max-w-3xl mb-10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/20 text-xs sm:text-sm font-semibold text-white"
              >
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="#book-appointment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#4DB8C4] hover:text-[#5C84D0] font-bold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Connect With Dr Sahni&apos;s Global Desk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
