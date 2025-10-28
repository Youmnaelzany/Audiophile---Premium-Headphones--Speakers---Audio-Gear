import Image from "next/image";

import ProductsBreadcrumb from "@/components/navigation/ProductsBreadcrumb";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";

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
      <div className="mx-auto px-6 pt-14 md:px-10 md:pt-16 lg:px-36 lg:pt-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <Image
              src={product.image.mobile}
              alt="ZX9 speaker"
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
            <p className="text-[18px] leading-[auto] font-bold tracking-[1.20px]">
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
        {/* Features */}
        <div className="">
          <h2 className="">Features</h2>
          <p className="">{product.features}</p>
        </div>
        {/* Included items */}
        <div className="">
          <h2 className="">In the box</h2>
          <ul className="">
            {product.includes.map((item, index) => (
              <li key={index}>
                <span className="">{item.quantity}x</span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
