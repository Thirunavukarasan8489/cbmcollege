"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ username: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="space-y-16 pb-12 text-[#252525]">
      {/* 1. PAGE HEADER BANNER (Matching reference screenshot `Desktop View Contact Page.png`) */}
      <div className="relative w-full h-64 bg-slate-950 text-white flex items-center overflow-hidden">
        <Image
          src="/hero_2.jpg"
          alt="Contact Us Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-2 z-10">
          <h1 className="text-4xl font-black uppercase tracking-wider text-white">
            CONTACT US
          </h1>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-[#EC1C23]">
              Home
            </Link>
            <span>-</span>
            <span className="text-[#EC1C23]">Contact us</span>
          </div>
        </div>
      </div>

      {/* 2. FORM & CONTACT DETAILS SPLIT SECTION (Matching reference screenshot `Desktop View Contact Page.png`) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Send a Message Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider text-[#252525]">
                SEND A MESSAGE
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Your email address will not be published.
              </p>
            </div>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-xs font-bold">
                Thank you! Your message has been sent successfully to CBM College administration.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="USERNAME"
                    required
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none text-[#252525]"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none text-[#252525]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="SUBJECT"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none text-[#252525]"
                />
                <textarea
                  rows={6}
                  placeholder="WRITE MESSAGE"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none text-[#252525] resize-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#EC1C23] hover:bg-[#c41218] text-white font-black text-xs uppercase tracking-wider rounded transition-colors shadow-md"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Us Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider text-[#252525]">
                CONTACT US
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Welcome to our website, Feel free to contact us any time
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-[#EC1C23] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">EMAIL ADDRESS</div>
                  <div className="text-sm font-bold text-[#252525] mt-0.5">cbmcollegekovai@gmail.com</div>
                  <div className="text-xs text-slate-500">mba@cbmcollege.com</div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-[#EC1C23] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">PHONE HELPLINE</div>
                  <div className="text-sm font-bold text-[#252525] mt-0.5">0422-2607259</div>
                  <div className="text-xs text-[#EC1C23] font-bold">+91 9976573040</div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-[#EC1C23] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">CAMPUS LOCATION</div>
                  <div className="text-xs font-bold text-[#252525] mt-0.5 leading-relaxed">
                    CBM College of Arts & Science, Sakethapuri, Kovaipudur, Coimbatore, Tamil Nadu, India – 641042
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS EMBED SECTION (Matching reference screenshot `Desktop View Contact Page.png`) */}
      <section className="w-full h-96 bg-slate-200 border-y border-slate-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.439063259972!2d76.9351113!3d10.9394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0d061f5169%3A0xc3cb77a560df0a42!2sCBM%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CBM College Location Map"
        />
      </section>
    </div>
  );
}
