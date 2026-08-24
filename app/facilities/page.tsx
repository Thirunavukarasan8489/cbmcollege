import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, BookOpen, Home, Trophy, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Campus Facilities & Hostel",
  description:
    "Explore CBM College facilities including Central Research Library, Modern Computing Labs, Western Ghats Men's Hostel (140 seats), Sports, and mandatory NCC/NSS activities.",
};

export default function FacilitiesPage() {
  return (
    <div className="space-y-16 py-12">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Facilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Campus Infrastructure & Hostel
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            World-class academic resources, research facilities, and peaceful residential campus nestled near the Western Ghats.
          </p>
        </div>
      </section>

      {/* CORE FACILITIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Central Library */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 bg-rose-50 text-[#7a1f2b] p-8 rounded-2xl border border-rose-100 text-center space-y-3">
            <BookOpen className="w-16 h-16 mx-auto text-[#7a1f2b]" />
            <h3 className="text-2xl font-bold font-serif">Central Library</h3>
            <p className="text-xs text-rose-900 font-medium">State-Wide Research Hub</p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Academic Repository</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">State-Recognized Central Library</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our central library is a distinguished knowledge repository frequented by research scholars and academicians from across Tamil Nadu. It houses thousands of volumes, journals, research thesis archives, and digital cataloging systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-2">
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• Rare Books Collection</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• E-Journal Portals</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• Reading & Research Halls</span>
            </div>
          </div>
        </div>

        {/* Computer Labs */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 order-2 lg:order-1">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">High-Speed Technology</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">Modern Computing & IT Labs</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Equipped with modern desktop workstations, high-speed internet connectivity, updated software suits, and dedicated server infrastructure. Round-the-clock lab access is made available for computer science and management students.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-2">
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• High-Speed Internet Access</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• Modern Workstations</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• Software Engineering Suite</span>
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl text-center space-y-3 order-1 lg:order-2">
            <Monitor className="w-16 h-16 mx-auto text-amber-400" />
            <h3 className="text-2xl font-bold font-serif">Computer Lab</h3>
            <p className="text-xs text-slate-400">24-Hour Browsing & Practical Access</p>
          </div>
        </div>

        {/* Western Ghats Hostel */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 bg-emerald-50 text-emerald-800 p-8 rounded-2xl border border-emerald-100 text-center space-y-3">
            <Home className="w-16 h-16 mx-auto text-emerald-700" />
            <h3 className="text-2xl font-bold font-serif">Western Ghats Hostel</h3>
            <p className="text-xs font-bold text-emerald-900">140 Capacity Men's Hostel</p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Residential Campus</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">Scenic Student Accommodation</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Situated in the picturesque background of the Western Ghats to the south and west. The hostel accommodates up to 140 male students in a secure, wholesome environment. Mess expenses are shared among inmates under a cooperative dividing system.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-2">
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• Cooperative Dividing Mess System</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• Scenic Salubrious Climate</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">• 24/7 Security & Resident Warden</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATORY EXTRA CURRICULAR ACTIVITIES */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="bg-rose-950 text-rose-300 border border-rose-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Bharathiar University Mandate
            </span>
            <h2 className="text-3xl font-bold font-serif">NCC, NSS & Social Service Schemes</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Per Bharathiar University regulations, every undergraduate student must actively serve in one of the following schemes for a minimum of two years as a prerequisite for degree award:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { code: "NCC", title: "National Cadet Corps", desc: "Military training, drill, and national defense discipline." },
              { code: "NSS", title: "National Service Scheme", desc: "Community service, rural development camps, & social empowerment." },
              { code: "YRC", title: "Youth Red Cross", desc: "First aid training, blood donation drives, & emergency relief." },
              { code: "SSL", title: "Social Service League", desc: "Social welfare, literacy programs, & environmental campaigns." },
            ].map((activity) => (
              <div key={activity.code} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
                <span className="text-2xl font-black text-amber-400 font-serif">{activity.code}</span>
                <h3 className="text-base font-bold text-white">{activity.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
