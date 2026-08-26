"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Monitor, Building2, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function FacilitiesPage() {
  const facilities = [
    {
      id: "library",
      title: "CENTRAL RESEARCH LIBRARY",
      subtitle: "State-Recognized Learning & Research Repository",
      desc: "Research scholars and academics all over the state visit our library for research. Equipped with comprehensive subject journals, digital e-resources, and quiet study bays.",
      image: "/hero_1.jpg",
      points: [
        "Statewide scholar research visits",
        "Thousands of reference books & journals",
        "Quiet study bays & digital catalog search",
      ],
    },
    {
      id: "labs",
      title: "HIGH-SPEED IT COMPUTING LABS",
      subtitle: "Modern Computing Infrastructure with Internet Browsing",
      desc: "Spacious, modern computer labs equipped with modern systems, updated software suites, and 24-hour lab access with high-speed internet browsing facilities.",
      image: "/hero_2.jpg",
      points: [
        "Modern desktop workstation configurations",
        "24-Hour lab access for registered scholars",
        "High-speed internet & software development IDEs",
      ],
    },
    {
      id: "hostel",
      title: "WESTERN GHATS MEN'S HOSTEL",
      subtitle: "Scenic Accommodation for 140 Students",
      desc: "Situated in a scenic background of the Western Ghats to the south and west, with provision to accommodate 140 male students under a cooperative dividing mess system.",
      image: "/hero_3.jpg",
      points: [
        "140 Student capacity residential building",
        "Western Ghats scenic hill atmosphere",
        "Cooperative dividing mess system",
      ],
    },
    {
      id: "activities",
      title: "NCC, NSS & YOUTH RED CROSS",
      subtitle: "Mandatory Student Character Building Service",
      desc: "Per Bharathiar University regulations, every student must serve in one of: NCC / NSS / SSL / YRC / Sports and Games for two years to qualify for degree award.",
      image: "/hero_1.jpg",
      points: [
        "National Cadet Corps (NCC) training",
        "National Service Scheme (NSS) social camps",
        "Youth Red Cross (YRC) blood donation & medical aid",
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-12 text-[#252525]">
      {/* 1. PAGE HEADER BANNER (Matching reference screenshot `Desktop View Our Faculities.png`) */}
      <div className="relative w-full h-64 bg-slate-950 text-white flex items-center overflow-hidden">
        <Image
          src="/hero_3.jpg"
          alt="Campus Facilities Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-2 z-10">
          <h1 className="text-4xl font-black uppercase tracking-wider text-white">
            OUR FACILITIES
          </h1>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-[#EC1C23]">
              Home
            </Link>
            <span>-</span>
            <span className="text-[#EC1C23]">Facilities</span>
          </div>
        </div>
      </div>

      {/* 2. FACILITIES LIST (Matching reference screenshot `Desktop View Our Faculities.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black uppercase text-[#252525] tracking-wider">
            CAMPUS INFRASTRUCTURE & FACILITIES
          </h2>
          <p className="text-xs text-slate-500">
            Providing an environment highly conducive for creative & academic endeavours
          </p>
        </div>

        <div className="space-y-12">
          {facilities.map((fac, idx) => (
            <div
              key={fac.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="bg-[#EC1C23] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  CBM FACILITY #{idx + 1}
                </span>
                <h3 className="text-2xl font-black uppercase text-[#252525]">
                  {fac.title}
                </h3>
                <p className="text-xs font-bold text-[#EC1C23] uppercase tracking-wide">
                  {fac.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {fac.desc}
                </p>

                <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  {fac.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#EC1C23] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[260px] rounded-lg overflow-hidden border border-slate-300 shadow">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
