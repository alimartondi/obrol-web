"use client";

import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

import clsx from "clsx";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

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
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.1}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.2}
          >
            <p className="max-w-xl">
              Obrol is the first AI platform that turns frontline conversations
              into the ground truth your teams can rely on
            </p>
          </AnimatedContent>
        </div>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.1}
          animateOpacity
          scale={1}
          threshold={0}
          delay={0.2}
          className="relative z-10 flex justify-center gap-4 mt-8"
        >
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
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.1}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.3}
          className="relative z-10 mt-16 lg:mt-20"
        >
          <Image
            src="/images/Obrol-Dashboard.svg"
            alt="Dashboard"
            width={1512}
            height={997}
            priority
            quality={100}
            className="object-cover"
          />
        </AnimatedContent>
      </div>
      <BackgroundRippleEffect />
    </section>
  );
}
