// adjust path as needed
import Image from "next/image";

import CategoryCard from "@/components/category/CategoryCard";
import data from "@/data/data.json";

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
    <section className="">
      <CategoryCard category={category} />
      <div className="">
        {products.map((product) => (
          <div key={product.id} className="">
            <Image
              src={product.categoryImage.desktop}
              alt={product.name}
              width={540}
              height={560}
              className="rounded-lg"
            />
            <div className="">
              {product.new && <p className="">New Product</p>}
              <h2 className="">{product.name}</h2>
              <p className="">{product.description}</p>
              <a href={`/product/${product.slug}`} className="">
                See Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
