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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Thank you for getting my project done so quick when another contractor put me in a bind by cancelling last minute. Bob and his crew did a terrific job redoing my driveway. Would most definitely recommend!",
                name: "Jamie Anderson",
                source: "Google Review",
              },
              {
                quote:
                  "Thanks for the fast friendly service! We are absolutely stunned by the quality of your workmanship! Spot on, from the initial bid to the professional work and completed on schedule and within budget. Thanks to Bob, Chris and the entire crew. We will have you back for phase 2.",
                name: "Tim Long",
                source: "Google Review",
              },
              {
                quote:
                  "Great company very professional. On time and services performed far above my expectations. If you have complicated landscaping ideas this is the company to call. Would definitely use them again in the future.",
                name: "Dave Kornesczuk",
                source: "Google Review",
              },
              {
                quote:
                  "Bob and his team do beautiful work. We get compliments and inquiries about who did our landscaping all the time. Would definitely recommend.",
                name: "Malia Markquart",
                source: "Google Review",
              },
              {
                quote: "Great company to work with. Does good job.",
                name: "Brandon Moe",
                source: "Google Review",
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
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    {testimonial.source}
                  </span>
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
