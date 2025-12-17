import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Intelligence() {
  return (
    <section className="pt-12 lg:py-16 pb-16 lg:pb-24">
      <div className="container-wrapper grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="aspect-square rounded-lg bg-accent"></div>
        <div className="space-y-6">
          <h2 className="secondary-title">On-ground Intelligence</h2>
          <div className="space-y-4">
            <p>
              Obrol shows you and your teams what&apos;s happening on the
              ground, why it&apos;s happening, and how to improve. By
              structuring real frontline conversations into patterns and
              insights, Obrol delivers the ground truth your teams have never
              had before
            </p>
            <p>
              We&apos;re building On-ground Intelligence, a new category shaped
              entirely by frontline conversations.
            </p>
          </div>
          <Link
            href="/join-witlist"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
