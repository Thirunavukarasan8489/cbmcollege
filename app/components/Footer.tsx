import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  ShieldCheck,
  Award,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2B5E] text-slate-200 pt-16 pb-8 border-t-4 border-[#EC1C23] relative overflow-hidden">
      {/* Background Decorative Gradient Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#EC1C23]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Institutional Profile & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow">
                <Image
                  src="/logo.png"
                  alt="CBM College Emblem Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div> */}
              <div>
                <h3 className="text-tiny font-bold text-primary tracking-tight">
                  C.B.M College of Arts and Science
                </h3>
                <p className="text-sm text-white tracking-wider ">
                  (Affiliated in Bharathiar University)
                </p>
                <p className="text-sm text-white font-extrabold tracking-wider">
                  Sakethapuri, Kovaipudur Coimbatore - 641 042
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sponsored by CBM Sakunthala Memorial Trust (Estd. Oct 1970 by Late
              C. B. Muthuswamy Chettiar). Providing holistic, value-based higher
              education in Coimbatore.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-1 bg-white/10 border border-white/20 px-2.5 py-1 rounded text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EC1C23]" />
                <span>Bharathiar Univ.</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 border border-white/20 px-2.5 py-1 rounded text-slate-200">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>AICTE Approved (MBA)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC1C23]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About Institution & Founder", href: "/about" },
                {
                  name: "Undergraduate & Postgraduate Degrees",
                  href: "/courses",
                },
                {
                  name: "Department of Management (MBA)",
                  href: "/mba-department",
                },
                { name: "Admissions & Procedure", href: "/admission" },
                { name: "Campus Facilities & Hostel", href: "/facilities" },
                { name: "Women Empowerment Cell", href: "/women-empowerment" },
                { name: "Faculty & Staff Directory", href: "/staff" },
                { name: "Photo & Video Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#EC1C23] transition-colors flex items-center gap-1.5 text-slate-300 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#EC1C23] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs Offered */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Programs Offered
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• B.A. Economics</li>
              <li>• B.Com (Commerce)</li>
              <li>• B.Sc. Computer Science</li>
              <li>• B.Sc. Mathematics & Physics</li>
              <li>• B.Sc. Visual Communication</li>
              <li>• M.A. Economics & M.Com</li>
              <li>• M.Sc. Mathematics & Chemistry</li>
              <li className="text-amber-300 font-bold pt-1">
                • Master of Business Administration (MBA)
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC1C23]" />
              Campus Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#EC1C23] shrink-0 mt-0.5" />
                <span>
                  Sakethapuri, Kovaipudur, Coimbatore, Tamil Nadu, India –
                  641042
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EC1C23] shrink-0" />
                <div>
                  <a href="tel:04222607259" className="hover:text-amber-300">
                    0422-2607259
                  </a>
                  <span className="mx-1">•</span>
                  <a
                    href="tel:+919976573040"
                    className="hover:text-amber-300 font-bold text-amber-300"
                  >
                    +91 9976573040
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EC1C23] shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="mailto:cbmcollegekovai@gmail.com"
                    className="hover:text-amber-300"
                  >
                    cbmcollegekovai@gmail.com
                  </a>
                  <a
                    href="mailto:mba@cbmcollege.com"
                    className="hover:text-amber-300"
                  >
                    mba@cbmcollege.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#EC1C23] shrink-0" />
                <a
                  href="https://www.cbmcollege.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300"
                >
                  www.cbmcollege.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & AI Link */}
        <div className="pt-8 border-t border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} CBM College of Arts and Science. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Location Map
            </Link>
            <span>•</span>
            <Link
              href="/admission"
              className="hover:text-white transition-colors"
            >
              Admissions 2026
            </Link>
            <span>•</span>
            <a
              href="/llms.txt"
              target="_blank"
              className="inline-flex items-center gap-1 text-amber-300 hover:text-white font-medium"
            >
              <span>LLM Fact Index (llms.txt)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
