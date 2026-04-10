import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Thorp Landscaping for a free estimate on landscape design, snow removal, hardscaping, or lawn care in Chippewa Falls and Eau Claire, WI.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-brand-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch for a free consultation and quote
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-brand-green-600 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+17158289710"
                className="text-brand-green-600 hover:text-brand-green-500 font-medium"
              >
                (715) 828-9710
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-brand-green-600 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:thorpllc@gmail.com"
                className="text-brand-green-600 hover:text-brand-green-500 font-medium"
              >
                thorpllc@gmail.com
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-brand-green-600 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Location
              </h3>
              <p className="text-gray-600 text-sm">
                11414 30th Ave
                <br />
                Chippewa Falls, WI 54729
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-brand-green-600 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Fri
                <br />
                7:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Service Area Note */}
          <p className="text-center text-gray-500 text-sm mb-12">
            Serving Chippewa Falls, Eau Claire, Altoona, and the surrounding
            Chippewa Valley area.
          </p>

          {/* Contact Form (client component) */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
