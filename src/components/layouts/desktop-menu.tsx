import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Fragment } from "react/jsx-runtime";

export default function DesktopMenu() {
  return (
    <ul className="flex gap-8">
      <li>
        <Link href={"/how-it-works"}>How it Works</Link>
      </li>
      <li>
        <Link href={"/why-obrol"}>Why Obrol</Link>
      </li>
      <li>
        <Link href={"/company"}>Company</Link>
      </li>
    </ul>
  );
}
