"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 80px",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        
        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "24px",
          }}
        >
          Curious enough to figure it out.
          <br />
          Careful enough to do it{" "}
          <span style={{ color: "#c8ff57" }}>right.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            color: "#9CA3AF",
            fontSize: "18px",
            lineHeight: 1.6,
            marginBottom: "40px",
            maxWidth: "500px",
          }}
        >
          Full-stack developer. Curious by nature. Serious about craft.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "16px" }}>
          <a
            href="#work"
            style={{
              padding: "12px 24px",
              background: "#c8ff57",
              borderRadius: "999px",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View Work →
          </a>

          <a
            href="#contact"
            style={{
              padding: "12px 24px",
              border: "1px solid #333",
              borderRadius: "999px",
              color: "#EDEDED",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}