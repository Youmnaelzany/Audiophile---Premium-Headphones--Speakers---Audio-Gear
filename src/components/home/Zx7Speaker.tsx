import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const Zx7Speaker = () => {
  return (
    <div className="relative">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/home/tablet/image-speaker-zx7.jpg"
        />
        <Image
          src="/home/mobile/image-speaker-zx7.jpg"
          alt="ZX7 speaker"
          width={327}
          height={320}
          className="rounded-md md:h-[320px] md:w-[689px] lg:w-[1110px]"
          priority
        />
      </picture>
      <div className="absolute top-16 left-0 space-y-8 px-6 md:px-10 lg:px-16">
        <h2 className="text-[1.75rem] leading-[auto] font-bold tracking-[2px] text-black uppercase">
          ZX7 speaker
        </h2>
        <Button type="button" variant="mainTwo" size={"lg"} className="">
          <Link href="/category/speakers">See product</Link>
        </Button>
      </div>
    </div>
  );
};

export default Zx7Speaker;
