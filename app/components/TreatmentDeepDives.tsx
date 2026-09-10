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
      q: "Do dental implants hurt?",
      a: "Dental implant procedures are performed under advanced local anesthesia or conscious sedation, ensuring absolute comfort throughout. Post-procedure recovery involves minimal discomfort, typically managed with mild prescribed medication.",
    },
    {
      q: "How long does Invisalign clear aligner treatment take?",
      a: "Invisalign treatment typically spans 6 to 18 months, depending on your individual bite anatomy and profile alignment goals. Minor cosmetic corrections can often be accomplished in as little as 4 to 6 months.",
    },
    {
      q: "Is professional teeth whitening safe for enamel?",
      a: "Yes, professional clinical whitening performed under dentist supervision is completely safe. We use pH-neutral, clinically validated whitening formulations that enhance shade brilliance without compromising enamel integrity.",
    },
    {
      q: "How do you coordinate care for international patients?",
      a: "Our dedicated International Patient Desk assists with pre-arrival virtual consultations, 3D treatment roadmaps, priority expedited scheduling, airport transfers, and luxury accommodation partnerships.",
    },
    {
      q: "Do you accept international insurance and digital payment options?",
      a: "Yes, we provide detailed super-bills, coded invoices, and documentation compatible with major international insurance providers, along with multi-currency payment methods.",
    },
  ];

  return (
    <div className="space-y-20 py-8">
      {/* 1. Preventive & General Care Section */}
      <section id="preventive-care" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 md:p-16 border border-slate-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FA] text-[#4DB8C4] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Comprehensive Wellness
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2433] tracking-tight leading-tight">
                General Care &amp; Prevention
              </h2>

              <p className="text-xl font-medium text-[#4DB8C4]">
                Precision Diagnostics &amp; Gentle Protection
              </p>

              <p className="text-base text-[#64748B] leading-relaxed">
                Preventive dentistry is the foundation of lifelong oral wellness. At Dr Sahni&apos;s Dental Clinic, we focus on proactive evaluations, ultrasonic cleanings, 3D digital imaging, and laser periodontal therapy to preserve your natural teeth for a lifetime.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Painless ultrasonic cleanings & airflow polishing",
                  "Low-radiation 3D Cone Beam CT (CBCT) diagnostics",
                  "Oral cancer & soft tissue screening with every checkup",
                  "Laser assisted gum therapy & biocompatible sealants",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#1E2433]">
                    <span className="w-5 h-5 rounded-full bg-[#4DB8C4]/15 text-[#4DB8C4] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="#book-appointment"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4DB8C4] to-[#5C84D0] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  Explore General Care
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/preventive-care.jpg"
                  alt="Gentle Cleanings and Checkups at Dr Sahni Clinic"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/treatment-room.jpg"
                  alt="Modern Dental Operatory Suite"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Cosmetic Dentistry & Smile Makeovers */}
      <section id="cosmetic-dentistry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[36px] overflow-hidden shadow-xl border border-slate-100 bg-white">
          {/* Left Cosmetic Smile Photo */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px]">
            <Image
              src="/images/cosmetic-smile.jpg"
              alt="Bespoke Smile Makeover by Dr. Radhika Sahni"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Teal Content Box */}
          <div className="lg:col-span-6 bg-[#5EC4D1] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4 text-white" />
              Aesthetic Dentistry
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15] text-white mb-6">
              Cosmetic Dentistry &amp; Smile Makeovers
            </h2>

            <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-8">
              Under Dr. Radhika Sahni&apos;s specialist prosthodontic mastery, we combine facial harmony with handcrafted porcelain veneers, composite bonding, and in-office whitening to design smiles that exude natural elegance and confidence.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Minimal Prep Veneers",
                "Laser Teeth Whitening",
                "Full Smile Reconstruction",
                "Digital Smile Design (DSD)",
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white/20 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div>
              <Link
                href="#book-appointment"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#4DB8C4] hover:text-[#5C84D0] font-bold text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Schedule Smile Design Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dental Implants & Guided Surgery Feature */}
      <section id="invisalign" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFBFD] rounded-[36px] p-8 sm:p-12 md:p-16 border border-slate-200/80 shadow-sm text-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Award className="w-5 h-5 text-[#5C84D0]" />
            <span className="font-bold text-[#101D42] text-sm tracking-wide">
              Advanced Implantology &amp; Invisalign®
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2433] tracking-tight mb-4">
            Specialist-Led Dental Implants &amp; Clear Aligners at Dr Sahni&apos;s
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto mb-10">
            Restore full chewing ability and flawless aesthetics. Led by Senior Implantologists and Orthodontists utilizing digital guided stents and iTero 3D scanners.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            <div className="rounded-2xl p-6 bg-[#D8F3F7] text-[#101D42] text-center font-medium text-base shadow-sm">
              All-on-4 &amp; Same-Day Fixed Teeth Implants Available.
            </div>
            <div className="rounded-2xl p-6 bg-[#D8F3F7] text-[#101D42] text-center font-medium text-base shadow-sm">
              Clear Aligners Blend Seamlessly With Your Lifestyle.
            </div>
          </div>

          {/* 3 Photo Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group">
              <Image
                src="/images/treatment-room.jpg"
                alt="Computer-Guided Implant Surgery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#007EA7]/90 via-[#007EA7]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs uppercase font-bold text-white/80">3D CT Guided</span>
                <h4 className="text-lg font-bold leading-tight mt-1 mb-2">
                  Computer-guided surgical stents for sub-millimeter implant precision.
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-white/90">
                  <Smile className="w-4 h-4 text-cyan-200" />
                  <span>Bone Augmentation &amp; PRF</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group">
              <Image
                src="/images/invisalign-aligner.jpg"
                alt="Invisalign & Clear Aligners"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0092B8]/90 via-[#0092B8]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs uppercase font-bold text-white/80">Discreet Alignment</span>
                <h4 className="text-lg font-bold leading-tight mt-1 mb-2">
                  Invisalign clear aligners custom planned with 3D digital simulation.
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-white/90">
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Certified Orthodontist Guidance</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group">
              <Image
                src="/images/clinic-reception.jpg"
                alt="International Patient Concierge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C84D0]/90 via-[#5C84D0]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs uppercase font-bold text-white/80">Global Patients</span>
                <h4 className="text-lg font-bold leading-tight mt-1 mb-2">
                  Concierge coordination for international patients traveling to Delhi.
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-white/90">
                  <ShieldCheck className="w-4 h-4 text-emerald-200" />
                  <span>Transparent timelines &amp; stays</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="#book-appointment"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4DB8C4] to-[#5C84D0] text-white font-bold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Book Consultation With Our Specialists
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Patient FAQ Accordion matching drsahni.netlify.app */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4DB8C4] mb-2">
            <HelpCircle className="w-4 h-4" />
            Patient Guidance
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2433]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 font-bold text-base text-[#1E2433] hover:text-[#4DB8C4] transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`text-xl text-[#4DB8C4] transition-transform duration-200 ${activeFaq === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-sm text-[#64748B] leading-relaxed border-t border-slate-100 pt-3">
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
