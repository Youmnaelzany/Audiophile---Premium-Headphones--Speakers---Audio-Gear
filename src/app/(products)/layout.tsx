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
      <CategoriesCard />
      <BestGear />
    </section>
  );
}
