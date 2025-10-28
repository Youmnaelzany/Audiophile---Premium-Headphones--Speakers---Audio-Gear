import Image from "next/image";
import Link from "next/link";

import ProductsBreadcrumb from "@/components/navigation/ProductsBreadcrumb";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = data.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Audiophile Shop",
      description: "Sorry, the requested product could not be found.",
    };
  }

  const title = `${product.name} | Audiophile Shop`;
  const description = product.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: product.image.desktop,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = data.find((item) => item.slug === slug);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="">
      <div className="px-6 pt-16 md:px-10 lg:px-36">
        <ProductsBreadcrumb />
      </div>
      {/* Product header */}
      <div className="mx-auto space-y-[88px] px-6 pt-14 md:space-y-[120px] md:px-10 md:pt-16 lg:space-y-[160px] lg:px-36 lg:pt-28">
        {/* Pictures & Details */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <Image
              src={product.image.mobile}
              alt={product.name}
              width={327}
              height={327}
              className="rounded-md md:h-[480px] md:w-[281px] lg:h-[560px] lg:w-[540px]"
              priority
            />
          </picture>
          <div className="max-w-[327px] space-y-6 md:max-w-[339.5px] lg:max-w-[445.5px] lg:space-y-8">
            {product.new && (
              <p className="text-sm leading-[auto] font-normal tracking-[10px] text-[#D87D4A] uppercase">
                New Product
              </p>
            )}
            <h1 className="max-w-[200px] text-[28px] leading-[auto] font-bold tracking-[1px] text-black uppercase md:max-w-[300px] md:text-[40px] md:leading-11 md:tracking-[1.43px]">
              {product.name}
            </h1>
            <p className="text-[15px] leading-[25px] font-medium tracking-normal text-black/50">
              {product.description}
            </p>
            <p className="text-[18px] leading-[auto] font-bold tracking-[1.20px] text-black">
              ${product.price}
            </p>
            <div className="flex items-center gap-4">
              <QuantitySelector />
              {/* Add Button */}
              <Button variant={"mainOne"} type="button" size={"lg"}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        {/*  Features & Included items */}
        <div className="flex max-w-[1110px] flex-col justify-between gap-y-[88px] md:gap-y-[120px] lg:flex-row">
          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-[24px] leading-9 font-bold tracking-[0.86px] text-black uppercase md:text-[32px] md:tracking-[1.14px]">
              Features
            </h2>
            {(() => {
              const parts = (product.features || "").split("\n\n");
              const first = parts[0] || "";
              const second = parts.slice(1).join("\n\n");
              return (
                <>
                  <p className="text-[15px] leading-[25px] tracking-normal text-black/50 lg:w-[635px]">
                    {first}
                  </p>
                  {second && (
                    <p className="text-[15px] leading-[25px] tracking-normal text-black/50 lg:w-[635px]">
                      {second}
                    </p>
                  )}
                </>
              );
            })()}
          </div>
          {/* Included items */}
          <div className="flex flex-col justify-between gap-6 md:max-w-[549px] md:flex-row lg:max-w-[350px] lg:flex-col lg:justify-start">
            <h2 className="text-[24px] leading-9 font-bold tracking-[0.86px] text-black uppercase md:text-[32px] md:tracking-[1.14px]">
              In the box
            </h2>
            <ul className="space-y-2">
              {product.includes.map((item, index) => (
                <li
                  key={index}
                  className="text-[15px] leading-[25px] tracking-normal text-black/50"
                >
                  <span className="mr-4 text-[#D87D4A]">{item.quantity}x</span>
                  {item.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Gallery */}
        <div className="flex flex-col gap-5 md:flex-row">
          {/* 2 Pictures */}
          <div className="flex flex-col gap-5 lg:gap-8">
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={product.gallery.first.desktop}
              />
              <source
                media="(min-width:768px)"
                srcSet={product.gallery.first.tablet}
              />
              <Image
                src={product.gallery.first.mobile}
                alt={product.name}
                width={327}
                height={174}
                className="rounded-md md:w-[277px] lg:h-[280px] lg:w-[445px]"
                priority
              />
            </picture>
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={product.gallery.second.desktop}
              />
              <source
                media="(min-width:768px)"
                srcSet={product.gallery.second.tablet}
              />
              <Image
                src={product.gallery.second.mobile}
                alt={product.name}
                width={327}
                height={174}
                className="rounded-md md:w-[277px] lg:h-[280px] lg:w-[445px]"
                priority
              />
            </picture>
          </div>
          {/* 1 Pictures */}
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
              className="rounded-md md:w-[395px] lg:h-[592px] lg:w-[635px]"
              priority
            />
          </picture>
        </div>
        {/* You may also like */}
        <div className="flex flex-col items-center justify-center gap-10 md:gap-14 lg:gap-16">
          <h2 className="text-2xl leading-9 font-bold tracking-[0.88px] text-black uppercase md:text-[32px] md:tracking-[1.14px]">
            You may also like
          </h2>
          <div className="flex flex-col items-center justify-between gap-[56px] md:flex-row md:gap-[11px] lg:gap-[30px]">
            {product.others.map((other) => (
              <div
                className="flex flex-col items-center justify-between gap-8 md:gap-10"
                key={other.slug}
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
                    priority
                  />
                </picture>
                <h3 className="text-2xl leading-[auto] font-bold tracking-[1.71px] text-black uppercase">
                  {other.name}
                </h3>
                <Button type="button" variant={"mainOne"} size={"lg"}>
                  <Link href={`/product/${other.slug}`} className="">
                    See Product
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
