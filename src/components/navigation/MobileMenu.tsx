import { Logs } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import CategoriesCard from "../home/CategoriesCard";

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Logs className="size-7 text-white" />
        </SheetTrigger>
        <SheetContent side="top" className="py-16">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <CategoriesCard />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
