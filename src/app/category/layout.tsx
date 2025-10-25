// app/category/[category]/layout.tsx
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div id="main-content" className="">
        {children}
      </div>
    </section>
  );
}
