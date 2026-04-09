"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, scaleIn, fadeUp } from "@/lib/motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    category: "Frontend",
    icon: "◈",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "⬡",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "WebSockets"],
  },
  {
    category: "Databases",
    icon: "⬢",
    skills: ["MongoDB", "SQL", "AWS RDS"],
  },
  {
    category: "Cloud & Infra",
    icon: "☁",
    skills: ["AWS", "CloudTrail", "EventBridge", "EC2", "S3", "IAM"],
  },
  {
    category: "Tools & Hardware",
    icon: "⟨/⟩",
    skills: ["Git", "Linux", "FPGA", "Xilinx Vivado", "OpenCV"],
  },
  {
    category: "CS Fundamentals",
    icon: "∑",
    skills: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "Distributed Systems"],
  },
];

const marqueeItems = [
  "Python", "React", "Node.js", "AWS", "TypeScript", "MongoDB",
  "Next.js", "Flask", "WebSockets", "FPGA", "OpenCV", "Git",
  "Linux", "DSA", "Distributed Systems", "Cloud Security",
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-32 md:py-40 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="blob absolute w-[600px] h-[600px] opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #c8ff57 0%, transparent 70%)",
          bottom: "-100px",
          right: "-200px",
        }}
      />

      {/* Marquee strip */}
      <div className="mb-20 overflow-hidden border-y border-grey-2 py-4">
        <div className="flex whitespace-nowrap">
          <div className="marquee-inner flex gap-8 items-center">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-mono text-xs tracking-widest text-grey-3 uppercase">
                {item} <span className="text-accent mx-2">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-4"
          >
            <span className="inline-block w-6 h-px bg-accent mr-3 align-middle" />
            Technical Skills
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] tracking-tighter leading-none"
            >
              The Stack
            </motion.h2>
          </div>
        </div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              custom={i}
              className="group p-6 border border-grey-2 rounded-sm hover:border-grey-3 bg-grey-1/20 hover:bg-grey-1/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-accent text-sm">{group.icon}</span>
                <span className="font-display font-bold text-sm tracking-tight">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="font-mono text-xs text-grey-4 group-hover:text-grey-5 border border-grey-2 group-hover:border-grey-3 px-2.5 py-1 rounded-sm transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-grey-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <p className="text-grey-4 text-sm max-w-lg">
            Currently exploring Kubernetes, Go, and advanced AWS services. Always expanding the stack.
          </p>
          <span className="section-label">Always Learning</span>
        </motion.div>
      </div>
    </section>
  );
}