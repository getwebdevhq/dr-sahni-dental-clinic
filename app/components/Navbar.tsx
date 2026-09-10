"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo: Dr Sahni's Dental Clinic */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#4DB8C4] via-[#5C84D0] to-[#4DB8C4] p-[2px] shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-serif text-base font-bold text-[#101D42] tracking-tight">
              DS
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#101D42] leading-none">
              Dr Sahni&apos;s
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#4DB8C4] mt-1">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide uppercase text-[#1E2433] hover:text-[#4DB8C4] transition-colors"
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
              className="flex items-center gap-1 text-sm font-semibold tracking-wide uppercase text-[#1E2433] hover:text-[#4DB8C4] transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Treatments
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#4DB8C4]" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 pt-3 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 py-3 space-y-1">
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    Cosmetic Dentistry & Veneers
                  </Link>
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    Advanced Dental Implants (All-on-4)
                  </Link>
                  <Link
                    href="#invisalign"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    Invisalign® & Clear Aligners
                  </Link>
                  <Link
                    href="#preventive-care"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    General Care & Diagnostics
                  </Link>
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    Microscopic Endodontics (Root Canals)
                  </Link>
                  <Link
                    href="#treatments"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    Laser Periodontics & Gum Care
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
              className="flex items-center gap-1 text-sm font-semibold tracking-wide uppercase text-[#1E2433] hover:text-[#4DB8C4] transition-colors"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180 text-[#4DB8C4]" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 w-64 pt-3 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 py-3 space-y-1">
                  <Link
                    href="#about-dr-sahni"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    About Our Clinic
                  </Link>
                  <Link
                    href="#doctors"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    Our Specialist Faculty
                  </Link>
                  <Link
                    href="#international-desk"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    International Patient Concierge
                  </Link>
                  <Link
                    href="#reviews"
                    className="block px-4 py-2.5 text-sm text-[#1E2433] hover:bg-[#EBF8FA] hover:text-[#4DB8C4] rounded-xl font-medium transition-colors"
                  >
                    Patient Stories
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#reviews"
            className="text-sm font-semibold tracking-wide uppercase text-[#1E2433] hover:text-[#4DB8C4] transition-colors"
          >
            Patient Stories
          </Link>

          <Link
            href="#book-appointment"
            className="text-sm font-semibold tracking-wide uppercase text-[#1E2433] hover:text-[#4DB8C4] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button & Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+911141627127"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#101D42] hover:text-[#4DB8C4] transition-colors px-3 py-2 rounded-full border border-slate-200"
          >
            <Phone className="w-3.5 h-3.5 text-[#4DB8C4]" />
            +91-11-41627127
          </a>
          <Link
            href="#book-appointment"
            className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#4DB8C4] to-[#5C84D0] text-white shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#101D42] hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-[#1E2433]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 text-sm hover:text-[#4DB8C4]"
            >
              Home
            </Link>
            <Link
              href="#about-dr-sahni"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 text-sm hover:text-[#4DB8C4]"
            >
              About Our Clinic
            </Link>
            <Link
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 text-sm hover:text-[#4DB8C4]"
            >
              Our Specialists
            </Link>
            <Link
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 text-sm hover:text-[#4DB8C4]"
            >
              Treatments & Services
            </Link>
            <Link
              href="#invisalign"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 text-sm hover:text-[#4DB8C4]"
            >
              Invisalign® Alignment
            </Link>
            <Link
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 text-sm hover:text-[#4DB8C4]"
            >
              Patient Stories
            </Link>
            <Link
              href="#book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm hover:text-[#4DB8C4]"
            >
              Contact & Location
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+919818465668"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-slate-200 text-sm font-semibold text-[#101D42]"
            >
              <Phone className="w-4 h-4 text-[#4DB8C4]" />
              Call +91-9818465668
            </a>
            <Link
              href="#book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-[#4DB8C4] to-[#5C84D0] text-white font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
