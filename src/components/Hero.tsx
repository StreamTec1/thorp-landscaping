"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Luxury lakeside home with flagstone patio and fire pit at dusk",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Custom craftsman home with landscape lighting and stone entry",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Aerial view of lakeside estate with full landscape design",
  },
  {
    src: "/images/hero/hero-4.jpg",
    alt: "Flagstone patio with fire pit and Adirondack seating",
  },
  {
    src: "/images/hero/hero-5.jpg",
    alt: "Flagstone walkway leading to lakeside fire pit area",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Subtle dark gradient at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20" />

      {/* Content overlay - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="inline-block bg-white/95 rounded-xl p-3 shadow-lg mb-6">
            <Image
              src="/images/thorp-logo.png"
              alt="Thorp Landscaping"
              width={320}
              height={185}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
            Full-Service Landscaping in the{" "}
            <span className="text-brand-gold-400">Chippewa Valley</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed drop-shadow">
            Trusted landscape design, installation, and maintenance since 1995.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold-400 text-brand-green-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-gold-300 transition text-center shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+17158289710"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-center"
            >
              Call (715) 828-9710
            </a>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-transparent hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
