"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Award,
  Sparkles,
  BookOpen,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [campusDropdown, setCampusDropdown] = useState(false);
  const pathname = usePathname();

  // Scroll listener for sticky navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const aboutSubmenu = [
    {
      name: "About College & Founder",
      href: "/about",
      desc: "History, Vision & Trust Objectives (Estd. 1970)",
      icon: GraduationCap,
    },
    {
      name: "Women Empowerment Cell",
      href: "/women-empowerment",
      desc: "Gender Sensitization & Leadership Workshops",
      icon: Award,
    },
  ];

  const coursesSubmenu = [
    {
      name: "All Degree Programs",
      href: "/courses",
      desc: "Undergraduate, Postgraduate & Research Degrees",
      icon: BookOpen,
    },
    {
      name: "MBA Department",
      href: "/mba-department",
      desc: "AICTE Approved 2-Year Full-Time Program",
      icon: Sparkles,
    },
  ];

  const campusSubmenu = [
    {
      name: "Facilities & Infrastructure",
      href: "/facilities",
      desc: "Central Library, IT Labs & Western Ghats Hostel",
      icon: Building2,
    },
    {
      name: "Photo & Video Gallery",
      href: "/gallery",
      desc: "Campus Events & Silver Jubilee Highlights",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Foreign University Top Utility Bar */}
        <div className="bg-[#1A193B] text-white text-xs py-2 px-4 border-b border-[#D4AF37]/30 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4 text-slate-200">
              <span className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#EC1C23]" />
                <a href="tel:04222607259">0422-2607259</a> /{" "}
                <a href="tel:+919976573040" className="font-bold text-[#D4AF37]">
                  +91 9976573040
                </a>
              </span>
              <span className="hidden md:flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#EC1C23]" />
                <a href="mailto:cbmcollegekovai@gmail.com">
                  cbmcollegekovai@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 font-medium">
              <span className="hidden sm:inline bg-white/10 text-slate-200 px-2.5 py-0.5 rounded-full text-[11px] border border-white/20">
                Affiliated to Bharathiar University
              </span>
              <span className="bg-[#D4AF37] text-[#1A193B] font-extrabold px-2.5 py-0.5 rounded-full text-[11px] shadow-sm uppercase tracking-wider">
                AICTE Approved (MBA)
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-[#D4AF37]/30"
              : "bg-white py-3.5 border-b border-slate-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Logo & College Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-64 sm:w-72 h-16 sm:h-20 shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="CBM College Emblem Logo"
                  width={500}
                  height={125}
                  className="object-contain w-auto h-full"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all ${
                  pathname === "/"
                    ? "bg-[#2C2B5E] text-white shadow-md border border-[#D4AF37]/50"
                    : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/80"
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all ${
                    ["/about", "/women-empowerment"].includes(pathname)
                      ? "bg-[#2C2B5E] text-white shadow-md border border-[#D4AF37]/50"
                      : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/80"
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {aboutDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#EC1C23] px-3 pt-1">
                      Institutional History
                    </div>
                    {aboutSubmenu.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            pathname === sub.href
                              ? "bg-[#2C2B5E] text-white"
                              : "hover:bg-slate-50 text-[#252525]"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-rose-100 text-[#EC1C23] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold">{sub.name}</div>
                            <div className="text-[11px] opacity-75 font-medium leading-tight">
                              {sub.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesDropdown(true)}
                onMouseLeave={() => setCoursesDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all ${
                    pathname === "/courses" || pathname === "/mba-department"
                      ? "bg-[#2C2B5E] text-white shadow-md border border-[#D4AF37]/50"
                      : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/80"
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {coursesDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#EC1C23] px-3 pt-1">
                      Academic Disciplines
                    </div>
                    {coursesSubmenu.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            pathname === sub.href
                              ? "bg-[#2C2B5E] text-white"
                              : "hover:bg-slate-50 text-[#252525]"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#2C2B5E] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold">{sub.name}</div>
                            <div className="text-[11px] opacity-75 font-medium leading-tight">
                              {sub.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Campus Life Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCampusDropdown(true)}
                onMouseLeave={() => setCampusDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all ${
                    ["/facilities", "/gallery"].includes(pathname)
                      ? "bg-[#2C2B5E] text-white shadow-md border border-[#D4AF37]/50"
                      : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/80"
                  }`}
                >
                  <span>Campus Life</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {campusDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#EC1C23] px-3 pt-1">
                      Infrastructure & Culture
                    </div>
                    {campusSubmenu.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            pathname === sub.href
                              ? "bg-[#2C2B5E] text-white"
                              : "hover:bg-slate-50 text-[#252525]"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold">{sub.name}</div>
                            <div className="text-[11px] opacity-75 font-medium leading-tight">
                              {sub.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/admission"
                className={`px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all ${
                  pathname === "/admission"
                    ? "bg-[#2C2B5E] text-white shadow-md border border-[#D4AF37]/50"
                    : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/80"
                }`}
              >
                Admission
              </Link>

              <Link
                href="/staff"
                className={`px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all ${
                  pathname === "/staff"
                    ? "bg-[#2C2B5E] text-white shadow-md border border-[#D4AF37]/50"
                    : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/80"
                }`}
              >
                Staff
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all ${
                  pathname === "/contact"
                    ? "bg-[#2C2B5E] text-white shadow-md border border-[#D4AF37]/50"
                    : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/80"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/admission"
                className="hidden sm:flex items-center gap-2 bg-[#EC1C23] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-lg hover:bg-[#c41218] transition-all transform hover:-translate-y-0.5 border border-[#D4AF37]/30 uppercase tracking-wider"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Apply Online 2026</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 rounded-xl text-[#252525] hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-[#EC1C23]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Smooth Slide Side-Drawer Panel */}
      <div
        className={`fixed top-0 right-0 z-[1000] w-[85%] max-w-sm h-screen bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between text-white shrink-0 bg-[#2C2B5E]">
          <div className="flex items-center gap-2">
            <div className="relative w-48 h-12 shrink-0">
              <Image
                src="/logo.png"
                alt="CBM College Emblem Logo"
                width={300}
                height={75}
                className="object-contain w-auto h-full brightness-0 invert"
              />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/"
                ? "bg-[#2C2B5E] text-white shadow"
                : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            <span>Home</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </Link>

          {/* Mobile About Accordion */}
          <div className="border border-slate-200/80 rounded-2xl p-2.5 space-y-1.5 bg-slate-50">
            <span className="text-[11px] font-extrabold text-[#EC1C23] uppercase tracking-wider px-2 block">
              About College
            </span>
            {aboutSubmenu.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  pathname === sub.href
                    ? "bg-[#2C2B5E] text-white shadow-sm"
                    : "text-[#252525] hover:bg-white border border-transparent hover:border-slate-200"
                }`}
              >
                <span>{sub.name}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            ))}
          </div>

          {/* Mobile Courses Accordion */}
          <div className="border border-slate-200/80 rounded-2xl p-2.5 space-y-1.5 bg-slate-50">
            <span className="text-[11px] font-extrabold text-[#EC1C23] uppercase tracking-wider px-2 block">
              Courses & Programs
            </span>
            {coursesSubmenu.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  pathname === sub.href
                    ? "bg-[#2C2B5E] text-white shadow-sm"
                    : "text-[#252525] hover:bg-white border border-transparent hover:border-slate-200"
                }`}
              >
                <span>{sub.name}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            ))}
          </div>

          {/* Mobile Campus Life Accordion */}
          <div className="border border-slate-200/80 rounded-2xl p-2.5 space-y-1.5 bg-slate-50">
            <span className="text-[11px] font-extrabold text-[#EC1C23] uppercase tracking-wider px-2 block">
              Campus Life
            </span>
            {campusSubmenu.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  pathname === sub.href
                    ? "bg-[#2C2B5E] text-white shadow-sm"
                    : "text-[#252525] hover:bg-white border border-transparent hover:border-slate-200"
                }`}
              >
                <span>{sub.name}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            ))}
          </div>

          <Link
            href="/admission"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/admission"
                ? "bg-[#2C2B5E] text-white shadow"
                : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            <span>Admission Procedure</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </Link>

          <Link
            href="/staff"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/staff"
                ? "bg-[#2C2B5E] text-white shadow"
                : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            <span>Staff Directory</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/contact"
                ? "bg-[#2C2B5E] text-white shadow"
                : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            <span>Contact Us</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </Link>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3 shrink-0">
          <Link
            href="/admission"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#EC1C23] hover:bg-[#c41218] text-white py-3 rounded-xl text-center font-bold text-sm shadow-md transition-all uppercase tracking-wider"
          >
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>Admissions 2026 - Apply Now</span>
          </Link>

          <div className="text-center text-[11px] text-slate-500 font-medium">
            Sakethapuri, Kovaipudur, Coimbatore • 0422-2607259
          </div>
        </div>
      </div>
    </>
  );
}
