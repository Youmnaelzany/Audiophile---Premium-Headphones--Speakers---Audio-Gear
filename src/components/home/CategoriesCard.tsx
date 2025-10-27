import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

export const links = [
  {
    href: "/category/headphones",
    label: "HEADPHONES",
    image: "/shared/desktop/image-category-thumbnail-headphones.png",
    width: 120,
    height: 104,
  },
  {
    href: "/category/speakers",
    label: "SPEAKERS",
    image: "/shared/desktop/image-category-thumbnail-speakers.png",
    width: 120,
    height: 101,
  },
  {
    href: "/category/earphones",
    label: "EARPHONES",
    image: "/shared/desktop/image-category-thumbnail-earphones.png",
    width: 130,
    height: 104,
  },
];

const CategoriesCard = () => {
  return (
    <section
      aria-labelledby="categories-heading"
      className="mx-auto max-w-277.5 px-6 pt-30 md:px-10 md:pt-24 lg:pt-40"
    >
      <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:justify-between md:gap-2.5 lg:gap-7.5">
        {links.map(({ href, label, image, width, height }) => (
          <article
            key={href}
            className="group relative flex h-[165px] w-[327px] flex-col items-center justify-end gap-1 rounded-lg bg-[#F1F1F1] p-8 text-black transition-transform focus-within:ring-2 focus-within:ring-[#D87D4A] focus-within:ring-offset-2 hover:scale-105 md:h-[165px] md:w-[223px] lg:h-[204px] lg:w-[350px]"
          >
            <Image
              src={image}
              alt={`${label} category thumbnail`}
              width={width}
              height={height}
              className="absolute -top-10 transition-transform group-hover:scale-110"
              loading="lazy"
              sizes="(max-width: 768px) 327px, 223px"
            />
            <h3 className="text-[15px] leading-[auto] font-bold tracking-[1.07px] lg:text-[18px] lg:tracking-[1.20px]">
              {label}
            </h3>
            <Link
              href={href}
              className="flex items-center gap-2 text-[15px] leading-[auto] font-bold tracking-[1.07px] text-black/50 transition-colors hover:text-[#D87D4A] lg:text-[18px] lg:tracking-[1.20px]"
              aria-label={`Shop ${label.toLowerCase()}`}
            >
              Shop <ChevronRight className="size-4 text-[#D87D4A]" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoriesCard;
