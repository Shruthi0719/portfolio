"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/motion";

const words = ["Scale.", "Think.", "Feel."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 clamp(24px, 5vw, 80px) clamp(48px, 8vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "30%",
        right: "-10%",
        width: "50vw",
        height: "50vw",
        maxWidth: "700px",
        maxHeight: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,255,87,0.045) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "-5%",
        width: "40vw",
        height: "40vw",
        maxWidth: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(80,120,255,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <motion.div style={{ y, opacity }}>
        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "clamp(28px, 4vw, 48px)",
          }}
        >
          <span style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "var(--c-accent)",
            boxShadow: "0 0 12px var(--c-accent)",
            display: "inline-block",
            animation: "pulse 2s ease-in-out infinite",
          }} />
          <span className="text-label">Available for work</span>
          <span style={{ color: "var(--c-border-hover)", margin: "0 4px" }}>·</span>
          <span className="text-label">Based in Hyderabad, IN</span>
        </motion.div>

        {/* Hero heading */}
        <h1 className="text-hero" style={{ marginBottom: "clamp(20px, 3vw, 32px)" }}>
          {["I build", "systems that"].map((line, li) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.2 + li * 0.12 }}
              style={{ display: "block" }}
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.44 }}
            style={{ display: "block", color: "var(--c-accent)" }}
          >
            scale & inspire.
          </motion.span>
        </h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            paddingTop: "clamp(28px, 4vw, 48px)",
            borderTop: "1px solid var(--c-border)",
          }}
        >
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            color: "var(--c-muted)",
            maxWidth: "420px",
            lineHeight: 1.65,
            fontWeight: 300,
          }}>
            Full-stack developer crafting intelligent systems, beautiful interfaces,
            and experiences that people remember.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#work" className="btn btn-primary">
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "clamp(28px, 4vw, 48px)",
          right: "clamp(24px, 5vw, 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{
          width: "1px",
          height: "60px",
          background: "linear-gradient(to bottom, transparent, var(--c-border-hover))",
          animation: "scrollLine 2s ease-in-out infinite",
        }} />
        <span className="text-label" style={{ writingMode: "vertical-rl", fontSize: "10px" }}>scroll</span>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 12px var(--c-accent); opacity: 1; }
          50% { box-shadow: 0 0 20px var(--c-accent); opacity: 0.7; }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
