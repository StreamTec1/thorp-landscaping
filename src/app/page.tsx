import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  const services = [
    {
      title: "Landscape Design & Installation",
      description:
        "Custom landscape plans designed and installed to transform your property year-round.",
      icon: "🌿",
    },
    {
      title: "Snow Removal",
      description:
        "Reliable commercial and residential snow removal to keep your property safe all winter.",
      icon: "❄️",
    },
    {
      title: "Hardscaping",
      description:
        "Patios, retaining walls, walkways, and outdoor living spaces built to last.",
      icon: "🧱",
    },
    {
      title: "Seasonal Cleanup",
      description:
        "Spring and fall cleanup services to keep your landscape healthy through every season.",
      icon: "🍂",
    },
  ];

  const reasons = [
    { title: "31+ Years", description: "Serving the Chippewa Valley since 1995" },
    { title: "A+ BBB Rating", description: "Trusted and highly rated" },
    { title: "Locally Owned", description: "Proudly rooted in Chippewa Falls" },
    { title: "Free Estimates", description: "No-obligation consultations" },
  ];

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive landscaping solutions for residential and commercial
              properties across the Chippewa Valley
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-brand-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-500 transition"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Thorp Landscaping?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With over three decades of experience, we deliver results you can count on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {index === 0 ? "31+" : index === 1 ? "A+" : index === 2 ? "🏠" : "✓"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-green-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl mb-8 text-brand-green-100">
            Get a free consultation and quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold-400 text-brand-green-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-gold-300 transition"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:+17158289710"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Call (715) 828-9710
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
