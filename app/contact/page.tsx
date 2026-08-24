"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2, Globe } from "lucide-react";
import JsonLd from "../components/JsonLd";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "CBM College of Arts and Science",
      "telephone": "+91-422-2607259",
      "email": "cbmcollegekovai@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sakethapuri, Kovaipudur",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641042",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="space-y-16 py-12">
      <JsonLd data={contactSchema} />

      {/* BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Campus Contact & Location
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Reach out to CBM College of Arts and Science in Sakethapuri, Kovaipudur, Coimbatore.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#7a1f2b] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">Campus Address</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              CBM College of Arts & Science,<br />
              Sakethapuri, Kovaipudur,<br />
              Coimbatore, Tamil Nadu, India – 641042.
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">Phone & Mobile</h3>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Office Phone: <a href="tel:04222607259" className="font-bold text-slate-900 hover:text-[#7a1f2b]">0422-2607259</a></p>
              <p>Admission Helpline: <a href="tel:9976573040" className="font-bold text-[#7a1f2b] hover:underline">9976573040</a></p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">Official Emails</h3>
            <div className="text-xs text-slate-600 space-y-1">
              <p>General Enquiries: <a href="mailto:cbmcollegekovai@gmail.com" className="font-bold text-slate-900 hover:underline">cbmcollegekovai@gmail.com</a></p>
              <p>MBA Department: <a href="mailto:mba@cbmcollege.com" className="font-bold text-slate-900 hover:underline">mba@cbmcollege.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM AND GOOGLE MAP EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-2xl font-bold font-serif text-slate-900">Send an Enquiry Message</h2>
              <p className="text-xs text-slate-500">Have questions about courses, admissions, or administrative verification?</p>
            </div>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Message Delivered!</h4>
                <p className="text-xs text-emerald-700">Thank you. Our college administration will review your message and respond shortly.</p>
                <button onClick={() => setSent(false)} className="text-xs font-bold text-[#7a1f2b] underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email ID</label>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Course enquiry, certificates, hostel etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your detailed message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7a1f2b] hover:bg-[#5a1620] text-white py-3 rounded-xl font-bold text-xs shadow transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map & Direct Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Campus Location</span>
                <span className="text-[11px] text-slate-400">10.9394° N, 76.9373° E</span>
              </div>
              <h3 className="text-xl font-bold font-serif">Kovaipudur Campus Map</h3>
              
              {/* Responsive Google Maps Embed Container */}
              <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 relative">
                <iframe
                  title="CBM College Location Map"
                  src="https://maps.google.com/maps?q=10.9394,76.9373&hl=en&z=15&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <a
                  href="https://maps.google.com/maps?q=10.9394,76.9373"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-300 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open in Google Maps App</span>
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-400">Sakethapuri, Coimbatore</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
