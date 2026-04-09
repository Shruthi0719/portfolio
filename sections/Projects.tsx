"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const projects = [
  {
    id: "cloudsec",
    num: "01",
    title: "ClouSec",
    subtitle: "Cloud Security Platform",
    description:
      "Real-time AWS infrastructure monitoring using event-driven architecture. Tracks misconfigurations in EC2, S3, and IAM with severity-based alerting and a React dashboard.",
    tags: ["Python", "Flask", "React", "AWS", "CloudTrail", "EventBridge", "Boto3"],
    links: { code: "https://github.com/Shruthi0719/ClouSec" },
    highlight: "Event-driven · AWS-native",
  },
  {
    id: "collabcode",
    num: "02",
    title: "CollabCode",
    subtitle: "Real-Time Collaborative Editor",
    description:
      "Google Docs-style code editor for multiple simultaneous users. Implements Operational Transformation for concurrent edit consistency, with live code execution and output streaming.",
    tags: ["Node.js", "React", "WebSockets", "OT Algorithm"],
    links: { code: "https://github.com/Shruthi0719/CollabCode", live: "https://collabcode-x.vercel.app/" },
    highlight: "OT algorithm · Real-time sync",
  },
  {
    id: "hospital",
    num: "03",
    title: "Hospital PMS",
    subtitle: "Patient Management System",
    description:
      "Full-stack hospital workflow management with RESTful APIs, patient record CRUD, and efficient MongoDB querying. Designed for smooth data flow across the entire stack.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    links: { code: "#" },
    highlight: "Full-stack · RESTful",
  },
  {
    id: "traffic",
    num: "04",
    title: "AI Traffic Monitor",
    subtitle: "Computer Vision System",
    description:
      "OpenCV-based traffic monitoring that estimates vehicle density and dynamically adjusts signal timings. Simulated under real-world varying traffic loads.",
    tags: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    links: { code: "#" },
    highlight: "OpenCV · Dynamic control",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="projects" ref={ref} className="py-32 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label mb-4"
            >
              <span className="inline-block w-6 h-px bg-accent mr-3 align-middle" />
              Selected Work
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] tracking-tighter leading-none"
              >
                Projects
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs text-grey-4 tracking-widest uppercase"
          >
            {projects.length} Case Studies
          </motion.p>
        </div>

        {/* Project list */}
        <div ref={containerRef} className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            {projects.map((project, i) => (
              
              <motion.div
                key={project.id}
                variants={fadeUp}
                custom={i}

                /* ✅ ONLY CHANGE HERE */
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}

                className="group project-card border-t border-grey-2 last:border-b hover:bg-white/[0.02] transition-all duration-300"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start cursor-default">
                  
                  <div className="font-mono text-xs text-grey-3 pt-1 hidden md:block">
                    {project.num}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>

                      <span className="font-mono text-xs text-grey-4 border border-grey-2 px-2 py-0.5 rounded-sm">
                        {project.subtitle}
                      </span>
                    </div>

                    <p className="text-grey-4 text-sm leading-relaxed max-w-2xl mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-4 pt-0 md:pt-1">
                    <span className="font-mono text-[10px] text-accent tracking-widest hidden md:block">
                      {project.highlight}
                    </span>

                    <div className="flex gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-grey-4 hover:text-accent transition-colors flex items-center gap-1.5 border border-grey-2 hover:border-accent/40 px-3 py-1.5 rounded-sm"
                        >
                          Live ↗
                        </a>
                      )}

                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-grey-4 hover:text-white transition-colors flex items-center gap-1.5 border border-grey-2 hover:border-grey-3 px-3 py-1.5 rounded-sm"
                      >
                        Code ↗
                      </a>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ scaleX: hoveredId === project.id ? 1 : 0 }}
                  initial={{ scaleX: 0 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-px bg-accent mb-0"
                />
              </motion.div>

            ))}
          </motion.div>

          {hoveredId && (
            <motion.div
              className="absolute pointer-events-none rounded-sm"
              style={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(200,255,87,0.04) 0%, transparent 60%)`,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}