import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import BreadCrumbLinks from "@/components/category/BreadCrumbLinks";
import CategoryCard from "@/components/category/CategoryCard";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";

/* ----------------------------------
   Types
---------------------------------- */
type PageProps = {
  params: Promise<{ category: string }>;
};

/* ----------------------------------
   Metadata
---------------------------------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const title = `${formattedCategory} | Audiophile Shop`;
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

/* ----------------------------------
   Page
---------------------------------- */
export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const products = data.filter((item) => item.category === category);

  if (!products.length) {
    return (
      <section className="px-6 py-20 text-center">
        <p className="text-lg font-medium">
          No products found in this category.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto">
      {/* Category Header */}
      <CategoryCard category={category} />

      {/* Breadcrumb */}
      <div className="px-6 pt-16 md:px-10 lg:px-36">
        <BreadCrumbLinks />
      </div>

      {/* Products */}
      <div className="space-y-[120px] px-6 pt-16 md:px-10 md:pt-[120px] lg:space-y-[160px] lg:px-36">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col items-center justify-between gap-8 md:gap-[52px] ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            {/* Image */}
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
                alt={product.name}
                width={327}
                height={352}
                priority
                className="rounded-md md:w-[689px] lg:h-[560px] lg:w-[540px]"
              />
            </picture>

            {/* Content */}
            <div className="flex max-w-[327px] flex-col items-center gap-6 text-center md:max-w-[572px] lg:max-w-[445px] lg:items-start lg:text-left">
              {product.new && (
                <p className="text-sm font-normal tracking-[10px] text-[#D87D4A] uppercase">
                  New Product
                </p>
              )}

              <h2 className="max-w-[200px] text-[28px] font-bold tracking-[1px] text-black uppercase md:max-w-[300px] md:text-[40px] md:tracking-[1.43px]">
                {product.name}
              </h2>

              <p className="text-[15px] leading-[25px] font-medium text-black/50">
                {product.description}
              </p>

              <Button asChild variant="mainOne" size="lg">
                <Link href={`/product/${product.slug}`}>See Product</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
