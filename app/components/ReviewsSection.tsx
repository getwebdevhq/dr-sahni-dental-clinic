"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      author: "Anita Verma",
      role: "Dental Implants Patient",
      rating: 5,
      text: "“Dr. Sahni and her team provided exceptional care during my dental implant procedure. The results exceeded my expectations — my smile has never looked better!”",
    },
    {
      author: "Rahul Gupta",
      role: "Invisalign Patient",
      rating: 5,
      text: "“I was nervous about getting Invisalign, but Dr. Sahni and the orthodontic team made the entire process comfortable and stress-free. Highly recommend this clinic!”",
    },
    {
      author: "Sunita Joshi",
      role: "General Checkup Patient",
      rating: 5,
      text: "“The clinic is spotless, the staff is incredibly friendly, and the treatment was painless. I finally found a dentist I can trust with my family’s oral health.”",
    },
    {
      author: "Vikram Singh",
      role: "Cosmetic Dentistry Patient",
      rating: 5,
      text: "“Outstanding cosmetic dentistry work! My teeth whitening and veneer results were dramatic. The team here really knows what they’re doing. Five stars all the way.”",
    },
    {
      author: "Meera Patel",
      role: "Root Canal Patient",
      rating: 5,
      text: "“After years of dental anxiety, Dr. Sahni’s gentle approach changed everything. My root canal was completely painless. This clinic is a true game-changer!”",
    },
    {
      author: "Karan Mehta",
      role: "Pediatric Dentistry Parent",
      rating: 5,
      text: "“The pediatric dental specialists here are amazing! They made my son’s first visit so fun and completely removed his fear of the dentist chair.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FAFBFD] border-y border-[#E2EEF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3FA8B8] mb-3">
            <Quote className="w-3.5 h-3.5 text-[#3FA8B8]" />
            Patient Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0F1D40] tracking-tight">
            What Our Patients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5B78] font-normal leading-relaxed">
            Hear from our global and domestic patients about their smile transformations with Dr Sahni&apos;s Dental Clinic.
          </p>
          <div className="flex items-center justify-center gap-2.5 mt-5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#0F1D40]">4.9 out of 5</span>
            <span className="text-xs text-[#7E90AF]">• Over 500+ Verified Patient Reviews</span>
          </div>
        </div>

        {/* Reviews Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((rev, idx) => (
            <div
              key={idx}
              className="blue-clinic-card rounded-3xl p-8 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] flex items-center justify-center text-[11px] font-bold text-[#0066cc]">
                    G
                  </div>
                </div>

                <p className="font-serif italic text-lg text-[#0F1D40] leading-relaxed mb-6 font-normal">
                  {rev.text}
                </p>
              </div>

              <div className="border-t border-[#E2EEF2] pt-4">
                <p className="font-semibold text-[#0F1D40] text-sm">{rev.author}</p>
                <p className="text-xs text-[#7E90AF] mt-0.5">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Carousel (Mobile & Tablet) */}
        <div className="lg:hidden relative max-w-xl mx-auto">
          <div className="blue-clinic-card rounded-3xl p-7 bg-white min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="w-6 h-6 rounded-full bg-[#EBF8FA] border border-[#C6E6EC] flex items-center justify-center text-[11px] font-bold text-[#0066cc]">
                  G
                </div>
              </div>

              <p className="font-serif italic text-base sm:text-lg text-[#0F1D40] leading-relaxed mb-6 font-normal">
                {reviews[currentIndex].text}
              </p>
            </div>

            <div className="border-t border-[#E2EEF2] pt-4">
              <p className="font-semibold text-[#0F1D40] text-sm">
                {reviews[currentIndex].author}
              </p>
              <p className="text-xs text-[#7E90AF] mt-0.5">
                {reviews[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prevReview}
              className="btn-press w-10 h-10 rounded-full bg-white border border-[#E2EEF2] flex items-center justify-center text-[#0F1D40] hover:bg-[#EBF8FA] hover:text-[#3FA8B8] shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              className="btn-press w-10 h-10 rounded-full bg-white border border-[#E2EEF2] flex items-center justify-center text-[#0F1D40] hover:bg-[#EBF8FA] hover:text-[#3FA8B8] shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
