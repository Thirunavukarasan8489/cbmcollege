import type { Metadata } from "next";
import Link from "next/link";
import PageSubmenu from "../components/PageSubmenu";
import { GraduationCap, Award, ShieldCheck, CheckCircle2, ArrowRight, Briefcase, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Department of Management Studies (MBA)",
  description:
    "AICTE approved 2-Year Full-Time MBA Program at CBM College of Arts and Science, Coimbatore. Offering specializations in Marketing, Finance, HR, Production & Systems.",
};

export default function MbaDepartmentPage() {
  const coursesSubmenuItems = [
    { label: "All Degree Programs", href: "/courses" },
    { label: "MBA Department", href: "/mba-department", active: true },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* HERO BANNER WITH BACKGROUND CAMPUS IMAGE */}
      <section className="relative text-white py-14 px-4 sm:px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_3.jpg')" }}
        />
        {/* Brand Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Courses</span>
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
            Equipping management professionals to thrive in competitive global environments through leadership and analytical rigor.
          </p>
        </div>
      </section>

      {/* PAGE SUBMENU & MBA CONTENT */}
      <PageSubmenu sectionTitle="Courses" items={coursesSubmenuItems}>
        <div className="space-y-10">
          {/* Program Breakdown */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold  text-[#2C2B5E]">MBA Program Architecture (2-Year Full-Time)</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The MBA Programme is affiliated to Bharathiar University and approved by AICTE (New Delhi). It offers a structured 26-subject curriculum across 4 semesters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-1">
                <span className="text-3xl font-extrabold text-[#EC1C23] ">17</span>
                <h3 className="text-xs font-bold text-[#2C2B5E]">Core Subjects</h3>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-1">
                <span className="text-3xl font-extrabold text-[#2C2B5E] ">8</span>
                <h3 className="text-xs font-bold text-[#2C2B5E]">Elective Papers</h3>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-1">
                <span className="text-3xl font-extrabold text-emerald-600 ">1</span>
                <h3 className="text-xs font-bold text-[#2C2B5E]">Major Project</h3>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* 5 Specializations */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold  text-[#2C2B5E]">Five Specialization Elective Tracks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Marketing", desc: "Brand management, digital marketing, consumer behavior, & market research." },
                { title: "Finance", desc: "Corporate financial management, investment security analysis, & banking." },
                { title: "Personnel / HR", desc: "Human resource planning, industrial relations, labor laws, & talent management." },
                { title: "Production", desc: "Supply chain management, operations research, quality control, & logistics." },
                { title: "Systems", desc: "Management Information Systems (MIS), enterprise resource planning (ERP), & e-commerce." },
              ].map((track) => (
                <div key={track.title} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                  <Briefcase className="w-5 h-5 text-[#EC1C23]" />
                  <h4 className="text-sm font-bold text-[#2C2B5E]">{track.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{track.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Eligibility */}
          <div className="bg-[#2C2B5E] text-white p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold  text-amber-300">Eligibility & Admission Helpline</h3>
            <p className="text-slate-200 text-xs leading-relaxed">
              Bachelor's Degree in any discipline under the 10+2+3 pattern. Selections are based on merit rank, entrance score, and personal interview.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold">Admission Contact: +91 9976573040 / 0422-2607259</span>
              <Link
                href="/admission"
                className="bg-[#EC1C23] hover:bg-[#c41218] text-white px-5 py-2 rounded-xl text-xs font-bold shadow"
              >
                Apply Online Now
              </Link>
            </div>
          </div>
        </div>
      </PageSubmenu>
    </div>
  );
}
