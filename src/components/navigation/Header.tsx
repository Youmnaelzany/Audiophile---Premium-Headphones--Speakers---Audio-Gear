import Image from "next/image";
import Link from "next/link";

import { ShoppingCart } from "lucide-react";

import MobileMenu from "./MobileMenu";

export const links = [
  { href: "/", label: "HOME" },
  { href: "/headphones", label: "HEADPHONES" },
  { href: "/speakers", label: "SPEAKERS" },
  { href: "/earphones", label: "EARPHONES" },
];
const Header = () => {
  return (
    <header className="bg-black px-6 py-6 md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Do the Mobile Menu same as the figma design */}
          <MobileMenu />
          <Image
            src="/shared/desktop/logo.svg"
            alt=""
            width={143}
            height={25}
          />
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex items-center justify-between gap-6">
            {links.map(({ href, label }) => (
              <li key={href} className="">
                <Link href={href} className="text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Make the cart dynamic */}
        <ShoppingCart className="text-white" />
      </div>
    </header>
  );
};

export default Header;
