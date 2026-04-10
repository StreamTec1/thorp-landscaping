import type { Metadata } from "next";
import Link from "next/link";

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
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-brand-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive landscaping solutions for residential and commercial
            properties across the Chippewa Valley
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-l-4 border-brand-green-600 pl-6"
              >
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
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-green-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-brand-green-100 text-lg mb-8">
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
