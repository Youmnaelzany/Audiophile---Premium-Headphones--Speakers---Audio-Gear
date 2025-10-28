import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const Yx1Earphones = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-2.5 lg:gap-7.5">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/home/desktop/image-earphones-yx1.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/home/tablet/image-earphones-yx1.jpg"
        />
        <Image
          src="/home/mobile/image-earphones-yx1.jpg"
          alt="YX1 earphones"
          width={327}
          height={200}
          className="rounded-md md:h-[320px] md:w-[339px] lg:w-[540px]"
          priority
        />
      </picture>
      <div className="flex h-[200px] w-[327px] flex-col justify-center rounded-md bg-[#F1F1F1] px-6 md:h-[320px] md:w-[339px] md:px-10 lg:w-[540px] lg:px-16">
        <div className="space-y-8">
          <h2 className="text-[1.75rem] leading-[auto] font-bold tracking-[2px] text-black uppercase">
            YX1 earphones
          </h2>
          <Button type="button" variant="mainTwo" size={"lg"}>
            <Link href="/category/earphones">See product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Yx1Earphones;
