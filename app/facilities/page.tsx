import type { Metadata } from "next";
import Link from "next/link";
import PageSubmenu from "../components/PageSubmenu";
import {
  Monitor,
  BookOpen,
  Home,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Campus Facilities & Infrastructure",
  description:
    "Explore CBM College facilities including Central Research Library, Modern Computing Labs, Western Ghats Men's Hostel (140 seats), Sports, and mandatory NCC/NSS activities.",
};

export default function FacilitiesPage() {
  const campusSubmenuItems = [
    { label: "Facilities & Infrastructure", href: "/facilities", active: true },
    { label: "Photo & Video Gallery", href: "/gallery" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* HEADER BANNER WITH BACKGROUND CAMPUS IMAGE */}
      <section className="relative text-white py-14 px-4 sm:px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_3.jpg')" }}
        />
        {/* Brand Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Campus Life</span>
            <span>/</span>
            <span>Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Facilities & Campus Infrastructure
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Academic resources, research central library, high-speed labs, and
            Western Ghats residential hostel.
          </p>
        </div>
      </section>

      {/* PAGE SUBMENU & CONTENT */}
      <PageSubmenu sectionTitle="Campus Life" items={campusSubmenuItems}>
        <div className="space-y-12">
          {/* Central Library */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#EC1C23] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold  text-[#2C2B5E]">
                  State-Recognized Central Library
                </h2>
                <p className="text-xs text-[#EC1C23] font-bold uppercase tracking-wider">
                  Research Repository
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our central library is a distinguished knowledge repository
              frequented by research scholars and academicians from across Tamil
              Nadu. It houses thousands of volumes, rare books, journals,
              research thesis archives, and digital cataloging systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-1">
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                • Rare Books Collection
              </span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                • E-Journal Portals
              </span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                • State Research Access
              </span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Computer Labs */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#2C2B5E] flex items-center justify-center font-bold">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold  text-[#2C2B5E]">
                  Modern Computing & IT Labs
                </h2>
                <p className="text-xs text-[#EC1C23] font-bold uppercase tracking-wider">
                  24-Hour Lab & Internet Browsing
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Equipped with modern desktop workstations, high-speed internet
              connectivity, updated software suites, and dedicated server
              infrastructure. Round-the-clock lab access is available for
              computer science and management scholars.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Western Ghats Hostel */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold  text-[#2C2B5E]">
                  Western Ghats Men's Hostel
                </h2>
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                  140 Capacity Accommodation
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Situated in the picturesque background of the Western Ghats to the
              south and west. The hostel accommodates up to 140 male students in
              a safe, peaceful environment. Mess expenses are shared among
              inmates under a cooperative dividing system.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Mandatory NCC / NSS Activities */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold  text-amber-300">
              Mandatory NCC, NSS & YRC Schemes
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Per Bharathiar University regulations, every undergraduate student
              must actively serve in one of NCC, NSS, SSL, or YRC for two years
              as a prerequisite for degree award.
            </p>
          </div>
        </div>
      </PageSubmenu>
    </div>
  );
}
