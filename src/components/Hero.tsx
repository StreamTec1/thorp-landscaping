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
    src: "/images/portfolio/timber-home-driveway.jpg",
    alt: "Timber frame home with cedar accents and manicured driveway landscape",
  },
  {
    src: "/images/portfolio/boulder-wall-hillside.jpg",
    alt: "Massive stacked boulder retaining wall with Adirondack patio and fire pit",
  },
  {
    src: "/images/hero/hero-boulder-water-feature.jpg",
    alt: "Lakeside boulder and dry creek water feature with flagstone path",
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
    const timer = setInterval(next, 7500);
    return () => clearInterval(timer);
  }, [next]);

  const kenBurnsVariants = ["kb-in-center", "kb-pan-right", "kb-in-left", "kb-pan-left"];

  return (
    <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">
      <style jsx>{`
        @keyframes kb-in-center {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.15) translate(0, -1%); }
        }
        @keyframes kb-pan-right {
          0% { transform: scale(1.05) translate(-2%, 0); }
          100% { transform: scale(1.18) translate(2%, -1%); }
        }
        @keyframes kb-in-left {
          0% { transform: scale(1) translate(2%, 1%); }
          100% { transform: scale(1.17) translate(-2%, -1%); }
        }
        @keyframes kb-pan-left {
          0% { transform: scale(1.05) translate(2%, 0); }
          100% { transform: scale(1.18) translate(-2%, 1%); }
        }
        .ken-burns {
          will-change: transform;
          animation-duration: 9s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
        }
        .ken-burns.kb-in-center { animation-name: kb-in-center; }
        .ken-burns.kb-pan-right { animation-name: kb-pan-right; }
        .ken-burns.kb-in-left { animation-name: kb-in-left; }
        .ken-burns.kb-pan-left { animation-name: kb-pan-left; }
        @media (prefers-reduced-motion: reduce) {
          .ken-burns {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
      {slides.map((slide, index) => {
        const isActive = index === current;
        const variant = kenBurnsVariants[index % kenBurnsVariants.length];
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              key={isActive ? `${slide.src}-${current}` : slide.src}
              className={`absolute inset-0 ${isActive ? `ken-burns ${variant}` : ""}`}
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
          </div>
        );
      })}

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />

      {/* Overlapping text content */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
            Full-Service Landscaping in the{" "}
            <span className="text-brand-gold-400">Chippewa Valley</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Trusted landscape design, installation, and maintenance since 1995.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2.5">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
