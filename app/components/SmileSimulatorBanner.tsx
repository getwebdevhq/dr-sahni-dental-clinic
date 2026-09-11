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
      {/* Premier Sapphire & Royal Navy Showcase Card */}
      <div className="relative rounded-[32px] bg-gradient-to-br from-[#0F1D40] via-[#162D63] to-[#1C3B7E] text-white p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-[#2B4B96]/40 shadow-xl">
        {/* Subtle background cyan glow */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[350px] bg-[#3FA8B8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[250px] bg-[#5C84D0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold tracking-[0.16em] uppercase mb-5 border border-white/15 text-[#5EC4D1]">
            <Sparkles className="w-3.5 h-3.5 text-[#5EC4D1]" />
            <span>Digital Smile Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Simulate Your New Smile With Digital Precision
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed max-w-2xl mb-9">
            Visualize the predictive results of Invisalign clear aligners and custom aesthetic veneer architecture before treatment commences, guided by Dr. Radhika Sahni&apos;s prosthodontic mastery.
          </p>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-press px-8 py-4 rounded-full bg-white text-[#0F1D40] font-semibold text-base shadow-md hover:bg-[#EBF8FA] hover:text-[#3FA8B8] inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Launch Virtual Simulator</span>
            <ArrowRight className="w-4 h-4 text-[#3FA8B8]" />
          </button>
        </div>
      </div>

      {/* Interactive Simulation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl overflow-hidden text-[#0F1D40] border border-[#E2EEF2]">
            {/* Close button */}
            <button
              type="button"
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EBF8FA] text-[#7E90AF] hover:text-[#0F1D40] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3FA8B8] mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#3FA8B8]" />
                  Virtual Smile Assessment
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#0F1D40] mb-2">
                  Interactive Smile Simulator
                </h3>
                <p className="text-sm text-[#4A5B78] mb-6 font-normal">
                  Drag the slider below to preview the alignment transformation achievable with Dr. Radhika Sahni&apos;s custom treatment plan.
                </p>

                {/* Interactive Before & After Slider */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E2EEF2] bg-[#FAFBFD] select-none mb-6">
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
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#0F1D40]/85 text-white rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">
                      Pre-Treatment
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#3FA8B8] text-white rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm">
                    Dr. Sahni Design
                  </span>

                  {/* Slider Control Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-xl flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0F1D40] text-white shadow-lg border-2 border-white flex items-center justify-center text-xs font-bold">
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A5B78] mb-2.5">
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
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          goal === item.id
                            ? "border-[#3FA8B8] bg-[#EBF8FA] text-[#246B75] font-semibold"
                            : "border-[#E2EEF2] text-[#4A5B78] hover:bg-[#F2F8FA]"
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
                    className="btn-press flex-1 py-3.5 rounded-full bg-[#3FA8B8] hover:bg-[#3492A0] text-white font-semibold text-sm text-center shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Book Consultation With Dr. Sahni</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-[#0F1D40] mb-1">
                  Simulation Preview Saved
                </h4>
                <p className="text-sm text-[#4A5B78]">
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
