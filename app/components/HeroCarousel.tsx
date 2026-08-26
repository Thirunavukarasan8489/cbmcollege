"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/hero_1.jpg",
      subtitle: "FOR HUNDREDS OF SUCCESSFUL STUDENTS HERE",
      title: "EDUCATION IS THE",
      titleHighlight: "BACKBONE",
      titleEnd: "OF LIFE",
      desc: "CBM College of Arts and Science — Providing value-based, career-defining higher education in Sakethapuri, Kovaipudur, Coimbatore.",
      primaryCta: "APPLY ONLINE",
      primaryHref: "/admission",
      secondaryCta: "VIEW COURSES",
      secondaryHref: "/courses",
    },
    {
      id: 2,
      image: "/hero_2.jpg",
      subtitle: "AFFILIATED TO BHARATHIAR UNIVERSITY & UGC RECOGNIZED",
      title: "EMPOWERING FUTURE",
      titleHighlight: "LEADERS",
      titleEnd: "& RESEARCHERS",
      desc: "Comprehensive catalog of 15+ Undergraduate, Postgraduate, and AICTE Approved Management (MBA) degree programs.",
      primaryCta: "EXPLORE DEGREES",
      primaryHref: "/courses",
      secondaryCta: "MBA DEPARTMENT",
      secondaryHref: "/mba-department",
    },
    {
      id: 3,
      image: "/hero_3.jpg",
      subtitle: "AICTE APPROVED MBA & STATE RESEARCH REPOSITORY",
      title: "WORLD-CLASS",
      titleHighlight: "INFRASTRUCTURE",
      titleEnd: "& HOSTEL",
      desc: "State-recognized central research library, 24/7 IT computing facilities, and 140-bed Western Ghats view Men's Hostel.",
      primaryCta: "CAMPUS FACILITIES",
      primaryHref: "/facilities",
      secondaryCta: "PHOTO GALLERY",
      secondaryHref: "/gallery",
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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
      className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] bg-slate-950 text-white overflow-hidden flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Dark Overlay Gradient */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
          </div>

          {/* Slide Text Content Overlay */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-12">
              <div className="max-w-2xl space-y-4">
                {/* Subtitle Tag */}
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-200">
                  {slide.subtitle}
                </p>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                  {slide.title}{" "}
                  <span className="text-[#EC1C23]">{slide.titleHighlight}</span>{" "}
                  {slide.titleEnd}
                </h1>

                {/* Paragraph Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  {slide.desc}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href={slide.secondaryHref}
                    className="px-6 py-3 border-2 border-white/80 hover:border-white text-white rounded-md text-xs font-black uppercase tracking-wider transition-colors"
                  >
                    {slide.secondaryCta}
                  </Link>

                  <Link
                    href={slide.primaryHref}
                    className="px-6 py-3 bg-[#EC1C23] hover:bg-[#c41218] text-white rounded-md text-xs font-black uppercase tracking-wider transition-colors shadow-lg"
                  >
                    {slide.primaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Left / Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#EC1C23] text-white flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Pagination Dots (Center bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-[#EC1C23] scale-110" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
