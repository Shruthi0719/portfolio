"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-start overflow-hidden px-6 md:px-12 py-16"
    >
      {/* FLOWING BLOBS */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute w-[500px] h-[500px] bg-[#c8ff57] opacity-[0.05] blur-[120px] top-[20%] left-[10%] rounded-full" />
        <div className="absolute w-[400px] h-[400px] bg-[#4488ff] opacity-[0.04] blur-[120px] bottom-[10%] right-[10%] rounded-full" />
      </motion.div>

      {/* FLOATING CODE */}
      <motion.pre
        style={{ opacity }}
        className="absolute right-[10%] top-[40%] text-xs font-mono text-white opacity-20"
      >
{`const scale = (system) => {
  while(true){
    improve(system);
  }
}`}
      </motion.pre>

      {/* TEXT */}
      <motion.div
        style={{ opacity }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          I don’t just build projects.
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          I design systems that handle real users, real data, and real scale.
          From real-time collaboration to scalable backend systems — I focus on
          building things that actually work outside the demo.
        </p>
      </motion.div>
    </section>
  );
}