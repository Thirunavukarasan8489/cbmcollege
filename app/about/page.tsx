import type { Metadata } from "next";
import Link from "next/link";
import PageSubmenu from "../components/PageSubmenu";
import { GraduationCap, Award, BookOpen, ShieldCheck, HeartHandshake, ArrowRight, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & History",
  description:
    "Learn about CBM College of Arts and Science, founded in 1974 by Late C. B. Muthuswamy Chettiar under the CBM Sakunthala Memorial Trust in Coimbatore.",
};

export default function AboutPage() {
  const aboutSubmenuItems = [
    { label: "About College & Founder", href: "/about", active: true },
    { label: "Women Empowerment Cell", href: "/women-empowerment" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#2C2B5E] to-[#EC1C23] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold  tracking-tight">
            Our Legacy & Heritage
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Dedicated to value-based higher education since July 1, 1974 under the vision of CBM Sakunthala Memorial Trust.
          </p>
        </div>
      </section>

      {/* SUBMENU & CONTENT */}
      <PageSubmenu sectionTitle="About Us" items={aboutSubmenuItems}>
        <div className="space-y-10">
          {/* Founder & History */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-[#EC1C23] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-100">
              <GraduationCap className="w-4 h-4" />
              <span>Founding History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold  text-[#2C2B5E] leading-tight">
              A Temple of Learning in Coimbatore
            </h2>
            <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3 font-normal">
              <p>
                The District of Coimbatore has made remarkable progress in higher education since independence. Visionary philanthropists stepped forward to carry the torch of learning to the people. With this noble endeavor of promoting education, <strong>Dharmapravarthana, Late C. B. Muthuswamy Chettiar</strong> founded the <strong>"CBM Sakunthala Memorial Trust"</strong> in October 1970.
              </p>
              <p>
                CBM College was sponsored by the Trust with the express aim of serving the higher educational needs of Coimbatore. The College was formally inaugurated on <strong>July 1, 1974</strong> in the immediate presence of Late C. B. Muthuswamy Chettiar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xl font-bold text-[#EC1C23] ">October 1970</span>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Trust Established</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xl font-bold text-[#2C2B5E] ">1 July 1974</span>
                <p className="text-xs text-slate-500 font-medium mt-0.5">College Inaugurated</p>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Mission & Vision */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold  text-[#2C2B5E]">Mission & Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-[#EC1C23] flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold  text-[#2C2B5E]">Our Mission</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Inculcating academic training alongside authentic cultural mores, fulfilling global demands through sustained educational policies.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold  text-[#2C2B5E]">Our Vision</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Enriching the academic atmosphere through exemplary seminars, guest lectures, modern managerial inputs, and learner-friendly environment.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* 5 Objectives of Trust */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold  text-[#2C2B5E]">Five Core Objectives of the Trust</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { num: "01", title: "Societal Elevation", desc: "Establishing educational institutions to elevate the society." },
                { num: "02", title: "Medical Service", desc: "Providing helpful medical services and health assistance." },
                { num: "03", title: "Knowledge Libraries", desc: "Establishing and supporting libraries for a knowledge society." },
                { num: "04", title: "Scholarships", desc: "Providing beneficial medical aids and educational scholarships." },
                { num: "05", title: "Language Mastery", desc: "Encouraging students to achieve mastery over languages." },
              ].map((obj) => (
                <div key={obj.num} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-lg font-extrabold text-[#EC1C23] ">{obj.num}</span>
                  <h4 className="text-xs font-bold text-[#2C2B5E]">{obj.title}</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSubmenu>
    </div>
  );
}
