import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Fragment } from "react/jsx-runtime";

export default function DesktopMenu() {
  return (
    <ul className="flex gap-8">
      <li>
        <Link href={"/how-it-works"} className="font-medium">
          How it Works
        </Link>
      </li>
      <li>
        <Link href={"/why-obrol"} className="font-medium">
          Why Obrol
        </Link>
      </li>
      <li>
        <Link href={"/company"} className="font-medium">
          Company
        </Link>
      </li>
    </ul>
  );
}
