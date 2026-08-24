import type { Metadata } from "next";
import Link from "next/link";
import PageSubmenu from "../components/PageSubmenu";
import { Heart, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Women Empowerment Cell",
  description:
    "Women Empowerment Cell at CBM College of Arts and Science, Coimbatore. Promoting gender equality, legal rights guidance, counseling, and entrepreneurship for women.",
};

export default function WomenEmpowermentPage() {
  const aboutSubmenuItems = [
    { label: "About College & Founder", href: "/about" },
    { label: "Women Empowerment Cell", href: "/women-empowerment", active: true },
  ];

  const objectives = [
    "Sensitize and bring to light critical issues concerning females in society.",
    "Educate and explain legal rights regarding gender-based safety & anti-harassment.",
    "Provide a safe confidential space for women to express views and address grievances.",
    "Offer psychological counseling, academic guidance, and mentorship.",
    "Integrate girl students into all institutional planning & developmental leadership roles.",
    "Make women physically, mentally, and emotionally resilient to face societal challenges.",
    "Inculcate entrepreneurial skills so women achieve economic independence."
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* BANNER WITH BACKGROUND CAMPUS IMAGE */}
      <section className="relative text-white py-14 px-4 sm:px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_2.jpg')" }}
        />
        {/* Brand Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <span>Women Empowerment Cell</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Women Empowerment Cell
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Sowing seeds of courage, self-reliance, leadership, and legal awareness among girl students and women faculty.
          </p>
        </div>
      </section>

      {/* PAGE SUBMENU & CELL CONTENT */}
      <PageSubmenu sectionTitle="About Us" items={aboutSubmenuItems}>
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#EC1C23] flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold  text-[#2C2B5E]">Nurturing Confident Female Leaders</h2>
                <p className="text-xs text-[#EC1C23] font-bold uppercase tracking-wider">Cell Mission</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              The Women Empowerment Cell at CBM College is dedicated to briefing female students and staff on contemporary social issues, equipping them to face modern personal and professional challenges with confidence and dignity.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* 7 Core Objectives */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold  text-[#2C2B5E]">7 Core Cell Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((obj, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#EC1C23] text-white font-extrabold flex items-center justify-center shrink-0 text-xs">
                    0{i + 1}
                  </span>
                  <p className="text-slate-700 text-xs leading-relaxed font-medium pt-0.5">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Key Events */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold  text-[#2C2B5E]">Key Events & Initiatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-[#EC1C23]">Annual Flagship</span>
                <h4 className="text-base font-bold text-[#2C2B5E]">International Women's Day</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Celebrated annually on March 8th with guest lectures by prominent women achievers, cultural programs, and award recognitions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-[#EC1C23]">Workshops & Seminars</span>
                <h4 className="text-base font-bold text-[#2C2B5E]">Entrepreneurship & Safety</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Hands-on sessions on financial literacy, startup ideation, self-defense techniques, and health awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSubmenu>
    </div>
  );
}
