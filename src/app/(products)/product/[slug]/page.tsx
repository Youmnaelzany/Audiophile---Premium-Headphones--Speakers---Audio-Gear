import Image from "next/image";

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
      {/* Product header */}
      <div className="">
        <Image
          src={product.image.desktop}
          alt={product.name}
          width={540}
          height={560}
          className="rounded-lg"
        />
        <div>
          {product.new && <p className="">New Product</p>}
          <h1 className="">{product.name}</h1>
          <p className="">{product.description}</p>
          <p className="">${product.price}</p>
          <button className="">Add to Cart</button>
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
    </section>
  );
}
