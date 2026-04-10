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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Over three decades of happy customers across the Chippewa Valley
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Bob and his crew completely transformed our backyard. The patio and retaining wall they built are beautiful and have held up perfectly through several harsh Wisconsin winters. Couldn't be happier.",
                name: "Tom & Linda M.",
                location: "Eau Claire, WI",
              },
              {
                quote:
                  "We've used Thorp Landscaping for commercial snow removal for the past several seasons. They're always on time, thorough, and our parking lot is clear before we open. Absolutely reliable.",
                name: "Northstar Business Park",
                location: "Chippewa Falls, WI",
              },
              {
                quote:
                  "I've been a customer for over 15 years. The quality of work is consistent and Bob stands behind everything he does. You won't find a more trustworthy landscaping company in the valley.",
                name: "Karen H.",
                location: "Altoona, WI",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-brand-gold-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
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
