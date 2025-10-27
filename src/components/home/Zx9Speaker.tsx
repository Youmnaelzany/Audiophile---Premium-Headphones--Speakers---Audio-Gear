import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const Zx9Speaker = () => {
  return (
    <div className="flex h-[600px] w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-md bg-[#D87D4A] px-6 md:h-[720px] md:gap-16 md:px-10 lg:h-[560px] lg:flex-row lg:items-end lg:gap-32.5 lg:px-16">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/home/desktop/image-speaker-zx9.png"
        />
        <source
          media="(min-width:768px)"
          srcSet="/home/tablet/image-speaker-zx9.png"
        />
        <Image
          src="/home/mobile/image-speaker-zx9.png"
          alt="ZX9 speaker"
          width={172.25}
          height={207}
          className="md:h-[237px] md:w-[197.21px] lg:relative lg:-bottom-8 lg:h-[493px] lg:w-[410px]"
          priority
        />
      </picture>
      <div className="flex max-w-[280px] flex-col items-center justify-center gap-6 text-center md:max-w-[349px] lg:items-start lg:justify-start lg:self-center lg:text-left">
        <h2 className="w-56 text-4xl leading-10 font-bold tracking-[1.29px] text-white uppercase md:w-auto md:text-[3.5rem] md:leading-14.5 md:tracking-[2px]">
          ZX9 speaker
        </h2>
        <p className="text-[15px] leading-[auto] font-medium tracking-[1.07px] text-white/75 lg:text-[18px] lg:tracking-[1.20px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button type="button" variant="mainThere" size={"lg"}>
          <Link href="/category/speakers">See product</Link>
        </Button>
      </div>
    </div>
  );
};

export default Zx9Speaker;
