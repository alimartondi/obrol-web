"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

import clsx from "clsx";
import SplitText from "@/components/reactbits/SplitText";

export default function Hero() {
  return (
    <section className="relative pt-56 xl:pt-64 lg:pb-16 pb-12">
      <div className="container-wrapper">
        <div className="relative max-w-5xl md:text-center gap-8 flex flex-col items-center z-10 mx-auto">
          <SplitText
            tag="h1"
            text="Convert Every On-ground Conversation into Actionable Intelligence"
            className="primary-title overflow-visible text-left! md:text-center!"
            delay={100}
            duration={2}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          {/* <SplitText
            text=" Obrol is the first AI platform that turns frontline conversations
            into the ground truth your teams can rely on"
            className="font-medium max-w-xl text-left! md:text-center!"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          /> */}

          {/* <h1 className="primary-title">
            Convert Every On-ground Conversation into Actionable Intelligence
          </h1> */}
          <p className="max-w-xl">
            Obrol is the first AI platform that turns frontline conversations
            into the ground truth your teams can rely on
          </p>
        </div>

        <div className="relative z-10 flex justify-center gap-4 mt-6 lg:mt-8">
          <Link
            href={"/join-witlist"}
            className={clsx(
              buttonVariants({ variant: "default", size: "lg" }),
              "flex-1 md:flex-none"
            )}
          >
            Join waitlist
          </Link>
          <Link
            href={"/join-witlist"}
            className={clsx(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "flex-1 md:flex-none"
            )}
          >
            See demo
          </Link>
        </div>

        <div className="w-full relative z-10 aspect-video bg-accent rounded-lg mt-10 lg:mt-20"></div>
      </div>
      <BackgroundRippleEffect />
    </section>
  );
}
