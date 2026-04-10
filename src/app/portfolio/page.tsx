"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

type Category = "all" | "landscape" | "hardscape" | "outdoor";

const projects: {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
}[] = [
  // Landscape Design & Planting
  { src: "/images/portfolio/home-entry-stone-walkway.jpg",  alt: "Custom home entry with stone walkway, pergola, and ornamental plantings",  category: "landscape" },
  { src: "/images/portfolio/landscape-mulch-beds.jpg",       alt: "Ornamental grass and perennial mulch beds alongside residential home",       category: "landscape" },
  { src: "/images/portfolio/stone-home-foundation.jpg",      alt: "Decorative gravel and evergreen foundation planting on stone home",          category: "landscape" },
  { src: "/images/portfolio/flower-garden-boulders.jpg",     alt: "Colorful annual flower garden accented with natural boulders",               category: "landscape" },
  { src: "/images/portfolio/rock-garden-birch.jpg",          alt: "Natural rock garden with birch trees and perennial flowers",                 category: "landscape" },
  { src: "/images/portfolio/planting-bed-grasses.jpg",       alt: "Ornamental grass and perennial planting bed",                               category: "landscape" },
  { src: "/images/portfolio/garden-shed-sedum.jpg",          alt: "Garden shed surrounded by pink sedum perennials",                           category: "landscape" },
  { src: "/images/portfolio/garden-shed-woodland.jpg",       alt: "Woodland garden setting with shade plantings",                              category: "landscape" },

  // Hardscaping
  { src: "/images/portfolio/stone-retaining-wall.jpg",       alt: "Stacked stone retaining wall with tiered planting beds",                    category: "hardscape" },
  { src: "/images/portfolio/boulder-retaining-wall.jpg",     alt: "Natural boulder retaining wall with stone steps on lakeside property",      category: "hardscape" },
  { src: "/images/portfolio/stone-steps-boulders.jpg",       alt: "Natural stone steps flanked by boulders and annual flowers",                category: "hardscape" },
  { src: "/images/portfolio/curved-stone-steps.jpg",         alt: "Curved natural stone steps winding through boulder garden",                 category: "hardscape" },
  { src: "/images/portfolio/flagstone-walkway.jpg",          alt: "Flagstone walkway with gravel border through landscape",                    category: "hardscape" },
  { src: "/images/portfolio/boulder-steps-waterfront.jpg",   alt: "Boulder steps and path leading down to waterfront",                        category: "hardscape" },
  { src: "/images/portfolio/boulder-steps-lakeside.jpg",     alt: "Large boulder steps installed on lakeside property",                       category: "hardscape" },
  { src: "/images/portfolio/boulder-path-lakeside.jpg",      alt: "Boulder and flagstone path leading to lake dock",                          category: "hardscape" },

  // Outdoor Living
  { src: "/images/portfolio/log-home-patio-firepit.jpg",     alt: "Log home patio with fire pit seating area and landscape design",           category: "outdoor" },
  { src: "/images/portfolio/firepit-boulder-patio.jpg",      alt: "Stamped concrete patio with fire pit and natural boulder retaining wall",  category: "outdoor" },
  { src: "/images/portfolio/flagstone-patio-seating.jpg",    alt: "Flagstone patio with decorative gravel beds and Adirondack seating",      category: "outdoor" },
  { src: "/images/portfolio/patio-rock-garden.jpg",          alt: "Paver patio with adjacent rock garden and fire pit area",                  category: "outdoor" },
  { src: "/images/portfolio/boulder-patio-overview.jpg",     alt: "Lakeside boulder patio and entertaining area with flower beds",            category: "outdoor" },
  { src: "/images/portfolio/patio-boulder-urn.jpg",          alt: "Patio with decorative boulders, large urn planter, and wrought iron bench", category: "outdoor" },
  { src: "/images/portfolio/pool-landscape.jpg",             alt: "Pool area with surrounding landscape design and ornamental plantings",     category: "outdoor" },
];

const categories: { id: Category; label: string; count: number }[] = [
  { id: "all",       label: "All Projects",       count: projects.length },
  { id: "landscape", label: "Landscape Design",   count: projects.filter(p => p.category === "landscape").length },
  { id: "hardscape", label: "Hardscaping",        count: projects.filter(p => p.category === "hardscape").length },
  { id: "outdoor",   label: "Outdoor Living",     count: projects.filter(p => p.category === "outdoor").length },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  const openLightbox = useCallback((index: number) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevPhoto = useCallback(() =>
    setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const nextPhoto = useCallback(() =>
    setLightbox(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-brand-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Over 30 years of landscape projects across the Chippewa Valley.
            Every project is designed and built to last.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                  active === cat.id
                    ? "bg-brand-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
                <span className={`ml-2 text-xs ${active === cat.id ? "text-brand-green-200" : "text-gray-400"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo, index) => (
              <div
                key={photo.src}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-green-900/0 group-hover:bg-brand-green-900/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm font-medium leading-snug">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white hover:text-gray-300 transition z-10 p-2"
            onClick={e => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] relative"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
            <p className="text-center text-gray-300 text-sm mt-3">{filtered[lightbox].alt}</p>
            <p className="text-center text-gray-500 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white hover:text-gray-300 transition z-10 p-2"
            onClick={e => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us for a free consultation and quote. We&apos;d love to bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-500 transition"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+17158289710"
              className="inline-block border-2 border-brand-green-600 text-brand-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-50 transition"
            >
              Call (715) 828-9710
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
