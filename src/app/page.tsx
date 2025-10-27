import BestGear from "@/components/home/BestGear";
import CategoriesCard from "@/components/home/CategoriesCard";
import HomeCover from "@/components/home/HomeCover";
import Zx7Speaker from "@/components/home/Zx7Speaker";
import Zx9Speaker from "@/components/home/Zx9Speaker";

export default function HomePage() {
  return (
    <main className="">
      <HomeCover />
      <section className="mx-auto space-y-6 px-6 py-30 md:space-y-8 md:px-10 md:py-24 lg:space-y-12 lg:px-36 lg:py-40">
        <Zx9Speaker />
        <Zx7Speaker />
      </section>
      <CategoriesCard />
      <BestGear />
    </main>
  );
}
