// app/category/[category]/CategoryCard.tsx
export default function CategoryCard({ category }: { category: string }) {
  return (
    <div className="flex w-full items-center justify-center bg-black py-12 md:py-16 lg:py-18">
      <h1 className="md:tracking-[] text-[1.75rem] leading-[auto] font-bold tracking-[0.125rem] text-white uppercase md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[1.43px]">
        {category}
      </h1>
    </div>
  );
}
