"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Search,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  Building2,
  ShieldCheck,
  Share2,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [campusDropdown, setCampusDropdown] = useState(false);
  const pathname = usePathname();

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
      desc: "History, Vision & CBM Sakunthala Trust (Estd. 1970)",
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
    <header className="w-full relative z-50">
      {/* 1. TOP UTILITY BAR (Black/Dark Background #141414 matching reference screenshot) */}
      <div className="bg-[#141414] text-slate-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#EC1C23]" />
              <span>Sakethapuri, Kovaipudur, Coimbatore – 641042</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#EC1C23]" />
              <a href="mailto:cbmcollegekovai@gmail.com">
                cbmcollegekovai@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#EC1C23]" />
              <a href="tel:04222607259">0422-2607259</a> /{" "}
              <a href="tel:+919976573040" className="text-amber-400 font-semibold">
                +91 9976573040
              </a>
            </span>
          </div>

          {/* Language Selector & Social Links */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] cursor-pointer hover:text-white transition-colors border-r border-zinc-700 pr-3">
              <Globe className="w-3.5 h-3.5 text-[#EC1C23]" />
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-[10px] font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-[10px] font-bold"
                aria-label="Twitter"
              >
                X
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-[10px] font-bold"
                aria-label="Youtube"
              >
                G+
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-[10px] font-bold"
                aria-label="Pinterest"
              >
                p
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER (White Navbar matching reference screenshot) */}
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-56 sm:w-64 h-14 sm:h-16">
              <Image
                src="/logo.png"
                alt="CBM College Emblem Logo"
                width={450}
                height={110}
                className="object-contain w-auto h-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                pathname === "/"
                  ? "bg-[#EC1C23] text-white rounded-md shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23]"
              }`}
            >
              HOME
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                  ["/about", "/women-empowerment"].includes(pathname)
                    ? "bg-[#EC1C23] text-white rounded-md shadow-sm"
                    : "text-[#252525] hover:text-[#EC1C23]"
                }`}
              >
                <span>ABOUT</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {aboutDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {aboutSubmenu.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                          pathname === sub.href
                            ? "bg-[#2C2B5E] text-white"
                            : "hover:bg-slate-50 text-[#252525]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-md bg-rose-100 text-[#EC1C23] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold">{sub.name}</div>
                          <div className="text-[11px] opacity-75 font-normal">
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
                className={`flex items-center gap-1 px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                  pathname === "/courses" || pathname === "/mba-department"
                    ? "bg-[#EC1C23] text-white rounded-md shadow-sm"
                    : "text-[#252525] hover:text-[#EC1C23]"
                }`}
              >
                <span>COURSES</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {coursesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {coursesSubmenu.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                          pathname === sub.href
                            ? "bg-[#2C2B5E] text-white"
                            : "hover:bg-slate-50 text-[#252525]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-md bg-indigo-100 text-[#2C2B5E] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold">{sub.name}</div>
                          <div className="text-[11px] opacity-75 font-normal">
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
                className={`flex items-center gap-1 px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                  ["/facilities", "/gallery"].includes(pathname)
                    ? "bg-[#EC1C23] text-white rounded-md shadow-sm"
                    : "text-[#252525] hover:text-[#EC1C23]"
                }`}
              >
                <span>CAMPUS LIFE</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {campusDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {campusSubmenu.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                          pathname === sub.href
                            ? "bg-[#2C2B5E] text-white"
                            : "hover:bg-slate-50 text-[#252525]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold">{sub.name}</div>
                          <div className="text-[11px] opacity-75 font-normal">
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
              className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                pathname === "/admission"
                  ? "bg-[#EC1C23] text-white rounded-md shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23]"
              }`}
            >
              ADMISSION
            </Link>

            <Link
              href="/staff"
              className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                pathname === "/staff"
                  ? "bg-[#EC1C23] text-white rounded-md shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23]"
              }`}
            >
              STAFF
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                pathname === "/contact"
                  ? "bg-[#EC1C23] text-white rounded-md shadow-sm"
                  : "text-[#252525] hover:text-[#EC1C23]"
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Integrated Search Box (Matching reference screenshot `Desktop Home Page.png`) */}
          <div className="hidden md:flex items-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `/courses?search=${encodeURIComponent(
                    searchQuery
                  )}`;
                }
              }}
              className="flex items-center overflow-hidden rounded-md border border-slate-300"
            >
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 text-xs w-44 lg:w-52 text-[#252525] focus:outline-none bg-slate-50"
              />
              <button
                type="submit"
                className="bg-[#EC1C23] hover:bg-[#c41218] text-white p-2.5 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md bg-slate-100 hover:bg-slate-200 text-[#252525] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#EC1C23]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE FULLSCREEN DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-[999] bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Off-Canvas Slide Drawer Panel */}
      <div
        className={`fixed top-0 right-0 z-[1000] w-[85%] max-w-sm h-screen bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 bg-[#141414] text-white flex items-center justify-between border-b border-zinc-800 shrink-0">
          <div className="relative w-44 h-10">
            <Image
              src="/logo.png"
              alt="CBM College Emblem Logo"
              width={300}
              height={75}
              className="object-contain w-auto h-full brightness-0 invert"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Search Input Box */}
        <div className="p-4 border-b border-slate-100 bg-slate-50 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                setIsOpen(false);
                window.location.href = `/courses?search=${encodeURIComponent(
                  searchQuery
                )}`;
              }
            }}
            className="flex items-center rounded-md border border-slate-300 overflow-hidden bg-white"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs text-[#252525] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#EC1C23] text-white p-2.5"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Mobile Scrollable Menu Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-xs font-black uppercase tracking-wider ${
              pathname === "/" ? "bg-[#EC1C23] text-white" : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            HOME
          </Link>

          {/* About Accordion */}
          <div className="border border-slate-200 rounded-lg p-2.5 space-y-1.5 bg-slate-50">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#EC1C23] px-2 block">
              ABOUT
            </span>
            {aboutSubmenu.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-xs font-bold ${
                  pathname === sub.href
                    ? "bg-[#2C2B5E] text-white"
                    : "text-[#252525] hover:bg-white"
                }`}
              >
                {sub.name}
              </Link>
            ))}
          </div>

          {/* Courses Accordion */}
          <div className="border border-slate-200 rounded-lg p-2.5 space-y-1.5 bg-slate-50">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#EC1C23] px-2 block">
              COURSES
            </span>
            {coursesSubmenu.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-xs font-bold ${
                  pathname === sub.href
                    ? "bg-[#2C2B5E] text-white"
                    : "text-[#252525] hover:bg-white"
                }`}
              >
                {sub.name}
              </Link>
            ))}
          </div>

          {/* Campus Life Accordion */}
          <div className="border border-slate-200 rounded-lg p-2.5 space-y-1.5 bg-slate-50">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#EC1C23] px-2 block">
              CAMPUS LIFE
            </span>
            {campusSubmenu.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-xs font-bold ${
                  pathname === sub.href
                    ? "bg-[#2C2B5E] text-white"
                    : "text-[#252525] hover:bg-white"
                }`}
              >
                {sub.name}
              </Link>
            ))}
          </div>

          <Link
            href="/admission"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-xs font-black uppercase tracking-wider ${
              pathname === "/admission" ? "bg-[#EC1C23] text-white" : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            ADMISSION
          </Link>

          <Link
            href="/staff"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-xs font-black uppercase tracking-wider ${
              pathname === "/staff" ? "bg-[#EC1C23] text-white" : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            STAFF
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-xs font-black uppercase tracking-wider ${
              pathname === "/contact" ? "bg-[#EC1C23] text-white" : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            CONTACT
          </Link>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 shrink-0">
          <Link
            href="/admission"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 bg-[#EC1C23] text-white text-center rounded-md font-bold text-xs uppercase tracking-wider shadow"
          >
            APPLY ONLINE 2026
          </Link>
        </div>
      </div>
    </header>
  );
}
