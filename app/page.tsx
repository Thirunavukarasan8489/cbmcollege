"use client";

import { useState } from "react";
import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import {
  GraduationCap,
  Award,
  BookOpen,
  ArrowRight,
  PhoneCall,
  Calendar,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  MapPin,
  HeartHandshake,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<
    "all" | "ug" | "pg" | "management"
  >("all");

  const faqs = [
    {
      question: "Where is CBM College located in Coimbatore?",
      answer:
        "CBM College of Arts and Science is located in Sakethapuri, Kovaipudur, Coimbatore, Tamil Nadu – 641042, situated in a salubrious environment near the Western Ghats.",
    },
    {
      question: "Is CBM College recognized and affiliated?",
      answer:
        "Yes, CBM College is affiliated to Bharathiar University, Coimbatore, recognized by UGC, and its MBA program is approved by AICTE, New Delhi.",
    },
    {
      question: "What courses are offered at CBM College?",
      answer:
        "Undergraduate degrees include B.Com, B.A. Economics, B.Sc. Computer Science, B.Sc. Mathematics, B.Sc. Physics, and B.Sc. Visual Communication. Postgraduate degrees include M.A. Economics, M.Com, M.Sc. Mathematics, M.Sc. Chemistry, and full-time MBA.",
    },
    {
      question: "How can prospective students apply for admissions?",
      answer:
        "Applications can be submitted online via our direct admission portal or obtained directly at the college campus in Kovaipudur. Reach the Admission Cell at +919976573040.",
    },
    {
      question: "Does the college provide hostel facilities?",
      answer:
        "Yes, CBM College features a dedicated Western Ghats view Hostel building with capacity for 140 students operating under a cooperative dividing mess system.",
    },
  ];

  const courses = [
    {
      type: "ug",
      name: "B.Sc. Computer Science",
      desc: "Software engineering, data structures, AI fundamentals & Web tech.",
      duration: "3 Years",
    },
    {
      type: "management",
      name: "MBA (Full-Time)",
      desc: "AICTE approved 2-year program with Marketing, Finance, HR & Systems electives.",
      duration: "2 Years",
    },
    {
      type: "ug",
      name: "B.Com (Commerce)",
      desc: "Corporate accounting, taxation, auditing & modern banking systems.",
      duration: "3 Years",
    },
    {
      type: "ug",
      name: "B.Sc. Visual Communication",
      desc: "Digital media production, graphic design, journalism & video editing.",
      duration: "3 Years",
    },
    {
      type: "pg",
      name: "M.Com (Master of Commerce)",
      desc: "Advanced corporate finance, managerial economics & strategic accounting.",
      duration: "2 Years",
    },
    {
      type: "ug",
      name: "B.A. Economics",
      desc: "Macroeconomic theory, public finance, econometrics & development economics.",
      duration: "3 Years",
    },
  ];

  const filteredCourses =
    activeTab === "all" ? courses : courses.filter((c) => c.type === activeTab);

  return (
    <div className="space-y-16 pb-12 text-[#252525]">
      {/* HERO SLIDER CAROUSEL SECTION */}
      <HeroCarousel />

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-xl rounded-2xl p-6 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#EC1C23] ">
              1974
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#252525] mt-1">
              Estd. Year
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#2C2B5E] ">
              15+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#252525] mt-1">
              UG, PG & MBA Degrees
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#EC1C23] ">
              100%
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#252525] mt-1">
              AICTE & UGC Recognized
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#2C2B5E] ">
              140
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#252525] mt-1">
              Hostel Capacity
            </span>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2C2B5E] text-white rounded-2xl p-5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 border-l-8 border-[#EC1C23]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#EC1C23] text-white px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider shrink-0 flex items-center gap-1 shadow">
              <Calendar className="w-3.5 h-3.5" /> Latest Notice
            </span>
            <p className="text-sm font-medium text-slate-100">
              Applications for Academic Year 2026-27 Undergraduate & MBA
              Admissions are currently open. Contact Admission Cell at
              +919976573040.
            </p>
          </div>
          <Link
            href="/admission"
            className="shrink-0 bg-white text-[#EC1C23] hover:bg-rose-50 transition-colors px-4 py-2 rounded-lg text-xs font-bold shadow"
          >
            Apply Online →
          </Link>
        </div>
      </section>

      {/* CORE PILLARS OF EXCELLENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#EC1C23] uppercase px-3 py-2.5 rounded-full">
            Institutional Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2B5E]">
            Fostering Academic & Professional Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Sponsored by the CBM Sakunthala Memorial Trust, dedicated to
            providing holistic development, modern research facilities, and
            leadership training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#EC1C23] flex items-center justify-center mb-6 group-hover:bg-[#EC1C23] group-hover:text-white transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#2C2B5E] mb-3">
              Department of Management (MBA)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AICTE approved 2-year full-time MBA program offering
              specializations in Marketing, Finance, HR, Production, and
              Systems.
            </p>
            <Link
              href="/mba-department"
              className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
            >
              Explore MBA Program →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#2C2B5E] flex items-center justify-center mb-6 group-hover:bg-[#2C2B5E] group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#2C2B5E] mb-3">
              Central Library & IT Labs
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              State-recognized central research library frequented by
              researchers, alongside modern computer labs with internet access.
            </p>
            <Link
              href="/facilities"
              className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
            >
              View Campus Facilities →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#2C2B5E] mb-3 ">
              NCC, NSS & Youth Red Cross
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Mandatory two-year participation in NCC, NSS, SSL, or YRC for
              student character building as per Bharathiar University
              regulations.
            </p>
            <Link
              href="/facilities"
              className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
            >
              Discover Activities →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DEGREE CATALOG */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#EC1C23] uppercase">
                Academic Offerings
              </span>
              <h2 className="text-3xl font-bold  text-[#2C2B5E] mt-1">
                Featured Degree Programs
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
              {[
                { id: "all", label: "All Degrees" },
                { id: "ug", label: "Undergraduate" },
                { id: "pg", label: "Postgraduate" },
                { id: "management", label: "Management (MBA)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#2C2B5E] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="bg-rose-50 text-[#EC1C23] px-2.5 py-1 rounded-md uppercase tracking-wider border border-rose-100">
                      {c.type === "ug"
                        ? "Undergraduate"
                        : c.type === "pg"
                          ? "Postgraduate"
                          : "AICTE MBA"}
                    </span>
                    <span className="text-slate-400">{c.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2B5E]">{c.name}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Bharathiar University
                  </span>
                  <Link
                    href="/courses"
                    className="text-xs font-bold text-[#EC1C23] hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#2C2B5E] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#1e1d44] transition-colors shadow"
            >
              <span>View All 15+ Programs</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* GEO & AI READY FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#EC1C23]">
            <HelpCircle className="w-4 h-4 text-[#EC1C23]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-bold  text-[#2C2B5E]">
            Key Facts About CBM College
          </h2>
          <p className="text-xs text-slate-500">
            Verified factual answers regarding admissions, university
            affiliation, and campus facilities.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-[#2C2B5E] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base ">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#EC1C23] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ADMISSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2C2B5E] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-r-8 border-[#EC1C23]">
          <div className="space-y-4 max-w-xl z-10">
            <span className="bg-[#EC1C23] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow">
              Admissions Open 2026-27
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-wide">
              Begin Your Academic Journey at CBM College
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Get in touch with our admission officers today to learn more about
              application procedures, merit scholarships, and campus visits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 z-10">
            <a
              href="tel:+919976573040"
              className="flex items-center gap-3 bg-[#EC1C23] hover:bg-[#c41218] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-transform hover:scale-105"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call Helpline: +91 9976573040</span>
            </a>
            <Link
              href="/admission"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Online Admission Portal</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
