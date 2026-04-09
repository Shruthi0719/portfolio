"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        backdropFilter: "blur(12px)",
        background: scrolled ? "rgba(0,0,0,0.6)" : "transparent",
        transition: "all 0.3s ease",
        zIndex: 100,
      }}
    >
      <span style={{ fontWeight: 600 }}>
        R. Shruthi Yadav
      </span>

      <div style={{ display: "flex", gap: "24px" }}>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}