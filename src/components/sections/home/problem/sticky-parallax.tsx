"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function StickyParallax() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const cardOneY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const cardTwoY = useTransform(scrollYProgress, [0, 1], [800, -800]);

  return (
    <section ref={container} className="relative h-[300vh]">
      {/* sticky text */}

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">HELLO MOTION</h1>
      </div>

      {/* card layer */}

      <motion.div style={{ y: cardOneY }} className="absolute left-[20%]">
        <div className="w-60 h-80 bg-blue-500 rounded-xl" />
      </motion.div>

      <motion.div style={{ y: cardTwoY }} className="absolute  right-[20%]">
        <div className="w-60 h-80 bg-red-500 rounded-xl" />
      </motion.div>
    </section>
  );
}
