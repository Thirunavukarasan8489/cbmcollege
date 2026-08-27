import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "College Events & Seminars",
  description:
    "Explore academic seminars, silver jubilee celebrations, workshops, and student events at CBM College of Arts and Science, Coimbatore.",
};

export default function EventsPage() {
  const events = [
    {
      day: "25",
      month: "June",
      title: "NATIONAL SEMINAR ON DIGITAL COMMERCE",
      desc: "Distinguished academic speakers and industry leaders discuss future trends in e-commerce and fintech.",
      loc: "Main Auditorium",
      time: "10:00 AM - 04:00 PM",
    },
    {
      day: "26",
      month: "June",
      title: "ENTREPRENEURSHIP WORKSHOP 2026",
      desc: "Interactive incubation bootcamp organized by Department of Management Studies for aspiring founders.",
      loc: "MBA Seminar Hall",
      time: "09:30 AM - 03:30 PM",
    },
    {
      day: "27",
      month: "June",
      title: "ANNUAL ATHLETIC MEET & SPORTS DAY",
      desc: "Inter-departmental track events, basketball tournaments, and prize distribution by guest dignitaries.",
      loc: "College Sports Grounds",
      time: "08:00 AM - 05:00 PM",
    },
    {
      day: "28",
      month: "June",
      title: "WOMEN LEADERSHIP SYMPOSIUM",
      desc: "Panel discussions on gender equality, financial independence, and career growth hosted by Women Empowerment Cell.",
      loc: "Conference Hall B",
      time: "10:00 AM - 01:00 PM",
    },
    {
      day: "29",
      month: "June",
      title: "CAREER PLACEMENT & RECRUITMENT DRIVE",
      desc: "Top corporate recruiters conduct interviews for final-year UG and PG students.",
      loc: "Placement Cell Block",
      time: "09:00 AM - 05:00 PM",
    },
    {
      day: "30",
      month: "June",
      title: "CULTURAL FEST & TALENT EXHIBITION",
      desc: "Music, dance, debate, and fine arts competitions showcasing creative talents of CBM College students.",
      loc: "Open Air Stage",
      time: "02:00 PM - 08:00 PM",
    },
    {
      day: "12",
      month: "July",
      title: "FOUNDER'S DAY MEMORIAL LECTURE",
      desc: "Honoring Late C. B. Muthuswamy Chettiar & CBM Sakunthala Memorial Trust legacy of education.",
      loc: "Main Auditorium",
      time: "10:30 AM - 01:00 PM",
    },
    {
      day: "15",
      month: "July",
      title: "ORIENTATION FOR NEW BATCH 2026",
      desc: "Welcoming incoming first-year undergraduate and postgraduate students to the Sakethapuri campus.",
      loc: "College Auditorium",
      time: "09:30 AM - 12:30 PM",
    },
    {
      day: "22",
      month: "Aug",
      title: "RESEARCH METHODOLOGY SYMPOSIUM",
      desc: "Central Library guest lectures for M.Phil and Ph.D. scholars across Tamil Nadu universities.",
      loc: "Central Research Library",
      time: "10:00 AM - 04:00 PM",
    },
  ];

  const featuredEvents = [
    {
      day: "20",
      month: "Nov",
      title: "25TH SILVER JUBILEE CELEBRATION",
      desc: "Commemorating 25 milestone years of academic excellence, alumni homecoming, and cultural awards.",
      loc: "CBM Campus",
      time: "09:00 AM - 06:00 PM",
      image: "/hero_1.jpg",
    },
    {
      day: "10",
      month: "Dec",
      title: "INTERNATIONAL MANAGEMENT SUMMIT",
      desc: "Global business practices, AI applications in HR and Finance presented by AICTE approved MBA Department.",
      loc: "Auditorium",
      time: "09:30 AM - 05:00 PM",
      image: "/hero_2.jpg",
    },
    {
      day: "15",
      month: "Jan",
      title: "ANNUAL SCIENCE & TECH EXPO",
      desc: "Computer Science, Physics, and Mathematics departments present innovative student hardware and software projects.",
      loc: "Science Block",
      time: "10:00 AM - 04:00 PM",
      image: "/hero_3.jpg",
    },
  ];

  return (
    <div className="space-y-16 pb-16 text-[#252525]">
      {/* 1. HERO BANNER WITH BACKGROUND CAMPUS IMAGE */}
      <section className="relative text-white py-14 px-4 sm:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/hero_1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/90 to-[#EC1C23]/80" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3 pt-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:underline">About</Link>
            <span>/</span>
            <span>College Events</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            College Events
          </h1>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Stay updated with upcoming academic conferences, workshops, sports meets, and cultural celebrations at CBM College.
          </p>
        </div>
      </section>

      {/* 2. UPCOMING EVENTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-bold text-[#EC1C23] uppercase tracking-wider">Campus Calendar</span>
          <h2 className="text-2xl font-bold text-[#2C2B5E]">Upcoming Academic & Cultural Events</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md hover:border-[#EC1C23]/40 transition-all group"
            >
              <div className="text-center shrink-0 bg-rose-50 p-3 rounded-xl border border-rose-100 min-w-[64px]">
                <div className="text-3xl font-extrabold text-[#EC1C23] leading-none">
                  {evt.day}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">
                  {evt.month}
                </div>
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xs font-bold uppercase text-[#2C2B5E] tracking-wide group-hover:text-[#EC1C23] transition-colors">
                  {evt.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {evt.desc}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-semibold pt-1 border-t border-slate-100 mt-2">
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

      {/* 3. FEATURED IMPORTANT EVENTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-bold text-[#EC1C23] uppercase tracking-wider">Milestone Highlights</span>
          <h2 className="text-2xl font-bold text-[#2C2B5E]">Featured Institutional Gatherings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((evt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#EC1C23] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                  {evt.day} {evt.month}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-sm font-bold uppercase text-[#2C2B5E] group-hover:text-[#EC1C23] transition-colors">
                  {evt.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {evt.desc}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#EC1C23]" /> {evt.loc}
                  </span>
                  <span className="flex items-center gap-1 text-[#EC1C23] font-bold">
                    <Clock className="w-3.5 h-3.5" /> {evt.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
