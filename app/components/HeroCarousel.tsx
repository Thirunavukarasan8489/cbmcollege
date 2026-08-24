"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Award, ArrowRight, BookOpen, ShieldCheck, MapPin } from "lucide-react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/hero_1.jpg",
      badge: "Celebrating 50+ Years of Academic Distinction • Est. 1974",
      title: "Welcome to CBM College of Arts & Science",
      subtitle: "Located in the serene breeze of Sakethapuri, Kovaipudur, Coimbatore. Providing value-based education for societal elevation.",
      ctaText: "Apply Online 2026",
      ctaHref: "/admission",
    },
    {
      id: 2,
      image: "/hero_2.jpg",
      badge: "Affiliated to Bharathiar University & UGC Recognized",
      title: "Empowering Future Leaders & Scholars",
      subtitle: "Explore our rich spectrum of 15+ Undergraduate, Postgraduate, and Research degrees in Arts, Commerce, Science & Management.",
      ctaText: "Explore Degree Programs",
      ctaHref: "/courses",
    },
    {
      id: 3,
      image: "/hero_3.jpg",
      badge: "AICTE Approved Department of Management Studies",
      title: "State-of-the-Art Labs & Central Library",
      subtitle: "Empowering research excellence with modern computer laboratories, 140-bed Western Ghats hostel, and social service initiatives.",
      ctaText: "View Campus Facilities",
      ctaHref: "/facilities",
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
      className="relative w-full min-h-[580px] sm:min-h-[600px] lg:min-h-[650px] bg-[#2C2B5E] text-white overflow-hidden flex items-center"
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
          {/* Background Image */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
            />
            {/* Dark Brand Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2B5E]/95 via-[#2C2B5E]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2B5E] via-transparent to-transparent opacity-80" />
          </div>

          {/* Slide Text Content Overlay */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
              <div className="max-w-2xl space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#EC1C23] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>{slide.badge}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans leading-[1.15] text-white drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href={slide.ctaHref}
                    className="flex items-center gap-2 bg-[#EC1C23] hover:bg-[#c41218] text-white px-7 py-3.5 rounded-xl font-bold shadow-xl transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </Link>
                  <Link
                    href="/courses"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3.5 rounded-xl font-semibold backdrop-blur-md transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-amber-300" />
                    <span>Explore Degrees</span>
                  </Link>
                </div>

                {/* Verification Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#EC1C23]" />
                    <span>Bharathiar University Affiliated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Sakethapuri, Kovaipudur</span>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-950/40 hover:bg-[#EC1C23] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-950/40 hover:bg-[#EC1C23] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
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
