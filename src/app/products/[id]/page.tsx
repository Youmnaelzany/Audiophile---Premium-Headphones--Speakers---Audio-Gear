import Image from "next/image";
import { notFound } from "next/navigation";

import products from "@/data/products.json";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  const { name, price, description, image } = product; // 👈 destructuring here

  return (
    <div>
      <Image src={image.mobile} alt={name} className="h-80 w-80 object-cover" />
      <h1 className="mt-4 text-3xl font-bold">{name}</h1>
      <p className="mt-2 text-xl">${price}</p>
      <p className="mt-4">{description}</p>
    </div>
  );
}
