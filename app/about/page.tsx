import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, BookOpen, ShieldCheck, HeartHandshake, ArrowRight, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & History",
  description:
    "Learn about CBM College of Arts and Science, founded in 1974 by Late C. B. Muthuswamy Chettiar under the CBM Sakunthala Memorial Trust in Coimbatore.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12">
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Our Legacy & Heritage
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Dedicated to value-based higher education since July 1, 1974 under the noble vision of the CBM Sakunthala Memorial Trust.
          </p>
        </div>
      </section>

      {/* FOUNDER & HISTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-[#7a1f2b] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-100">
              <GraduationCap className="w-4 h-4" />
              <span>Founding History</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-slate-900 leading-tight">
              A Temple of Learning in the Industrial City of Coimbatore
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              <p>
                The District of Coimbatore has made remarkable progress in higher education since independence. Visionary philanthropists stepped forward to carry the torch of learning to the people. With this noble endeavor of promoting education, <strong>Dharmapravarthana, Late C. B. Muthuswamy Chettiar</strong> founded the <strong>"CBM Sakunthala Memorial Trust"</strong> in October 1970.
              </p>
              <p>
                CBM College was sponsored by the Trust with the express aim of serving the higher educational needs of the rapidly growing city of Coimbatore. The College was formally inaugurated on <strong>July 1, 1974</strong> in the immediate presence of the Chief Donor and Founder of the Trust, Late C. B. Muthuswamy Chettiar.
              </p>
              <p>
                Over five decades, the institution has carved out a reputation of excellence, fostering academic rigor, cultural traditions, and social advancement.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-bold text-[#7a1f2b] font-serif">October 1970</span>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Trust Established</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-bold text-[#7a1f2b] font-serif">1 July 1974</span>
                <p className="text-xs text-slate-500 font-medium mt-0.5">College Inaugurated</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#7a1f2b] to-[#5a1620] text-white p-8 rounded-3xl shadow-xl space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-serif text-2xl font-black">
              CBM
            </div>
            <h3 className="text-2xl font-bold font-serif text-amber-300">Late C. B. Muthuswamy Chettiar</h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              "The chief goal of this institution is for a purposeful march towards meaningful education, elevating the societal status and character of every student."
            </p>
            <div className="pt-4 border-t border-rose-800/80 text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-white">• Founder & Chief Donor</p>
              <p>• CBM Sakunthala Memorial Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-slate-100/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#7a1f2b] uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              Institutional Framework
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#7a1f2b] flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Our Institutional Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To inculcate vital academic training alongside authentic cultural mores. We identify learner needs to fulfill dynamic global demands, determining equal opportunities for posterity through sustained educational policies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Our Vision of Excellence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To enrich the academic atmosphere through exemplary seminars, guest lectures by eminent academicians, modern managerial inputs, and convenient timing for a learner-friendly environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES OF THE TRUST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#7a1f2b] uppercase">CBM Sakunthala Memorial Trust</span>
          <h2 className="text-3xl font-bold font-serif text-slate-900">Five Core Objectives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Societal Elevation", desc: "Establishing educational institutions to educate and elevate the societal status of students." },
            { num: "02", title: "Medical Assistance", desc: "Providing helpful medical services and health aids to those in need." },
            { num: "03", title: "Knowledge Libraries", desc: "Establishing and supporting libraries to accomplish the ideal of a knowledge-based society." },
            { num: "04", title: "Scholarships & Aids", desc: "Providing beneficial medical aids and financial scholarships for deserving students." },
            { num: "05", title: "Language Mastery", desc: "Encouraging students to achieve mastery over languages and communication skills." },
          ].map((obj) => (
            <div key={obj.num} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-3xl font-extrabold text-amber-500 font-serif">{obj.num}</span>
              <h3 className="text-lg font-bold text-slate-900">{obj.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL'S DESK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 bg-slate-100 p-6 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-24 h-24 rounded-full bg-[#7a1f2b] text-white flex items-center justify-center mx-auto text-2xl font-bold font-serif">
              DR. K
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Dr. K. Kumarasamy</h4>
              <p className="text-xs text-[#7a1f2b] font-semibold">Principal, CBM College</p>
            </div>
            <p className="text-xs text-slate-500">Phr.D., Academic Administrator</p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Leadership Message</span>
            <h3 className="text-2xl font-bold font-serif text-slate-900">Message from the Principal's Desk</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              "Welcome to CBM College of Arts and Science. Situated in the serene, unpolluted atmosphere of Kovaipudur, our campus fosters both creative thinking and disciplined learning. We are committed to nurturing future leaders, entrepreneurs, and scholars who will contribute meaningfully to our nation."
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7a1f2b] hover:underline">
                <span>Contact Principal's Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
