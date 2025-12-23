import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AddToCartClient from "@/components/cart/AddToCartClient";
import ProductsBreadcrumb from "@/components/navigation/ProductsBreadcrumb";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";

/* ----------------------------------
   Types
---------------------------------- */
type PageProps = {
  params: Promise<{ slug: string }>;
};

/* ----------------------------------
   Metadata
---------------------------------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = data.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Audiophile Shop",
      description: "Sorry, the requested product could not be found.",
    };
  }

  const title = `${product.name} | Audiophile Shop`;

  return {
    title,
    description: product.description,
    openGraph: {
      title,
      description: product.description,
      images: [
        {
          url: product.image.desktop,
          alt: product.name,
        },
      ],
    },
  };
}

/* ----------------------------------
   Page
---------------------------------- */
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = data.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section>
      {/* Breadcrumb */}
      <div className="px-6 pt-16 md:px-10 lg:px-36">
        <ProductsBreadcrumb />
      </div>

      <div className="mx-auto space-y-[88px] px-6 pt-14 md:space-y-[120px] md:px-10 md:pt-16 lg:space-y-[160px] lg:px-36 lg:pt-28">
        {/* Product Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <Image
              src={product.image.mobile}
              alt={product.name}
              width={327}
              height={327}
              priority
              className="rounded-md md:h-[480px] md:w-[281px] lg:h-[560px] lg:w-[540px]"
            />
          </picture>

          <div className="max-w-[327px] space-y-6 md:max-w-[339px] lg:max-w-[445px] lg:space-y-8">
            {product.new && (
              <p className="text-sm tracking-[10px] text-[#D87D4A] uppercase">
                New Product
              </p>
            )}

            <h1 className="max-w-[200px] text-[28px] font-bold tracking-[1px] uppercase md:max-w-[300px] md:text-[40px] md:tracking-[1.43px]">
              {product.name}
            </h1>

            <p className="text-[15px] leading-[25px] font-medium text-black/50">
              {product.description}
            </p>

            <p className="text-[18px] font-bold tracking-[1.2px]">
              ${product.price}
            </p>

            {/* Add to cart */}
            <AddToCartClient
              id={product.slug}
              name={product.name}
              price={product.price}
              image={product.image.desktop}
            />
          </div>
        </div>

        {/* Features & Box */}
        <div className="flex max-w-[1110px] flex-col gap-y-[88px] md:gap-y-[120px] lg:flex-row">
          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-[24px] font-bold uppercase md:text-[32px]">
              Features
            </h2>

            {product.features.split("\n\n").map((text, index) => (
              <p
                key={index}
                className="text-[15px] leading-[25px] text-black/50 lg:w-[635px]"
              >
                {text}
              </p>
            ))}
          </div>

          {/* In the box */}
          <div className="flex flex-col gap-6 md:flex-row lg:flex-col">
            <h2 className="text-[24px] font-bold uppercase md:text-[32px]">
              In the box
            </h2>

            <ul className="space-y-2">
              {product.includes.map((item, index) => (
                <li key={index} className="text-[15px] text-black/50">
                  <span className="mr-4 text-[#D87D4A]">{item.quantity}x</span>
                  {item.item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-5 lg:gap-8">
            {(["first", "second"] as const).map((key) => (
              <picture key={key}>
                <source
                  media="(min-width:1024px)"
                  srcSet={product.gallery[key].desktop}
                />
                <source
                  media="(min-width:768px)"
                  srcSet={product.gallery[key].tablet}
                />
                <Image
                  src={product.gallery[key].mobile}
                  alt={product.name}
                  width={327}
                  height={174}
                  className="rounded-md md:w-[277px] lg:w-[445px]"
                />
              </picture>
            ))}
          </div>

          <picture>
            <source
              media="(min-width:1024px)"
              srcSet={product.gallery.third.desktop}
            />
            <source
              media="(min-width:768px)"
              srcSet={product.gallery.third.tablet}
            />
            <Image
              src={product.gallery.third.mobile}
              alt={product.name}
              width={327}
              height={368}
              className="rounded-md md:w-[395px] lg:w-[635px]"
            />
          </picture>
        </div>

        {/* You may also like */}
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-2xl font-bold uppercase md:text-[32px]">
            You may also like
          </h2>

          <div className="flex flex-col gap-14 md:flex-row lg:gap-30">
            {product.others.map((other) => (
              <div
                key={other.slug}
                className="flex flex-col items-center gap-8"
              >
                <picture>
                  <source
                    media="(min-width:1024px)"
                    srcSet={other.image.desktop}
                  />
                  <source
                    media="(min-width:768px)"
                    srcSet={other.image.tablet}
                  />
                  <Image
                    src={other.image.mobile}
                    alt={other.name}
                    width={327}
                    height={120}
                    className="rounded-md md:h-[318px] md:w-[223px] lg:w-[350px]"
                  />
                </picture>

                <h3 className="text-2xl font-bold uppercase">{other.name}</h3>

                <Button asChild variant="mainOne" size="lg">
                  <Link href={`/product/${other.slug}`}>See Product</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
