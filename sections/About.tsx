"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ borderTop: "1px solid var(--c-border)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Label */}
        <motion.p
          className="text-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{ marginBottom: "clamp(40px, 6vw, 72px)" }}
        >
          — About
        </motion.p>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 8vw, 120px)",
          }}
        >
          {/* Left — statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2
              className="text-title"
              style={{
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              I like building systems
              <br />
              that just{" "}
              <span style={{ fontStyle: "italic", color: "var(--c-muted)" }}>
                make sense.
              </span>
            </h2>
          </motion.div>

          {/* Right — content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            viewport={viewportOnce}
          >
            <p
              style={{
                fontSize: "16px",
                color: "var(--c-muted)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "20px",
              }}
            >
              I’m a full-stack developer who enjoys working on problems that involve
              real-time systems, scalability, and clean architecture.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "var(--c-muted)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "20px",
              }}
            >
              I focus on writing code that is simple, reliable, and easy to reason about.
              I care about how things work under the hood — not just how they look.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "var(--c-muted)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Lately, I’ve been building systems around collaboration, cloud infrastructure,
              and performance — trying to understand what makes software feel fast,
              stable, and intuitive.
            </p>

            {/* Stack */}
            <div style={{ marginTop: "40px" }}>
              <p className="text-label" style={{ marginBottom: "16px" }}>
                Core stack
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "AWS",
                  "PostgreSQL",
                  "MongoDB",
                  "WebSockets",
                ].map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}