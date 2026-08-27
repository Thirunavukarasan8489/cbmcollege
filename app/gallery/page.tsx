"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Layers,
  Sparkles,
} from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowLeft" && activeImageIndex !== null) {
        prevLightboxImage();
      } else if (e.key === "ArrowRight" && activeImageIndex !== null) {
        nextLightboxImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "campus", label: "Campus & Buildings" },
    { id: "events", label: "Events & Festivals" },
    { id: "academics", label: "Labs & Library" },
    { id: "sports", label: "Sports & Athletics" },
    { id: "jubilee", label: "25th Silver Jubilee" },
  ];

  const galleryPhotos = [
    {
      id: 1,
      title: "Main Campus Entrance & Administration Building",
      category: "campus",
      categoryName: "Campus & Buildings",
      image: "/hero_1.jpg",
      date: "Sakethapuri, Coimbatore",
    },
    {
      id: 2,
      title: "Central Research Library & Study Hall",
      category: "academics",
      categoryName: "Labs & Library",
      image: "/hero_2.jpg",
      date: "State Recognized Library",
    },
    {
      id: 3,
      title: "Western Ghats Men's Residential Hostel",
      category: "campus",
      categoryName: "Campus & Buildings",
      image: "/hero_3.jpg",
      date: "140 Students Capacity",
    },
    {
      id: 4,
      title: "25th Silver Jubilee Celebration Inauguration",
      category: "jubilee",
      categoryName: "25th Silver Jubilee",
      image: "/hero_1.jpg",
      date: "Silver Jubilee Fest",
    },
    {
      id: 5,
      title: "High-Speed Computer Science & IT Computing Lab",
      category: "academics",
      categoryName: "Labs & Library",
      image: "/hero_2.jpg",
      date: "Department of Systems",
    },
    {
      id: 6,
      title: "Annual Sports Meet & Inter-College Track Tournament",
      category: "sports",
      categoryName: "Sports & Athletics",
      image: "/hero_3.jpg",
      date: "CBM Athletic Grounds",
    },
    {
      id: 7,
      title: "Women Empowerment Cell Leadership Seminar",
      category: "events",
      categoryName: "Events & Festivals",
      image: "/hero_2.jpg",
      date: "Annual Empowerment Fest",
    },
    {
      id: 8,
      title: "Department of Management Studies MBA Workshop",
      category: "events",
      categoryName: "Events & Festivals",
      image: "/hero_1.jpg",
      date: "AICTE Approved MBA",
    },
    {
      id: 9,
      title: "Annual Cultural Fest & Music Performance",
      category: "events",
      categoryName: "Events & Festivals",
      image: "/hero_3.jpg",
      date: "Open Air Theatre",
    },
    {
      id: 10,
      title: "Physics & Chemistry Science Research Exhibition",
      category: "academics",
      categoryName: "Labs & Library",
      image: "/hero_2.jpg",
      date: "Science Block",
    },
    {
      id: 11,
      title: "CBM College Alumni Gathering & Honors Ceremony",
      category: "jubilee",
      categoryName: "25th Silver Jubilee",
      image: "/hero_1.jpg",
      date: "Alumni Association",
    },
    {
      id: 12,
      title: "Inter-Departmental Cricket Championship Final",
      category: "sports",
      categoryName: "Sports & Athletics",
      image: "/hero_3.jpg",
      date: "Sports Pavilion",
    },
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === selectedCategory);

  const prevLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0
          ? filteredPhotos.length - 1
          : activeImageIndex - 1
      );
    }
  };

  const nextLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <div className="space-y-12 pb-16 text-[#252525]">
      {/* 1. HERO BANNER WITH BACKGROUND CAMPUS IMAGE */}
      <section className="relative text-white py-14 px-4 sm:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_3.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3 pt-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/facilities" className="hover:underline">
              Campus Life
            </Link>
            <span>/</span>
            <span>Photo Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Photo & Media Gallery
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Explore campus life, academic infrastructure, cultural festivals, sports milestones, and silver jubilee highlights of CBM College.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-slate-100 p-2 rounded-2xl border border-slate-200 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#EC1C23] text-white shadow-md scale-105"
                  : "text-slate-600 hover:text-[#2C2B5E] hover:bg-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3. RESPONSIVE PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-900">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#EC1C23] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Top Category Badge */}
                <span className="absolute top-3 left-3 bg-[#2C2B5E]/90 backdrop-blur-sm text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow">
                  {photo.categoryName}
                </span>
              </div>

              {/* Photo Title Footer */}
              <div className="p-4 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="text-xs font-bold text-[#2C2B5E] group-hover:text-[#EC1C23] transition-colors leading-snug">
                  {photo.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>{photo.date}</span>
                  <span className="text-[#EC1C23] font-bold group-hover:underline flex items-center gap-1">
                    <Camera className="w-3 h-3" /> View Photo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE LIGHTBOX MODAL */}
      {activeImageIndex !== null && filteredPhotos[activeImageIndex] && (
        <div className="fixed inset-0 z-[1000] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Backdrop Overlay Click to Close */}
          <div
            className="absolute inset-0 z-0"
            onClick={() => setActiveImageIndex(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]">
            {/* Header Control Bar */}
            <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="bg-[#EC1C23] text-white text-xs font-extrabold px-2.5 py-1 rounded">
                  {filteredPhotos[activeImageIndex].categoryName}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeImageIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo View Area */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[480px] bg-slate-950 flex items-center justify-center">
              <Image
                src={filteredPhotos[activeImageIndex].image}
                alt={filteredPhotos[activeImageIndex].title}
                fill
                className="object-contain p-2"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={prevLightboxImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors shadow-lg border border-slate-700"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextLightboxImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors shadow-lg border border-slate-700"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Caption */}
            <div className="p-5 bg-slate-950 text-white border-t border-slate-800 space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-white">
                {filteredPhotos[activeImageIndex].title}
              </h4>
              <p className="text-xs text-slate-400">
                CBM College of Arts and Science • {filteredPhotos[activeImageIndex].date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
