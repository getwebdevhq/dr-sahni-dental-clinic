"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, X, CheckCircle2, ArrowRight } from "lucide-react";

export default function SmileSimulatorBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const [goal, setGoal] = useState("crowding");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Container */}
      <div className="relative rounded-[36px] bg-gradient-to-r from-[#6C92D8] via-[#5C84D0] to-[#4FA3D9] text-white p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-xl">
        {/* Subtle decorative background curves */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4DB8C4]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold mb-4 border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Invisalign® & Digital Smile Design at Dr Sahni&apos;s</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Simulate Your New Smile with Dr Sahni&apos;s
          </h2>

          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mb-8">
            Discover the benefits of Invisalign clear aligners and custom aesthetic smile architecture. Use our smile simulator to visualize the before-and-after transformation guided by Dr. Radhika Sahni.
          </p>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white text-[#5C84D0] font-bold text-base sm:text-lg shadow-md hover:shadow-xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Try The Simulator
          </button>
        </div>
      </div>

      {/* Interactive Simulation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl overflow-hidden text-[#1E2433]">
            {/* Close button */}
            <button
              type="button"
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5C84D0] mb-2">
                  <Sparkles className="w-4 h-4 text-[#5C84D0]" />
                  Virtual Smile Assessment
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#101D42] mb-2">
                  Interactive Smile Simulator
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Drag the slider below to preview the alignment transformation achievable with Dr. Radhika Sahni&apos;s custom treatment plan.
                </p>

                {/* Interactive Before & After Slider */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 select-none mb-6">
                  <Image
                    src="/images/cosmetic-smile.jpg"
                    alt="After Smile Transformation"
                    fill
                    className="object-cover"
                  />
                  {/* Before Clip overlay */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <Image
                      src="/images/invisalign-aligner.jpg"
                      alt="Before alignment"
                      fill
                      className="object-cover brightness-90 filter grayscale-[30%]"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-black/70 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                      Before Alignment
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#4DB8C4] text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                    After Dr. Sahni Care
                  </span>

                  {/* Slider Control Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-xl flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white shadow-lg border-2 border-[#5C84D0] flex items-center justify-center text-xs font-bold text-[#5C84D0]">
                      ↔
                    </div>
                  </div>

                  {/* Range input */}
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                    aria-label="Slide to compare before and after smile"
                  />
                </div>

                {/* Goals Selection */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    What would you like to improve?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "crowding", label: "Crowded Teeth" },
                      { id: "spacing", label: "Gaps & Spacing" },
                      { id: "bite", label: "Bite & Alignment" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGoal(item.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          goal === item.id
                            ? "border-[#5C84D0] bg-[#5C84D0]/10 text-[#5C84D0]"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#book-appointment"
                    onClick={() => setModalOpen(false)}
                    className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#4DB8C4] to-[#5C84D0] text-white font-bold text-sm text-center shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2"
                  >
                    Book Consultation With Dr. Sahni
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="py-3.5 px-6 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Email Me Simulation
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-10 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold text-[#101D42] mb-2">
                  Simulation Roadmap On Its Way!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mb-6">
                  Thank you! Dr. Radhika Sahni and our orthodontic team will prepare your personalized smile preview roadmap.
                </p>
                <Link
                  href="#book-appointment"
                  onClick={() => setModalOpen(false)}
                  className="px-8 py-3 rounded-full bg-[#5C84D0] text-white font-semibold text-sm shadow-md"
                >
                  Schedule Your Digital 3D Scan
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
