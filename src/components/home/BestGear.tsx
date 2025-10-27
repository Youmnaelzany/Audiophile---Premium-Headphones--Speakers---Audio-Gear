import Image from "next/image";

const BestGear = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center justify-between gap-10 px-6 py-32 md:gap-16 md:px-10 lg:flex-row lg:px-36">
      <div className="flex flex-col items-center justify-between gap-9 text-center md:gap-8 lg:items-start lg:text-left">
        <h2 className="max-w-[327px] text-[28px] leading-[auto] font-bold tracking-[1px] text-black uppercase md:max-w-[573px] md:text-[2.5rem] md:leading-11 md:tracking-[1.43px] lg:max-w-[445px]">
          Bringing you the best audio
          <span className="text-[#D87D4A]">gear</span>
        </h2>
        <p className="max-w-[327px] text-[15px] leading-6.25 font-medium tracking-normal text-black/50 md:max-w-[573px] lg:max-w-[445px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/shared/tablet/image-best-gear.jpg"
        />
        <Image
          src="/shared/mobile/image-best-gear.jpg"
          alt="Bringing you the best audio gear"
          width={327}
          height={300}
          className="rounded-md md:h-[300px] md:w-[689px] lg:h-[588px] lg:w-[540px]"
          priority
        />
      </picture>
    </div>
  );
};

export default BestGear;
