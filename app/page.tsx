import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoServicesGrid from "./components/BentoServicesGrid";
import SmileSimulatorBanner from "./components/SmileSimulatorBanner";
import AboutDrSahni from "./components/AboutDrSahni";
import LegacyBanner from "./components/LegacyBanner";
import TreatmentDeepDives from "./components/TreatmentDeepDives";
import ReviewsSection from "./components/ReviewsSection";
import AppointmentBooking from "./components/AppointmentBooking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] selection:bg-[#9E8262]/20 selection:text-[#121316]">
      {/* Top sticky navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero with main headline & booking CTA */}
        <HeroSection />

        {/* 8-card bento grid previewing core dental services */}
        <BentoServicesGrid />

        {/* Invisalign Smile Simulator banner with interactive assessment */}
        <SmileSimulatorBanner />

        {/* Meet Dr. Sahni & Clinic Comfort philosophy with 600k+ smiles stats */}
        <AboutDrSahni />

        {/* 30-year community legacy banner */}
        <LegacyBanner />

        {/* Detailed treatment highlights (Preventive, Cosmetic, Invisalign) */}
        <TreatmentDeepDives />

        {/* Verified patient reviews and 4.7 Google Rating */}
        <ReviewsSection />

        {/* Interactive appointment booking form & clinic hours */}
        <AppointmentBooking />
      </main>

      {/* Signature teal footer with accreditations and WhatsApp connect */}
      <Footer />
    </div>
  );
}

