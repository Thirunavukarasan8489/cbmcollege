"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import {
  GraduationCap,
  BookOpen,
  Award,
  ArrowRight,
  Search,
  MapPin,
  Users,
  MessageSquare,
  Plus,
  Minus,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Clock,
  Sparkles,
  Tag,
  Star,
  Layers,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchDuration, setSearchDuration] = useState("all");

  const faqs = [
    {
      question: "SMART LEARNING IS AN EDUCATION PLATFORM PARTNERS",
      answer:
        "CBM College of Arts and Science is located in Sakethapuri, Kovaipudur, Coimbatore, Tamil Nadu – 641042. Inaugurated on July 1, 1974 by Late C. B. Muthuswamy Chettiar, providing value-based education.",
    },
    {
      question: "EDUCATION OF TOMORROW, ROOTED IN TRADITION",
      answer:
        "Affiliated to Bharathiar University, Coimbatore, recognized by UGC, and its MBA program is approved by AICTE, New Delhi.",
    },
    {
      question: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING",
      answer:
        "Undergraduate degrees include B.Com, B.A. Economics, B.Sc. Computer Science, B.Sc. Mathematics, B.Sc. Physics, and B.Sc. Visual Communication. Postgraduate degrees include M.A. Economics, M.Com, M.Sc. Mathematics, M.Sc. Chemistry, and full-time MBA.",
    },
    {
      question: "BUILD EDUCATION WEBSITE USING HTML & NEXT.JS",
      answer:
        "Applications can be submitted online via our direct admission portal or obtained directly at the college campus in Kovaipudur. Reach the Admission Cell at +91 9976573040.",
    },
    {
      question: "BEST INDUSTRY LEADERS FOR AWESOME COURSES",
      answer:
        "CBM College features a dedicated Western Ghats view Men's Hostel building with capacity for 140 students operating under a cooperative dividing mess system.",
    },
  ];

  const popularCourses = [
    {
      id: "cs",
      title: "B.SC. COMPUTER SCIENCE",
      faculty: "Dr. K. Kumarasamy (Principal)",
      desc: "Software engineering, data structures, AI fundamentals, database architecture & modern web tech.",
      students: "345",
      reviews: "15",
      location: "Kovaipudur, CBE",
      badge: "BHARATHIAR UNIV",
      image: "/hero_1.jpg",
    },
    {
      id: "mba",
      title: "MBA (FULL-TIME MANAGEMENT)",
      faculty: "Dept. of Management Studies",
      desc: "AICTE approved 2-year full-time program with Marketing, Finance, HR, Production & Systems electives.",
      students: "180",
      reviews: "24",
      location: "AICTE Approved",
      badge: "AICTE APPROVED",
      image: "/hero_2.jpg",
    },
    {
      id: "com",
      title: "B.COM (BACHELOR OF COMMERCE)",
      faculty: "Dr. M. Sekar (Professor)",
      desc: "Corporate accounting, taxation, auditing, managerial economics & computerized banking systems.",
      students: "420",
      reviews: "18",
      location: "Kovaipudur, CBE",
      badge: "BHARATHIAR UNIV",
      image: "/hero_3.jpg",
    },
  ];

  const events = [
    {
      day: "25",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "26",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "27",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "28",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "29",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "30",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
  ];

  const latestNews = [
    {
      day: "12",
      month: "SEP",
      title: "NEW CHICAGO SCHOOL BUDGET",
      desc: "Education is the process of facilitating learning. Knowledge, skills, values, beliefs, and habits of a group of people are transferred.",
      image: "/hero_1.jpg",
    },
    {
      day: "12",
      month: "SEP",
      title: "NEW CHICAGO SCHOOL BUDGET",
      desc: "Education is the process of facilitating learning. Knowledge, skills, values, beliefs, and habits of a group of people are transferred.",
      image: "/hero_2.jpg",
    },
    {
      day: "12",
      month: "SEP",
      title: "NEW CHICAGO SCHOOL BUDGET",
      desc: "Education is the process of facilitating learning. Knowledge, skills, values, beliefs, and habits of a group of people are transferred.",
      image: "/hero_3.jpg",
    },
  ];

  const testimonials = [
    {
      name: "GHOST RIAD",
      role: "(Sir.Principal)",
      quote:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      name: "MASUM NODI",
      role: "(Sir.Principal Fohinni)",
      quote:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
  ];

  return (
    <div className="space-y-16 pb-12 text-[#252525]">
      {/* 1. HERO CAROUSEL BANNER SECTION */}
      <HeroCarousel />

      {/* 2. HERO FEATURE 3-CARDS STRIP (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 lg:-mt-24 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-2xl">
          {/* Card 1: Red Feature Block */}
          <div className="bg-[#EC1C23] text-white p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-white" />
                <h3 className="text-xl font-black uppercase tracking-wider">
                  LEARN COURSES FIRST
                </h3>
              </div>
              <p className="text-xs text-rose-100 leading-relaxed font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
            <div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-white hover:bg-white hover:text-[#EC1C23] text-white rounded text-xs font-black uppercase tracking-wider transition-colors"
              >
                <span>REDE MORE →</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Center Image Card */}
          <div className="relative min-h-[260px] hidden md:block">
            <Image
              src="/hero_2.jpg"
              alt="CBM Campus Students"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Card 3: Red Feature Block */}
          <div className="bg-[#EC1C23] text-white p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-white" />
                <h3 className="text-xl font-black uppercase tracking-wider">
                  BOOK LIBRARY
                </h3>
              </div>
              <p className="text-xs text-rose-100 leading-relaxed font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
            <div>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-white hover:bg-white hover:text-[#EC1C23] text-white rounded text-xs font-black uppercase tracking-wider transition-colors"
              >
                <span>REDE MORE →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSE FILTER SEARCH BAR (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-100 rounded-lg p-4 border border-slate-200 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/courses?search=${encodeURIComponent(
                searchName
              )}&cat=${searchCategory}&duration=${searchDuration}`;
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            <input
              type="text"
              placeholder="Enter course name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded focus:outline-none text-[#252525]"
            />
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded focus:outline-none text-slate-600"
            >
              <option value="all">Select category</option>
              <option value="ug">Undergraduate (UG)</option>
              <option value="pg">Postgraduate (PG)</option>
              <option value="management">Management (MBA)</option>
            </select>
            <select
              value={searchDuration}
              onChange={(e) => setSearchDuration(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded focus:outline-none text-slate-600"
            >
              <option value="all">Time / Duration</option>
              <option value="3">3 Years (UG)</option>
              <option value="2">2 Years (PG & MBA)</option>
            </select>
            <button
              type="submit"
              className="w-full py-3 bg-[#EC1C23] hover:bg-[#c41218] text-white rounded text-xs font-black uppercase tracking-wider transition-colors shadow"
            >
              SEARCH
            </button>
          </form>
        </div>
      </section>

      {/* 4. WELCOME TO CBM COLLEGE SECTION (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#EC1C23] tracking-wide">
            WELCOME TO CBM COLLEGE
          </h2>
          <p className="text-xs font-bold uppercase tracking-widest text-[#252525]">
            AWESOME SUCCESS WITH STUDENT
          </p>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>

        {/* 3 Column Icon Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-rose-100 text-[#EC1C23] rounded-lg shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#252525]">
                LEARN COURSES FIRST
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-rose-100 text-[#EC1C23] rounded-lg shrink-0">
              <Tag className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#252525]">
                15+ COURSES AVAILABLE
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-rose-100 text-[#EC1C23] rounded-lg shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#252525]">
                EVERYTHING YOU NEED
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR COURSES GRID (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black uppercase text-[#252525] tracking-wider">
              POPULAR COURSES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-48">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-black text-[#252525] uppercase tracking-wide">
                      {c.title}
                    </h3>

                    {/* Faculty Avatar */}
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

                {/* Course Card Footer Strip */}
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
                      <span>{c.location}</span>
                    </span>
                  </div>
                  <span className="bg-[#EC1C23] text-white font-bold text-[10px] px-2.5 py-1 rounded">
                    {c.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC1C23]" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* 6. DARK PARALLAX STATS SECTION (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="relative bg-slate-950 text-white py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero_1.jpg"
            alt="Campus background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto space-y-12 text-center z-10">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider">
              GET 100 COURSES FOR <span className="text-[#EC1C23]">FREE</span>
            </h2>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Tech you how to build a complete learning management system upcoming education for student
            </p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pt-1">
              WE'RE GOOD AT SOME MEMBER
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-[#EC1C23] text-[#EC1C23] flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                CERTIFIED TEACHERS
              </div>
              <div className="text-4xl font-black text-white">117</div>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-[#EC1C23] text-[#EC1C23] flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                COURSES COMPLETE
              </div>
              <div className="text-4xl font-black text-white">12456</div>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-[#EC1C23] text-[#EC1C23] flex items-center justify-center mx-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                STUDENTS ENROLLED
              </div>
              <div className="text-4xl font-black text-white">220234</div>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-[#EC1C23] text-[#EC1C23] flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                SUCCESS RATE
              </div>
              <div className="text-4xl font-black text-white">100%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EVENTS GRID SECTION (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black uppercase text-[#252525] tracking-wider">
            EVENTS
          </h2>
          <p className="text-xs text-slate-500">
            Our upcoming event you should mind always
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="bg-slate-100 rounded-md p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:bg-slate-200/60 transition-colors"
            >
              <div className="text-center shrink-0">
                <div className="text-3xl font-black text-[#EC1C23] leading-none">
                  {evt.day}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase">
                  {evt.month}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase text-[#252525] tracking-wide">
                  {evt.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {evt.desc}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#EC1C23]" />
                    <span>{evt.loc}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{evt.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INFORMATION CALLOUT BANNER (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider">
            INFORMATION FOR TEACHERS AND STUDENTS, EVENT INFORMATION AND{" "}
            <span className="text-[#EC1C23]">EDUCATION NEWS</span>
          </h2>
          <p className="text-xs text-slate-400">
            ONE OF THE MOST COMPLETE EDUCATION THEME
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#EC1C23] hover:bg-[#c41218] text-white rounded text-xs font-black uppercase tracking-wider transition-colors shadow-lg"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* 9. LATEST NEWS GRID SECTION (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black uppercase text-[#252525] tracking-wider">
            LATEST NEWS
          </h2>
          <p className="text-xs text-slate-500">
            Something for education news, latest news feed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm"
            >
              <div className="relative w-full h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#EC1C23] text-white text-center p-2 rounded w-11 shadow">
                  <div className="text-sm font-black leading-none">{news.day}</div>
                  <div className="text-[9px] font-bold uppercase">{news.month}</div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-sm font-black uppercase text-[#252525] tracking-wide">
                  {news.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {news.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. TESTIMONIALS & FREQUENTLY ASKED QUESTIONS (Matching reference screenshot `Desktop Home Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Testimonials */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-wider text-[#252525]">
              TESTIMONIALS
            </h2>
            <div className="space-y-4">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-slate-100 p-6 rounded-md border border-slate-200 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EC1C23] text-white font-bold flex items-center justify-center text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#252525]">
                        {t.name}{" "}
                        <span className="text-[11px] font-medium text-slate-400">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-wider text-[#252525]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-md overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-3.5 bg-slate-100 hover:bg-slate-200 text-left text-xs font-black uppercase tracking-wide text-[#252525] flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded border border-slate-400 flex items-center justify-center text-[10px] shrink-0 text-slate-600">
                          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                        </div>
                        <span>{faq.question}</span>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs text-slate-500 leading-relaxed border-t border-slate-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
