"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { links } from "./Header";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-12 bg-black px-6 py-16 md:items-start md:gap-8 md:px-10 lg:gap-9 lg:px-12">
      <div className="flex w-full flex-col items-center justify-between gap-12 md:items-start md:justify-between md:gap-8 lg:flex-row lg:justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Audiophile - Go to homepage">
          <Image
            src="/shared/desktop/logo.svg"
            alt="Audiophile Logo"
            width={143}
            height={25}
            priority
          />
        </Link>
        {/* Navigation */}
        <nav role="navigation" aria-label="Main navigation" className="">
          <ul
            className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start md:gap-8.5"
            role="menubar"
          >
            {links.map(({ href, label }) => {
              // Match both exact "/" and category pages like "/category/headphones"
              const isActive =
                pathname === href ||
                (href !== "/" && pathname?.startsWith(href));
              return (
                <li key={href} role="none">
                  <Link
                    href={href}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={`cursor-pointer px-2 py-1 text-[0.8125rem] font-bold tracking-[0.125rem] duration-300 ease-in-out ${
                      isActive
                        ? "text-[#D87D4A]"
                        : "text-white hover:text-[#D87D4A]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="flex w-full flex-col gap-11.5 text-center text-white md:items-start md:text-left">
        {/* Description paragraph */}
        <div className="w-full lg:flex lg:items-end lg:justify-between lg:gap-8">
          <p className="text-[0.9375rem] leading-6.25 font-medium tracking-normal opacity-50 lg:w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>

          <div className="hidden items-center gap-6 lg:flex">
            <Tooltip>
              <TooltipTrigger>
                <Link href={"#"}>
                  <FaSquareFacebook className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#d87a4a]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"#"}>
                  <FaXTwitter className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#d87a4a]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"#"}>
                  <FaInstagram className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#d87a4a]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>{" "}
          </div>
        </div>

        {/* Copyright and social icons row for md screens */}
        <div className="flex w-full flex-col items-center gap-11.5 md:flex-row md:items-center md:justify-between lg:justify-start">
          <h4 className="text-[0.9375rem] leading-6.25 font-bold tracking-normal opacity-50">
            Copyright 2021. All Rights Reserved
          </h4>
          <div className="flex items-center gap-6 lg:hidden">
            <Tooltip>
              <TooltipTrigger>
                <Link href={"#"}>
                  <FaSquareFacebook className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#d87a4a]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"#"}>
                  <FaXTwitter className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#d87a4a]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"#"}>
                  <FaInstagram className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#d87a4a]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
