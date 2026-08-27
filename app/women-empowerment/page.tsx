import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Women Empowerment Cell",
  description:
    "Women Empowerment Cell at CBM College of Arts and Science, Coimbatore. Promoting gender equality, legal rights guidance, counseling, and entrepreneurship for women.",
};

export default function WomenEmpowermentPage() {
  const objectives = [
    "Sensitize and bring to light critical issues concerning females in society.",
    "Educate and explain legal rights regarding gender-based safety & anti-harassment.",
    "Provide a safe confidential space for women to express views and address grievances.",
    "Offer psychological counseling, academic guidance, and mentorship.",
    "Integrate girl students into all institutional planning & developmental leadership roles.",
    "Make women physically, mentally, and emotionally resilient to face societal challenges.",
    "Inculcate entrepreneurial skills so women achieve economic independence.",
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* BANNER WITH BACKGROUND CAMPUS IMAGE */}
      <section className="relative text-white py-14 px-4 sm:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3 pt-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:underline">About Us</Link>
            <span>/</span>
            <span>Women Empowerment Cell</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Women Empowerment Cell
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Sowing seeds of courage, self-reliance, leadership, and legal awareness among girl students and women faculty.
          </p>
        </div>
      </section>

      {/* FULL WIDTH RESPONSIVE CELL CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#EC1C23] flex items-center justify-center font-bold shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#2C2B5E]">Nurturing Confident Female Leaders</h2>
              <p className="text-xs text-[#EC1C23] font-bold uppercase tracking-wider">Cell Mission Statement</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            The Women Empowerment Cell at CBM College is dedicated to briefing female students and staff on contemporary social issues, equipping them to face modern personal and professional challenges with confidence, dignity, and independence.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#EC1C23] uppercase tracking-wider">Strategic Pillars</span>
            <h3 className="text-2xl font-bold text-[#2C2B5E]">7 Core Cell Objectives</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow">
                <span className="w-8 h-8 rounded-xl bg-[#EC1C23] text-white font-extrabold flex items-center justify-center text-xs shadow-sm">
                  0{i + 1}
                </span>
                <p className="text-slate-700 text-xs leading-relaxed font-medium">{obj}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#EC1C23] uppercase tracking-wider">Annual Activities</span>
            <h3 className="text-2xl font-bold text-[#2C2B5E]">Key Events & Initiatives</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-[#EC1C23] bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block">
                Annual Flagship Event
              </span>
              <h4 className="text-lg font-bold text-[#2C2B5E]">International Women's Day</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Celebrated annually on March 8th with guest lectures by prominent women achievers, cultural programs, and student excellence awards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-[#EC1C23] bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block">
                Workshops & Seminars
              </span>
              <h4 className="text-lg font-bold text-[#2C2B5E]">Entrepreneurship & Legal Safety</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Hands-on training sessions focusing on financial literacy, startup ideation, self-defense techniques, legal awareness, and mental health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
