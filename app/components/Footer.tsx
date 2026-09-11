"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, MessageCircle, ArrowUp, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16">
      {/* 1. Top Call To Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-[32px] bg-gradient-to-r from-[#0F1D40] via-[#12224A] to-[#1A316A] text-white p-10 sm:p-14 md:p-16 text-center shadow-lg relative overflow-hidden border border-[#273D73]">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3FA8B8]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-[0.16em] uppercase mb-4 text-[#5EC4D1] border border-white/15">
              Personalised Care Pathway
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Ready for a Healthier, Confident Smile?
            </h2>

            <p className="text-base sm:text-lg text-white/85 font-normal max-w-2xl mx-auto mb-9 leading-relaxed">
              Schedule your consultation with Dr. Radhika Sahni and our multidisciplinary clinical team in Friends Colony West, New Delhi. Welcoming domestic patients and international visitors across 30+ nations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#book-appointment"
                className="btn-press inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3FA8B8] hover:bg-[#3492A0] text-white font-semibold text-base shadow-md shadow-[#3FA8B8]/30 cursor-pointer"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <a
                href="https://wa.me/919818465668?text=Hello%20Dr.%20Sahni%27s%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-base shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Royal Midnight Blue Footer Container */}
      <div className="bg-[#0B1530] text-white pt-16 pb-12 border-t border-[#162754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1A2E5A]">
            
            {/* Col 1: Brand, Rating, Accreditations */}
            <div className="lg:col-span-5 space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#13224B] border border-[#223B7C] p-1.5 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/ds-monogram-light.png"
                    alt="Dr Sahni's Dental Clinic Monogram"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white block leading-none">
                    Dr Sahni&apos;s
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3FA8B8] block mt-1">
                    Dental Clinic
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/80 leading-relaxed max-w-md font-normal">
                Led by AIIMS alumnus Dr. Radhika Sahni, our New Delhi clinic brings together prosthodontics, microsurgery, digital implantology, and bespoke smile architecture under one roof.
              </p>

              {/* Google Rating Badge Card */}
              <div className="inline-flex items-center gap-4 bg-[#13224B] rounded-2xl p-4 border border-[#223B7C] text-white">
                <div className="w-9 h-9 rounded-full bg-[#1C2F65] flex items-center justify-center text-sm font-bold text-[#5EC4D1]">
                  G
                </div>
                <div>
                  <div className="text-[11px] font-medium text-white/70 uppercase tracking-wider">
                    Google Patient Rating
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white leading-none">4.9</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Accreditation Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-lg bg-[#13224B] text-xs font-medium tracking-wide text-white border border-[#223B7C] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3FA8B8]" />
                  ISO 9001:2015 Accredited
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#13224B] text-xs font-medium tracking-wide text-white border border-[#223B7C]">
                  IDA Member
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#13224B] text-xs font-medium tracking-wide text-white border border-[#223B7C]">
                  ICOI Diplomate
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold text-white tracking-[0.16em] uppercase">
                Explore Clinic
              </h4>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <Link href="#about-dr-sahni" className="hover:text-[#5EC4D1] transition-colors">
                    Dr. Radhika Sahni
                  </Link>
                </li>
                <li>
                  <Link href="#doctors" className="hover:text-[#5EC4D1] transition-colors">
                    Specialist Faculty
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="hover:text-[#5EC4D1] transition-colors">
                    Treatments &amp; Services
                  </Link>
                </li>
                <li>
                  <Link href="#international-desk" className="hover:text-[#5EC4D1] transition-colors">
                    International Desk
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" className="hover:text-[#5EC4D1] transition-colors">
                    Verified Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#book-appointment" className="hover:text-[#5EC4D1] transition-colors">
                    Consultation Hours
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Treatments */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold text-white tracking-[0.16em] uppercase">
                Specializations
              </h4>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <Link href="#cosmetic-dentistry" className="hover:text-[#5EC4D1] transition-colors">
                    Cosmetic Veneers
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="hover:text-[#5EC4D1] transition-colors">
                    Dental Implants (All-on-4)
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="hover:text-[#5EC4D1] transition-colors">
                    Microscopic Root Canals
                  </Link>
                </li>
                <li>
                  <Link href="#invisalign" className="hover:text-[#5EC4D1] transition-colors">
                    Invisalign® Aligners
                  </Link>
                </li>
                <li>
                  <Link href="#preventive-care" className="hover:text-[#5EC4D1] transition-colors">
                    Laser Periodontics
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="hover:text-[#5EC4D1] transition-colors">
                    Full Mouth Rehabilitation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & WhatsApp Button */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-semibold text-white tracking-[0.16em] uppercase">
                New Delhi Clinic
              </h4>
              <div className="space-y-2 text-sm text-white/80">
                <p className="font-semibold text-lg text-white">
                  <a href="tel:+911141627127" className="hover:text-[#5EC4D1] transition-colors">
                    +91-11-41627127
                  </a>
                </p>
                <p className="font-medium text-white">
                  <a href="tel:+919818465668" className="hover:text-[#5EC4D1] transition-colors">
                    +91-9818465668
                  </a>
                </p>
                <p>
                  <a href="mailto:drsahniclinic@gmail.com" className="hover:text-[#5EC4D1] transition-colors">
                    drsahniclinic@gmail.com
                  </a>
                </p>
                <div className="pt-2 text-xs leading-relaxed text-white/70">
                  <p className="font-medium text-white">#66, Friends Colony West</p>
                  <p>New Delhi – 110065, India</p>
                  <p className="mt-1">Mon – Sat: 09:00 AM – 08:00 PM (IST)</p>
                  <p>Sun: By Prior Appointment</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919818465668?text=Hello%20Dr.%20Sahni%27s%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <a
                href="https://www.practo.com/delhi/doctor/dr-radhika-sahni-dentist"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-[#13224B] hover:bg-[#1C2F65] text-white font-medium text-xs transition-colors border border-[#223B7C]"
                aria-label="Practo Profile"
              >
                Practo Profile
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#13224B] hover:bg-[#1C2F65] hover:text-[#5EC4D1] text-white/80 flex items-center justify-center transition-colors border border-[#223B7C]"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#13224B] hover:bg-[#1C2F65] hover:text-[#5EC4D1] text-white/80 flex items-center justify-center transition-colors border border-[#223B7C]"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#13224B] hover:bg-[#1C2F65] hover:text-[#5EC4D1] text-white/80 flex items-center justify-center transition-colors border border-[#223B7C]"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>

            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Dr. Sahni&apos;s Dental Clinic. All rights reserved. Dr. Radhika Sahni, BDS, MDS.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white hover:text-[#5EC4D1] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
