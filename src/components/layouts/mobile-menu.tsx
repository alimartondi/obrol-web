"use client";

import { useState } from "react";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div>
          <Menu className="size-8" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="rounded-e-lg">
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
        <ul className="space-y-3 px-5">
          <li>
            <Link
              href={"/"}
              className="font-semibold text-2xl"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/how-it-works"}
              className="font-semibold text-2xl"
              onClick={() => setOpen(false)}
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              href={"/why-obrol"}
              className="font-semibold text-2xl"
              onClick={() => setOpen(false)}
            >
              Why Obrol
            </Link>
          </li>
          <li>
            <Link
              href={"/company"}
              className="font-semibold text-2xl"
              onClick={() => setOpen(false)}
            >
              Company
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
