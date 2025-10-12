export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12" role="main">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <a href="/" className="transition-colors hover:text-black">
              Home
            </a>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="font-medium text-black">Products</span>
          </li>
        </ol>
      </nav>
      {children}
    </section>
  );
}
