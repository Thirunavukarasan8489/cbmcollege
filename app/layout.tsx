import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CollegeSchema } from "./components/JsonLd";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "CBM College of Arts and Science | Coimbatore",
    template: "%s | CBM College of Arts and Science",
  },
  description:
    "CBM College of Arts and Science, Sakethapuri, Kovaipudur, Coimbatore. Established 1974. Affiliated to Bharathiar University & AICTE Approved MBA. Offering premier UG, PG & MBA degree programs.",
  keywords: [
    "CBM College",
    "CBM College Coimbatore",
    "Arts and Science College Kovaipudur",
    "MBA College Coimbatore",
    "Bharathiar University Affiliated College",
    "UG PG admissions Coimbatore",
    "CBM Sakunthala Memorial Trust",
  ],
  authors: [{ name: "CBM College of Arts & Science" }],
  metadataBase: new URL("https://www.cbmcollege.com"),
  openGraph: {
    title: "CBM College of Arts and Science | Coimbatore",
    description:
      "A regional institution of educational excellence established in 1974, affiliated to Bharathiar University and approved by AICTE.",
    url: "https://www.cbmcollege.com",
    siteName: "CBM College of Arts and Science",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${headingFont.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#252525] antialiased font-sans">
        <CollegeSchema />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
