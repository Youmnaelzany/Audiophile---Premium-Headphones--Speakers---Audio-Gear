import BestGear from "@/components/home/BestGear";
import CategoriesCard from "@/components/home/CategoriesCard";
import HomeCover from "@/components/home/HomeCover";

export default function HomePage() {
  return (
    <main className="">
      <HomeCover />
      <CategoriesCard />
      <BestGear />
    </main>
  );
}
