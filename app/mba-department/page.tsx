import type { Metadata } from "next";
import Link from "next/link";
import { Award, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Department of Management Studies (MBA)",
  description:
    "AICTE approved 2-Year Full-Time MBA Program at CBM College of Arts and Science, Coimbatore. Offering specializations in Marketing, Finance, HR, Production & Systems.",
};

export default function MbaDepartmentPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* HERO BANNER WITH BACKGROUND CAMPUS IMAGE */}
      <section className="relative text-white py-14 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_3.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3 pt-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <span>MBA Department</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#EC1C23] text-white px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider shadow">
            <Award className="w-4 h-4 text-amber-300" /> AICTE Approved & Bharathiar University Affiliated
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Department of Management Studies (MBA)
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Equipping management professionals to thrive in competitive global environments through leadership, analytical rigor, and hands-on business projects.
          </p>
        </div>
      </section>

      {/* FULL WIDTH RESPONSIVE CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#EC1C23] uppercase tracking-wider">Curriculum Design</span>
            <h2 className="text-2xl font-bold text-[#2C2B5E]">MBA Program Architecture (2-Year Full-Time)</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
              The MBA Programme is affiliated to Bharathiar University and approved by AICTE (New Delhi). It offers a comprehensive 26-subject curriculum spread across 4 semesters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
              <span className="text-4xl font-extrabold text-[#EC1C23]">17</span>
              <h3 className="text-sm font-bold text-[#2C2B5E]">Core Foundation Subjects</h3>
              <p className="text-slate-500 text-xs">Full footing in general management</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
              <span className="text-4xl font-extrabold text-[#2C2B5E]">8</span>
              <h3 className="text-sm font-bold text-[#2C2B5E]">Specialization Electives</h3>
              <p className="text-slate-500 text-xs">Functional area deep-dives</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
              <span className="text-4xl font-extrabold text-emerald-600">1</span>
              <h3 className="text-sm font-bold text-[#2C2B5E]">Industry Internship Project</h3>
              <p className="text-slate-500 text-xs">Real-world corporate project</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#EC1C23] uppercase tracking-wider">Career Paths</span>
            <h3 className="text-2xl font-bold text-[#2C2B5E]">Five Elective Specialization Tracks</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Marketing", desc: "Brand management, digital marketing, consumer behavior, market research, and sales strategy." },
              { title: "Finance", desc: "Corporate financial management, security analysis, banking, taxation, and portfolio management." },
              { title: "Personnel / HR", desc: "Human resource planning, industrial relations, labor laws, talent acquisition, and corporate training." },
              { title: "Production", desc: "Supply chain management, operations research, total quality management, and logistics." },
              { title: "Systems", desc: "Management Information Systems (MIS), enterprise resource planning (ERP), and e-commerce strategy." },
            ].map((track) => (
              <div key={track.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#EC1C23] flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#2C2B5E]">{track.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2C2B5E] text-white p-8 rounded-3xl space-y-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-amber-300">Eligibility & Direct Admission Helpline</h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Applicants must hold a Bachelor's Degree in any discipline under the 10+2+3 pattern recognized by Bharathiar University. Selections are processed based on academic merit rank, entrance score, and personal interview.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
            <div className="text-xs sm:text-sm font-bold text-white">
              Admission Helpline: <a href="tel:+919976573040" className="text-amber-300 hover:underline">+91 9976573040</a> / <a href="tel:04222607259" className="text-slate-200 hover:underline">0422-2607259</a>
            </div>
            <Link
              href="/admission"
              className="bg-[#EC1C23] hover:bg-[#c41218] text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg transition-colors"
            >
              Apply Online Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
