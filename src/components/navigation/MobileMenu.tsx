import Link from "next/link";

import { Logs } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { links } from "./Header";

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Logs className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <nav className="">
            <ul className="flex items-center justify-between">
              {links.map(({ href, label }) => (
                <li key={href} className="">
                  <Link href={href} className="text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
