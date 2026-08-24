"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Search, GraduationCap, Mail, AlertTriangle, ShieldCheck } from "lucide-react";

export default function StaffPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");

  const staffMembers = [
    { name: "Dr. K. Kumarasamy", role: "Principal & Administrative Head", dept: "Administration", qual: "Ph.D." },
    { name: "Dr. M.P. Ramarajan", role: "Associate Professor", dept: "English", qual: "Ph.D." },
    { name: "Dr. M. Sekar", role: "Assistant Professor", dept: "Commerce", qual: "Ph.D., M.Com" },
    { name: "Dr. K. Palanisamy", role: "Assistant Professor", dept: "Commerce", qual: "Ph.D., M.Com" },
    { name: "Mr. P.S. Chandarasekar", role: "Associate Professor & Head", dept: "Tamil", qual: "M.A., M.Phil" },
    { name: "Dr. S. Santhanalakshmi", role: "Assistant Professor", dept: "Economics", qual: "Ph.D." },
    { name: "Dr. S. Santhaprabhuraj", role: "Associate Professor", dept: "History", qual: "Ph.D." },
    { name: "Mr. D. Srinivasan", role: "Associate Professor", dept: "History", qual: "M.A., M.Phil" },
    { name: "Mr. K. Selvam", role: "Associate Professor", dept: "History", qual: "M.A., M.Phil" },
    { name: "Mr. S. Sabapathy", role: "Associate Professor", dept: "Economics", qual: "M.A., M.Phil" },
  ];

  const filtered = staffMembers.filter((s) => {
    const matchesDept = department === "all" || s.dept.toLowerCase() === department.toLowerCase();
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.dept.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12">
      {/* BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Staff Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Faculty & Staff Directory
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Meet our experienced professors, department heads, and academic scholars at CBM College.
          </p>
        </div>
      </section>

      {/* SEARCH AND FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculty name or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7a1f2b]"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {["all", "Administration", "Commerce", "Economics", "History", "Tamil", "English"].map((d) => (
              <button
                key={d}
                onClick={() => setDepartment(d)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  department === d
                    ? "bg-[#7a1f2b] text-white shadow"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {d === "all" ? "All Departments" : d}
              </button>
            ))}
          </div>
        </div>

        {/* STAFF GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((staff) => (
            <div key={staff.name} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7a1f2b] to-[#5a1620] text-amber-300 font-bold flex items-center justify-center font-serif shrink-0 text-base shadow">
                {staff.name.split(" ").slice(-1)[0][0]}
              </div>
              <div className="space-y-1 text-slate-700">
                <span className="bg-rose-50 text-[#7a1f2b] text-[10px] font-bold px-2 py-0.5 rounded border border-rose-100 uppercase tracking-wider">
                  Dept of {staff.dept}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{staff.name}</h3>
                <p className="text-xs text-slate-600 font-medium">{staff.role}</p>
                <p className="text-[11px] text-slate-400">Qualification: {staff.qual}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DATA VERIFICATION NOTE */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            <strong>Verification Note:</strong> Faculty designations and departmental updates are subject to periodic administrative sync. For direct departmental contact, please email <a href="mailto:cbmcollegekovai@gmail.com" className="underline font-bold">cbmcollegekovai@gmail.com</a>.
          </span>
        </div>
      </section>
    </div>
  );
}
