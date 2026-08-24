import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, ShieldCheck, CheckCircle2, ArrowRight, Briefcase, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Department of Management Studies (MBA)",
  description:
    "AICTE approved 2-Year Full-Time MBA Program at CBM College of Arts and Science, Coimbatore. Offering specializations in Marketing, Finance, HR, Production & Systems.",
};

export default function MbaDepartmentPage() {
  return (
    <div className="space-y-16 py-12">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>MBA Department</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider">
            <Award className="w-4 h-4" /> AICTE Approved & Bharathiar University Affiliated
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight">
            Department of Management Studies
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Equipping future management professionals to thrive in high-stakes competitive environments through adaptability, leadership, and analytical rigor.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/admission"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3 rounded-xl text-sm font-extrabold shadow-lg transition-transform hover:scale-105"
            >
              Apply for MBA Admission
            </Link>
            <a
              href="mailto:mba@cbmcollege.com"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Contact MBA Dept: mba@cbmcollege.com
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#7a1f2b] uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Mandatory AICTE Disclosure
          </span>
          <h2 className="text-3xl font-bold font-serif text-slate-900">
            MBA Program Architecture (2-Year Full-Time)
          </h2>
          <p className="text-slate-600 text-sm">
            Nurtured as a prestigious flagship program with a wider elective choice than other affiliated institutions in Coimbatore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center space-y-3">
            <span className="text-4xl font-extrabold text-[#7a1f2b] font-serif">17</span>
            <h3 className="text-lg font-bold text-slate-900">Core Subjects</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Solid footing in business fundamentals, managerial economics, corporate accounting, operations, and organizational behavior.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center space-y-3">
            <span className="text-4xl font-extrabold text-amber-500 font-serif">8</span>
            <h3 className="text-lg font-bold text-slate-900">Elective Subjects</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Specialization choices in Marketing, Finance, Personnel/HR, Production, and Systems during Year 2.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center space-y-3">
            <span className="text-4xl font-extrabold text-emerald-600 font-serif">1</span>
            <h3 className="text-lg font-bold text-slate-900">Major Industry Project</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Hands-on 3-month corporate internship project work with real-world managerial problem solving.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION TRACKS */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#7a1f2b] uppercase">Second Year Electives</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">Five Specialization Tracks</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Marketing", desc: "Brand management, digital marketing, consumer behavior, & market research." },
              { title: "Finance", desc: "Corporate financial management, investment security analysis, & banking." },
              { title: "Personnel / HR", desc: "Human resource planning, industrial relations, labor laws, & talent management." },
              { title: "Production", desc: "Supply chain management, operations research, quality control, & logistics." },
              { title: "Systems", desc: "Management Information Systems (MIS), enterprise resource planning (ERP), & e-commerce." },
            ].map((track) => (
              <div key={track.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <Briefcase className="w-8 h-8 text-[#7a1f2b]" />
                <h3 className="text-base font-bold text-slate-900">{track.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & SELECTION PROCEDURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">MBA Admission Guidelines</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">Eligibility & Selection Process</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Academic Qualification Requirements
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a1f2b] mt-2 shrink-0" />
                  <span>Bachelor's Degree in any discipline from a recognized University under the 10+2+3 pattern.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a1f2b] mt-2 shrink-0" />
                  <span>Candidates from universities outside Tamil Nadu must obtain an Eligibility Certificate from Bharathiar University prior to admission.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Selection & Evaluation Pattern
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>Merit rank list prepared based on undergraduate marks, entrance scorecard, and personal interview performance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>Provisional admission issued upon fee payment and original certificate submission.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-500">Need personal MBA admission guidance?</p>
              <p className="text-sm font-bold text-slate-900">Direct Helpline: 9976573040 / 0422-2607259</p>
            </div>
            <Link
              href="/admission"
              className="bg-[#7a1f2b] text-white hover:bg-[#5a1620] px-6 py-3 rounded-xl text-sm font-bold shadow transition-colors"
            >
              Apply Online Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
