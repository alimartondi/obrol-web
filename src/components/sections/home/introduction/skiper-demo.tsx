"use client";

import { StickyCard_001 } from "@/components/ui/skiper-ui/skiper16";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const projects = [
  {
    title: "Your Project 1",
    src: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Your Project 2",
    src: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Your Project 3",
    src: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Your Project 4",
    src: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more projects as needed
];

const DemoSkiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pt-[60px] pb-[300px]">
      <div className="container-wrapper relative">
        <div className="text-center max-w-4xl mx-auto translate-y-[26px]">
          <h2 className="secondary-title">
            Obrol is Indonesia's First On-Ground Intelligence Platform.
          </h2>
        </div>

        <div
          ref={container}
          className="relative flex w-full flex-col items-center justify-center"
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

export default DemoSkiper16;

{
  /* <PropsTable
  props={[
    {
      name: "i",
      description: "Index of the card in the stack",
      default: "0",
    },
    {
      name: "title",
      description: "Title of the project",
      default: "Project",
    },
    {
      name: "src",
      description: "Image source path for the project card",
      default: "/images/lummi/img8.png",
    },
    {
      name: "progress",
      description: "Scroll progress value from framer-motion useScroll hook",
      default: "MotionValue",
    },
    {
      name: "range",
      description: "Scroll range for animation [start, end]",
      default: "[0, 1]",
    },
    {
      name: "targetScale",
      description: "Target scale value for the card transformation",
      default: "0.5",
    },
  ]}
/> */
}
