"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Building2,
  Sparkles,
  CheckCircle2,
  Clock,
  ChevronRight,
  Users,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"all" | "ug" | "pg" | "management">("all");

  const faqs = [
    {
      question: "Where is CBM College located in Coimbatore?",
      answer:
        "CBM College of Arts and Science is located in Sakethapuri, Kovaipudur, Coimbatore, Tamil Nadu – 641042, situated in a salubrious academic environment near the Western Ghats.",
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
        "Applications can be submitted online via our direct admission portal or obtained directly at the college campus in Kovaipudur. Reach the Admission Cell at +91 9976573040.",
    },
    {
      question: "Does the college provide hostel facilities?",
      answer:
        "Yes, CBM College features a dedicated Western Ghats view Men's Hostel building with capacity for 140 students operating under a cooperative dividing mess system.",
    },
  ];

  const courses = [
    {
      type: "ug",
      name: "B.Sc. Computer Science",
      desc: "Software engineering, data structures, database architecture & web engineering.",
      duration: "3 Years",
      highlights: "Python, SQL, Web Dev & AI Fundamentals",
    },
    {
      type: "management",
      name: "MBA (Full-Time)",
      desc: "AICTE approved 2-year program with Marketing, Finance, HR & Systems electives.",
      duration: "2 Years",
      highlights: "17 Core + 8 Electives + 1 Project",
    },
    {
      type: "ug",
      name: "B.Com (Bachelor of Commerce)",
      desc: "Corporate accounting, taxation, auditing & modern computerized banking systems.",
      duration: "3 Years",
      highlights: "Corporate Accounting & Tally GST",
    },
    {
      type: "ug",
      name: "B.Sc. Visual Communication",
      desc: "Digital media production, graphic design, television journalism & video editing.",
      duration: "3 Years",
      highlights: "Studio Production & Digital Design",
    },
    {
      type: "pg",
      name: "M.Com (Master of Commerce)",
      desc: "Advanced corporate finance, managerial economics & strategic cost accounting.",
      duration: "2 Years",
      highlights: "Financial Analysis & Portfolio Management",
    },
    {
      type: "ug",
      name: "B.A. Economics",
      desc: "Macroeconomic theory, public finance, econometrics & development policy.",
      duration: "3 Years",
      highlights: "Indian Economy & Public Finance",
    },
  ];

  const filteredCourses =
    activeTab === "all" ? courses : courses.filter((c) => c.type === activeTab);

  return (
    <div className="space-y-16 pb-16 text-[#252525]">
      {/* 1. HERO SLIDER CAROUSEL SECTION */}
      <HeroCarousel />

      {/* 2. STATS & METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-14 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-8 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="flex flex-col items-center text-center p-3 uni-card-hover">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#EC1C23]">
              1974
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2C2B5E] mt-1">
              Established Year
            </span>
            <span className="text-[11px] text-slate-500 font-medium">50+ Years Legacy</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 uni-card-hover">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#2C2B5E]">
              15+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2C2B5E] mt-1">
              Academic Programs
            </span>
            <span className="text-[11px] text-slate-500 font-medium">UG, PG & MBA Degrees</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 uni-card-hover">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#EC1C23]">
              100%
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2C2B5E] mt-1">
              AICTE & UGC Approved
            </span>
            <span className="text-[11px] text-slate-500 font-medium">Bharathiar University</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 uni-card-hover">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#2C2B5E]">
              140
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2C2B5E] mt-1">
              Hostel Capacity
            </span>
            <span className="text-[11px] text-slate-500 font-medium">Western Ghats View</span>
          </div>
        </div>
      </section>

      {/* 3. ANNOUNCEMENT TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2C2B5E] text-white rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 border-l-8 border-[#EC1C23]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#EC1C23] text-white px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider shrink-0 flex items-center gap-1 shadow">
              <Calendar className="w-3.5 h-3.5" /> Latest Notice
            </span>
            <p className="text-sm font-medium text-slate-100">
              Applications for Academic Year 2026-27 Undergraduate & MBA Admissions are open. Contact Admission Helpline at +91 9976573040.
            </p>
          </div>
          <Link
            href="/admission"
            className="shrink-0 bg-white text-[#EC1C23] hover:bg-rose-50 transition-colors px-5 py-2.5 rounded-xl text-xs font-bold shadow-md"
          >
            Apply Online →
          </Link>
        </div>
      </section>

      {/* 4. "THE CBM DISTINCTION" — 4 PILLARS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-50 text-[#EC1C23] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest border border-rose-100">
            <Sparkles className="w-4 h-4 text-[#EC1C23]" />
            <span>The CBM Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2B5E] leading-tight">
            Fostering World-Class Academic & Leadership Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded by Late C. B. Muthuswamy Chettiar under the CBM Sakunthala Memorial Trust, dedicated to value-based education since July 1, 1974.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm uni-card-hover flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-[#EC1C23] flex items-center justify-center group-hover:bg-[#EC1C23] group-hover:text-white transition-all shadow-sm">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2B5E] leading-snug">
                Department of Management (MBA)
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                AICTE approved 2-year full-time MBA program with specializations in Marketing, Finance, HR, Production & Systems.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                href="/mba-department"
                className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
              >
                <span>Explore MBA Program</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm uni-card-hover flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-[#2C2B5E] flex items-center justify-center group-hover:bg-[#2C2B5E] group-hover:text-white transition-all shadow-sm">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2B5E] leading-snug">
                State Research Library & IT Labs
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Distinguished central library visited by scholars statewide, equipped with high-speed computing and internet browsing.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                href="/facilities"
                className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
              >
                <span>View Campus Facilities</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm uni-card-hover flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all shadow-sm">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2B5E] leading-snug">
                Western Ghats Men's Hostel
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Scenic residential accommodation for 140 male scholars with cooperative dividing mess system and serene surroundings.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                href="/facilities"
                className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
              >
                <span>Hostel Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm uni-card-hover flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-all shadow-sm">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2B5E] leading-snug">
                NCC, NSS & Youth Red Cross
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Mandatory 2-year service in NCC, NSS, SSL, or YRC for degree qualification per Bharathiar University regulations.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                href="/facilities"
                className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
              >
                <span>Social Activities</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL FOUNDER & HERITAGE SPOTLIGHT */}
      <section className="bg-gradient-to-r from-slate-950 via-[#2C2B5E] to-[#EC1C23] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest border border-amber-400/30">
              <Award className="w-4 h-4 text-amber-300" />
              <span>Founding Heritage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Carving a Place of Distinction in Coimbatore
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              In October 1970, <strong>Dharmapravarthana, Late C. B. Muthuswamy Chettiar</strong> established the <strong>"CBM Sakunthala Memorial Trust"</strong> to serve the educational needs of Coimbatore. The institution was formally inaugurated on <strong>July 1, 1974</strong> as a temple of value-based learning.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-md">
                <span className="text-2xl font-extrabold text-amber-300">Oct 1970</span>
                <p className="text-xs text-slate-300 mt-1 font-medium">CBM Sakunthala Trust Formed</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-md">
                <span className="text-2xl font-extrabold text-[#EC1C23]">1 July 1974</span>
                <p className="text-xs text-slate-300 mt-1 font-medium">College Inaugurated</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#EC1C23] hover:bg-[#c41218] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-lg transition-all"
              >
                <span>Read Institutional History</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/hero_1.jpg"
                alt="CBM College Historical Heritage Campus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2B5E] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                <div className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">CBM Sakunthala Memorial Trust</div>
                <div className="text-xs text-slate-200 mt-0.5">Late C. B. Muthuswamy Chettiar • Founder & Chief Donor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED DEGREE CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-[#EC1C23] uppercase">
              Academic Degrees & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2B5E]">
              Featured Degree Programs
            </h2>
            <p className="text-xs text-slate-500 max-w-lg">
              Affiliated to Bharathiar University, Coimbatore & AICTE Approved MBA Department.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200">
            {[
              { id: "all", label: "All Degrees" },
              { id: "ug", label: "Undergraduate" },
              { id: "pg", label: "Postgraduate" },
              { id: "management", label: "Management (MBA)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2C2B5E] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
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
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm uni-card-hover flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="bg-rose-50 text-[#EC1C23] px-3 py-1 rounded-full uppercase tracking-wider border border-rose-100 text-[10px]">
                    {c.type === "ug"
                      ? "Undergraduate"
                      : c.type === "pg"
                        ? "Postgraduate"
                        : "AICTE Approved MBA"}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{c.duration}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#2C2B5E] leading-snug group-hover:text-[#EC1C23] transition-colors">
                  {c.name}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {c.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{c.highlights}</span>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Bharathiar University
                </span>
                <Link
                  href="/courses"
                  className="text-xs font-bold text-[#EC1C23] hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#2C2B5E] hover:bg-[#1e1d44] text-white px-8 py-3.5 rounded-2xl text-xs font-bold shadow-lg transition-all"
          >
            <span>Browse Full Catalog (15+ Programs)</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </section>

      {/* 7. GEO FAQ ACCORDION FOR AI ANSWER ENGINES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-[#EC1C23] bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            <HelpCircle className="w-4 h-4 text-[#EC1C23]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2B5E]">
            Key Facts About CBM College
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Factual answers regarding admissions, university affiliation, AICTE approval, and hostel accommodation.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4.5 text-left font-bold text-[#2C2B5E] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#EC1C23] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. ADMISSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-slate-950 via-[#2C2B5E] to-[#EC1C23] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-r-8 border-[#EC1C23]">
          <div className="space-y-4 max-w-xl z-10">
            <span className="bg-[#EC1C23] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow">
              Admissions Open 2026-27
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
              Begin Your Academic Journey at CBM College
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Reach out to our admission officers today to learn more about application procedures, university approval, and campus hostel visits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 z-10">
            <a
              href="tel:+919976573040"
              className="flex items-center gap-3 bg-[#EC1C23] hover:bg-[#c41218] text-white px-7 py-4 rounded-xl font-bold text-sm shadow-xl transition-transform hover:scale-105"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call Helpline: +91 9976573040</span>
            </a>
            <Link
              href="/admission"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-xl font-bold text-sm backdrop-blur-md transition-colors"
            >
              <span>Online Portal</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
