"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function BentoServicesGrid() {
  return (
    <section id="treatments" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] text-[#3FA8B8] text-[11px] font-semibold tracking-[0.16em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3FA8B8]" />
            Specialist-Led Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0F1D40]">
            Dental Disciplines We Are Renowned For
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5B78] font-normal leading-relaxed">
            Explore the specialized treatments that make Dr Sahni&apos;s Dental Clinic a trusted destination for advanced implantology, Invisalign clear aligners, bespoke smile architecture, and restorative precision.
          </p>
        </div>
        <Link
          href="#book-appointment"
          className="btn-press hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#0F1D40] hover:text-[#3FA8B8] transition-colors group"
        >
          <span>Schedule Consultation</span>
          <span className="w-7 h-7 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] flex items-center justify-center group-hover:border-[#3FA8B8] group-hover:bg-[#3FA8B8] transition-all">
            <ArrowUpRight className="w-3.5 h-3.5 text-[#3FA8B8] group-hover:text-white" />
          </span>
        </Link>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        
        {/* Card 1: Dental Implants (Hero Architectural Photo Card) */}
        <Link
          href="#treatments"
          className="group relative h-80 sm:h-96 rounded-3xl p-7 flex flex-col justify-between overflow-hidden text-white border border-[#E2EEF2] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src="/images/treatment-room.jpg"
            alt="Dental Implants and Guided Surgery at Dr Sahni Clinic"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D40] via-[#0F1D40]/50 to-transparent" />

          <div className="relative z-10 flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5EC4D1] block mb-1">
                01 / IMPLANTOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white">
                Dental Implants
              </h3>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#3FA8B8] group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <div className="relative z-10">
            <p className="text-xs text-white/90 font-normal leading-relaxed">
              All-on-4, single tooth, and full-arch permanent replacements guided by 3D CBCT digital stents.
            </p>
          </div>
        </Link>

        {/* Card 2: Cosmetic Dentistry (Smile Makeover Photo Card) */}
        <Link
          href="#cosmetic-dentistry"
          className="group relative h-80 sm:h-96 rounded-3xl p-7 flex flex-col justify-between overflow-hidden text-white border border-[#E2EEF2] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src="/images/cosmetic-smile.jpg"
            alt="Cosmetic Dentistry and Smile Makeovers at Dr Sahni Clinic"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D40] via-[#0F1D40]/45 to-transparent" />

          <div className="relative z-10 flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5EC4D1] block mb-1">
                02 / AESTHETICS
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white">
                Cosmetic Dentistry
              </h3>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#3FA8B8] group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <div className="relative z-10">
            <p className="text-xs text-white/90 font-normal leading-relaxed">
              Handcrafted porcelain veneers, digital smile design, and in-office shade brilliance.
            </p>
          </div>
        </Link>

        {/* Column 3: Stacked 2 Cards (MicroEndodontics + Orthodontics) */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Microscopic Endodontics (Pristine White Card) */}
          <div className="blue-clinic-card relative flex-1 min-h-[160px] rounded-3xl p-6 flex flex-col justify-between overflow-hidden bg-white">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3FA8B8] block mb-1">
                  03 / ENDODONTICS
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-[#0F1D40]">
                  Microscopic Root Canals
                </h4>
              </div>
            </div>
            <p className="text-xs text-[#4A5B78] font-normal leading-relaxed">
              Single-sitting painless precision under dental operative microscopes.
            </p>
          </div>

          {/* Orthodontics Photo Card */}
          <Link
            href="#invisalign"
            className="group relative flex-1 min-h-[175px] rounded-3xl p-6 flex flex-col justify-between overflow-hidden text-white border border-[#E2EEF2] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Image
              src="/images/invisalign-aligner.jpg"
              alt="Orthodontics & Invisalign Clear Aligners"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D40] via-[#0F1D40]/50 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5EC4D1] block mb-1">
                  04 / ORTHODONTICS
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-white">
                  Invisalign® Aligners
                </h4>
              </div>
              <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#3FA8B8] group-hover:text-white transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-white/90 font-normal">
                Discreet clear aligners planned with iTero 3D digital simulation.
              </p>
            </div>
          </Link>
        </div>

        {/* Column 4: Full Mouth Rehabilitation & Preventive Care */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Full Mouth Rehabilitation (Royal Midnight Navy Card) */}
          <div className="group relative flex-1 min-h-[160px] rounded-3xl p-6 flex flex-col justify-between overflow-hidden bg-[#0F1D40] text-white border border-[#1A2E5A] shadow-xs">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5EC4D1] block mb-1">
                  05 / RECONSTRUCTION
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-white">
                  Full-Mouth Rehabilitation
                </h4>
              </div>
            </div>
            <p className="text-xs text-white/80 font-normal leading-relaxed">
              Bespoke restorative solutions engineered for bite harmony, chewing comfort, and longevity.
            </p>
          </div>

          {/* General & Laser Care */}
          <Link
            href="#preventive-care"
            className="blue-clinic-card group relative flex-1 min-h-[175px] rounded-3xl p-6 flex flex-col justify-between overflow-hidden bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3FA8B8] block mb-1">
                  06 / PREVENTIVE
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-[#0F1D40]">
                  Preventive &amp; Laser Care
                </h4>
              </div>
              <span className="w-8 h-8 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] flex items-center justify-center group-hover:border-[#3FA8B8] group-hover:bg-[#3FA8B8] group-hover:text-white transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3FA8B8] group-hover:text-white" />
              </span>
            </div>

            <div>
              <p className="text-xs text-[#4A5B78] font-normal">
                Ultrasonic airflow polish, oral oncology screening, and gentle laser gum therapy.
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
