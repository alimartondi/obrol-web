"use client";

import * as React from "react";

import Link from "next/link";

import clsx from "clsx";

import { MessageCircle } from "lucide-react";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";
import HeaderAction from "./header-action";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        isScrolled ? "px-3 md:px-10" : "px-2 md:px-6",
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out",
      )}
    >
      <nav
        className={clsx(
          isScrolled
            ? "bg-background/75 backdrop-blur-lg max-w-[1440px]"
            : "bg-transparent max-w-378 border-transparent",
          "border border-border/75 flex justify-between items-center mx-auto rounded-lg mt-2.5 lg:mt-4 py-3 lg:py-4 px-4 transition-all duration-300 ease-in-out",
        )}
      >
        <Link href="/" className="flex gap-2 items-center text-primary">
          <span className="h-8 w-8 bg-primary rounded text-white flex items-center justify-center">
            <MessageCircle className="size-4" />
          </span>
          <span className="text-xl font-semibold">Obrol</span>
        </Link>

        <div className="lg:hidden">
          <MobileMenu />
        </div>

        <div className="hidden lg:block">
          <DesktopMenu />
        </div>

        <div className="hidden lg:block">
          <HeaderAction />
        </div>
      </nav>
    </header>
  );
}
