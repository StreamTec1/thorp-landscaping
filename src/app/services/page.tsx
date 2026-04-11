import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Landscape design, snow removal, hardscaping, and lawn care services in Chippewa Falls & Eau Claire, WI. Thorp Landscaping has served the Chippewa Valley since 1995.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Landscape Design & Installation",
      description:
        "Full-service landscape design from concept to completion. We work with you to create outdoor spaces that are beautiful, functional, and suited to Wisconsin's climate.",
      features: [
        "Custom design consultations",
        "Plant selection for WI hardiness zones",
        "Tree and shrub installation",
        "Flower beds and garden areas",
        "Grading and drainage solutions",
      ],
      image: "/images/portfolio/home-entry-stone-walkway.jpg",
      imageAlt: "Custom home entry with stone walkway and landscape design",
    },
    {
      title: "Snow Removal",
      description:
        "Keep your property safe and accessible through Wisconsin winters with our reliable snow removal services.",
      features: [
        "Commercial lot clearing",
        "Residential driveway service",
        "Sidewalk and walkway clearing",
        "Salt and sand application",
        "Seasonal contracts available",
      ],
      image: null,
      imageAlt: "",
    },
    {
      title: "Hardscaping",
      description:
        "Durable outdoor structures and surfaces designed to withstand Wisconsin weather and enhance your property.",
      features: [
        "Paver patios and walkways",
        "Retaining walls",
        "Outdoor fire pits",
        "Stone and boulder work",
        "Steps and staircases",
      ],
      image: "/images/portfolio/stone-retaining-wall.jpg",
      imageAlt: "Stacked stone retaining wall with tiered planting beds",
    },
    {
      title: "Lawn Care & Maintenance",
      description:
        "Professional lawn maintenance to keep your property looking its best from spring through fall.",
      features: [
        "Mowing and trimming",
        "Fertilization programs",
        "Aeration and overseeding",
        "Weed and pest management",
        "Irrigation system maintenance",
      ],
      image: "/images/portfolio/landscape-mulch-beds.jpg",
      imageAlt: "Ornamental grass and perennial mulch beds",
    },
    {
      title: "Spring & Fall Cleanup",
      description:
        "Seasonal transitions handled professionally so your landscape is always ready for what's next.",
      features: [
        "Leaf removal and disposal",
        "Garden bed preparation",
        "Mulching and edging",
        "Perennial cutback",
        "Gutter cleaning",
      ],
      image: "/images/portfolio/flower-garden-boulders.jpg",
      imageAlt: "Colorful flower garden accented with natural boulders",
    },
    {
      title: "Landscape Renovation",
      description:
        "Breathe new life into an existing landscape with renovation and enhancement services.",
      features: [
        "Overgrown landscape restoration",
        "Plant replacement and updating",
        "Soil amendment and grading",
        "Landscape lighting",
        "Erosion control",
      ],
      image: "/images/portfolio/rock-garden-birch.jpg",
      imageAlt: "Natural rock garden with birch trees and perennial flowers",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden py-20">
        <Image
          src="/images/portfolio/flagstone-patio-seating.jpg"
          alt="Thorp Landscaping services"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-brand-green-900/70" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive landscaping solutions for residential and commercial
            properties across the Chippewa Valley
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  {service.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-brand-green-50 rounded-lg flex items-center justify-center border border-brand-green-200">
                      <div className="text-center p-8">
                        <div className="text-5xl mb-3">❄️</div>
                        <p className="text-brand-green-700 font-medium">Photos coming soon</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-brand-green-600 rounded-full mr-3 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden py-16">
        <Image
          src="/images/portfolio/log-home-patio-firepit.jpg"
          alt="Outdoor living space by Thorp Landscaping"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-green-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Contact us today for a free estimate on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold-400 text-brand-green-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-gold-300 transition"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+17158289710"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Call (715) 828-9710
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
