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
    <section id="reviews" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching drsahni.netlify.app */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4DB8C4] mb-3">
            <Quote className="w-4 h-4 text-[#4DB8C4]" />
            Patient Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2433] tracking-tight">
            What Our Patients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B]">
            Hear from our global and local patients about their life-changing smile journeys with Dr Sahni&apos;s Dental Clinic.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#101D42]">4.9 out of 5</span>
            <span className="text-xs text-[#64748B]">• Over 500+ Verified Reviews</span>
          </div>
        </div>

        {/* Reviews Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 bg-[#FAFBFD] border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-xs font-bold text-blue-600">
                    G
                  </div>
                </div>

                <p className="font-serif-quote italic text-lg text-[#1E2433] leading-relaxed mb-6 font-medium">
                  {rev.text}
                </p>
              </div>

              <div className="border-t border-slate-200/60 pt-4">
                <p className="font-bold text-[#101D42] text-sm">{rev.author}</p>
                <p className="text-xs text-[#64748B]">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Carousel (Mobile & Tablet) */}
        <div className="lg:hidden relative max-w-xl mx-auto">
          <div className="rounded-3xl p-7 bg-[#FAFBFD] border border-slate-200/80 shadow-md min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-xs font-bold text-blue-600">
                  G
                </div>
              </div>

              <p className="font-serif-quote italic text-base sm:text-lg text-[#1E2433] leading-relaxed mb-6 font-medium">
                {reviews[currentIndex].text}
              </p>
            </div>

            <div className="border-t border-slate-200/60 pt-4">
              <p className="font-bold text-[#101D42] text-sm">
                {reviews[currentIndex].author}
              </p>
              <p className="text-xs text-[#64748B]">
                {reviews[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#4DB8C4] hover:text-white transition-colors shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-slate-500">
              {currentIndex + 1} of {reviews.length}
            </span>
            <button
              type="button"
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#4DB8C4] hover:text-white transition-colors shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
