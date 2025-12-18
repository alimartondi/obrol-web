import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";

export default function Join() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-wrapper">
        <div className="w-full bg-primary h-[460px] rounded-lg items-center justify-center flex flex-col gap-6 text-center p-5 lg:p-8">
          <h2 className="secondary-title text-white">Get Early Access</h2>
          <div className="space-y-2 text-center max-w-lg text-white">
            <p>
              Obrol is currently in closed development with selected partners
              across fintech, MSME, research, and enterprise sectors.
            </p>
            <p>Apply to join the early pilot.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-2">
            <Link
              href={"/join-witlist"}
              className={clsx(
                buttonVariants({ variant: "tertiary", size: "lg" }),
                "w-full md:w-auto"
              )}
            >
              Join waitlist
            </Link>
            <Link
              href={"/join-witlist"}
              className={clsx(
                buttonVariants({ variant: "tertiary-inverted", size: "lg" }),
                "w-full md:w-auto"
              )}
            >
              See demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
