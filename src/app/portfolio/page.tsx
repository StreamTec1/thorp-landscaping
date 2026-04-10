import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Over 30 years of landscape design and installation projects across the Chippewa Valley. See what Thorp Landscaping can do for your property.",
};

export default function PortfolioPage() {
  const categories = [
    {
      title: "Landscape Design & Installation",
      description:
        "Complete outdoor transformations from initial concept through final planting. Custom designs that thrive in Wisconsin's climate.",
      color: "bg-brand-green-600",
    },
    {
      title: "Hardscaping Projects",
      description:
        "Patios, retaining walls, walkways, and fire pits built with quality materials to withstand our seasons.",
      color: "bg-brand-green-700",
    },
    {
      title: "Commercial Properties",
      description:
        "Professional grounds maintenance and snow removal for businesses throughout the Chippewa Valley.",
      color: "bg-brand-green-800",
    },
    {
      title: "Residential Lawn Care",
      description:
        "Year-round lawn maintenance programs that keep residential properties looking their best.",
      color: "bg-brand-green-500",
    },
    {
      title: "Seasonal Transformations",
      description:
        "Spring and fall cleanup, garden preparation, and seasonal plantings to keep landscapes vibrant.",
      color: "bg-brand-green-600",
    },
    {
      title: "Landscape Renovation",
      description:
        "Restoring overgrown or outdated landscapes into fresh, modern outdoor spaces.",
      color: "bg-brand-green-700",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-brand-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Over 30 years of landscape projects across the Chippewa Valley.
            Here&apos;s what we do best.
          </p>
        </div>
      </div>

      {/* Project Categories */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div
                  className={`${category.color} h-40 flex items-center justify-center p-6`}
                >
                  <h3 className="text-xl font-bold text-white text-center">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to see examples of our work?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us and we&apos;ll share project photos from jobs similar to
            yours. We&apos;d love to show you what we can do for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-500 transition"
            >
              Get in Touch
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
