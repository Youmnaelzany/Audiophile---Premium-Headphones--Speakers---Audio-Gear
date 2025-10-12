"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ShoppingCart } from "lucide-react";

import MobileMenu from "./MobileMenu";

export const links = [
  { href: "/", label: "HOME" },
  { href: "/category/headphones", label: "HEADPHONES" },
  { href: "/category/speakers", label: "SPEAKERS" },
  { href: "/category/earphones", label: "EARPHONES" },
];

interface HeaderProps {
  isHomePage?: boolean;
}

const Header = ({ isHomePage = false }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[#D87D4A] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`${
          isHomePage ? "bg-[#141414]" : "bg-black"
        } border-b border-white/20 px-6 py-8 md:px-10 lg:px-12`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Mobile menu for small screens */}
            <MobileMenu />

            {/* Logo */}
            <Link
              href="/"
              className="rounded-md focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
              aria-label="Audiophile - Go to homepage"
            >
              <Image
                src="/shared/desktop/logo.svg"
                alt="Audiophile Logo"
                width={143}
                height={25}
                priority
                sizes="143px"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden lg:flex"
          >
            <ul
              className="flex items-center justify-between gap-6"
              role="menubar"
            >
              {links.map(({ href, label }) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname?.startsWith(href));

                return (
                  <li key={href} role="none">
                    <Link
                      href={href}
                      role="menuitem"
                      className={`cursor-pointer rounded-md px-2 py-1 text-[0.8125rem] leading-[1.5625rem] font-bold tracking-[0.125rem] duration-300 ease-in-out focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:ring-offset-black focus:outline-none ${
                        isActive
                          ? "text-[#D87D4A]"
                          : "text-white hover:text-[#D87D4A]"
                      }`}
                      aria-label={`Navigate to ${label.toLowerCase()}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Shopping cart */}
          <button
            className="cursor-pointer rounded-md p-2 text-white duration-300 ease-in-out hover:text-[#D87D4A] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
            aria-label="Open shopping cart"
            aria-expanded="false"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Shopping cart</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
