import Link from "next/link";

import categories from "@/data/products.json";

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Shop by Category</h1>
      <div className="flex gap-4">
        {categories.map(({ slug, name }) => (
          <Link
            key={slug}
            href={`/categories/${slug}`}
            className="rounded border p-4"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
