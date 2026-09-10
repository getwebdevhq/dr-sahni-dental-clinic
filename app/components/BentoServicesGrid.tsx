"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function BentoServicesGrid() {
  return (
    <section id="treatments" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FA] text-[#4DB8C4] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Specialist-Led Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1E2433]">
            Dental Treatments We&apos;re Known For at Dr Sahni&apos;s
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B]">
            Explore the treatments that make Dr Sahni&apos;s Dental Clinic a trusted destination for advanced implantology, Invisalign clear aligners, bespoke smile architecture, and restorative excellence.
          </p>
        </div>
        <Link
          href="#book-appointment"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-[#4DB8C4] hover:text-[#5C84D0] transition-colors"
        >
          Book Consultation &rarr;
        </Link>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        
        {/* Card 1: Cosmetic Dentistry (Teal with organic wave) */}
        <Link
          href="#cosmetic-dentistry"
          className="group relative h-72 sm:h-80 rounded-[28px] p-6 flex flex-col justify-between overflow-hidden bg-[#5EC4D1] text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-[#4BB5C3]/60 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <svg
            className="absolute bottom-0 left-0 w-full opacity-40 group-hover:opacity-60 transition-opacity"
            viewBox="0 0 200 120"
            fill="none"
          >
            <path
              d="M-20,90 Q40,30 90,80 T220,50 L220,150 L-20,150 Z"
              fill="#3CAAB8"
            />
          </svg>

          <div className="relative z-10 flex justify-between items-start">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight max-w-[180px]">
              Cosmetic Dentistry
            </h3>
            <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#5EC4D1] transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>

          <div className="relative z-10">
            <p className="text-xs text-white/90 font-medium">
              Veneers, teeth whitening, and complete smile makeovers
            </p>
          </div>
        </Link>

        {/* Card 2: Dental Implants (Photo card) */}
        <Link
          href="#treatments"
          className="group relative h-72 sm:h-80 rounded-[28px] p-6 flex flex-col justify-between overflow-hidden text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src="/images/treatment-room.jpg"
            alt="Dental Implants and Guided Surgery at Dr Sahni Clinic"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <div className="relative z-10 flex justify-between items-start">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight max-w-[180px] drop-shadow-md">
              Dental Implants
            </h3>
            <span className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#101D42] transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>

          <div className="relative z-10">
            <p className="text-xs text-white/95 font-medium drop-shadow-sm">
              All-on-4, single tooth, and full-arch permanent replacements
            </p>
          </div>
        </Link>

        {/* Column 3: Stacked 2 Cards (MicroEndodontics + Orthodontics) */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Microscopic Endodontics */}
          <div className="relative h-32 sm:h-36 rounded-[24px] p-5 flex flex-col justify-center overflow-hidden bg-[#5EC4D1] text-white shadow-sm">
            <svg
              className="absolute -right-4 -bottom-4 w-36 h-36 opacity-30"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest font-semibold text-white/80">
                Microscopic Care
              </span>
              <p className="text-base font-bold text-white mt-1">
                Painless Root Canals
              </p>
              <span className="text-[11px] text-white/90">Single-sitting precision</span>
            </div>
          </div>

          {/* Orthodontics 3D Scanning Photo */}
          <Link
            href="#invisalign"
            className="group relative flex-1 min-h-[160px] rounded-[24px] p-5 flex flex-col justify-between overflow-hidden text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Image
              src="/images/invisalign-aligner.jpg"
              alt="Orthodontics & Invisalign Clear Aligners"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                Orthodontics
              </h3>
              <span className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#101D42] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-white/95 font-medium drop-shadow-sm">
                Invisalign® and clear aligners for straight teeth
              </p>
            </div>
          </Link>
        </div>

        {/* Column 4: Cosmetic Dentistry Smile & General Care */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Cosmetic Dentistry photo */}
          <Link
            href="#cosmetic-dentistry"
            className="group relative flex-1 min-h-[160px] rounded-[24px] p-5 flex flex-col justify-between overflow-hidden text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Image
              src="/images/cosmetic-smile.jpg"
              alt="Smile Transformations at Dr Sahni Clinic"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                Smile Makeovers
              </h3>
              <span className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#101D42] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-white/95 font-medium drop-shadow-sm">
                Bespoke porcelain veneers & aesthetic crowns
              </p>
            </div>
          </Link>

          {/* General Care Pill */}
          <Link
            href="#preventive-care"
            className="group relative h-32 sm:h-36 rounded-[24px] p-5 flex flex-col justify-between overflow-hidden bg-[#7EA8DD] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                General Care
              </h3>
              <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#7EA8DD] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-white/90 font-medium">
                Comprehensive checkups, cleanings, and laser gum therapy
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
