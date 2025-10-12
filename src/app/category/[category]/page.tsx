import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import data from "@/data/data.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const products = data.filter((item) => item.category === category);

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const productCount = products.length;

  return {
    title: `${categoryName} | Audiophile - Premium Audio Equipment`,
    description: `Discover our collection of premium ${category}. ${productCount} high-quality ${category} available with free shipping and 2-year warranty. Shop now for the best audio experience.`,
    keywords: [
      category,
      `premium ${category}`,
      `high-end ${category}`,
      "audiophile",
      "audio equipment",
      "sound quality",
      "professional audio",
    ],
    openGraph: {
      title: `${categoryName} | Audiophile`,
      description: `Premium ${category} for audiophiles. ${productCount} products available with exceptional sound quality.`,
      url: `https://audiophile.com/category/${category}`,
      siteName: "Audiophile",
      images:
        products.length > 0
          ? [
              {
                url: products[0].categoryImage.desktop,
                width: 1200,
                height: 630,
                alt: `${categoryName} products from Audiophile`,
              },
            ]
          : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} | Audiophile`,
      description: `Premium ${category} for audiophiles. ${productCount} products available.`,
      images: products.length > 0 ? [products[0].categoryImage.desktop] : [],
    },
    alternates: {
      canonical: `https://audiophile.com/category/${category}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = ["headphones", "speakers", "earphones"];
  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const products = data.filter((item) => item.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">No products found</h1>
        <p className="mb-6 text-gray-600">
          No products were found for the {category} category.
        </p>
        <Link
          href="/"
          className="inline-block rounded bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Return to Home
        </Link>
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
            "@type": "CollectionPage",
            name: `${categoryName} Products`,
            description: `Premium ${category} for audiophiles`,
            url: `https://audiophile.com/category/${category}`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: products.map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product.name,
                description: product.description,
                url: `https://audiophile.com/category/${category}/${product.slug}`,
                image: product.categoryImage.desktop,
                offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              })),
            },
          }),
        }}
      />

      <article className="space-y-16">
        <header className="text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {categoryName}
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover our collection of premium {category} designed for
            audiophiles who demand the best in sound quality and craftsmanship.
          </p>
        </header>

        <section className="grid gap-12 md:gap-16">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`grid items-center gap-8 md:gap-12 ${
                index % 2 === 1
                  ? "md:grid-cols-[1fr,auto]"
                  : "md:grid-cols-[auto,1fr]"
              } md:grid-cols-2`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={product.categoryImage.mobile}
                  alt={`${product.name} - Premium ${categoryName}`}
                  width={327}
                  height={352}
                  className="h-auto w-full rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                {product.new && (
                  <span className="inline-block text-sm font-bold tracking-widest text-[#D87D4A] uppercase">
                    New Product
                  </span>
                )}

                <h2 className="text-3xl leading-tight font-bold md:text-4xl">
                  {product.name}
                </h2>

                <p className="leading-relaxed text-gray-600">
                  {product.description}
                </p>

                <Link
                  href={`/category/${category}/${product.slug}`}
                  className="inline-block bg-[#D87D4A] px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#FBAF85] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:outline-none"
                  aria-label={`View details for ${product.name}`}
                >
                  See Product
                </Link>
              </div>
            </article>
          ))}
        </section>
      </article>
    </>
  );
}
