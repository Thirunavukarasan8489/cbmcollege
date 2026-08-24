"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ChevronRight, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "MBA Dept", href: "/mba-department" },
    { name: "Admission", href: "/admission" },
    { name: "Facilities", href: "/facilities" },
    { name: "Women Cell", href: "/women-empowerment" },
    { name: "Staff", href: "/staff" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Header Contact Bar */}
      <div className="bg-[#2C2B5E] text-white text-xs py-2 px-4 border-b border-indigo-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#EC1C23]" />
              <a href="tel:04222607259">0422-2607259</a> / <a href="tel:9976573040" className="font-semibold text-amber-300">9976573040</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#EC1C23]" />
              <a href="mailto:cbmcollegekovai@gmail.com">cbmcollegekovai@gmail.com</a>
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
            <div className="relative w-12 h-12 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="CBM College Emblem Logo"
                width={48}
                height={48}
                className="object-contain w-auto h-12"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#2C2B5E] font-serif leading-none">
                CBM COLLEGE
              </span>
              <span className="text-[11px] font-bold text-[#EC1C23] uppercase tracking-widest mt-1">
                Arts & Science • Estd 1974
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#EC1C23] text-white shadow-sm"
                      : "text-[#252525] hover:text-[#EC1C23] hover:bg-rose-50/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
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
              className="xl:hidden p-2 rounded-lg text-[#252525] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1.5 pt-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
                      isActive
                        ? "bg-[#EC1C23] text-white"
                        : "text-[#252525] hover:bg-slate-100"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/admission"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#EC1C23] text-white py-3 rounded-xl text-center font-bold text-sm shadow"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Admissions 2026 - Apply Now</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
