"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartPulse, Clock, Video, ArrowRight, UserCheck } from "lucide-react";

export default function AboutDrSahni() {
  const specialists = [
    {
      name: "Dr. Radhika Sahni",
      role: "Director & Senior Prosthodontist & Implantologist",
      specialty: "Dental Implants, Smile Designing, Minimal Prep Veneers, and Full Mouth Rehabilitation.",
      image: "/images/dr-sahni.jpg",
      isDirector: true,
    },
    {
      name: "Dr. Sandeep Singh",
      role: "Senior Consultant Implantologist & Bone Augmentation",
      specialty: "Advanced Implant Dentistry, Bone Augmentation, Sinus Lifts, and PRF Rejuvenation.",
      image: "/images/treatment-room.jpg",
    },
    {
      name: "Dr. Nikhil Bahuguna",
      role: "Senior Consultant Microscopic Endodontist",
      specialty: "MicroEndodontics, Precision Cosmetic Dentistry, and Single-Sitting Root Canal Treatments.",
      image: "/images/treatment-room.jpg",
    },
    {
      name: "Dr. Sonam Mahajan",
      role: "Associate Dentist",
      specialty: "10 years clinical experience with Associate Fellowship in Laser Dentistry & General Care.",
      image: "/images/preventive-care.jpg",
    },
    {
      name: "Dr. Anashwar Bhalla",
      role: "Senior Consultant Orthodontist",
      specialty: "Dentofacial Orthopaedics, Adult Orthodontics, and Certified Clear Aligner / Invisalign Therapy.",
      image: "/images/invisalign-aligner.jpg",
    },
    {
      name: "Dr. Udayan Gupta",
      role: "Senior Consultant Periodontist & Oral Implantologist",
      specialty: "Laser Gum Surgeries, Deep Scaling & Curettage, Soft Tissue Esthetics, and Dental Implants.",
      image: "/images/preventive-care.jpg",
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

      {/* Specialists Faculty Section ("Masters of Their Craft") */}
      <div id="doctors" className="mt-16 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialists.map((doc, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-3xl overflow-hidden border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                doc.isDirector ? "border-[#4DB8C4] ring-2 ring-[#4DB8C4]/20" : "border-slate-200/80"
              }`}
            >
              <div>
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#101D42] shadow-sm">
                      {doc.name}
                    </span>
                    {doc.isDirector && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4DB8C4] text-white text-[10px] font-extrabold uppercase tracking-wider">
                        Director
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#101D42]">{doc.name}</h4>
                  <p className="text-xs font-semibold text-[#4DB8C4] mt-1 leading-snug">
                    {doc.role}
                  </p>
                  <p className="mt-3 text-xs text-[#64748B] leading-relaxed">
                    {doc.specialty}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="#book-appointment"
                  className="text-xs font-bold text-[#101D42] group-hover:text-[#4DB8C4] flex items-center gap-1 transition-colors"
                >
                  Consult with {doc.name.split(" ")[1]}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
