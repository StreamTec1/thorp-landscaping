"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/thorp-logo.png"
              alt="Thorp Landscaping"
              width={160}
              height={92}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-green-600 font-medium transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-green-600 font-medium transition">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-brand-green-600 font-medium transition">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-green-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+17158289710"
              className="hidden lg:flex items-center text-brand-green-600 font-semibold hover:text-brand-green-500 transition"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (715) 828-9710
            </a>
            <Link
              href="/contact"
              className="bg-brand-green-600 text-white px-6 py-2 rounded-lg hover:bg-brand-green-500 transition font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
            <Link href="/" className="block text-gray-700 hover:text-brand-green-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-brand-green-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/portfolio" className="block text-gray-700 hover:text-brand-green-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-brand-green-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <a href="tel:+17158289710" className="block text-brand-green-600 font-semibold py-2" onClick={() => setIsOpen(false)}>
              Call (715) 828-9710
            </a>
            <Link
              href="/contact"
              className="block bg-brand-green-600 text-white px-6 py-2 rounded-lg text-center hover:bg-brand-green-500 transition font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
