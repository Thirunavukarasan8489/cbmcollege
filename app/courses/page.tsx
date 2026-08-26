"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, MessageSquare, MapPin, Star, Search } from "lucide-react";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("all");

  const allCourses = [
    {
      id: "cs",
      name: "B.SC. COMPUTER SCIENCE",
      category: "ug",
      duration: "3 Years",
      faculty: "Dept. of Computer Science",
      desc: "Software engineering, data structures, AI fundamentals, database management systems & web programming.",
      students: "345",
      reviews: "15",
      badge: "BHARATHIAR UNIV",
      image: "/hero_1.jpg",
    },
    {
      id: "mba",
      name: "MBA (FULL-TIME MANAGEMENT)",
      category: "management",
      duration: "2 Years",
      faculty: "Dept. of Management Studies",
      desc: "AICTE approved 2-year program offering Marketing, Finance, Personnel/HR, Production & Systems electives.",
      students: "180",
      reviews: "24",
      badge: "AICTE APPROVED",
      image: "/hero_2.jpg",
    },
    {
      id: "com",
      name: "B.COM (BACHELOR OF COMMERCE)",
      category: "ug",
      duration: "3 Years",
      faculty: "Dept. of Commerce",
      desc: "Corporate accounting, taxation, auditing, business law, cost accounting & computerized banking systems.",
      students: "420",
      reviews: "18",
      badge: "BHARATHIAR UNIV",
      image: "/hero_3.jpg",
    },
    {
      id: "viscom",
      name: "B.SC. VISUAL COMMUNICATION",
      category: "ug",
      duration: "3 Years",
      faculty: "Dept. of Visual Media",
      desc: "Digital media production, graphic design, photography, television journalism & non-linear video editing.",
      students: "210",
      reviews: "12",
      badge: "BHARATHIAR UNIV",
      image: "/hero_1.jpg",
    },
    {
      id: "mcom",
      name: "M.COM (MASTER OF COMMERCE)",
      category: "pg",
      duration: "2 Years",
      faculty: "Dept. of Commerce (PG)",
      desc: "Advanced corporate finance, managerial economics, strategic cost accounting & quantitative techniques.",
      students: "120",
      reviews: "10",
      badge: "BHARATHIAR UNIV",
      image: "/hero_2.jpg",
    },
    {
      id: "econ",
      name: "B.A. ECONOMICS",
      category: "ug",
      duration: "3 Years",
      faculty: "Dept. of Economics",
      desc: "Macroeconomic theory, public finance, econometrics, Indian economic development & monetary policy.",
      students: "190",
      reviews: "8",
      badge: "BHARATHIAR UNIV",
      image: "/hero_3.jpg",
    },
    {
      id: "math",
      name: "B.SC. MATHEMATICS",
      category: "ug",
      duration: "3 Years",
      faculty: "Dept. of Mathematics",
      desc: "Algebra, calculus, differential equations, numerical methods, statistics & operations research.",
      students: "230",
      reviews: "14",
      badge: "BHARATHIAR UNIV",
      image: "/hero_1.jpg",
    },
    {
      id: "phy",
      name: "B.SC. PHYSICS",
      category: "ug",
      duration: "3 Years",
      faculty: "Dept. of Physics",
      desc: "Classical mechanics, quantum physics, electromagnetism, optics, electronics & laboratory experimentation.",
      students: "175",
      reviews: "9",
      badge: "BHARATHIAR UNIV",
      image: "/hero_2.jpg",
    },
    {
      id: "ma-econ",
      name: "M.A. ECONOMICS",
      category: "pg",
      duration: "2 Years",
      faculty: "Dept. of Economics (PG)",
      desc: "Advanced macroeconomic policies, international trade, development economics & research methodology.",
      students: "85",
      reviews: "6",
      badge: "BHARATHIAR UNIV",
      image: "/hero_3.jpg",
    },
  ];

  const filteredCourses = allCourses.filter((c) => {
    const matchesSearch = c.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCat = category === "all" || c.category === category;
    const matchesDur =
      duration === "all" || c.duration.startsWith(duration);
    return matchesSearch && matchesCat && matchesDur;
  });

  return (
    <div className="space-y-16 pb-12 text-[#252525]">
      {/* 1. PAGE HEADER BANNER (Matching reference screenshot `Desktop View Course Page.png`) */}
      <div className="relative w-full h-64 bg-slate-950 text-white flex items-center overflow-hidden">
        <Image
          src="/hero_2.jpg"
          alt="Courses Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-2 z-10">
          <h1 className="text-4xl font-black uppercase tracking-wider text-white">
            COURSES LIST
          </h1>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-[#EC1C23]">
              Home
            </Link>
            <span>-</span>
            <span className="text-[#EC1C23]">Courses</span>
          </div>
        </div>
      </div>

      {/* 2. FILTER SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-100 rounded-lg p-4 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="Enter course name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded focus:outline-none text-[#252525]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded focus:outline-none text-slate-600"
            >
              <option value="all">Select category</option>
              <option value="ug">Undergraduate (UG)</option>
              <option value="pg">Postgraduate (PG)</option>
              <option value="management">Management (MBA)</option>
            </select>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded focus:outline-none text-slate-600"
            >
              <option value="all">Time / Duration</option>
              <option value="3">3 Years (UG)</option>
              <option value="2">2 Years (PG & MBA)</option>
            </select>
            <button
              onClick={() => {}}
              className="w-full py-3 bg-[#EC1C23] hover:bg-[#c41218] text-white rounded text-xs font-black uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>SEARCH</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. COURSES 3x3 GRID (Matching reference screenshot `Desktop View Course Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-base font-black text-[#252525] uppercase tracking-wide">
                    {c.name}
                  </h3>

                  {/* Faculty Badge */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-8 h-8 rounded-full bg-[#EC1C23] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {c.faculty.charAt(0)}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {c.faculty}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 text-slate-300 fill-current" />
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>

              {/* Course Footer Strip */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{c.students}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{c.reviews}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{c.duration}</span>
                  </span>
                </div>
                <span className="bg-[#EC1C23] text-white font-bold text-[10px] px-2.5 py-1 rounded">
                  {c.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <button className="w-9 h-9 rounded bg-[#EC1C23] text-white font-bold text-xs shadow">
            1
          </button>
          <button className="w-9 h-9 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs">
            2
          </button>
          <button className="w-9 h-9 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs">
            »
          </button>
        </div>
      </section>
    </div>
  );
}
