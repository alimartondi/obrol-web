"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import Image from "next/image";
import React, { useRef } from "react";

const projects = [
  {
    title: "Project 1",
    src: "/images/lummi/img8.png",
  },
  {
    title: "Project 2",
    src: "/images/lummi/img14.png",
  },
  {
    title: "Project 3",
    src: "/images/lummi/img10.png",
  },
  {
    title: "Project 4",
    src: "/images/lummi/img15.png",
  },
  {
    title: "Project 5",
    src: "/images/lummi/img12.png",
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  description,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  description: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-6vh + ${i * 32 + 150}px)`,
        }}
        className="rounded-4xl relative flex origin-top flex-col overflow-hidden"
      >
        <div className="relative bg-muted rounded-2xl grid lg:grid-cols-2 p-6 lg:p-12 gap-6 lg:gap-16 overflow-hidden max-h-[calc(100vh-20vh)]">
          <div
            className={`${i % 2 === 0 ? "order-2" : "order-1"} relative aspect-5/4 bg-muted rounded-xl overflow-hidden`}
          >
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 768px)50vw, 100vw"
              className="object-cover h-auto w-full"
            />
          </div>
          <div className={`${i % 2 === 0 ? "order-1" : "order-2"} "space-y-4"`}>
            <h3 className="text-5xl font-semibold">{i + 1}</h3>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// const Skiper16 = () => {
//   const container = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       <main
//         ref={container}
//         className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[50vh]"
//       >
//         <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
//           <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
//             scroll down to see card stack
//           </span>
//         </div>
//         {projects.map((project, i) => {
//           const targetScale = Math.max(
//             0.5,
//             1 - (projects.length - i - 1) * 0.1,
//           );
//           return (
//             <StickyCard_001
//               key={`p_${i}`}
//               i={i}
//               {...project}
//               progress={scrollYProgress}
//               range={[i * 0.25, 1]}
//               targetScale={targetScale}
//             />
//           );
//         })}
//       </main>
//     </ReactLenis>
//   );
// };

export { StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
