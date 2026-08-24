"use client";

import { useState } from "react";
import Link from "next/link";
import PageSubmenu from "../components/PageSubmenu";
import { BookOpen, Search, Clock, GraduationCap, CheckCircle2, ChevronRight, X } from "lucide-react";
import JsonLd from "../components/JsonLd";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | "ug" | "pg" | "research">("all");
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

  const coursesSubmenuItems = [
    { label: "All Degree Programs", href: "/courses", active: true },
    { label: "MBA Department", href: "/mba-department" },
  ];

  const coursesList = [
    {
      id: "b-com",
      category: "ug",
      title: "B.Com (Bachelor of Commerce)",
      dept: "Department of Commerce",
      duration: "3 Years (6 Semesters)",
      eligibility: "Passed 10+2 / Higher Secondary Exam with Commerce / Accountancy / Math subjects.",
      desc: "Provides a thorough grounding in financial accounting, corporate governance, auditing, income tax laws, and modern banking operations.",
      highlights: ["Corporate Accounting", "Cost & Management Accounting", "Direct & Indirect Taxes", "Computerized Accounting (Tally)"]
    },
    {
      id: "ba-econ",
      category: "ug",
      title: "B.A. Economics",
      dept: "Department of Economics",
      duration: "3 Years (6 Semesters)",
      eligibility: "Passed 10+2 / Higher Secondary Examination from any recognized board.",
      desc: "Focuses on micro & macroeconomic theories, Indian economic development, quantitative economics, and financial markets.",
      highlights: ["Indian Economy", "Public Finance", "Managerial Economics", "Agricultural & Industrial Economics"]
    },
    {
      id: "bsc-cs",
      category: "ug",
      title: "B.Sc. Computer Science",
      dept: "Department of Computer Science",
      duration: "3 Years (6 Semesters)",
      eligibility: "Passed 10+2 with Mathematics / Computer Science / Statistics.",
      desc: "Equips students with solid programming foundations, database design, web engineering, software development, and computing logic.",
      highlights: ["Python & Java Programming", "Data Structures & Algorithms", "Database Systems (SQL)", "Web Application Development"]
    },
    {
      id: "bsc-math",
      category: "ug",
      title: "B.Sc. Mathematics",
      dept: "Department of Mathematics",
      duration: "3 Years (6 Semesters)",
      eligibility: "Passed 10+2 with Mathematics / Higher Mathematics.",
      desc: "Deep dive into abstract algebra, calculus, operations research, statistics, and computational mathematical modeling.",
      highlights: ["Differential Calculus", "Real & Complex Analysis", "Operations Research", "Numerical Methods"]
    },
    {
      id: "bsc-phys",
      category: "ug",
      title: "B.Sc. Physics",
      dept: "Department of Physics",
      duration: "3 Years (6 Semesters)",
      eligibility: "Passed 10+2 with Physics and Mathematics.",
      desc: "Explores classical mechanics, quantum physics, electronics, thermodynamics, and experimental laboratory physics.",
      highlights: ["Quantum Mechanics", "Digital Electronics", "Optics & Acoustics", "Solid State Physics"]
    },
    {
      id: "bsc-viscom",
      category: "ug",
      title: "B.Sc. Visual Communication",
      dept: "Department of Visual Communication",
      duration: "3 Years (6 Semesters)",
      eligibility: "Passed 10+2 in any stream with creative aptitude.",
      desc: "Covers media ethics, photography, graphic designing, television production, video editing, and digital advertising.",
      highlights: ["Digital Graphic Design", "Audio/Video Editing", "Media Aesthetics & Writing", "Film Studies & Animation"]
    },
    {
      id: "mba-dept",
      category: "pg",
      title: "MBA (Master of Business Administration)",
      dept: "Department of Management Studies",
      duration: "2 Years (4 Semesters)",
      eligibility: "Bachelor's Degree in any discipline from a recognized University (AICTE approved).",
      desc: "Prestigious AICTE-approved 2-year full-time program with electives in Marketing, Finance, Personnel/HR, Production, and Systems.",
      highlights: ["17 Core + 8 Electives + 1 Project", "AICTE & Bharathiar University Approved", "Executive Leadership Workshops", "Industry Internship Training"]
    },
    {
      id: "ma-econ",
      category: "pg",
      title: "M.A. Economics",
      dept: "Department of Economics",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.A. Economics or relevant Bachelor's degree from a recognized University.",
      desc: "Advanced theoretical & applied economics analysis, econometric methods, research methodology, and international trade.",
      highlights: ["Advanced Micro/Macro Theory", "Econometrics & Data Analytics", "International Economics", "Development Policy"]
    },
    {
      id: "m-com",
      category: "pg",
      title: "M.Com (Master of Commerce)",
      dept: "Department of Commerce",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.Com, B.B.A., or equivalent Bachelor's degree in Commerce/Management.",
      desc: "Specialized postgraduate studies in financial management, corporate tax planning, international finance, and banking.",
      highlights: ["Corporate Financial Management", "Strategic Cost Accounting", "Security Analysis & Portfolio", "Research Methodology"]
    },
    {
      id: "m-sc-math",
      category: "pg",
      title: "M.Sc. Mathematics",
      dept: "Department of Mathematics",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.Sc. Mathematics degree from a recognized University.",
      desc: "Higher-level study of topology, functional analysis, fluid dynamics, differential equations, and mathematical computing.",
      highlights: ["Topology & Measure Theory", "Fluid Dynamics", "Mathematical Software", "Graph Theory"]
    },
    {
      id: "m-sc-chem",
      category: "pg",
      title: "M.Sc. Chemistry",
      dept: "Department of Chemistry",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.Sc. Chemistry degree with Mathematics/Physics ancillary.",
      desc: "Advanced studies in organic synthesis, physical chemistry, spectroscopy, analytical methods, and laboratory research.",
      highlights: ["Organic Synthesis", "Molecular Spectroscopy", "Electrochemistry", "Research Project"]
    },
    {
      id: "mphil",
      category: "research",
      title: "M.Phil / Ph.D Research Programs",
      dept: "Select Research Departments",
      duration: "Full-Time / Part-Time",
      eligibility: "Master's degree with minimum 55% marks per Bharathiar University guidelines.",
      desc: "Research guidance in Economics, Commerce, Mathematics, and Management Studies under recognized university guides.",
      highlights: ["University Approved Guides", "Central Library Access", "Research Seminars", "Thesis Publication Assistance"]
    }
  ];

  const filtered = coursesList.filter((item) => {
    const matchesCat = category === "all" || item.category === category;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.dept.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const courseSchemas = coursesList.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": c.title,
    "description": c.desc,
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "CBM College of Arts and Science",
      "sameAs": "https://www.cbmcollege.com"
    }
  }));

  return (
    <div className="space-y-8 pb-12">
      <JsonLd data={courseSchemas} />

      {/* HEADER BANNER WITH BACKGROUND CAMPUS IMAGE */}
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
            <span>Courses</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Academic Programs & Degrees
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Undergraduate, Postgraduate, MBA, and Research degrees affiliated to Bharathiar University, Coimbatore.
          </p>
        </div>
      </section>

      {/* PAGE SUBMENU & CATALOG CONTENT */}
      <PageSubmenu sectionTitle="Courses" items={coursesSubmenuItems}>
        <div className="space-y-6">
          {/* Search and Category Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search program or department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EC1C23]"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {[
                { id: "all", label: "All Degrees" },
                { id: "ug", label: "UG" },
                { id: "pg", label: "PG" },
                { id: "research", label: "Research" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    category === tab.id
                      ? "bg-[#EC1C23] text-white shadow"
                      : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* COURSES CATALOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-rose-50 text-[#EC1C23] text-[10px] font-bold px-2 py-0.5 rounded border border-rose-100 uppercase tracking-wider">
                      {course.category === "ug" ? "UG Degree" : course.category === "pg" ? "PG Degree" : "Research"}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold  text-[#2C2B5E] leading-snug">{course.title}</h3>
                  <p className="text-[11px] font-bold text-[#EC1C23]">{course.dept}</p>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{course.desc}</p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-xs font-bold text-[#EC1C23] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Syllabus & Eligibility</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/admission"
                    className="bg-[#2C2B5E] text-white hover:bg-[#EC1C23] text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSubmenu>

      {/* DETAIL MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="bg-rose-50 text-[#EC1C23] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {selectedCourse.dept}
              </span>
              <h2 className="text-2xl font-bold  text-[#2C2B5E]">{selectedCourse.title}</h2>
              <p className="text-xs text-slate-500 font-medium">Duration: {selectedCourse.duration} • Bharathiar University</p>
            </div>

            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-[#252525] text-xs uppercase tracking-wider mb-1">Eligibility Criteria</h4>
                <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs leading-relaxed">{selectedCourse.eligibility}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#252525] text-xs uppercase tracking-wider mb-2">Program Description</h4>
                <p className="text-xs leading-relaxed">{selectedCourse.desc}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#252525] text-xs uppercase tracking-wider mb-2">Key Focus Areas</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCourse.highlights.map((h: string) => (
                    <div key={h} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <Link
                href="/admission"
                className="bg-[#EC1C23] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow hover:bg-[#c41218] transition-all"
              >
                Proceed to Online Admission
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
