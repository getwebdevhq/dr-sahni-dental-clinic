"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, ShieldCheck, Smile, HelpCircle, Award } from "lucide-react";

export default function TreatmentDeepDives() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How often should I visit for a comprehensive dental evaluation?",
      a: "We recommend visiting every 6 months for a routine checkup and professional cleaning. Regular evaluations preserve natural dentition, detect early concerns, and maintain long-term oral and systemic wellness.",
    },
    {
      q: "Do dental implants hurt during or after the procedure?",
      a: "Dental implant procedures are performed under advanced computer-guided local anesthesia or conscious sedation, ensuring absolute comfort throughout. Post-procedure recovery involves minimal discomfort, typically managed with mild prescribed medication.",
    },
    {
      q: "How long does Invisalign clear aligner treatment take?",
      a: "Invisalign treatment typically spans 6 to 18 months, depending on your individual bite anatomy and alignment goals. Minor cosmetic alignment can often be accomplished in as little as 4 to 6 months.",
    },
    {
      q: "Is professional teeth whitening safe for enamel?",
      a: "Yes, clinical whitening performed under dentist supervision is completely safe. We use pH-neutral, clinically validated formulations that enhance shade brilliance without compromising enamel integrity.",
    },
    {
      q: "How do you coordinate care for international patients?",
      a: "Our dedicated International Patient Desk coordinates pre-arrival virtual consultations, 3D treatment roadmaps, priority expedited scheduling, airport transfers, and luxury accommodation partnerships in South Delhi.",
    },
    {
      q: "Do you accept international insurance and multi-currency payment options?",
      a: "Yes, we provide detailed super-bills, coded invoices, and documentation compatible with major international insurance providers, along with multi-currency digital payment options.",
    },
  ];

  return (
    <div className="space-y-20 py-8">
      {/* 1. Preventive & General Care Section */}
      <section id="preventive-care" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 md:p-16 border border-[#E2EEF2] shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] text-[#3FA8B8] text-[11px] font-semibold tracking-[0.16em] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3FA8B8]" />
                Comprehensive Wellness
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0F1D40] tracking-tight leading-tight">
                General Care &amp; Prevention
              </h2>

              <p className="text-lg font-medium text-[#3FA8B8]">
                Precision Diagnostics &amp; Gentle Protection
              </p>

              <p className="text-base text-[#4A5B78] leading-relaxed font-normal">
                Preventive dentistry is the foundation of lifelong oral wellness. At Dr Sahni&apos;s Dental Clinic, we focus on proactive evaluations, ultrasonic cleanings, 3D digital imaging, and laser periodontal therapy to preserve your natural teeth for a lifetime.
              </p>

              <div className="space-y-3 pt-1">
                {[
                  "Painless ultrasonic cleanings & airflow polishing",
                  "Low-radiation 3D Cone Beam CT (CBCT) diagnostics",
                  "Oral cancer & soft tissue screening with every checkup",
                  "Laser assisted gum therapy & biocompatible sealants",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-[#0F1D40]">
                    <span className="w-5 h-5 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] text-[#3FA8B8] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#3FA8B8]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="#book-appointment"
                  className="btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3FA8B8] hover:bg-[#3492A0] text-white font-semibold text-sm shadow-md shadow-[#3FA8B8]/25 cursor-pointer"
                >
                  <span>Explore General Care</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#E2EEF2] shadow-xs">
                <Image
                  src="/images/preventive-care.jpg"
                  alt="Gentle Cleanings and Checkups at Dr Sahni Clinic"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#E2EEF2] shadow-xs">
                <Image
                  src="/images/treatment-room.jpg"
                  alt="Modern Dental Operatory Suite"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Cosmetic Dentistry & Smile Makeovers (Deep Teal Luxury Card) */}
      <section id="cosmetic-dentistry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[32px] overflow-hidden shadow-sm border border-[#C6E6EC] bg-gradient-to-br from-[#278D99] to-[#1D6C75]">
          {/* Left Cosmetic Smile Photo */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[480px]">
            <Image
              src="/images/cosmetic-smile.jpg"
              alt="Bespoke Smile Makeover by Dr. Radhika Sahni"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Deep Teal Content Box */}
          <div className="lg:col-span-6 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-white/90 text-[11px] font-semibold tracking-[0.16em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Aesthetic Dentistry
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.12] text-white mb-5">
              Cosmetic Dentistry &amp; Smile Architecture
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-7">
              Under Dr. Radhika Sahni&apos;s specialist prosthodontic mastery, we combine facial harmony with handcrafted porcelain veneers, composite bonding, and in-office whitening to design smiles that exude timeless elegance and natural vitality.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "Minimal Prep Veneers",
                "Laser Teeth Whitening",
                "Full Smile Reconstruction",
                "Digital Smile Design (DSD)",
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-medium text-white border border-white/20 backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div>
              <Link
                href="#book-appointment"
                className="btn-press inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D6C75] hover:bg-[#EBF8FA] font-semibold text-base shadow-sm cursor-pointer"
              >
                <span>Schedule Smile Design Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#1D6C75]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dental Implants & Guided Surgery Feature */}
      <section id="invisalign" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 md:p-16 border border-[#E2EEF2] shadow-xs text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] mb-5">
            <Award className="w-4 h-4 text-[#3FA8B8]" />
            <span className="font-semibold text-[#0F1D40] text-xs tracking-wide uppercase">
              Advanced Implantology &amp; Invisalign®
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0F1D40] tracking-tight mb-4">
            Specialist-Led Dental Implants &amp; Clear Aligners
          </h2>

          <p className="text-base sm:text-lg text-[#4A5B78] max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Restore full masticatory function and flawless aesthetics. Led by AIIMS-trained senior prosthodontists and certified orthodontists utilizing digital surgical guides and iTero 3D scanners.
          </p>

          {/* Feature Highlights in Ice Blue Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            <div className="rounded-2xl p-5 bg-[#EBF8FA] border border-[#C6E6EC] text-[#0F1D40] text-center font-medium text-sm">
              All-on-4 &amp; Same-Day Fixed Teeth Implants Available.
            </div>
            <div className="rounded-2xl p-5 bg-[#EBF8FA] border border-[#C6E6EC] text-[#0F1D40] text-center font-medium text-sm">
              Invisalign® Clear Aligners Planned With High-Resolution 3D Scans.
            </div>
          </div>

          {/* 3 Photo Feature Cards with Premier Blue Overlays */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-[#E2EEF2] shadow-xs group">
              <Image
                src="/images/treatment-room.jpg"
                alt="Computer-Guided Implant Surgery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#007EA7]/90 via-[#007EA7]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#CDECEF]">3D CT GUIDED</span>
                <h4 className="text-base font-semibold leading-snug mt-1 mb-2 text-white">
                  Computer-guided surgical stents for sub-millimeter implant precision.
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-white/90">
                  <Smile className="w-3.5 h-3.5 text-cyan-200" />
                  <span>Bone Augmentation &amp; PRF</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-[#E2EEF2] shadow-xs group">
              <Image
                src="/images/invisalign-aligner.jpg"
                alt="Invisalign & Clear Aligners"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0092B8]/90 via-[#0092B8]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#CDECEF]">DISCREET ALIGNMENT</span>
                <h4 className="text-base font-semibold leading-snug mt-1 mb-2 text-white">
                  Invisalign clear aligners custom planned with 3D digital simulation.
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-white/90">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Certified Orthodontist Care</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-[#E2EEF2] shadow-xs group">
              <Image
                src="/images/clinic-reception.jpg"
                alt="International Patient Concierge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D42]/90 via-[#101D42]/50 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#CDECEF]">GLOBAL PATIENTS</span>
                <h4 className="text-base font-semibold leading-snug mt-1 mb-2 text-white">
                  Dedicated concierge coordination for patients traveling to Delhi.
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-white/90">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Expedited timelines &amp; stays</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="#book-appointment"
              className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3FA8B8] hover:bg-[#3492A0] text-white font-semibold text-base shadow-md shadow-[#3FA8B8]/25 cursor-pointer"
            >
              <span>Book Consultation With Our Specialists</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Patient FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3FA8B8] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#3FA8B8]" />
            Patient Guidance
          </div>
          <h3 className="text-3xl sm:text-4xl font-medium text-[#0F1D40] tracking-tight">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E2EEF2] bg-white overflow-hidden shadow-2xs transition-all"
            >
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 font-semibold text-base text-[#0F1D40] hover:text-[#3FA8B8] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className={`w-7 h-7 rounded-full bg-[#EBF8FA] flex items-center justify-center text-sm font-bold text-[#3FA8B8] transition-transform duration-200 shrink-0 ${activeFaq === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-5 sm:px-6 pb-6 text-sm text-[#4A5B78] leading-relaxed border-t border-[#E2EEF2]/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
