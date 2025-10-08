import Image from "next/image";
import Link from "next/link";

import products from "@/data/products.json";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">All Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(({ id, name, price, image }) => (
          <Link
            href={`/products/${id}`}
            key={id}
            className="rounded border p-4"
          >
            <Image
              src={image.mobile.replace(/^\.?\//, "/")}
              alt={name}
              width={100}
              height={100}
              className="h-40 w-full object-cover"
            />
            <h2 className="mt-2 text-lg font-semibold">{name}</h2>
            <p className="text-gray-700">${price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
