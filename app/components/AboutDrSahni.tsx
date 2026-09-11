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
    <section id="about-dr-sahni" className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Split Section: Reception Photo + Clinic Philosophy Card */}
      <div id="our-clinic" className="grid grid-cols-1 lg:grid-cols-12 rounded-[36px] overflow-hidden shadow-xl border border-slate-100 bg-white">
        {/* Left Clinic Image */}
        <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[480px]">
          <Image
            src="/images/clinic-reception.jpg"
            alt="Dr Sahni's Dental Clinic Modern Suite"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right Content Box matching drsahni.netlify.app */}
        <div className="lg:col-span-6 bg-[#5EC4D1] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <UserCheck className="w-4 h-4 text-white" />
            About Our Clinic
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.15] text-white mb-6">
            Center of Excellence for Aesthetic &amp; Restorative Care
          </h2>

          <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-6">
            From preventive evaluations and bespoke smile makeovers to complex full-mouth rehabilitation, <strong>Dr Sahni&apos;s Dental Clinic</strong> blends state-of-the-art digital diagnostics, biocompatible materials, and compassionate care to deliver exceptional outcomes for discerning patients worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-white/95">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm p-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>Trusted Specialist Dentistry</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm p-2.5 rounded-xl">
              <HeartPulse className="w-4 h-4 text-white shrink-0" />
              <span>World-Class Multi-Speciality</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm p-2.5 rounded-xl">
              <Clock className="w-4 h-4 text-white shrink-0" />
              <span>Dedicated One-on-One Care</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm p-2.5 rounded-xl">
              <Video className="w-4 h-4 text-white shrink-0" />
              <span>Global Virtual Consultations</span>
            </div>
          </div>

          <div>
            <Link
              href="#book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#4DB8C4] hover:text-[#5C84D0] font-bold text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Counter & Smiles Transformed Headline */}
      <div className="mt-16 md:mt-24 text-center">
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E2433] tracking-tight block">
          Over
        </span>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-1">
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#5EC4D1] tracking-tighter leading-none">
            30+
          </span>
          <div className="hidden sm:block w-[3px] h-16 md:h-24 bg-[#1E2433]" />
          <div className="text-left">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E2433] tracking-tight leading-tight uppercase">
              Nations Served
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E2433] tracking-tight leading-tight uppercase">
              &amp; 10k+ Smiles
            </span>
          </div>
        </div>
      </div>

      {/* Specialists Faculty Section ("Masters of Their Craft" with 3D Circular Showcase) */}
      <div id="doctors" className="mt-16 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EBF8FA] text-[#4DB8C4] text-xs font-bold uppercase tracking-wider mb-3">
            Dr Sahni&apos;s Specialist Faculty
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#101D42]">
            Masters of Their Craft
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#64748B]">
            Our internationally credentialed practitioners bring decades of specialized experience, ensuring your smile is in the most capable hands.
          </p>
        </div>

        {/* Circular Doctors Carousel Showcase */}
        <div className="bg-gradient-to-b from-white via-[#F8FDFF] to-[#EFF9FA] rounded-[36px] border border-[#4DB8C4]/25 shadow-xl overflow-hidden py-8 px-4 sm:px-8 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4DB8C4]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <CircularTestimonials
            testimonials={doctorProfiles}
            autoplay={true}
            colors={{
              name: "#101D42",
              designation: "#4DB8C4",
              testimony: "#334155",
              arrowBackground: "#101D42",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#4DB8C4",
            }}
            fontSizes={{
              name: "2rem",
              designation: "0.875rem",
              quote: "1.05rem",
            }}
          />

          <div className="mt-6 pt-6 border-t border-[#4DB8C4]/20 flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#4DB8C4]" />
              <span>Certified Faculty • Advanced Clinical Diagnostics • Bespoke Treatment Plans</span>
            </div>
            <Link
              href="#book-appointment"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4DB8C4] hover:bg-[#3ea0ab] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
            >
              Schedule Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

