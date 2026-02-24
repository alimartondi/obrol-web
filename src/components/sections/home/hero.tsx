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
    <section className="relative pt-52 xl:pt-64 lg:pb-16 pb-12">
      <div className="container-wrapper">
        <div className="relative max-w-5xl md:text-center md:justify-center gap-6 flex flex-col z-10 mx-auto">
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
            className="relative z-10"
          >
            <span className="bg-primary/15 w-fit rounded-full py-1.5 px-5 h-9 inline-flex items-center justify-center font-medium text-primary">
              Lorem ipsum
            </span>
          </AnimatedContent>

          <SplitText
            tag="h1"
            text="Convert Conversations with Your Customers into Commercial Intelligence"
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

          <SplitText
            tag="p"
            text="Obrol enables you to perform analytics on real world conversations
              with your customers. Extract the signals from the noise and turn
              the voice of your customers into actionable insights that can grow
              your sales."
            className="max-w-3xl text-left! md:text-center! md:mx-auto"
            delay={100}
            duration={2}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          {/* <h1 className="primary-title">
            Convert Every On-ground Conversation into Actionable Intelligence
          </h1> */}
          {/* <AnimatedContent
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
            <p className="max-w-3xl text-pretty">
              Obrol enables you to perform analytics on real world conversations
              with your customers. Extract the signals from the noise and turn
              the voice of your customers into actionable insights that can grow
              your sales.
            </p>
          </AnimatedContent> */}
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
              "flex-1 md:flex-none rounded-lg",
            )}
          >
            Join waitlist
          </Link>
          <Link
            href={"/join-witlist"}
            className={clsx(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "flex-1 md:flex-none",
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
            className="object-cover"
          />
        </AnimatedContent>
      </div>
      <BackgroundRippleEffect />
    </section>
  );
}
