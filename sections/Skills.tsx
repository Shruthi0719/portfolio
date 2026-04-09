"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const categories = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Flask"],
  },
  {
    label: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Distributed Systems",
    ],
  },
  {
    label: "Tools",
    items: ["AWS", "Git", "Linux", "WebSockets"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad"
      style={{ borderTop: "1px solid var(--c-border)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          className="text-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{ marginBottom: "16px" }}
        >
          — Capabilities
        </motion.p>

        <motion.h2
          className="text-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={viewportOnce}
          style={{ marginBottom: "clamp(48px, 7vw, 80px)" }}
        >
          What I work with.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "2px",
            background: "var(--c-border)",
            border: "1px solid var(--c-border)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {categories.map(({ label, items }, ci) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={ci * 0.5}
              viewport={viewportOnce}
              style={{
                background: "var(--c-surface)",
                padding: "clamp(24px, 3vw, 40px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--c-accent)",
                  marginBottom: "24px",
                }}
              >
                {label}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {items.map((item, ii) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{
                      duration: 0.5,
                      delay: ci * 0.05 + ii * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "var(--c-muted)",
                      fontWeight: 300,
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--c-border-hover)",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}