"use client";

import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "I was impressed by the care! And I could really tell that they use high-quality materials and digital planning. The staff was friendly and attentive. I'll definitely be back for my checkups!",
    name: "Tamar Mendelson",
    designation: "Patient",
    src: "/images/doctors/dr-radhika-sahni.jpg",
  },
  {
    quote:
      "This clinic exceeded all expectations! The atmosphere is inviting, and the doctors truly go above and beyond. I'll keep returning for my dental care.",
    name: "Joe Charlescraft",
    designation: "International Patient",
    src: "/images/doctors/dr-sonam-mahajan.jpg",
  },
  {
    quote:
      "Dr Sahni's clinic is a world-class center! The impeccable service and overall attention to detail created a memorable and painless experience.",
    name: "Martina Edelweist",
    designation: "Satisfied Patient",
    src: "/images/doctors/dr-maliha-athar.jpg",
  },
];

export const CircularTestimonialsDemo = () => (
  <section className="py-12 space-y-12">
    {/* Light testimonials section */}
    <div className="bg-[#f7f7fa] p-8 sm:p-20 rounded-3xl min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex w-full"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "18px",
          }}
        />
      </div>
    </div>

    {/* Dark testimonials section */}
    <div className="bg-[#060507] p-8 sm:p-16 rounded-3xl min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex w-full"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#0582CA",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "18px",
          }}
        />
      </div>
    </div>
  </section>
);

export default CircularTestimonialsDemo;
