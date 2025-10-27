import Link from "next/link";

import BestGear from "@/components/home/BestGear";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="">
        <Link href="/" className="">
          ← Go Back
        </Link>
      </div>
      <div className="">
        {children}
        <BestGear />
      </div>
    </section>
  );
}
