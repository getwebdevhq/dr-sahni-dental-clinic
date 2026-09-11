"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone, Calendar } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/95 backdrop-blur-xl shadow-xs py-3 border-b border-[#EAE7DF]"
          : "bg-[#FAF9F5] py-4 sm:py-5 border-b border-[#EAE7DF]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo: Dr Sahni's Dental Clinic */}
        <Link href="/" className="flex items-center gap-3.5 group select-none">
          <div className="w-11 h-11 rounded-2xl bg-[#121316] p-2 shadow-xs group-hover:scale-105 transition-transform duration-200 shrink-0 flex items-center justify-center border border-[#272A30]">
            <Image
              src="/images/ds-monogram-light.png"
              alt="Dr Sahni's Dental Clinic Logo"
              width={34}
              height={26}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif text-2xl sm:text-[25px] font-bold tracking-tight text-[#121316]">
              Dr Sahni&apos;s
            </span>
            <span className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] uppercase text-[#9E8262] mt-1 font-sans">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-xs font-semibold tracking-widest uppercase text-[#52565E] hover:text-[#121316] transition-colors"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-[#52565E] hover:text-[#121316] transition-colors cursor-pointer"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Treatments
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#121316]" : "text-[#7E838F]"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 pt-3 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-[#EAE7DF] p-2 py-3 space-y-1 animate-in fade-in zoom-in-95 duration-150 origin-top">
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    Cosmetic Dentistry &amp; Veneers
                  </Link>
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    Advanced Dental Implants (All-on-4)
                  </Link>
                  <Link
                    href="#invisalign"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    Invisalign® &amp; Clear Aligners
                  </Link>
                  <Link
                    href="#preventive-care"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    General Care &amp; Diagnostics
                  </Link>
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    Microscopic Endodontics (Root Canals)
                  </Link>
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    Laser Periodontics &amp; Gum Care
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-[#52565E] hover:text-[#121316] transition-colors cursor-pointer"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180 text-[#121316]" : "text-[#7E838F]"
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 w-64 pt-3 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-[#EAE7DF] p-2 py-3 space-y-1 animate-in fade-in zoom-in-95 duration-150 origin-top">
                  <Link
                    href="#about-dr-sahni"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    About Our Clinic
                  </Link>
                  <Link
                    href="#doctors"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    Our Specialist Faculty
                  </Link>
                  <Link
                    href="#international-desk"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    International Patient Concierge
                  </Link>
                  <Link
                    href="#reviews"
                    className="block px-4 py-2.5 text-xs text-[#52565E] hover:bg-[#F4F2EB] hover:text-[#121316] rounded-xl font-medium transition-colors"
                  >
                    Patient Stories
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#reviews"
            className="text-xs font-semibold tracking-widest uppercase text-[#52565E] hover:text-[#121316] transition-colors"
          >
            Patient Stories
          </Link>

          <Link
            href="#book-appointment"
            className="text-xs font-semibold tracking-widest uppercase text-[#52565E] hover:text-[#121316] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button & Phone */}
        <div className="hidden md:flex items-center gap-3.5">
          <a
            href="tel:+911141627127"
            className="btn-press flex items-center gap-2 text-xs font-semibold text-[#121316] hover:text-[#9E8262] px-4 py-2.5 rounded-full border border-[#EAE7DF] bg-white/70 hover:bg-white shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#9E8262]" />
            <span>+91-11-41627127</span>
          </a>
          <Link
            href="#book-appointment"
            className="btn-press px-6 py-2.5 text-xs font-semibold rounded-full bg-[#121316] hover:bg-[#22252A] text-white shadow-sm flex items-center gap-2 border border-[#272A30]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#BCA384]" />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#121316] hover:bg-[#F4F2EB] transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAE7DF] px-6 py-5 shadow-xl space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-[#121316]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F4F2EB] text-sm hover:text-[#9E8262]"
            >
              Home
            </Link>
            <Link
              href="#about-dr-sahni"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F4F2EB] text-sm hover:text-[#9E8262]"
            >
              About Our Clinic
            </Link>
            <Link
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F4F2EB] text-sm hover:text-[#9E8262]"
            >
              Our Specialists
            </Link>
            <Link
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F4F2EB] text-sm hover:text-[#9E8262]"
            >
              Treatments &amp; Services
            </Link>
            <Link
              href="#invisalign"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F4F2EB] text-sm hover:text-[#9E8262]"
            >
              Invisalign® Alignment
            </Link>
            <Link
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F4F2EB] text-sm hover:text-[#9E8262]"
            >
              Patient Stories
            </Link>
            <Link
              href="#book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm hover:text-[#9E8262]"
            >
              Contact &amp; Location
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+919818465668"
              className="btn-press flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#EAE7DF] text-sm font-semibold text-[#121316] bg-[#FAF9F5]"
            >
              <Phone className="w-4 h-4 text-[#9E8262]" />
              Call +91-9818465668
            </a>
            <Link
              href="#book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-press flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#121316] text-white font-semibold text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#BCA384]" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
