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
      <div className="relative rounded-[32px] bg-[#F4F1EA] text-[#121316] p-8 sm:p-12 md:p-16 overflow-hidden border border-[#EAE7DF] shadow-xs">
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EAE7DF] text-[11px] font-semibold tracking-[0.16em] uppercase mb-5 text-[#9E8262] shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#9E8262]" />
            <span>Trusted Beyond Borders • International Concierge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121316] mb-4">
            Why Discerning Patients Choose Dr Sahni&apos;s
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#52565E] leading-relaxed font-normal max-w-3xl mb-10">
            Patients from across the UK, USA, Europe, the Middle East, and Australia choose Dr Sahni&apos;s Dental Clinic for specialist-led care, transparent digital treatment planning, and surgical outcomes that are predictable, enduring, and remarkably gentle.
          </p>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-left w-full max-w-3xl mb-10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl border border-[#EAE7DF] text-xs sm:text-sm font-medium text-[#121316] shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#9E8262] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="#book-appointment"
            className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#121316] text-[#FAF9F5] hover:bg-[#1E2025] font-semibold text-base shadow-sm"
          >
            <span>Connect With Dr Sahni&apos;s Global Desk</span>
            <ArrowRight className="w-4 h-4 text-[#BCA384]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
