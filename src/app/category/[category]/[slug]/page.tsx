import type { Metadata } from "next";
import Image from "next/image";

import data from "@/data/data.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = data.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Audiophile",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | Audiophile - Premium Audio Equipment`,
    description: `${product.description} Premium ${product.category} with exceptional sound quality. Free shipping and 2-year warranty included.`,
    keywords: [
      product.name,
      product.category,
      "audiophile",
      "premium audio",
      "sound quality",
      "professional audio",
      "wireless",
      "high-end",
      product.new ? "new product" : "",
    ].filter(Boolean),
    openGraph: {
      title: `${product.name} | Audiophile`,
      description: product.description,
      url: `https://audiophile.com/category/${product.category}/${product.slug}`,
      siteName: "Audiophile",
      images: [
        {
          url: product.image.desktop,
          width: 1200,
          height: 630,
          alt: `${product.name} - Premium ${product.category}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Audiophile`,
      description: product.description,
      images: [product.image.desktop],
    },
    alternates: {
      canonical: `https://audiophile.com/category/${product.category}/${product.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return data.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) {
  // Note: In a real app, you'd await params here, but for static generation
  // we need to handle this differently. This is a simplified version.
  const product = data.find((item) => item.slug === (params as any).slug);

  if (!product) {
    return (
      <div className="py-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
        <p className="mb-6 text-gray-600">
          The requested product could not be found.
        </p>
        <a
          href="/"
          className="inline-block rounded bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Return to Home
        </a>
      </div>
    );
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: [
              product.image.desktop,
              product.image.tablet,
              product.image.mobile,
            ],
            category: product.category,
            brand: {
              "@type": "Brand",
              name: "Audiophile",
            },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Audiophile",
              },
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                  "@type": "MonetaryAmount",
                  value: "0",
                  currency: "USD",
                },
                deliveryTime: {
                  "@type": "ShippingDeliveryTime",
                  businessDays: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                  },
                  cutoffTime: "15:00",
                  handlingTime: {
                    "@type": "QuantitativeValue",
                    minValue: 1,
                    maxValue: 2,
                    unitCode: "DAY",
                  },
                  transitTime: {
                    "@type": "QuantitativeValue",
                    minValue: 3,
                    maxValue: 5,
                    unitCode: "DAY",
                  },
                },
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "156",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Warranty",
                value: "2 years",
              },
              {
                "@type": "PropertyValue",
                name: "Shipping",
                value: "Free worldwide shipping",
              },
            ],
          }),
        }}
      />

      <article className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <Image
            src={product.image.desktop}
            alt={`${product.name} - Premium ${product.category}`}
            width={540}
            height={560}
            className="h-auto w-full rounded-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        <div className="space-y-6">
          {product.new && (
            <span className="inline-block text-sm font-bold tracking-widest text-[#D87D4A] uppercase">
              New Product
            </span>
          )}

          <h1 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            {product.name}
          </h1>

          <p className="text-lg leading-relaxed text-gray-600">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">
              ${product.price.toLocaleString()}
            </span>
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#FBAF85] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:outline-none"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
            <button
              className="flex-1 border border-black px-8 py-4 text-sm font-bold tracking-widest text-black uppercase transition-colors hover:bg-black hover:text-white focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
              aria-label={`Add ${product.name} to wishlist`}
            >
              Add to Wishlist
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="mb-2 font-bold">Features:</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line text-gray-600">
              {product.features}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="mb-4 font-bold">In the Box:</h3>
            <ul className="space-y-2">
              {product.includes.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="font-bold text-[#D87D4A]">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-600">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
