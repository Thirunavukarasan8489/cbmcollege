"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Calendar } from "lucide-react";

export default function GalleryPage() {
  const events = [
    {
      day: "25",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "26",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "27",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "28",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "29",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "30",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "25",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "26",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "27",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "28",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "29",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
    {
      day: "30",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
    },
  ];

  const featuredEvents = [
    {
      day: "20",
      month: "Nov",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
      image: "/hero_1.jpg",
    },
    {
      day: "10",
      month: "May",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
      image: "/hero_2.jpg",
    },
    {
      day: "25",
      month: "June",
      title: "BUILD EDUCATION STRATEGY",
      desc: "Tech you how to build a complete Learning Management Offering a various of solutions meeting your need no matter",
      loc: "Barisal, CA",
      time: "10am - 05pm",
      image: "/hero_3.jpg",
    },
  ];

  return (
    <div className="space-y-16 pb-12 text-[#252525]">
      {/* 1. PAGE HEADER BANNER (Matching reference screenshot `Desktop View Event page.png`) */}
      <div className="relative w-full h-64 bg-slate-950 text-white flex items-center overflow-hidden">
        <Image
          src="/hero_1.jpg"
          alt="Events Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-2 z-10">
          <h1 className="text-4xl font-black uppercase tracking-wider text-white">
            EVENT
          </h1>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-[#EC1C23]">
              Home
            </Link>
            <span>-</span>
            <span className="text-[#EC1C23]">Event</span>
          </div>
        </div>
      </div>

      {/* 2. EVENT CARDS GRID (Matching reference screenshot `Desktop View Event page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="bg-slate-100 rounded-md p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:bg-slate-200/60 transition-colors"
            >
              <div className="text-center shrink-0">
                <div className="text-3xl font-black text-[#EC1C23] leading-none">
                  {evt.day}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase">
                  {evt.month}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase text-[#252525] tracking-wide">
                  {evt.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {evt.desc}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#EC1C23]" />
                    <span>{evt.loc}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{evt.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FREE IMPORTANT EVENTS SECTION (Matching reference screenshot `Desktop View Event page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 className="text-2xl font-black uppercase text-[#252525] tracking-wider">
          FREE IMPORTANT EVENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((evt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm"
            >
              <div className="relative w-full h-48">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex items-start gap-4">
                <div className="text-center shrink-0">
                  <div className="text-2xl font-black text-[#EC1C23] leading-none">
                    {evt.day}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">
                    {evt.month}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-black uppercase text-[#252525]">
                    {evt.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
