import clsx from "clsx";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="pb-10 lg:pb-12 pt-16 lg:pt-21.5 bg-primary">
      <div className="container-wrapper space-y-12">
        <div className="max-w-5xl mx-auto text-center text-white grid gap-4">
          <h2 className="secondary-title">Get Early Access</h2>
          <p className="text-pretty">
            Obrol is currently piloting with selected partners across fintech,
            MSME, research, and enterprise sectors.
          </p>
          <div className="flex gap-4 w-full justify-center mt-2">
            <Link
              href={"/join-witlist"}
              className={clsx(
                buttonVariants({ variant: "tertiary", size: "lg" }),
              )}
            >
              Join waitlist
            </Link>
          </div>
        </div>

        <ul className="text-center text-muted space-y-3">
          <h6 className="text-xl font-medium">Sections</h6>
          <li className="text-accent/75">Introduction</li>
          <li className="text-accent/75">Problem</li>
          <li className="text-accent/75">Solution</li>
          <li className="text-accent/75">People</li>
        </ul>

        <div className="flex justify-center gap-2">
          <SocialIcon
            url="https://www.facebook.com/"
            target="_blank"
            bgColor="#ffffff"
            fgColor="#0A52B4"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.instagram.com/"
            target="_blank"
            bgColor="#ffffff"
            fgColor="#0A52B4"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/"
            target="_blank"
            bgColor="#ffffff"
            fgColor="#0A52B4"
            style={{ height: 40, width: 40 }}
          />
        </div>

        <div className="grid gap-4">
          <hr className="opacity-50" />

          <div className="text-center flex justify-between">
            <p className="text-muted/75">
              &copy; {new Date().getFullYear()} | All rights reserved
            </p>
            <p className="text-muted/75">powered by Obrol</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
