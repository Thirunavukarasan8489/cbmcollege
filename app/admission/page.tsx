"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, FileText, Calendar, Send, FileCheck, HelpCircle, PhoneCall, ChevronDown } from "lucide-react";
import JsonLd from "../components/JsonLd";

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "B.Com",
    qualification: "10+2 / HSC",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const admissionFaqs = [
    {
      q: "What is the application deadline for UG and PG admissions?",
      a: "Admissions normally open in May each academic year, and classes commence in mid-July. Late applications are accepted subject to seat availability and Bharathiar University guidelines."
    },
    {
      q: "What documents are mandatory at the time of admission?",
      a: "1. Original Marksheets (HSC / Degree) and Xerox copies of each appearance.\n2. Transfer Certificate (TC) & Conduct Certificate.\n3. Provisional Degree Certificate (for PG & MBA).\n4. Two recent passport-size photographs.\n5. Community Certificate (if applicable for scholarship benefits)."
    },
    {
      q: "Are government scholarships available for SC/ST and BC/MBC students?",
      a: "Yes, CBM College facilitates state government scholarship schemes for SC/ST, BC/MBC, and minority students as per Tamil Nadu state educational norms."
    },
    {
      q: "What is the application fee?",
      a: "Prospectus and prescribed application forms are available at the College Office for Rs.300/- in cash or Rs.350/- by DD payable to CBM College at Coimbatore. Online enquiries are processed free of charge."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": admissionFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="space-y-16 py-12">
      <JsonLd data={faqSchema} />

      {/* BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-[#5a1620] to-[#7a1f2b] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Admissions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Admissions 2026-2027
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Join CBM College of Arts and Science. Follow rules & regulations of Bharathiar University governing admissions.
          </p>
        </div>
      </section>

      {/* ADMISSION TIMELINE & DOCUMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Procedure & Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#7a1f2b] uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                Application Workflow
              </span>
              <h2 className="text-3xl font-bold font-serif text-slate-900">How to Apply</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Admissions normally begin in May and classes commence mid-July. Selections are made following interview and merit rank verification.
              </p>
            </div>

            {/* Step Timeline */}
            <div className="space-y-4">
              {[
                { step: "01", title: "Submit Online Enquiry / Obtain Form", desc: "Fill out the online application form below or procure the prospectus form at the college office in Kovaipudur." },
                { step: "02", title: "Document Verification", desc: "Attach xerox copies of marksheets, degree certificate (for PG/MBA), community certificate, and 2 passport photos." },
                { step: "03", title: "Interview & Merit Ranking", desc: "Selection lists are published following academic verification and interview evaluation." },
                { step: "04", title: "Provisional Admission & Fee Payment", desc: "Selected candidates file original certificates and remit term fees to finalize provisional admission." },
              ].map((s) => (
                <div key={s.step} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-rose-100 text-[#7a1f2b] font-black font-serif flex items-center justify-center shrink-0 text-sm">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Document Checklist */}
            <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-serif">
                <FileText className="w-5 h-5 text-amber-400" />
                Required Documents Checklist
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Xerox copies of marksheets from each exam appearance.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Two recent passport-size photographs.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Photostat copy of Degree or Provisional Degree Certificate (PG/MBA).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Certificate from Principal of previously attended college confirming course completed.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transfer Certificate (TC) & Conduct Certificate in original.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Digital Application Form */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 self-start sticky top-24">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1">
                <FileCheck className="w-4 h-4" /> Direct Portal
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">Online Admission Enquiry 2026</h3>
              <p className="text-xs text-slate-500">Fill out your details to receive instant prospectus info and callback from our Admission Desk.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Application Submitted!</h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Thank you <strong>{formData.name}</strong>. Our admission officer will reach out to you at <strong>{formData.phone}</strong> regarding <strong>{formData.course}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#7a1f2b] underline pt-2"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter student full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email ID</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Select Program *</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                  >
                    <option>B.Com (Commerce)</option>
                    <option>B.Sc. Computer Science</option>
                    <option>B.A. Economics</option>
                    <option>B.Sc. Mathematics</option>
                    <option>B.Sc. Physics</option>
                    <option>B.Sc. Visual Communication</option>
                    <option>MBA (Full Time - 2 Year)</option>
                    <option>M.Com / M.Sc. / M.A.</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Queries / Comments</label>
                  <textarea
                    rows={3}
                    placeholder="Mention previous marks, quota, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#7a1f2b] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7a1f2b] hover:bg-[#5a1620] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Application Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ADMISSION FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold font-serif text-slate-900">Admission FAQ</h2>
          <p className="text-xs text-slate-500">Official procedures and guidelines for prospective students.</p>
        </div>

        <div className="space-y-3">
          {admissionFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-semibold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-50"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#7a1f2b] transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 bg-slate-50/50 whitespace-pre-line">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
