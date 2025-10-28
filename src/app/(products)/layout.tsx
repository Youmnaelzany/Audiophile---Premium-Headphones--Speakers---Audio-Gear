import BestGear from "@/components/home/BestGear";
import CategoriesCard from "@/components/home/CategoriesCard";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      {children}
      {/* Breadcrumb for product + category routes */}

      <div className="pt-[120px] lg:pt-[160px]">
        <CategoriesCard />
      </div>
      <BestGear />
    </section>
  );
}
