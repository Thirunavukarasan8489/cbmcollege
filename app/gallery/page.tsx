"use client";

import { useState } from "react";
import Link from "next/link";
import { Image as ImageIcon, X, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"all" | "campus" | "events" | "sports" | "jubilee">("all");
  const [lightboxImage, setLightboxImage] = useState<any | null>(null);

  const galleryItems = [
    { id: 1, category: "campus", title: "Sakethapuri Main Academic Block", desc: "Serene educational environment nestled near Western Ghats.", tag: "Campus Life", gradient: "from-[#7a1f2b] to-rose-900" },
    { id: 2, category: "campus", title: "Western Ghats Men's Hostel", desc: "Residential building with 140 student capacity.", tag: "Hostel Facilities", gradient: "from-slate-900 to-[#5a1620]" },
    { id: 3, category: "events", title: "National Seminar & Guest Lectures", desc: "Eminent academicians addressing modern social & managerial issues.", tag: "Academic Seminar", gradient: "from-amber-700 to-rose-900" },
    { id: 4, category: "jubilee", title: "25th Silver Jubilee Celebration", desc: "Commemorating 25 years of institutional academic excellence.", tag: "25th Jubilee", gradient: "from-yellow-600 to-[#7a1f2b]" },
    { id: 5, category: "sports", title: "Annual Athletic Meet & Sports Grounds", desc: "Inter-departmental tournaments and physical endurance events.", tag: "Sports & Games", gradient: "from-emerald-800 to-slate-900" },
    { id: 6, category: "events", title: "Women Empowerment Cell Workshop", desc: "Sensitization and entrepreneurship workshops for women scholars.", tag: "Women Cell", gradient: "from-[#7a1f2b] to-amber-900" },
    { id: 7, category: "campus", title: "Central Research Library Reading Room", desc: "Quiet study spaces and extensive research archives.", tag: "Central Library", gradient: "from-slate-800 to-rose-950" },
    { id: 8, category: "events", title: "Graduation Day Ceremony", desc: "Conferring degree certificates to graduating UG and MBA cohorts.", tag: "Convocation", gradient: "from-rose-900 to-amber-700" },
    { id: 9, category: "sports", title: "NCC Cadets Parade & Republic Day", desc: "Mandatory discipline and national pride drills on campus.", tag: "NCC & NSS", gradient: "from-emerald-900 to-[#5a1620]" }
  ];

  const filtered = activeTab === "all" ? galleryItems : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="space-y-16 py-12">
      {/* BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Photo Gallery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Campus Life & Event Gallery
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Visual highlights from CBM College — academics, campus celebrations, sports, and historic milestones.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-wrap gap-2 justify-center bg-white p-2 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
          {[
            { id: "all", label: "All Photos" },
            { id: "campus", label: "Campus & Hostel" },
            { id: "events", label: "Academic Events" },
            { id: "sports", label: "Sports & NCC" },
            { id: "jubilee", label: "25th Jubilee" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#7a1f2b] text-white shadow"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GALLERY MASONRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-200 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Colored Styled Background Mock Canvas */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 transition-transform duration-500 group-hover:scale-105`} />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                <div className="flex items-center justify-between">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-serif leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-200 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`h-64 rounded-2xl bg-gradient-to-br ${lightboxImage.gradient} p-8 text-white flex flex-col justify-end shadow-inner`}>
              <span className="bg-white/20 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-md uppercase w-fit mb-2">
                {lightboxImage.tag}
              </span>
              <h2 className="text-2xl font-bold font-serif">{lightboxImage.title}</h2>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Image Details</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{lightboxImage.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLightboxImage(null)}
                className="bg-[#7a1f2b] text-white px-5 py-2 rounded-xl text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
