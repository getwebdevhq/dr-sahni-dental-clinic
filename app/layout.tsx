import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drsahnisdental.com"),
  title: "World-Class Dentistry | Dr Sahni's Dental Clinic — Trusted Beyond Borders",
  description:
    "Exceptional dentistry and personalised care trusted beyond borders. Specialist-led aesthetic dentistry, advanced implantology, and custom smile transformations led by Dr. Radhika Sahni.",
  keywords: [
    "Dr Sahni Dental Clinic",
    "Dr Radhika Sahni",
    "world-class dentistry",
    "dental implants specialist",
    "Invisalign orthodontics",
    "cosmetic smile design",
    "full mouth rehabilitation",
    "New Delhi dental clinic",
    "Friends Colony West dentist",
    "international dental care",
  ],
  authors: [{ name: "Dr. Radhika Sahni, Director & Senior Prosthodontist" }],
  openGraph: {
    title: "World-Class Dentistry | Dr Sahni's Dental Clinic — Trusted Beyond Borders",
    description:
      "Exceptional dentistry and personalised care trusted beyond borders. Specialist-led aesthetic dentistry, advanced implantology, and custom smile transformations.",
    url: "https://www.drsahnisdental.com",
    siteName: "Dr Sahni's Dental Clinic",
    images: [
      {
        url: "/images/dr-sahni.jpg",
        width: 1200,
        height: 900,
        alt: "Dr. Radhika Sahni - Dr Sahni's Dental Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-[#121316] bg-[#FAF9F5] selection:bg-[#9E8262]/20 selection:text-[#121316]">
        {children}
      </body>
    </html>
  );
}

