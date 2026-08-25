"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Award, ArrowRight, BookOpen, ShieldCheck, MapPin, Sparkles, GraduationCap } from "lucide-react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/hero_1.jpg",
      badge: "50+ Years of Academic Excellence • Est. 1974",
      title: "Welcome to CBM College of Arts & Science",
      subtitle: "Situated in the serene environment of Sakethapuri, Kovaipudur, Coimbatore. Providing value-based, career-defining higher education.",
      primaryCta: "Apply Online 2026",
      primaryHref: "/admission",
      secondaryCta: "Discover Programs",
      secondaryHref: "/courses",
    },
    {
      id: 2,
      image: "/hero_2.jpg",
      badge: "Affiliated to Bharathiar University & UGC Recognized",
      title: "Empowering Future Leaders & Researchers",
      subtitle: "A rich catalog of 15+ Undergraduate, Postgraduate, and Research degrees across Arts, Science, Commerce & Management.",
      primaryCta: "Explore All Courses",
      primaryHref: "/courses",
      secondaryCta: "MBA Department",
      secondaryHref: "/mba-department",
    },
    {
      id: 3,
      image: "/hero_3.jpg",
      badge: "AICTE Approved MBA • Central Research Repository",
      title: "World-Class Infrastructure & Western Ghats Hostel",
      subtitle: "Featuring high-speed IT computing labs, state-recognized central research library, and 140-capacity men's hostel.",
      primaryCta: "View Facilities",
      primaryHref: "/facilities",
      secondaryCta: "Campus Gallery",
      secondaryHref: "/gallery",
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full min-h-[600px] sm:min-h-[640px] lg:min-h-[680px] bg-[#2C2B5E] text-white overflow-hidden flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Images Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Slow Parallax Zoom */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-transform duration-10000 ease-out ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
            {/* Deep Foreign University Dark Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#2C2B5E]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2B5E] via-transparent to-black/30" />
          </div>

          {/* Slide Text Content Overlay */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
              <div className="max-w-3xl space-y-6">
                {/* Academic Badge */}
                <div className="inline-flex items-center gap-2 bg-[#EC1C23] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-xl border border-white/20 tracking-wide">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                  {slide.title}
                </h1>

                {/* Subtitle Description */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    href={slide.primaryHref}
                    className="flex items-center gap-2 bg-[#EC1C23] hover:bg-[#c41218] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <GraduationCap className="w-4 h-4 text-amber-300" />
                    <span>{slide.primaryCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={slide.secondaryHref}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3.5 rounded-xl font-bold text-sm backdrop-blur-md transition-all transform hover:-translate-y-0.5"
                  >
                    <BookOpen className="w-4 h-4 text-amber-300" />
                    <span>{slide.secondaryCta}</span>
                  </Link>
                </div>

                {/* Accreditation & Location Verification Badges */}
                <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-white/15">
                  <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#EC1C23]" />
                    <span>Bharathiar University Affiliated</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Sakethapuri, Kovaipudur</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 font-medium">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>UGC Recognized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/50 hover:bg-[#EC1C23] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/50 hover:bg-[#EC1C23] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-slate-950/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#EC1C23]"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
