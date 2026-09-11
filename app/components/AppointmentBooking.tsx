"use client";

import React, { useState } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle2, Send, ExternalLink } from "lucide-react";

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "10:00 AM - 12:00 PM",
    type: "Cosmetic Dentistry & Smile Designing",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="book-appointment" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#3FA8B8] mb-3 block">
          Reserve Your Visit
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0F1D40] tracking-tight">
          Book An Appointment at Dr Sahni&apos;s
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#4A5B78] font-normal leading-relaxed">
          Request your preferred date and time with Dr. Radhika Sahni and our dedicated faculty in Friends Colony West, New Delhi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Contact Details, Hours & Address */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Contact Info */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2EEF2] shadow-xs space-y-5">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3FA8B8] mb-2">
                Direct Clinic Numbers
              </span>
              <div className="space-y-2">
                <a
                  href="tel:+911141627127"
                  className="text-xl sm:text-2xl font-bold text-[#0F1D40] hover:text-[#3FA8B8] transition-colors flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#EBF8FA] text-[#3FA8B8] flex items-center justify-center shrink-0 border border-[#C6E6EC]">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91-11-41627127
                </a>
                <a
                  href="tel:+919818465668"
                  className="text-lg sm:text-xl font-medium text-[#4A5B78] hover:text-[#3FA8B8] transition-colors flex items-center gap-3 pl-1"
                >
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Mobile / WhatsApp
                  </span>
                  +91-9818465668
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2EEF2]">
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3FA8B8] mb-1.5">
                Email Address
              </span>
              <a
                href="mailto:drsahniclinic@gmail.com"
                className="text-base sm:text-lg font-medium text-[#0F1D40] hover:text-[#3FA8B8] transition-colors flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#EBF8FA] text-[#3FA8B8] flex items-center justify-center shrink-0 border border-[#C6E6EC]">
                  <Mail className="w-4 h-4" />
                </div>
                drsahniclinic@gmail.com
              </a>
            </div>

            {/* Practo Booking Link */}
            <div className="pt-3 border-t border-[#E2EEF2]">
              <a
                href="https://www.practo.com/delhi/doctor/dr-radhika-sahni-dentist"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center w-full px-4 py-3.5 rounded-2xl bg-[#0F1D40] text-white text-xs sm:text-sm font-semibold hover:bg-[#1A2E5A] transition-all gap-2 shadow-xs cursor-pointer"
              >
                <span>Book Instant Slot on Practo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#5EC4D1]" />
              </a>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2EEF2] shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E2EEF2] text-[#0F1D40] font-semibold text-base">
              <Clock className="w-4 h-4 text-[#3FA8B8]" />
              Consultation Hours (IST)
            </div>

            <div className="space-y-2 text-sm">
              {[
                { day: "Monday", hours: "09:00 AM – 08:00 PM" },
                { day: "Tuesday", hours: "09:00 AM – 08:00 PM" },
                { day: "Wednesday", hours: "09:00 AM – 08:00 PM" },
                { day: "Thursday", hours: "09:00 AM – 08:00 PM" },
                { day: "Friday", hours: "09:00 AM – 08:00 PM" },
                { day: "Saturday", hours: "09:00 AM – 08:00 PM" },
                { day: "Sunday", hours: "By Prior Appointment", isSpecial: true },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#4A5B78]">{item.day}</span>
                  <span
                    className={`font-semibold ${
                      item.isSpecial ? "text-[#3FA8B8]" : "text-[#0F1D40]"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Address Box */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2EEF2] shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-[#0F1D40] font-semibold text-base">
              <MapPin className="w-4 h-4 text-[#3FA8B8]" />
              Clinic Address
            </div>
            <p className="text-base font-semibold text-[#0F1D40]">
              #66, Friends Colony West
            </p>
            <p className="text-sm text-[#4A5B78] mt-0.5">
              New Delhi – 110065, India
            </p>
            <p className="text-xs text-[#7E90AF] mt-2 flex items-center gap-1.5">
              <span>🚗 Valet &amp; patient parking available on-site</span>
            </p>
          </div>

        </div>

        {/* Right Column: Appointment Form */}
        <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-10 shadow-xs border border-[#E2EEF2]">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#4A5B78] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAFBFD] border border-[#E2EEF2] focus:border-[#3FA8B8] focus:bg-white focus:outline-none text-sm text-[#0F1D40] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#4A5B78] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAFBFD] border border-[#E2EEF2] focus:border-[#3FA8B8] focus:bg-white focus:outline-none text-sm text-[#0F1D40] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#4A5B78] uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91-XXXXXXXXXX or Country Code"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAFBFD] border border-[#E2EEF2] focus:border-[#3FA8B8] focus:bg-white focus:outline-none text-sm text-[#0F1D40] transition-all"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#4A5B78] uppercase tracking-wider mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAFBFD] border border-[#E2EEF2] focus:border-[#3FA8B8] focus:bg-white focus:outline-none text-sm text-[#0F1D40] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Time */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#4A5B78] uppercase tracking-wider mb-2">
                    Preferred Time Slot (IST)
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAFBFD] border border-[#E2EEF2] focus:border-[#3FA8B8] focus:bg-white focus:outline-none text-sm text-[#0F1D40] transition-all"
                  >
                    <option value="09:30 AM - 11:00 AM">09:30 AM – 11:00 AM</option>
                    <option value="11:00 AM - 01:00 PM">11:00 AM – 01:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM – 04:00 PM</option>
                    <option value="04:00 PM - 06:00 PM">04:00 PM – 06:00 PM</option>
                    <option value="06:00 PM - 08:00 PM">06:00 PM – 08:00 PM</option>
                  </select>
                </div>

                {/* Appointment Type */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#4A5B78] uppercase tracking-wider mb-2">
                    Treatment Category
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAFBFD] border border-[#E2EEF2] focus:border-[#3FA8B8] focus:bg-white focus:outline-none text-sm text-[#0F1D40] transition-all"
                  >
                    <option value="Cosmetic Dentistry & Smile Designing">Cosmetic Dentistry & Smile Designing</option>
                    <option value="Dental Implants (Single / All-on-4)">Dental Implants (Single / All-on-4)</option>
                    <option value="MicroEndodontics (Root Canal Treatment)">MicroEndodontics (Root Canal Treatment)</option>
                    <option value="Invisalign® & Clear Aligners">Invisalign® & Clear Aligners</option>
                    <option value="Laser Dentistry & Gum Therapy">Laser Dentistry & Gum Therapy</option>
                    <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                    <option value="Routine Checkup & Teeth Cleaning">Routine Checkup & Teeth Cleaning</option>
                    <option value="International Patient Virtual Consultation">International Patient Virtual Consultation</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold text-[#4A5B78] uppercase tracking-wider mb-2">
                  Special Notes or Dental History (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your concerns, previous treatments, or preferred doctor (e.g., Dr. Radhika Sahni, Dr. Sonam Mahajan, Dr. Maliha Athar)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FAFBFD] border border-[#E2EEF2] focus:border-[#3FA8B8] focus:bg-white focus:outline-none text-sm text-[#0F1D40] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-press w-full py-4 rounded-full text-base font-semibold text-white bg-[#3FA8B8] hover:bg-[#3492A0] shadow-md shadow-[#3FA8B8]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Request Priority Appointment</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[#7E90AF]">
                🔒 Strict medical confidentiality guaranteed. Our patient desk will confirm your slot within 2 business hours.
              </p>
            </form>
          ) : (
            <div className="py-14 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F1D40] mb-2">
                Appointment Request Received
              </h3>
              <p className="text-sm text-[#4A5B78] max-w-md mx-auto mb-7 leading-relaxed font-normal">
                Thank you, <strong>{formData.name}</strong>. Dr. Radhika Sahni and our patient concierge desk in New Delhi have received your consultation request for <strong>{formData.date || "your preferred date"}</strong> ({formData.time}). We will contact you promptly at <strong>{formData.phone}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "10:00 AM - 12:00 PM",
                    type: "Cosmetic Dentistry & Smile Designing",
                    message: "",
                  });
                }}
                className="btn-press px-8 py-3 rounded-full bg-[#0F1D40] text-white font-semibold text-xs hover:bg-[#1A2E5A] transition-colors cursor-pointer"
              >
                Book Another Appointment
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
