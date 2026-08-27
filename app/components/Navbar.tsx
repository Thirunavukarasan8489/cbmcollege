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
      icon: GraduationCap,
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/courses?search=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  return (
    <header className="w-full relative z-50">
      {/* 1. TOP UTILITY BAR (Light Grey with Circled Icons matching screenshot) */}
      <div className="bg-[#f8f9fa] border-b border-slate-200 text-[#252525] text-xs py-2.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          {/* Contact Details with Circled Icons */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-200/80 text-[#EC1C23] flex items-center justify-center shrink-0 border border-slate-300">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="text-slate-600 font-medium">
                Sakethapuri, Kovaipudur, Coimbatore – 641042
              </span>
            </span>

            <span className="hidden md:flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-200/80 text-[#EC1C23] flex items-center justify-center shrink-0 border border-slate-300">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <a
                href="mailto:cbmcollegekovai@gmail.com"
                className="text-slate-600 font-medium hover:text-[#EC1C23] transition-colors"
              >
                cbmcollegekovai@gmail.com
              </a>
            </span>

            <span className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-200/80 text-[#EC1C23] flex items-center justify-center shrink-0 border border-slate-300">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <a
                href="tel:04222607259"
                className="text-slate-600 font-medium hover:text-[#EC1C23] transition-colors"
              >
                0422-2607259
              </a>{" "}
              /{" "}
              <a
                href="tel:+919976573040"
                className="text-[#EC1C23] font-bold hover:underline"
              >
                +91 9976573040
              </a>
            </span>
          </div>

          {/* Language & Social Icons */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-600 cursor-pointer hover:text-[#EC1C23] transition-colors border-r border-slate-300 pr-3">
              <div className="w-7 h-7 rounded-full bg-slate-200/80 text-[#EC1C23] flex items-center justify-center shrink-0 border border-slate-300 mr-1">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-slate-200 hover:bg-[#EC1C23] hover:text-white text-slate-600 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-slate-200 hover:bg-[#EC1C23] hover:text-white text-slate-600 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Twitter"
              >
                t
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-slate-200 hover:bg-[#EC1C23] hover:text-white text-slate-600 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Google Plus"
              >
                g+
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-slate-200 hover:bg-[#EC1C23] hover:text-white text-slate-600 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Pinterest"
              >
                p
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FLOATING OVERLAPPING NAVBAR STRIP (Clean active badge pills matching reference screenshots) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-40 -mb-16 sm:-mb-20">
        <div className="flex items-start w-full relative pt-0">
          {/* Tall White Square Logo Box */}
          <Link
            href="/"
            className="bg-white p-3 sm:p-4 shadow-2xl border border-slate-200 z-50 shrink-0 flex flex-col items-center justify-center min-w-[130px] sm:min-w-[165px] h-[86px] sm:h-[104px]"
          >
            <div className="relative w-28 sm:w-36 h-12 sm:h-14">
              <Image
                src="/logo.png"
                alt="CBM College Logo"
                width={350}
                height={90}
                className="object-contain w-auto h-full"
                priority
              />
            </div>
          </Link>

          {/* Red Floating Nav Strip */}
          <nav className="flex-1 bg-[#EC1C23] text-white h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 shadow-xl">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-3">
              <Link
                href="/"
                className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all rounded ${
                  pathname === "/"
                    ? "bg-white text-[#EC1C23] shadow-md"
                    : "text-white hover:bg-white/15"
                }`}
              >
                HOME
              </Link>

              {/* About Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all rounded ${
                    ["/about", "/women-empowerment"].includes(pathname)
                      ? "bg-white text-[#EC1C23] shadow-md"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  <span>ABOUT</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {aboutDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white text-[#252525] rounded-xl shadow-2xl border border-slate-200 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {aboutSubmenu.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                            pathname === sub.href
                              ? "bg-[#2C2B5E] text-white"
                              : "hover:bg-rose-50 text-[#252525]"
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
                className="relative py-2"
                onMouseEnter={() => setCoursesDropdown(true)}
                onMouseLeave={() => setCoursesDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all rounded ${
                    pathname === "/courses" || pathname === "/mba-department"
                      ? "bg-white text-[#EC1C23] shadow-md"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  <span>COURSES</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {coursesDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white text-[#252525] rounded-xl shadow-2xl border border-slate-200 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {coursesSubmenu.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                            pathname === sub.href
                              ? "bg-[#2C2B5E] text-white"
                              : "hover:bg-rose-50 text-[#252525]"
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
                className="relative py-2"
                onMouseEnter={() => setCampusDropdown(true)}
                onMouseLeave={() => setCampusDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all rounded ${
                    ["/facilities", "/gallery"].includes(pathname)
                      ? "bg-white text-[#EC1C23] shadow-md"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  <span>CAMPUS LIFE</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {campusDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white text-[#252525] rounded-xl shadow-2xl border border-slate-200 p-3 space-y-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {campusSubmenu.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                            pathname === sub.href
                              ? "bg-[#2C2B5E] text-white"
                              : "hover:bg-rose-50 text-[#252525]"
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
                className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all rounded ${
                  pathname === "/admission"
                    ? "bg-white text-[#EC1C23] shadow-md"
                    : "text-white hover:bg-white/15"
                }`}
              >
                ADMISSION
              </Link>

              <Link
                href="/staff"
                className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all rounded ${
                  pathname === "/staff"
                    ? "bg-white text-[#EC1C23] shadow-md"
                    : "text-white hover:bg-white/15"
                }`}
              >
                STAFF
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all rounded ${
                  pathname === "/contact"
                    ? "bg-white text-[#EC1C23] shadow-md"
                    : "text-white hover:bg-white/15"
                }`}
              >
                CONTACT
              </Link>
            </div>

            {/* White Outline Search Box */}
            <div className="hidden md:flex items-center ml-auto">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center border border-white/80 rounded px-3 py-1.5 bg-transparent"
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white/80 text-xs w-28 lg:w-36 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[#EC1C23] bg-white p-1 rounded hover:bg-amber-200 transition-colors ml-1"
                  aria-label="Search"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 rounded bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/40 ml-auto"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </div>

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
        <div className="p-4 bg-[#EC1C23] text-white flex items-center justify-between border-b border-white/20 shrink-0">
          <div className="bg-white px-3 py-1.5 rounded shadow">
            <div className="relative w-36 h-8">
              <Image
                src="/logo.png"
                alt="CBM College Logo"
                width={300}
                height={75}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Search Box */}
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
            className="flex items-center rounded border border-slate-300 overflow-hidden bg-white"
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
              className="bg-[#EC1C23] text-white p-2"
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
            className={`block px-3 py-2.5 rounded text-xs font-black uppercase tracking-wider ${
              pathname === "/"
                ? "bg-[#EC1C23] text-white"
                : "text-[#252525] hover:bg-slate-100"
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
                className={`block px-3 py-2 rounded text-xs font-bold ${
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
                className={`block px-3 py-2 rounded text-xs font-bold ${
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
                className={`block px-3 py-2 rounded text-xs font-bold ${
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
            className={`block px-3 py-2.5 rounded text-xs font-black uppercase tracking-wider ${
              pathname === "/admission"
                ? "bg-[#EC1C23] text-white"
                : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            ADMISSION
          </Link>

          <Link
            href="/staff"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded text-xs font-black uppercase tracking-wider ${
              pathname === "/staff"
                ? "bg-[#EC1C23] text-white"
                : "text-[#252525] hover:bg-slate-100"
            }`}
          >
            STAFF
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded text-xs font-black uppercase tracking-wider ${
              pathname === "/contact"
                ? "bg-[#EC1C23] text-white"
                : "text-[#252525] hover:bg-slate-100"
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
            className="block w-full py-3 bg-[#EC1C23] text-white text-center rounded font-bold text-xs uppercase tracking-wider shadow"
          >
            APPLY ONLINE 2026
          </Link>
        </div>
      </div>
    </header>
  );
}
