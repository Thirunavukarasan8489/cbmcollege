"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubmenuItem {
  label: string;
  href: string;
  active?: boolean;
}

interface PageSubmenuProps {
  sectionTitle: string;
  items: SubmenuItem[];
  children: React.ReactNode;
}

export default function PageSubmenu({ sectionTitle, items, children }: PageSubmenuProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Submenu Navigation Sidebar (Inspired by reference attachment) */}
        <aside className="lg:col-span-3 space-y-2 sticky top-28 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="px-3 py-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#EC1C23]">
              {sectionTitle} Navigation
            </h3>
          </div>
          <nav className="flex flex-col gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  item.active
                    ? "bg-[#2C2B5E] text-white shadow-md"
                    : "bg-slate-50 text-[#252525] hover:bg-rose-50 hover:text-[#EC1C23] border border-slate-200/80"
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${item.active ? "text-[#EC1C23] translate-x-1" : "opacity-40"}`} />
              </Link>
            ))}
          </nav>
        </aside>

        {/* Right Content Area */}
        <main className="lg:col-span-9 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          {children}
        </main>
      </div>
    </div>
  );
}
