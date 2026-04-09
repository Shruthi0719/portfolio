"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "24px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#EDEDED",
        }}
      >
        R. Shruthi Yadav
      </span>

      <div style={{ display: "flex", gap: "28px" }}>
        {["Work", "About", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              textDecoration: "none",
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}