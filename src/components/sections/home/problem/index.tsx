"use client";

import ProblemCard from "./problem-card";
import type { ProblemItem } from "@/types/data";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import ParallaxScrollDemo from "./parallax-scroll-demo";
import StickyParallax from "./sticky-parallax";
import CinematicScroll from "./cinematic-scroll";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

export default function Problem() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -250]);
  const y4 = useTransform(scrollYProgress, [0, 1], [250, -380]);
  const y5 = useTransform(scrollYProgress, [0, 1], [100, -420]);
  const y6 = useTransform(scrollYProgress, [0, 1], [120, -500]);

  return (
    <section
      ref={ref}
      className="py-16 lg:py-21.5 bg-primary lg:min-h-[180vh] space-y-12"
    >
      <div className="container-wrapper lg:mb-56">
        <div className="text-center max-w-4xl mx-auto text-white lg:sticky lg:top-44 mb-12">
          <h2 className="secondary-title">
            The Problem with Frontline Interactions.
          </h2>
        </div>

        <div className="grid gap-6 lg:hidden">
          {problems.map((problem, index) => (
            <AnimatedContent
              key={index}
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
              <Card className="backdrop-blur-lg bg-muted/35 rounded-xl border-0">
                <CardContent className="grid gap-40">
                  <div className="h-12 w-12 border rounded-lg"></div>
                  <CardDescription className="text-white">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedContent>
          ))}
        </div>

        <div className="hidden lg:block">
          <motion.div style={{ y: y1 }} className="grid lg:grid-cols-4">
            <Card className="backdrop-blur-lg bg-muted/35 rounded-xl">
              <CardContent className="grid gap-40">
                <div className="h-12 w-12 border rounded-lg"></div>
                <CardDescription className="text-white">
                  Customer interactions are rarely captured or analysed
                  consistently.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div style={{ y: y2 }} className="grid lg:grid-cols-4">
            <Card className="backdrop-blur-lg bg-muted/35 rounded-xl col-start-4">
              <CardContent className="grid gap-40">
                <div className="h-12 w-12 border rounded-lg"></div>
                <CardDescription className="text-white">
                  Customer interactions are rarely captured or analysed
                  consistently.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div style={{ y: y3 }} className="grid lg:grid-cols-4">
            <Card className="backdrop-blur-lg bg-muted/35 rounded-xl col-start-2">
              <CardContent className="grid gap-40">
                <div className="h-12 w-12 border rounded-lg"></div>
                <CardDescription className="text-white">
                  Customer interactions are rarely captured or analysed
                  consistently.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div style={{ y: y4 }} className="grid lg:grid-cols-4">
            <Card className="backdrop-blur-lg bg-muted/35 rounded-xl col-start-4">
              <CardContent className="grid gap-40">
                <div className="h-12 w-12 border rounded-lg"></div>
                <CardDescription className="text-white">
                  Customer interactions are rarely captured or analysed
                  consistently.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div style={{ y: y5 }} className="grid lg:grid-cols-4">
            <Card className="backdrop-blur-lg bg-muted/35 rounded-xl col-start-1">
              <CardContent className="grid gap-40">
                <div className="h-12 w-12 border rounded-lg"></div>
                <CardDescription className="text-white">
                  Customer interactions are rarely captured or analysed
                  consistently.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div style={{ y: y6 }} className="grid lg:grid-cols-4">
            <Card className="backdrop-blur-lg bg-muted/35 rounded-xl col-start-3">
              <CardContent className="grid gap-40">
                <div className="h-12 w-12 border rounded-lg"></div>
                <CardDescription className="text-white">
                  Customer interactions are rarely captured or analysed
                  consistently.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="container-wrapper text-center">
        <div className="text-center max-w-6xl mx-auto text-white lg:sticky top-44">
          <h2 className="text-2xl lg:text-6xl font-medium text-pretty">
            This disconnect limits performance, wastes resources, and slows down
            decision-making.
          </h2>
        </div>
      </div>
    </section>
  );
}

const problems: ProblemItem[] = [
  {
    icon: "",
    description:
      "Customer interactions are rarely captured or analysed consistently",
  },
  {
    icon: "",
    description:
      "Reporting is manual or incomplete, pulling time away from frontline selling and customer experience",
  },
  {
    icon: "",
    description:
      "Information is filtered as it moves up the organisation, reducing accuracy",
  },
  {
    icon: "",
    description:
      "Limited visibility makes it hard to identify coaching and improvement opportunities",
  },
  {
    icon: "",
    description:
      "Too many layers sit between the field force and decision-makers",
  },
  {
    icon: "",
    description: "By the time insights reach leaders, they are often outdated",
  },
];
