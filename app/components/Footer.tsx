"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Send,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full text-slate-300">
      {/* 1. SUBSCRIBE NOW RED BANNER (Matching reference screenshot `Desktop Home Page.png`) */}
      <div className="bg-[#EC1C23] text-white py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider">
            SUBSCRIBE NOW
          </h2>
          <p className="text-xs sm:text-sm text-rose-100 max-w-2xl mx-auto font-normal">
            Receive weekly newsletter with educational materials, new courses, most popular books, and campus updates!
          </p>

          {subscribed ? (
            <div className="bg-white text-[#EC1C23] font-bold px-6 py-3 rounded-md text-xs inline-block shadow">
              Thank you for subscribing to CBM College updates!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-xl mx-auto pt-2"
            >
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-4 py-3 rounded-md text-xs text-[#252525] focus:outline-none bg-white shadow-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#EC1C23] hover:bg-[#c41218] border-2 border-white rounded-md text-xs font-black uppercase tracking-wider transition-colors shadow-md shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 2. MAIN FOOTER BODY (#0a0a0a Dark Background matching reference screenshot) */}
      <div className="bg-[#0a0a0a] pt-14 pb-10 px-4 sm:px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About CBM College */}
          <div className="space-y-4">
            <div className="relative w-56 h-14">
              <Image
                src="/logo.png"
                alt="CBM College Emblem Logo"
                width={450}
                height={110}
                className="object-contain w-auto h-full brightness-0 invert"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Founded in October 1970 by Late C. B. Muthuswamy Chettiar under the CBM Sakunthala Memorial Trust. Inaugurated on July 1, 1974 to provide value-based education in Coimbatore.
            </p>
            <div className="space-y-1 text-xs">
              <Link href="/about" className="text-slate-300 hover:text-[#EC1C23] flex items-center gap-1 font-bold">
                <span>▸ About us</span>
              </Link>
              <Link href="/staff" className="text-slate-300 hover:text-[#EC1C23] flex items-center gap-1 font-bold">
                <span>▸ Faculty Members</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Twitter"
              >
                X
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Google"
              >
                G+
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Pinterest"
              >
                p
              </a>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-white border-b border-zinc-800 pb-2">
              CONTACT US
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 bg-zinc-900/80 p-3 rounded-md border border-zinc-800">
                <Mail className="w-4 h-4 text-[#EC1C23] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold">Email Us</div>
                  <div className="text-slate-400 text-[11px]">cbmcollegekovai@gmail.com</div>
                  <div className="text-slate-400 text-[11px]">mba@cbmcollege.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-zinc-900/80 p-3 rounded-md border border-zinc-800">
                <Phone className="w-4 h-4 text-[#EC1C23] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold">Helpline Phone</div>
                  <div className="text-slate-400 text-[11px]">0422-2607259</div>
                  <div className="text-amber-400 text-[11px] font-bold">+91 9976573040</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-zinc-900/80 p-3 rounded-md border border-zinc-800">
                <MapPin className="w-4 h-4 text-[#EC1C23] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold">Campus Address</div>
                  <div className="text-slate-400 text-[11px]">
                    Sakethapuri, Kovaipudur, Coimbatore, Tamil Nadu – 641042
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-white border-b border-zinc-800 pb-2">
              QUICK LINK
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Our Courses", href: "/courses" },
                { label: "About College", href: "/about" },
                { label: "MBA Department", href: "/mba-department" },
                { label: "Campus Facilities", href: "/facilities" },
                { label: "Women Cell", href: "/women-empowerment" },
                { label: "Staff Directory", href: "/staff" },
                { label: "Admission Portal", href: "/admission" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#EC1C23] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#EC1C23]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Latest Events */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-white border-b border-zinc-800 pb-2">
              LATEST EVENTS
            </h3>
            <div className="space-y-3">
              {[
                {
                  day: "27",
                  month: "Dec",
                  title: "LEARNING MANAGEMENT",
                  time: "10am - 05pm",
                  loc: "Gpur Academy",
                },
                {
                  day: "19",
                  month: "Dec",
                  title: "LEARN COURSES ONLINE",
                  time: "10am - 05pm",
                  loc: "Gpur Academy",
                },
                {
                  day: "07",
                  month: "Dec",
                  title: "COURSES FOR FREE GED",
                  time: "10am - 05pm",
                  loc: "Gpur Academy",
                },
              ].map((evt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-[#EC1C23] text-white text-center p-2 rounded shrink-0 w-12">
                    <div className="text-sm font-black leading-none">{evt.day}</div>
                    <div className="text-[9px] font-bold uppercase">{evt.month}</div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white hover:text-[#EC1C23] transition-colors cursor-pointer">
                      {evt.title}
                    </h4>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      ⏱ {evt.time} • 📍 {evt.loc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT FOOTER BAR */}
      <div className="bg-[#050505] text-slate-500 text-xs py-4 px-4 text-center border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Copyright © 2026 <span className="text-slate-300 font-bold">CBM College of Arts and Science</span>. All Rights Reserved.
          </div>
          <div className="text-[11px] text-slate-600">
            Affiliated to Bharathiar University, Coimbatore | UGC & AICTE Approved
          </div>
        </div>
      </div>
    </footer>
  );
}
