import Link from "next/link";

import Summary from "@/components/cart/Summary";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  return (
    <section className="flex flex-col gap-4 bg-[#F1F1F1] px-6 py-4 md:gap-6 md:px-10 md:py-12 lg:gap-9 lg:px-16 lg:py-22.75">
      <div className="">
        <Link
          href="/"
          className="cursor-pointer text-[0.9375rem] leading-6.25 font-medium tracking-normal text-black transition-colors duration-300 ease-in-out hover:text-[#D87D4A] lg:px-16"
        >
          Go Back
        </Link>
      </div>
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="w-full max-w-[930px] rounded-lg bg-white p-6 md:p-8">
          <CheckoutForm />
        </div>
        <div className="w-full">
          <Summary />
        </div>
      </div>
    </section>
  );
}
