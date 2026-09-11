"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Luminous Blue Accent */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-[#EBF8FA]/60 via-[#E8F2FD]/30 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Editorial Location & Concierge Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] text-[#0F1D40] text-[11px] font-semibold tracking-[0.16em] uppercase mb-8 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span>Friends Colony West, New Delhi • Global Patient Concierge</span>
        </div>

        {/* Big Impact Headline with Cerulean Teal Serif Italic Distinction */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium text-[#0F1D40] tracking-tight leading-[1.08] max-w-5xl mx-auto">
          Exceptional Dentistry. <br className="hidden sm:inline" />
          Personalised Care. <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#3FA8B8] block sm:inline">
            Trusted Beyond Borders.
          </span>
        </h1>

        {/* Subtitle & Description */}
        <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#4A5B78] font-normal leading-relaxed">
          Specialist-led aesthetic dentistry, advanced implantology, and bespoke smile transformations at <strong>Dr Sahni&apos;s</strong>. Rooted in clinical mastery, digital precision, and gentle patient comfort.
        </p>

        {/* Primary CTA Buttons with Tactile Feedback */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#book-appointment"
            className="btn-press w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-[#3FA8B8] hover:bg-[#3492A0] shadow-md shadow-[#3FA8B8]/30 inline-flex items-center justify-center gap-2"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <Link
            href="#treatments"
            className="btn-press w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-[#0F1D40] bg-white border border-[#CBD5E1] hover:bg-[#F2F8FA] hover:border-[#3FA8B8] inline-flex items-center justify-center shadow-2xs"
          >
            Explore Treatments
          </Link>
        </div>

        {/* High-Trust Verified Metrics Dock */}
        <div className="mt-14 pt-10 border-t border-[#E2EEF2]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
            {/* 30+ Nations */}
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white border border-[#E2EEF2] shadow-2xs">
              <Globe className="w-5 h-5 text-[#3FA8B8] mb-1.5" />
              <span className="text-sm font-bold text-[#0F1D40]">30+ Nations</span>
              <span className="text-[11px] text-[#7E90AF]">Global Concierge Care</span>
            </div>

            {/* AIIMS Faculty */}
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white border border-[#E2EEF2] shadow-2xs">
              <Award className="w-5 h-5 text-[#4E78D0] mb-1.5" />
              <span className="text-sm font-bold text-[#0F1D40]">AIIMS Faculty</span>
              <span className="text-[11px] text-[#7E90AF]">Prosthodontic Leadership</span>
            </div>

            {/* 3D Guided Surgery */}
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white border border-[#E2EEF2] shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#3FA8B8] mb-1.5" />
              <span className="text-sm font-bold text-[#0F1D40]">3D CBCT Guided</span>
              <span className="text-[11px] text-[#7E90AF]">Sub-Millimeter Precision</span>
            </div>

            {/* Class-B Sterile */}
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white border border-[#E2EEF2] shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1.5" />
              <span className="text-sm font-bold text-[#0F1D40]">100% Sterile</span>
              <span className="text-[11px] text-[#7E90AF]">Hospital-Grade Autoclave</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
