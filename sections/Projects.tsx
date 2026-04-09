"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, ease, viewportOnce } from "@/lib/motion";

interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    num: "01",
    title: "CollabCode — Real-Time Code Editor",
    desc: "A real-time collaborative coding platform enabling multiple users to edit and execute code simultaneously. Built using WebSockets and Operational Transformation (OT) to ensure consistency across concurrent edits. Includes multi-language execution with live output streaming.",
    tags: ["React", "Node.js", "WebSockets", "Operational Transformation"],
    link: "https://your-live-link.com",
    featured: true,
  },
  {
    num: "02",
    title: "ClouSec — Cloud Security Platform",
    desc: "Event-driven cloud security system that monitors AWS infrastructure in real time using CloudTrail and EventBridge. Detects misconfigurations across EC2, S3, and IAM, and visualizes vulnerabilities through an interactive dashboard.",
    tags: ["Python", "Flask", "AWS", "React", "EventBridge"],
    link: "https://your-live-link.com",
    featured: true,
  },
  {
    num: "03",
    title: "AI Traffic Monitoring System",
    desc: "Computer vision-based traffic monitoring system using OpenCV to estimate vehicle density and dynamically adjust signal timings. Simulates real-world traffic conditions to optimize flow and reduce congestion.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    link: "https://github.com/yourusername",
  },
  {
    num: "04",
    title: "Hospital Patient Management System",
    desc: "Full-stack application to manage hospital workflows and patient records using a RESTful backend. Designed efficient CRUD APIs and ensured seamless data flow between frontend and backend systems.",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
    link: "https://github.com/yourusername",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={slideLeft}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={viewportOnce}
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        alignItems: "start",
        gap: "24px",
        padding: "32px 0",
        borderTop: "1px solid var(--c-border)",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
      whileHover={{ paddingLeft: "12px" }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--c-accent)",
          letterSpacing: "0.05em",
          paddingTop: "3px",
        }}
      >
        {project.num}
      </span>

      {/* Content */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "8px",
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--c-text)",
            }}
          >
            {project.title}
          </h3>

          {project.featured && (
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "100px",
                background: "var(--c-accent-dim)",
                border: "1px solid rgba(200,255,87,0.2)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--c-accent)",
              }}
            >
              Featured
            </span>
          )}
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "var(--c-muted)",
            lineHeight: 1.7,
            maxWidth: "620px",
            marginBottom: "16px",
            fontWeight: 300,
          }}
        >
          {project.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map((t) => (
            <span key={t} className="tag" style={{ fontSize: "11px", padding: "3px 10px" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <motion.div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid var(--c-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--c-muted)",
          flexShrink: 0,
          marginTop: "3px",
        }}
        whileHover={{
          borderColor: "var(--c-accent)",
          color: "var(--c-accent)",
          scale: 1.08,
        }}
        transition={{ duration: 0.2, ease }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 12L12 2M12 2H5M12 2V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="section-pad"
      style={{ borderTop: "1px solid var(--c-border)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "clamp(40px, 6vw, 72px)",
          }}
        >
          <div>
            <motion.p
              className="text-label"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              style={{ marginBottom: "16px" }}
            >
              — Selected Work
            </motion.p>

            <motion.h2
              className="text-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={viewportOnce}
            >
              Systems I&apos;ve built.
            </motion.h2>
          </div>

          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={2}
            viewport={viewportOnce}
          >
            All on GitHub ↗
          </motion.a>
        </div>

        <div style={{ borderBottom: "1px solid var(--c-border)" }}>
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}