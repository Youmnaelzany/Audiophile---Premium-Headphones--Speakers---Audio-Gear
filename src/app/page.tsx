import BestGear from "@/components/home/BestGear";
import CategoriesCard from "@/components/home/CategoriesCard";
import HomeCover from "@/components/home/HomeCover";
import Yx1Earphones from "@/components/home/Yx1Earphones";
import Zx7Speaker from "@/components/home/Zx7Speaker";
import Zx9Speaker from "@/components/home/Zx9Speaker";

export default function HomePage() {
  return (
    <main className="">
      <HomeCover />
      <div className="pt-30 md:pt-24 lg:pt-40">
        <CategoriesCard />
      </div>
      <section className="mx-auto space-y-6 px-6 pt-30 md:space-y-8 md:px-10 md:pt-24 lg:space-y-12 lg:px-36 lg:pt-40">
        <Zx9Speaker />
        <Zx7Speaker />
        <Yx1Earphones />
      </section>
      <BestGear />
    </main>
  );
}
