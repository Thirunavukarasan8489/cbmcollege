"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  Tag,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const teachers = [
    {
      name: "Dr. K. Kumarasamy",
      role: "Principal",
      dept: "CBM College Administration",
      image: "/hero_1.jpg",
    },
    {
      name: "Dr. M.P. Ramarajan",
      role: "Associate Professor",
      dept: "Department of English",
      image: "/hero_2.jpg",
    },
    {
      name: "Dr. M. Sekar",
      role: "Associate Professor",
      dept: "Department of Commerce",
      image: "/hero_3.jpg",
    },
  ];

  return (
    <div className="space-y-16 pb-12 text-[#252525]">
      {/* 1. PAGE HEADER BANNER (Matching reference screenshot `Desktop View About Page.png`) */}
      {/* <div className="relative w-full h-72 bg-slate-950 text-white flex items-end pb-14 overflow-hidden">
        <Image
          src="/hero_1.jpg"
          alt="About Us Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-2 z-10">
          <h1 className="text-4xl font-black uppercase tracking-wider text-white">
            ABOUT US
          </h1>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-[#EC1C23]">
              Home
            </Link>
            <span>-</span>
            <span className="text-[#EC1C23]">About</span>
          </div>
        </div>
      </div> */}

      <section className="relative text-white py-14 px-4 sm:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3 pt-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Dedicated to value-based higher education since July 1, 1974 under
            the vision of CBM Sakunthala Memorial Trust.
          </p>
        </div>
      </section>

      {/* 2. ABOUT WELCOME & FOUNDER HISTORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase text-[#252525] tracking-wider">
              WELCOME TO <span className="text-[#EC1C23]">CBM COLLEGE</span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#EC1C23]">
              SERVING HIGHER EDUCATION SINCE 1974 IN COIMBATORE
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With the noble endeavour of promoting education,{" "}
              <strong>Dharmapravarthana, Late C. B. Muthuswamy Chettiar</strong>{" "}
              founded the <strong>"CBM Sakunthala Memorial Trust"</strong> in
              October 1970. The CBM College was sponsored by the Trust with the
              aim of serving the needs of higher education in the growing city
              of Coimbatore.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The College was inaugurated on the First of July 1974 in the
              immediate presence of the Chief Donor and founder of the Trust,
              Late C. B. Muthuswamy Chettiar. Situated in the serene environment
              of Sakethapuri, Kovaipudur, the cool breeze and salubrious climate
              kindle the spirit of learning and imagination.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EC1C23]" />
                <span>Estd. October 1970</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EC1C23]" />
                <span>Inaugurated 1 July 1974</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EC1C23]" />
                <span>Bharathiar University Affiliated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EC1C23]" />
                <span>AICTE Approved (MBA)</span>
              </div>
            </div>
          </div>

          <div className="relative h-[340px] rounded-lg overflow-hidden border border-slate-200 shadow-xl">
            <Image
              src="/hero_2.jpg"
              alt="CBM College Heritage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. TRUST OBJECTIVES SECTION */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black uppercase text-[#252525] tracking-wider">
              OBJECTIVES OF THE TRUST
            </h2>
            <p className="text-xs text-slate-500">
              CBM Sakunthala Memorial Trust Core Principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "ESTABLISHING INSTITUTIONS",
                desc: "Establishing educational institutions to educate and elevate societal status across regional communities.",
              },
              {
                num: "02",
                title: "CENTRAL RESEARCH LIBRARIES",
                desc: "Establish and aid state-recognized central libraries to accomplish the ideal of a knowledge society.",
              },
              {
                num: "03",
                title: "SCHOLARSHIPS & MEDICAL AID",
                desc: "Provide beneficial medical aids and government scholarships for deserving and underprivileged scholars.",
              },
            ].map((obj, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3"
              >
                <div className="text-2xl font-black text-[#EC1C23]">
                  {obj.num}
                </div>
                <h3 className="text-sm font-black text-[#252525] uppercase tracking-wide">
                  {obj.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR TEACHERS SECTION (Matching reference screenshot `Desktop View About Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black uppercase text-[#252525] tracking-wider">
            OUR TEACHERS
          </h2>
          <p className="text-xs text-slate-500">
            Our talent trainer with 10 years experience professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-100 p-8 rounded-lg border border-slate-200 text-center space-y-4 shadow-sm"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white shadow">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-black uppercase text-[#252525] tracking-wide">
                  {t.name}
                </h3>
                <p className="text-xs text-[#EC1C23] font-bold">{t.role}</p>
                <p className="text-[11px] text-slate-500">{t.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
