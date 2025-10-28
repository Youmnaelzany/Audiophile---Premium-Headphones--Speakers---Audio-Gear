// adjust path as needed
import Image from "next/image";
import Link from "next/link";

import BreadCrumbLinks from "@/components/category/BreadCrumbLinks";
import CategoryCard from "@/components/category/CategoryCard";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} | Audiophile Shop`;
  const description = `Browse all ${category} products in the Audiophile shop. See features, details, and more.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Filter products by category
  const products = data.filter((item) => item.category === category);

  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <section className="mx-auto">
      <CategoryCard category={category} />
      <div className="px-6 pt-16 md:px-10 lg:px-36">
        <BreadCrumbLinks />
      </div>
      <div className="space-y-[120px] px-6 pt-16 md:px-10 md:pt-[120px] lg:space-y-[160px] lg:px-36">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col items-center justify-between gap-8 md:gap-[52px] ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={product.categoryImage.desktop}
              />
              <source
                media="(min-width:768px)"
                srcSet={product.categoryImage.tablet}
              />
              <Image
                src={product.categoryImage.mobile}
                alt="ZX9 speaker"
                width={327}
                height={352}
                className="rounded-md md:w-[689px] lg:h-[560px] lg:w-[540px]"
                priority
              />
            </picture>
            <div className="flex max-w-[327px] flex-col items-center justify-between gap-6 text-center md:max-w-[572px] lg:max-w-[445px] lg:items-start lg:text-left">
              {product.new && (
                <p className="text-sm leading-[auto] font-normal tracking-[10px] text-[#D87D4A] uppercase">
                  New Product
                </p>
              )}
              <h2 className="max-w-[200px] text-[28px] leading-[auto] font-bold tracking-[1px] text-black uppercase md:max-w-[300px] md:text-[40px] md:leading-11 md:tracking-[1.43px]">
                {product.name}
              </h2>
              <p className="text-[15px] leading-[25px] font-medium tracking-normal text-black/50">
                {product.description}
              </p>
              <Button type="button" variant={"mainOne"} size={"lg"}>
                <Link href={`/product/${product.slug}`} className="">
                  See Product
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
