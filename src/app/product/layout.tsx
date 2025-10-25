import Link from "next/link";

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
      <div className="">{children}</div>
    </section>
  );
}
