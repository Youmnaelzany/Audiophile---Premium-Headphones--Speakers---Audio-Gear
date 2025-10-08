import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  default as categories,
  default as products,
} from "@/data/products.json";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const filteredProducts = products.filter((p) => p.category === params.slug);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">{category.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map(({ id, name, price, image }) => (
          <Link
            href={`/products/${id}`}
            key={id}
            className="rounded border p-4"
          >
            <Image
              src={image.mobile.replace(/^\.?\//, "/")}
              alt={name}
              className="h-40 w-full object-cover"
            />
            <h2 className="mt-2 text-lg font-semibold">{name}</h2>
            <p>${price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
