import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function HeaderAction() {
  return (
    <div>
      <Link
        href={"/login"}
        className={buttonVariants({ variant: "default", size: "default" })}
      >
        Sign in
      </Link>
    </div>
  );
}
