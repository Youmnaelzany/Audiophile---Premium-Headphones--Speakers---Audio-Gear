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
    <section aria-labelledby="categories-heading" className="space-y-16">
      <div className="text-center">
        <h2 id="categories-heading" className="mb-4 text-4xl font-bold">
          Shop by Category
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Browse our premium audio equipment by category and discover the
          perfect sound experience for your needs.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:justify-between md:gap-4">
        {links.map(({ href, label, image, width, height }) => (
          <article
            key={href}
            className="group relative flex h-[165px] w-[327px] flex-col items-center justify-end gap-1 rounded-lg bg-[#F1F1F1] p-8 text-black transition-transform focus-within:ring-2 focus-within:ring-[#D87D4A] focus-within:ring-offset-2 hover:scale-105 md:h-[165px] md:w-[223px]"
          >
            <Image
              src={image}
              alt={`${label} category thumbnail`}
              width={width}
              height={height}
              className="absolute -top-10 transition-transform group-hover:scale-110"
              loading="lazy"
              sizes="(max-width: 768px) 327px, 223px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <h3 className="text-[0.8125rem] leading-[1.5625rem] font-bold tracking-[0.125rem]">
              {label}
            </h3>
            <Link
              href={href}
              className="flex items-center gap-2 text-[0.8125rem] leading-[1.5625rem] font-bold tracking-[0.125rem] text-black/50 transition-colors hover:text-[#D87D4A] focus:text-[#D87D4A] focus:outline-none"
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
