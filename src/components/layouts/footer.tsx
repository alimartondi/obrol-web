import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="pb-12 pt-16 lg:pt-21.5 bg-primary">
      <div className="container-wrapper space-y-12">
        <div className="max-w-5xl mx-auto text-center text-white grid gap-4">
          <h2 className="secondary-title">Get Early Access</h2>
          <p>
            Obrol is currently piloting with selected partners across fintech,
            MSME, research, and enterprise sectors.
          </p>
          <div className="flex gap-4 w-full justify-center mt-4">
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

        <div className="text-center space-y-3">
          <div className="text-white">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} | All rights reserved
            </p>
          </div>
          <p className="text-muted">powered by Obrol</p>
        </div>
      </div>
    </footer>
  );
}
