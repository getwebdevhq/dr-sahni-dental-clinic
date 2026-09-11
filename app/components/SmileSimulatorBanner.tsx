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
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Architectural Deep Obsidian Showcase Card */}
      <div className="relative rounded-[32px] bg-[#121316] text-[#FAF9F5] p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-[#272A30] shadow-xl">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[350px] bg-[#9E8262]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold tracking-[0.16em] uppercase mb-5 border border-white/15 text-[#BCA384]">
            <Sparkles className="w-3.5 h-3.5 text-[#BCA384]" />
            <span>Digital Smile Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FAF9F5] mb-4">
            Simulate Your New Smile With Digital Precision
          </h2>

          <p className="text-base sm:text-lg text-[#A0A4AE] font-normal leading-relaxed max-w-2xl mb-9">
            Visualize the predictive results of Invisalign clear aligners and custom aesthetic veneer architecture before treatment commences, guided by Dr. Radhika Sahni&apos;s prosthodontic mastery.
          </p>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-press px-8 py-4 rounded-full bg-[#FAF9F5] text-[#121316] font-semibold text-base shadow-md hover:bg-white hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>Launch Virtual Simulator</span>
            <ArrowRight className="w-4 h-4 text-[#9E8262]" />
          </button>
        </div>
      </div>

      {/* Interactive Simulation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl overflow-hidden text-[#121316] border border-[#EAE7DF]">
            {/* Close button */}
            <button
              type="button"
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F4F1EA] text-[#7E838F] hover:text-[#121316] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9E8262] mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#9E8262]" />
                  Virtual Smile Assessment
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#121316] mb-2">
                  Interactive Smile Simulator
                </h3>
                <p className="text-sm text-[#52565E] mb-6 font-normal">
                  Drag the slider below to preview the alignment transformation achievable with Dr. Radhika Sahni&apos;s custom treatment plan.
                </p>

                {/* Interactive Before & After Slider */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#EAE7DF] bg-[#FAF9F5] select-none mb-6">
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
                      className="object-cover brightness-90 filter grayscale-[25%]"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-black/80 text-[#FAF9F5] rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">
                      Pre-Treatment
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#121316] text-[#FAF9F5] rounded-full text-xs font-semibold backdrop-blur-sm border border-[#9E8262]/40">
                    Dr. Sahni Design
                  </span>

                  {/* Slider Control Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-xl flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#121316] text-white shadow-lg border-2 border-white flex items-center justify-center text-xs font-bold">
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#52565E] mb-2.5">
                    What would you like to improve?
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: "crowding", label: "Crowded Teeth" },
                      { id: "spacing", label: "Gaps & Spacing" },
                      { id: "bite", label: "Bite & Alignment" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGoal(item.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                          goal === item.id
                            ? "border-[#9E8262] bg-[#FAF6F0] text-[#9E8262] font-semibold"
                            : "border-[#EAE7DF] text-[#52565E] hover:bg-[#F4F1EA]"
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
                    className="btn-press flex-1 py-3.5 rounded-full bg-[#121316] text-white font-semibold text-sm text-center shadow-md hover:bg-[#1E2025] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book Consultation With Dr. Sahni</span>
                    <ArrowRight className="w-4 h-4 text-[#BCA384]" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-[#121316] mb-1">
                  Simulation Preview Saved
                </h4>
                <p className="text-sm text-[#52565E]">
                  Our patient coordinator will reference your custom simulation during your consultation.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
