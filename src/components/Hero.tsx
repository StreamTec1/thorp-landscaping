import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-green-900 via-brand-green-700 to-brand-green-600 text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Logo */}
        <div className="inline-block bg-white rounded-xl p-3 shadow-lg mb-8">
          <Image
            src="/images/thorp-logo.png"
            alt="Thorp Landscaping"
            width={320}
            height={185}
            className="h-24 md:h-32 w-auto"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Full-Service Landscaping in the{" "}
          <span className="text-brand-gold-400">Chippewa Valley</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-green-100 mb-6 max-w-2xl mx-auto leading-relaxed">
          Trusted landscape design, installation, and maintenance for residential and commercial properties since 1995.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-gold-400 rounded-full"></span>
            <span>31+ Years in Business</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-gold-400 rounded-full"></span>
            <span>A+ BBB Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-gold-400 rounded-full"></span>
            <span>Licensed &amp; Insured</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-brand-gold-400 text-brand-green-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-gold-300 transition text-center shadow-lg"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:+17158289710"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-center"
          >
            Call (715) 828-9710
          </a>
        </div>
      </div>
    </section>
  );
}
