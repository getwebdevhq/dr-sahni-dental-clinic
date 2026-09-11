"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartPulse, Clock, Video, ArrowRight, UserCheck } from "lucide-react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

export default function AboutDrSahni() {
  const doctorProfiles = [
    {
      name: "Dr. Radhika Sahni",
      designation: "Director & Senior Prosthodontist & Implantologist",
      quote:
        "AIIMS alumnus with distinction across BDS and MDS. With over 20 years of clinical mastery, Dr. Radhika leads our multidisciplinary team specializing in advanced implantology, digital smile design, minimal-prep veneers, and full mouth rehabilitations trusted by discerning patients across 30+ nations.",
      src: "/images/doctors/dr-radhika-sahni.jpg",
    },
    {
      name: "Dr. Sonam Mahajan",
      designation: "Associate Dentist • Laser Dentistry & Clear Aligners",
      quote:
        "Bringing over a decade of clinical excellence, Dr. Sonam holds an Associate Fellowship in Laser Dentistry and is certified in Invisalign clear aligner therapy. She delivers meticulous cosmetic enhancements and gentle preventive care crafted for utmost patient comfort.",
      src: "/images/doctors/dr-sonam-mahajan.jpg",
    },
    {
      name: "Dr. Maliha Athar",
      designation: "Consultant • Restorative & Cosmetic Dentistry",
      quote:
        "Specializing in precision restorative dentistry, microscopic endodontics, and aesthetic smile architecture, Dr. Maliha combines clinical precision with an artistic touch, ensuring gentle, comprehensive treatments with natural aesthetics.",
      src: "/images/doctors/dr-maliha-athar.jpg",
    },
  ];

  return (
    <section id="about-dr-sahni" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Split Section: Reception Photo + Clinic Philosophy Card */}
      <div id="our-clinic" className="grid grid-cols-1 lg:grid-cols-12 rounded-[32px] overflow-hidden shadow-sm border border-[#E2EEF2] bg-white">
        {/* Left Clinic Image */}
        <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[500px]">
          <Image
            src="/images/clinic-reception.jpg"
            alt="Dr Sahni's Dental Clinic Modern Operatory Suite"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Deep Teal Content Box */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#278D99] to-[#1D6C75] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-white/90 text-[11px] font-semibold tracking-[0.16em] uppercase mb-4">
            <UserCheck className="w-3.5 h-3.5 text-white" />
            About Our Practice
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.12] text-white mb-5">
            Center of Excellence for Aesthetic &amp; Restorative Care
          </h2>

          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-7">
            From proactive preventive evaluations and bespoke porcelain smile design to complex full-mouth rehabilitation, <strong>Dr Sahni&apos;s Dental Clinic</strong> integrates advanced 3D digital imaging, biocompatible materials, and compassionate chairside care for discerning patients worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs text-white/95">
            <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>AIIMS-Credentialed Faculty</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <HeartPulse className="w-4 h-4 text-white shrink-0" />
              <span>Multidisciplinary Care</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <Clock className="w-4 h-4 text-white shrink-0" />
              <span>Dedicated One-on-One Care</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <Video className="w-4 h-4 text-white shrink-0" />
              <span>Global Virtual Consultations</span>
            </div>
          </div>

          <div>
            <Link
              href="#book-appointment"
              className="btn-press inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D6C75] hover:bg-[#EBF8FA] font-semibold text-base shadow-sm"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#1D6C75]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Counter & Smiles Transformed Headline */}
      <div className="mt-16 md:mt-24 text-center">
        <span className="text-xs sm:text-sm font-semibold text-[#7E90AF] tracking-[0.2em] uppercase block mb-2">
          Clinical Milestones
        </span>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-1">
          <span className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-[#3FA8B8] tracking-tighter leading-none">
            30+
          </span>
          <div className="hidden sm:block w-[1px] h-16 md:h-24 bg-[#E2EEF2]" />
          <div className="text-left">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F1D40] tracking-tight leading-tight">
              Nations Served
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-light text-[#4A5B78] tracking-tight leading-tight">
              &amp; 10,000+ Completed Smiles
            </span>
          </div>
        </div>
      </div>

      {/* Specialists Faculty Section ("Masters of Their Craft" with 3D Circular Showcase) */}
      <div id="doctors" className="mt-20 pt-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] text-[#3FA8B8] text-[11px] font-semibold uppercase tracking-[0.16em] mb-3">
            Dr Sahni&apos;s Specialist Faculty
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0F1D40] tracking-tight">
            Masters of Their Craft
          </h3>
          <p className="mt-3 text-base sm:text-lg text-[#4A5B78] font-normal leading-relaxed">
            Our internationally credentialed practitioners bring decades of focused clinical experience, ensuring each smile is treated with surgical precision and artistic harmony.
          </p>
        </div>

        {/* Circular Doctors Carousel Showcase in Luminous Card */}
        <div className="bg-white rounded-[32px] border border-[#E2EEF2] shadow-xs overflow-hidden py-10 px-4 sm:px-8 relative">
          <CircularTestimonials
            testimonials={doctorProfiles}
            autoplay={true}
            colors={{
              name: "#0F1D40",
              designation: "#3FA8B8",
              testimony: "#3D4F6E",
              arrowBackground: "#0F1D40",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#3FA8B8",
            }}
            fontSizes={{
              name: "2rem",
              designation: "0.875rem",
              quote: "1.05rem",
            }}
          />

          <div className="mt-8 pt-6 border-t border-[#E2EEF2] flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-medium text-[#4A5B78]">
              <ShieldCheck className="w-4 h-4 text-[#3FA8B8]" />
              <span>Certified Faculty • 3D Guided Diagnostics • Bespoke Treatment Roadmaps</span>
            </div>
            <Link
              href="#book-appointment"
              className="btn-press inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3FA8B8] hover:bg-[#3492A0] text-white text-xs font-semibold shadow-xs"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
