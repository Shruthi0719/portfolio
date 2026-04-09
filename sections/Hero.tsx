"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroLine, fadeIn } from "@/lib/motion";

const headline = ["Curious", "enough", "to figure it out.", "Careful", "enough", "to do it right."];

const subWords = ["Real-Time Systems", "Full-Stack", "Problem Solving"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    const paths = [
      "M420,310Q380,370,310,400Q240,430,170,390Q100,350,80,270Q60,190,110,130Q160,70,250,60Q340,50,400,110Q460,170,460,240Q460,310,420,310Z",
      "M440,280Q430,360,350,410Q270,460,190,410Q110,360,90,270Q70,180,130,110Q190,40,290,50Q390,60,440,140Q490,220,440,280Z",
      "M410,320Q360,400,270,420Q180,440,120,360Q60,280,80,190Q100,100,190,70Q280,40,360,90Q440,140,450,220Q460,300,410,320Z",
      "M430,290Q400,380,310,410Q220,440,150,370Q80,300,90,210Q100,120,180,80Q260,40,350,70Q440,100,450,190Q460,280,430,290Z",
    ];
    let frame = 0;
    let t = 0;
    let raf: number;

    const lerpPath = (p1: string, p2: string, progress: number) => {
      const nums1 = p1.match(/-?\d+\.?\d*/g)?.map(Number) || [];
      const nums2 = p2.match(/-?\d+\.?\d*/g)?.map(Number) || [];
      let idx = 0;
      return p1.replace(/-?\d+\.?\d*/g, () => {
        const v = nums1[idx] + (nums2[idx] - nums1[idx]) * progress;
        idx++;
        return v.toFixed(1);
      });
    };

    const animate = () => {
      t += 0.003;
      if (t >= 1) { t = 0; frame = (frame + 1) % paths.length; }
      const next = (frame + 1) % paths.length;
      const morphed = lerpPath(paths[frame], paths[next], t);
      const el = svgRef.current?.querySelector("#morph-path");
      if (el) el.setAttribute("d", morphed);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] opacity-[0.13]"
          style={{
            background: "radial-gradient(circle, #c8ff57 0%, transparent 70%)",
            top: "5%",
            right: "5%",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }} // ❌ removed opacity (fix ghosting)
        className="relative z-10 max-w-7xl px-6 md:px-12 pt-28 pb-12"
      >
        {/* Label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="section-label mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-accent" />
          Computer Science Undergrad
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          {headline.map((line, i) => (
            <div key={i} className="overflow-hidden leading-none">
              <motion.h1
                custom={i}
                variants={heroLine}
                initial="hidden"
                animate="visible"
                className="font-display font-extrabold text-[clamp(2.6rem,6vw,5rem)] tracking-tighter leading-[0.9] text-white"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {subWords.map((word, i) => (
            <span key={word}>
              <span className="font-mono text-sm text-accent bg-accent/10 px-3 py-1 rounded-sm border border-accent/20">
                {word}
              </span>
              {i < subWords.length - 1 && (
                <span className="text-grey-3 ml-3">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="max-w-xl text-grey-4 text-lg leading-relaxed mb-10">
          Curious enough to figure it out. Careful enough to do it right.
        </p>

        {/* CTA */}
        <div className="mb-12">
          <button
            onClick={() => {
              const el = document.querySelector("#projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-accent text-black font-bold text-sm px-6 py-3 rounded-sm"
          >
            View Work →
          </button>
        </div>

        {/* ✅ FIXED FLOW SECTION */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              I don’t just build projects.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-grey-4 leading-relaxed max-w-md"
            >
              I design systems that handle real users, real data, and real scale —
              focusing on building things that actually work outside the demo.
            </motion.p>
          </div>

          {/* RIGHT */}
          <motion.pre
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-grey-4"
          >
{`const scale = (system) => {
  while(true){
    improve(system);
  }
}`}
          </motion.pre>
        </div>

      </motion.div>
    </section>
  );
}