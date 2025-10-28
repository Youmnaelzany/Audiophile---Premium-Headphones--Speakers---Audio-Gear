"use client";

import { usePathname } from "next/navigation";

import BreadCrumbLinks from "@/components/category/BreadCrumbLinks";

const ProductsBreadcrumb = () => {
  const pathname = usePathname();
  const show =
    pathname?.startsWith("/category/") || pathname?.startsWith("/product/");
  if (!show) return null;
  return <BreadCrumbLinks />;
};

export default ProductsBreadcrumb;
