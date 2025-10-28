"use client";

import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import data from "@/data/data.json";

function toTitleCase(value: string) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const BreadCrumbLinks = () => {
  const pathname = usePathname();

  const crumbs = useMemo(() => {
    // Default Home always present
    const base = [
      {
        label: "Home",
        href: "/",
        isCurrent: false,
      },
    ];

    if (!pathname) return base;

    // Normalize and split
    const segments = pathname
      .split("?")[0]
      .split("#")[0]
      .split("/")
      .filter(Boolean);

    // /category/[category]
    if (segments[0] === "category" && segments[1]) {
      const category = segments[1];
      return [
        ...base,
        {
          label: toTitleCase(category),
          href: `/category/${category}`,
          isCurrent: true,
        },
      ];
    }

    // /product/[slug]
    if (segments[0] === "product" && segments[1]) {
      const slug = segments[1];
      const product = data.find((p) => p.slug === slug);
      if (!product) {
        return base;
      }
      const category = product.category;
      return [
        ...base,
        {
          label: toTitleCase(category),
          href: `/category/${category}`,
          isCurrent: false,
        },
        {
          label: product.name,
          href: `/product/${slug}`,
          isCurrent: true,
        },
      ];
    }

    return base;
  }, [pathname]);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <Fragment key={crumb.href}>
                <BreadcrumbItem className="text-sm leading-tight font-bold tracking-[1px] text-black">
                  {isLast || crumb.isCurrent ? (
                    <BreadcrumbPage className="text-sm leading-tight font-bold tracking-[1px] text-[#D87D4A]">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={crumb.href}
                      className="text-sm leading-tight font-bold tracking-[1px] text-black hover:text-[#D87D4A]"
                    >
                      {crumb.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbLinks;
