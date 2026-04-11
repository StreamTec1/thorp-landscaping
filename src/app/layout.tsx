import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thorp Landscaping | Chippewa Valley Landscaping Since 1995",
    template: "%s | Thorp Landscaping",
  },
  description:
    "Full-service landscape design and installation in Chippewa Falls & Eau Claire, WI. Serving the Chippewa Valley for over 30 years. A+ BBB rated. Call (715) 828-9710.",
  keywords:
    "landscaping Chippewa Falls WI, landscaping Eau Claire WI, landscape design Chippewa Valley, snow removal Eau Claire, lawn care Wisconsin, hardscaping, Thorp Landscaping",
  authors: [{ name: "Thorp Landscaping, LLC" }],
  openGraph: {
    title: "Thorp Landscaping | Chippewa Valley Landscaping Since 1995",
    description:
      "Full-service landscape design and installation serving the Chippewa Valley for over 30 years. A+ BBB rated.",
    type: "website",
    url: "https://thorp-landscaping.com",
    siteName: "Thorp Landscaping",
    images: [
      {
        url: "https://thorp-landscaping.com/images/thorp-logo.png",
        width: 320,
        height: 185,
        alt: "Thorp Landscaping",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LandscapingBusiness",
              name: "Thorp Landscaping, LLC",
              image: "https://thorp-landscaping.com/images/thorp-logo.png",
              telephone: "+1-715-828-9710",
              email: "thorpllc@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "11414 30th Ave",
                addressLocality: "Chippewa Falls",
                addressRegion: "WI",
                postalCode: "54729",
                addressCountry: "US",
              },
              url: "https://thorp-landscaping.com",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:00",
                closes: "17:00",
              },
              foundingDate: "1995",
              areaServed: [
                { "@type": "City", name: "Chippewa Falls" },
                { "@type": "City", name: "Eau Claire" },
                { "@type": "City", name: "Altoona" },
              ],
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          src="https://app.streamtecservices.com/widget/chat.js"
          data-api-key="798868c89b9a01ff338f747274b5dfe2"
          async
        />
      </body>
    </html>
  );
}
