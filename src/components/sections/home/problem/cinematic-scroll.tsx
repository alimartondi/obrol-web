"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function CinematicScroll() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const yOne = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const yTwo = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <h1 className="text-6xl font-bold z-10">HELLO CAMERA</h1>

        <motion.div
          style={{ y: yOne }}
          className="absolute left-[20%] top-[80%]"
        >
          <div className="w-60 h-80 bg-blue-500 rounded-xl" />
        </motion.div>

        <motion.div
          style={{ y: yTwo }}
          className="absolute right-[20%] top-90%]"
        >
          <div className="w-60 h-80 bg-red-500 rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
}
