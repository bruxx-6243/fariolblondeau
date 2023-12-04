import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuSquare, ArrowDownRight } from "lucide-react";

import navLinks from "@/data/navigation.json";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open navigation" className="sm:hidden p-0">
        <MenuSquare />
      </SheetTrigger>
      <SheetContent className="dark:border-zinc-800 dark:bg-zinc-900 px-8 w-2/3">
        <ul className="space-y-6 pt-32">
          {navLinks.map((link) => (
            <li key={link.href} className="relative text-xl">
              <a
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel="noopener noreferrer">
                {link.text}
              </a>
              {link.external && (
                <p className="absolute top-0 -right-1 -rotate-90">
                  <ArrowDownRight className="w-4" />
                </p>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
