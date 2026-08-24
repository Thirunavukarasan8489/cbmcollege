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
      desc: "History, Vision & Trust Objectives",
    },
    {
      name: "Women Empowerment Cell",
      href: "/women-empowerment",
      desc: "Gender Sensitization & Leadership Workshops",
    },
  ];

  const coursesSubmenu = [
    {
      name: "All Degree Programs",
      href: "/courses",
      desc: "Undergraduate, Postgraduate & Research Degrees",
    },
    {
      name: "MBA Department",
      href: "/mba-department",
      desc: "AICTE Approved 2-Year Full-Time Program",
    },
  ];

  const campusSubmenu = [
    {
      name: "Facilities & Infrastructure",
      href: "/facilities",
      desc: "Library, Computer Labs & Men's Hostel",
    },
    {
      name: "Photo & Video Gallery",
      href: "/gallery",
      desc: "Campus Events & Silver Jubilee Highlights",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Header Contact Bar */}
      <div className="bg-[#2C2B5E] text-white text-xs py-2 px-4 border-b border-indigo-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#EC1C23]" />
              <a href="tel:04222607259">0422-2607259</a> /{" "}
              <a href="tel:+919976573040" className="font-semibold text-amber-300">
                +91 9976573040
              </a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#EC1C23]" />
              <a href="mailto:cbmcollegekovai@gmail.com">
                cbmcollegekovai@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3 font-medium">
            <span className="hidden sm:inline bg-white/10 text-slate-200 px-2.5 py-0.5 rounded text-[11px] border border-white/20">
              Affiliated to Bharathiar University
            </span>
            <span className="bg-[#EC1C23] text-white font-bold px-2.5 py-0.5 rounded text-[11px] shadow">
              AICTE Approved (MBA)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200"
            : "bg-white py-3.5 border-b border-slate-100"
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
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                pathname === "/"
                  ? "bg-[#EC1C23] text-white shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
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
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                  ["/about", "/women-empowerment"].includes(pathname)
                    ? "bg-[#EC1C23] text-white shadow-sm"
                    : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
                }`}
              >
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {aboutDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                  {aboutSubmenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-3 py-2.5 rounded-xl transition-all ${
                        pathname === sub.href
                          ? "bg-[#2C2B5E] text-white"
                          : "hover:bg-slate-100 text-[#252525]"
                      }`}
                    >
                      <div className="text-xs font-bold">{sub.name}</div>
                      <div className="text-[11px] opacity-80 font-normal">
                        {sub.desc}
                      </div>
                    </Link>
                  ))}
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
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                  pathname === "/courses" || pathname === "/mba-department"
                    ? "bg-[#EC1C23] text-white shadow-sm"
                    : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
                }`}
              >
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {coursesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                  {coursesSubmenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-3 py-2.5 rounded-xl transition-all ${
                        pathname === sub.href
                          ? "bg-[#2C2B5E] text-white"
                          : "hover:bg-slate-100 text-[#252525]"
                      }`}
                    >
                      <div className="text-xs font-bold">{sub.name}</div>
                      <div className="text-[11px] opacity-80 font-normal">
                        {sub.desc}
                      </div>
                    </Link>
                  ))}
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
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                  ["/facilities", "/gallery"].includes(pathname)
                    ? "bg-[#EC1C23] text-white shadow-sm"
                    : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
                }`}
              >
                <span>Campus Life</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {campusDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                  {campusSubmenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-3 py-2.5 rounded-xl transition-all ${
                        pathname === sub.href
                          ? "bg-[#2C2B5E] text-white"
                          : "hover:bg-slate-100 text-[#252525]"
                      }`}
                    >
                      <div className="text-xs font-bold">{sub.name}</div>
                      <div className="text-[11px] opacity-80 font-normal">
                        {sub.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/admission"
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                pathname === "/admission"
                  ? "bg-[#EC1C23] text-white shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
              }`}
            >
              Admission
            </Link>

            <Link
              href="/staff"
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                pathname === "/staff"
                  ? "bg-[#EC1C23] text-white shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
              }`}
            >
              Staff
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                pathname === "/contact"
                  ? "bg-[#EC1C23] text-white shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className="hidden sm:flex items-center gap-1.5 bg-[#EC1C23] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-[#c41218] transition-all transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Apply Online</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-[#252525] hover:bg-slate-100 focus:outline-none transition-colors"
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

        {/* Mobile Backdrop Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Smooth Slide Side-Drawer Panel */}
        <div
          className={`fixed top-0 right-0 z-50 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out xl:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-[#2C2B5E] text-white">
            <div className="flex items-center gap-2">
              <div className="relative w-44 h-10 shrink-0">
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
                  ? "bg-[#EC1C23] text-white shadow"
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
              href="/staff"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                pathname === "/staff"
                  ? "bg-[#EC1C23] text-white shadow"
                  : "text-[#252525] hover:bg-slate-100"
              }`}
            >
              <span>Staff Directory</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/admission"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                pathname === "/admission"
                  ? "bg-[#EC1C23] text-white shadow"
                  : "text-[#252525] hover:bg-slate-100"
              }`}
            >
              <span>Admission Procedure</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                pathname === "/contact"
                  ? "bg-[#EC1C23] text-white shadow"
                  : "text-[#252525] hover:bg-slate-100"
              }`}
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
            <Link
              href="/admission"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#EC1C23] hover:bg-[#c41218] text-white py-3 rounded-xl text-center font-bold text-sm shadow-md transition-all"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Admissions 2026 - Apply Now</span>
            </Link>

            <div className="text-center text-[11px] text-slate-500 font-medium">
              Sakethapuri, Kovaipudur, Coimbatore • 0422-2607259
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
