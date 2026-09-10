"use client";

import React from "react";
import Link from "next/link";
import { Globe, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-20 bg-gradient-to-b from-white via-[#FAFBFD] to-[#F1F7F9] overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#4DB8C4]/10 via-[#5C84D0]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Global Center Badge matching drsahni.netlify.app */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF8FA] border border-[#4DB8C4]/30 text-[#101D42] text-xs md:text-sm font-semibold mb-6 shadow-sm">
          <Globe className="w-4 h-4 text-[#4DB8C4]" />
          <span>Dr Sahni&apos;s Dental Clinic • Global Center of Dental Excellence</span>
        </div>

        {/* Big Impact Headline matching drsahni.netlify.app */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#1E2433] tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Exceptional Dentistry. <br className="hidden sm:inline" />
          Personalised Care. <br className="hidden sm:inline" />
          <span className="font-serif-quote italic text-[#4DB8C4] font-normal">
            Trusted Beyond Borders.
          </span>
        </h1>

        {/* Subtitle & Description */}
        <div className="mt-6 max-w-3xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#101D42] tracking-tight">
            World-Class Dentistry, With a Personal Touch
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed">
            Specialist-led aesthetic dentistry, advanced implantology, and bespoke smile transformations at <strong>Dr Sahni&apos;s</strong>, tailored to discerning patients worldwide. Rooted in artistic precision and clinical mastery.
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#book-appointment"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#4DB8C4] to-[#5C84D0] shadow-lg shadow-[#4DB8C4]/25 hover:shadow-xl hover:shadow-[#4DB8C4]/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Schedule Consultation
          </Link>

          <Link
            href="#treatments"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-bold text-[#101D42] bg-white border border-slate-200 shadow-sm hover:border-[#4DB8C4] hover:text-[#4DB8C4] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Explore Treatments
          </Link>
        </div>

        {/* Trust Badges Bar matching drsahni.netlify.app */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <p className="text-xs font-bold text-[#64748B] uppercase tracking-[0.25em] mb-4">
            Trusted By Patients Worldwide · International Concierge
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* 30+ Nations */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <Globe className="w-5 h-5 text-[#4DB8C4] mb-1" />
              <span className="text-sm font-bold text-[#101D42]">Patients from 30+ Nations</span>
              <span className="text-xs text-[#64748B]">Global dental tourism</span>
            </div>

            {/* ISO Accredited */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <Award className="w-5 h-5 text-[#5C84D0] mb-1" />
              <span className="text-sm font-bold text-[#101D42]">ISO 9001:2015 Accredited</span>
              <span className="text-xs text-[#64748B]">International quality standards</span>
            </div>

            {/* Digital Guided Surgery */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <Sparkles className="w-5 h-5 text-amber-500 mb-1" />
              <span className="text-sm font-bold text-[#101D42]">Digital Guided Surgery</span>
              <span className="text-xs text-[#64748B]">3D CT computer precision</span>
            </div>

            {/* 100% Sterile */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mb-1" />
              <span className="text-sm font-bold text-[#101D42]">100% Sterile & Safe</span>
              <span className="text-xs text-[#64748B]">Hospital-grade disinfection</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
