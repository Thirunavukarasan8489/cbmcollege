import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ShieldCheck, Award, CheckCircle2, Users, ArrowRight } from "lucide-react";

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
    "Inculcate entrepreneurial skills so women achieve economic independence."
  ];

  return (
    <div className="space-y-16 py-12">
      {/* BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Women Empowerment Cell</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/30">
            <Heart className="w-4 h-4 text-rose-400" /> Empowering Female Leaders
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Women Empowerment Cell
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Sowing seeds of courage, self-reliance, leadership, and legal awareness among girl students and women faculty.
          </p>
        </div>
      </section>

      {/* MISSION & OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Cell Objectives</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">Nurturing Confident, Independent Women</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The Women Empowerment Cell at CBM College is dedicated to briefing female students and staff on contemporary social issues, equipping them to face modern personal and professional challenges with confidence and dignity.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7a1f2b] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#5a1620]">
                <span>Contact Cell Coordinator</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-gradient-to-br from-rose-900 to-[#7a1f2b] text-white p-8 rounded-2xl text-center space-y-4">
            <Award className="w-12 h-12 text-amber-300 mx-auto" />
            <h3 className="text-xl font-bold font-serif">Equal Opportunities</h3>
            <p className="text-xs text-rose-100 leading-relaxed">
              Fostering an inclusive campus culture where female scholars lead academic, cultural, and entrepreneurial initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* 7 CORE OBJECTIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#7a1f2b] uppercase tracking-widest">Charter of Guidance</span>
          <h2 className="text-3xl font-bold font-serif text-slate-900">7 Core Cell Objectives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-rose-100 text-[#7a1f2b] font-extrabold flex items-center justify-center shrink-0 text-xs">
                0{i + 1}
              </span>
              <p className="text-slate-700 text-xs leading-relaxed font-medium pt-1">{obj}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANNUAL INITIATIVES & CELEBRATIONS */}
      <section className="bg-slate-100/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#7a1f2b] uppercase tracking-widest">Cell Calendar</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">Key Events & Initiatives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-amber-600">Annual Flagship</span>
              <h3 className="text-lg font-bold text-slate-900">International Women's Day</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Celebrated annually on March 8th with guest lectures by prominent women achievers, cultural programs, and award recognitions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-amber-600">Workshops & Seminars</span>
              <h3 className="text-lg font-bold text-slate-900">Entrepreneurship & Safety</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Organizing hands-on sessions on financial literacy, startup ideation, self-defense techniques, and health awareness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-amber-600">Special Days</span>
              <h3 className="text-lg font-bold text-slate-900">Mother's & Girl Child Day</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Conducting poster-making, essay writing, and elocution competitions to exhibit student talents and societal perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
