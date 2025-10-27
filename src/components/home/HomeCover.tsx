import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const HomeCover = () => {
  return (
    <section className="relative">
      <picture className="relative block h-[700px] w-full overflow-hidden">
        <source
          media="(min-width:1400px)"
          srcSet="/home/desktop/image-header.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/home/tablet/image-header.jpg"
        />

        <Image
          src="/home/mobile/image-header.jpg"
          alt="XX99 Mark II Headphones"
          fill
          className="object-cover"
          priority
        />
      </picture>
      <div className="absolute inset-x-0 top-32 flex flex-col items-center justify-center gap-6 text-center text-white md:top-24 lg:top-52 lg:left-36 xl:items-start xl:text-left">
        <h1 className="text-sm leading-[auto] font-normal tracking-[0.625rem] uppercase opacity-50">
          New product
        </h1>
        <h2 className="max-w-104 text-[2.25rem] leading-10 font-bold tracking-[1.20px] uppercase md:text-[3.5rem] md:leading-14.5 md:tracking-[2px]">
          XX99 Mark II Headphones
        </h2>
        <p className="max-w-[20rem] text-[0.9375rem] leading-6.25 font-bold tracking-normal opacity-75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button type="button" variant="mainOne" size={"lg"}>
          <Link href="/">See product</Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeCover;
