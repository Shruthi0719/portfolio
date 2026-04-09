"use client";

import { motion } from "framer-motion";
import { fadeUp, ease, viewportOnce } from "@/lib/motion";

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Twitter / X", href: "https://x.com/yourusername" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid var(--c-border)",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 14vw, 180px) clamp(24px, 5vw, 80px)",
      }}
    >
      {/* Large background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80vw",
        height: "60vh",
        background: "radial-gradient(ellipse, rgba(200,255,87,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.p
          className="text-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{ marginBottom: "24px" }}
        >
          — Let's talk
        </motion.p>

        {/* Big CTA heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={viewportOnce}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 8vw, 120px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginBottom: "clamp(32px, 5vw, 64px)",
          }}
        >
          Have something<br />
          <span style={{ color: "var(--c-muted)", fontStyle: "italic" }}>to build?</span>
        </motion.h2>

        {/* Email link */}
        <motion.a
          href="mailto:hello@shruthi.dev"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={2}
          viewport={viewportOnce}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--c-text)",
            textDecoration: "none",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "4px",
            marginBottom: "clamp(40px, 6vw, 72px)",
            transition: "color 0.2s, border-color 0.2s",
          }}
          whileHover={{
            color: "var(--c-accent)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--c-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--c-border)")}
        >
          hello@shruthi.dev
        </motion.a>

        {/* Bottom row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={3}
          viewport={viewportOnce}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            paddingTop: "32px",
            borderTop: "1px solid var(--c-border)",
          }}
        >
          {/* Socials */}
          <div style={{ display: "flex", gap: "32px" }}>
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ fontSize: "13px" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontSize: "12px", color: "var(--c-muted)", fontWeight: 300 }}>
            © 2025 Shruthi R. Designed & built with care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
