import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CategoriesCard from "@/components/home/CategoriesCard";

export const metadata: Metadata = {
  title: "Audiophile - Premium Headphones, Speakers & Audio Equipment",
  description:
    "Discover premium audio equipment for audiophiles. High-end headphones, speakers, and earphones with exceptional sound quality. Free shipping and 2-year warranty.",
  keywords: [
    "audiophile",
    "premium headphones",
    "high-end speakers",
    "wireless earphones",
    "audio equipment",
    "sound quality",
    "professional audio",
    "home audio systems",
  ],
  openGraph: {
    title: "Audiophile - Premium Audio Equipment",
    description:
      "Premium headphones, speakers, and audio accessories for true sound lovers. Exceptional quality and design.",
    url: "https://audiophile.com",
    siteName: "Audiophile",
    images: [
      {
        url: "/home/desktop/image-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Audiophile premium audio products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiophile - Premium Audio Equipment",
    description:
      "Premium headphones, speakers, and audio accessories for true sound lovers.",
    images: ["/home/desktop/image-hero.jpg"],
  },
  alternates: {
    canonical: "https://audiophile.com",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Audiophile",
            description: "Premium audio equipment for audiophiles",
            url: "https://audiophile.com",
            logo: "https://audiophile.com/shared/desktop/logo.svg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-AUDIO",
              contactType: "customer service",
            },
            sameAs: [
              "https://facebook.com/audiophile",
              "https://twitter.com/audiophile",
              "https://instagram.com/audiophile",
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                  "@type": "MonetaryAmount",
                  value: "0",
                  currency: "USD",
                },
              },
            },
          }),
        }}
      />

      <main className="space-y-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-lg bg-black text-white">
          <div className="absolute inset-0">
            <Image
              src="/home/desktop/image-hero.jpg"
              alt="Premium audio equipment showcase"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-md lg:max-w-lg">
                <span className="mb-6 block text-sm font-normal tracking-[0.625rem] text-white/50 uppercase">
                  New Product
                </span>
                <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                  XX99 Mark II Headphones
                </h1>
                <p className="mb-8 leading-relaxed text-gray-300">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <Link
                  href="/category/headphones/xx99-mark-two-headphones"
                  className="inline-block bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#FBAF85] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:outline-none"
                  aria-label="View XX99 Mark II Headphones product details"
                >
                  See Product
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section aria-labelledby="categories-heading">
          <CategoriesCard />
        </section>

        {/* Featured Products */}
        <section aria-labelledby="featured-heading" className="space-y-16">
          <div className="text-center">
            <h2 id="featured-heading" className="mb-4 text-4xl font-bold">
              Featured Products
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover our most popular audio equipment, carefully selected for
              their exceptional quality and performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "ZX9 Speaker",
                description:
                  "Upgrade to premium sound quality with the ZX9 active speaker.",
                image: "/home/desktop/image-speaker-zx9.png",
                href: "/category/speakers/zx9-speaker",
                price: 4500,
                new: true,
              },
              {
                name: "ZX7 Speaker",
                description:
                  "Stream high quality sound wirelessly with minimal loss.",
                image: "/home/desktop/image-speaker-zx7.jpg",
                href: "/category/speakers/zx7-speaker",
                price: 3500,
                new: false,
              },
              {
                name: "YX1 Earphones",
                description:
                  "Tailor your listening experience with bespoke dynamic drivers.",
                image: "/home/desktop/image-earphones-yx1.jpg",
                href: "/category/earphones/yx1-earphones",
                price: 599,
                new: true,
              },
            ].map((product, index) => (
              <article key={product.name} className="group">
                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={350}
                    height={318}
                    className="h-auto w-full transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-4 text-center">
                  {product.new && (
                    <span className="inline-block text-sm font-bold tracking-widest text-[#D87D4A] uppercase">
                      New Product
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="space-y-4">
                    <span className="block text-xl font-bold">
                      ${product.price.toLocaleString()}
                    </span>
                    <Link
                      href={product.href}
                      className="inline-block bg-[#D87D4A] px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#FBAF85] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:outline-none"
                      aria-label={`View ${product.name} product details`}
                    >
                      See Product
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="overflow-hidden rounded-lg bg-black text-white">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
                audio gear
              </h2>
              <p className="leading-relaxed text-gray-300">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
            <div className="relative h-80 lg:h-auto">
              <Image
                src="/shared/desktop/image-best-gear.jpg"
                alt="Audiophile store interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
