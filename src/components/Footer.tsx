import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-lg p-2 inline-block mb-4">
              <Image
                src="/images/thorp-logo.png"
                alt="Thorp Landscaping"
                width={160}
                height={92}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Full-service landscape design and installation serving the Chippewa Valley since 1995. A+ BBB rated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-gold-400 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-brand-gold-400 transition">
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold-400 transition">
                  Snow Removal
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold-400 transition">
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold-400 transition">
                  Lawn Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold-400 transition">
                  Seasonal Cleanup
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+17158289710" className="hover:text-brand-gold-400 transition flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (715) 828-9710
                </a>
              </li>
              <li>
                <a href="mailto:thorpllc@gmail.com" className="hover:text-brand-gold-400 transition flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  thorpllc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>11414 30th Ave<br />Chippewa Falls, WI 54729</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Fri: 7AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Thorp Landscaping, LLC. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Built by{" "}
              <a href="#" className="hover:text-brand-gold-400 transition">
                StreamTec Services
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
