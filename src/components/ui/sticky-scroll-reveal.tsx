"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description?: string;
    items?: string[];
    source: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className="relative flex justify-between gap-16"
      ref={ref}
    >
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "w-1/2 sticky top-40 hidden h-full aspect-square max-h-[calc(100vh-220px)] overflow-hidden rounded-xl bg-white lg:block",
          contentClassName,
        )}
      >
        <Image
          src={content[activeCard].source}
          alt={content[activeCard].title}
          fill
          className="h-full w-full object-cover"
        />
        {/* {content[activeCard].content ?? null} */}
      </div>

      <div className="w-1/2 relative flex items-start">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-36">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="secondary-title text-balance"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-6 text-muted-foreground"
              >
                {item.description}
              </motion.p>
              <motion.ul
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
              >
                {item.items?.map((item, i) => (
                  <motion.li
                    key={item + i}
                    className="text-kg mt-6 text-muted-foreground flex gap-3"
                  >
                    <CheckCircle2 className="size-5 mt-1 text-primary" />
                    <p className="flex-1">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
          <div className="h-22" />
        </div>
      </div>
    </motion.div>
  );
};
