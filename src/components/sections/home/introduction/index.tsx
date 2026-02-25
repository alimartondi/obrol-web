"use client";

import { StickyCard_001 } from "@/components/ui/skiper-ui/skiper16";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import IntroductionCard from "./introduction-card";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

const Introduction = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pt-16 pb-16 lg:pt-[60px] lg:pb-[300px]">
      <div className="container-wrapper relative">
        <div className="md:text-center max-w-5xl mx-auto lg:translate-y-[26px] mb-12">
          <h2 className="secondary-title text-pretty">
            Obrol is Indonesia's First On-Ground Intelligence Platform
          </h2>
        </div>

        <div className="grid gap-6 lg:hidden">
          {projects.map((project, i) => (
            <AnimatedContent
              key={i}
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
            >
              <IntroductionCard i={i} {...project} />
            </AnimatedContent>
          ))}
        </div>

        <div
          ref={container}
          className="hidden lg:flex relative w-full flex-col justify-center items-center"
        >
          {projects.map((project, i) => {
            const targetScale = Math.max(
              0.5,
              1 - (projects.length - i - 1) * 0.1,
            );
            return (
              <StickyCard_001
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Introduction;

const projects = [
  {
    title: "Your Project 1",
    src: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "On-Ground Intelligence is a new category built entirely from frontline conversations. Instead of relying on reports, summaries, or assumptions, Obrol captures real-world voice interactions from sales promoters, field teams, and frontline staff in any language and environment.",
  },
  {
    title: "Your Project 2",

    src: "https://images.unsplash.com/photo-1733723518099-988dcbc2dc44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "These conversations are transformed into structured, decision-ready intelligence, giving organisations a clear understanding of what customers actually say, what influences their decisions, and where performance can be improved.",
  },
  {
    title: "Your Project 3",
    src: "https://images.unsplash.com/photo-1728929103970-089d7e4fff19?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "We're building On-Ground Intelligence to help teams make better decisions, improve execution, and align strategy with what is truly happening on the ground.",
  },
  {
    title: "Your Project 4",
    src: "https://images.unsplash.com/photo-1594267100238-fd7b1925d6a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "If digital analytics transformed how organisations understand online behaviour, On-Ground Intelligence brings that same clarity to the physical world.",
  },
];
