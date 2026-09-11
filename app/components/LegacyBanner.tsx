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
    "Dedicated global patient concierge with expedited scheduling",
  ];

  return (
    <section id="international-desk" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[32px] bg-[#EBF8FA] text-[#0F1D40] p-8 sm:p-12 md:p-16 overflow-hidden border border-[#C6E6EC] shadow-2xs">
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C6E6EC] text-[11px] font-semibold tracking-[0.16em] uppercase mb-5 text-[#3FA8B8] shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#3FA8B8]" />
            <span>Trusted Beyond Borders • International Concierge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0F1D40] mb-4">
            Why Discerning Patients Choose Dr Sahni&apos;s
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#4A5B78] leading-relaxed font-normal max-w-3xl mb-10">
            Patients from across the UK, USA, Europe, the Middle East, and Australia choose Dr Sahni&apos;s Dental Clinic for specialist-led care, transparent digital treatment planning, and surgical outcomes that are predictable, enduring, and remarkably gentle.
          </p>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-left w-full max-w-3xl mb-10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl border border-[#C6E6EC] text-xs sm:text-sm font-medium text-[#0F1D40] shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3FA8B8] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="#book-appointment"
            className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3FA8B8] hover:bg-[#3492A0] text-white font-semibold text-base shadow-md shadow-[#3FA8B8]/25 cursor-pointer"
          >
            <span>Connect With Dr Sahni&apos;s Global Desk</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
