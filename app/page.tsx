"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────
interface CaseStudy {
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  keyDecisions: string[];
}

interface Project {
  num: string;
  title: string;
  desc: string;
  impact: string;
  tags: string[];
  href: string;
  github?: string;
  live?: string;
  caseStudy?: CaseStudy;
  demoUrl?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    num: "/001",
    title: "ClouSec – Cloud Security Platform",
    desc: "Event-driven monitoring detecting 10+ AWS misconfigurations in real-time",
    impact: "Real-time cloud security misconfiguration detection",
    tags: ["Python", "Flask", "React", "AWS"],
    href: "#",
    github: "https://github.com/Shruthi0719/ClouSec",
    live: "#",
    demoUrl: "https://github.com/Shruthi0719/ClouSec",
    caseStudy: {
      problem: "Cloud infrastructure vulnerabilities are frequently missed during audits, leading to security breaches. Manual reviews are time-consuming and error-prone.",
      solution: "Built an event-driven system that continuously monitors AWS APIs for misconfigured resources, automatically flagging security risks in real-time.",
      architecture: [
        "EventBridge → Lambda pipelines for real-time AWS API monitoring",
        "Python backend analyzing resource configurations against security rules",
        "Flask REST API for rule management and reporting",
        "React dashboard with real-time alerts and remediation guidance",
      ],
      challenges: [
        "Handling high-volume AWS API events without throttling",
        "Distinguishing between intentional and accidental misconfigurations",
        "Providing actionable remediation steps for diverse AWS services",
      ],
      keyDecisions: [
        "Chose EventBridge over polling for cost-efficiency and real-time detection",
        "Implemented rule-based system allowing custom security policies",
        "Used Lambda for serverless scalability without infrastructure overhead",
      ],
    },
  },
  {
    num: "/002",
    title: "CollabCode – Real-Time Code Editor",
    desc: "High-performance collaborative IDE with sub-100ms sync latency",
    impact: "Seamless real-time collaborative code editing",
    tags: ["JavaScript", "Node.js", "WebSockets", "React"],
    href: "#",
    github: "https://github.com/Shruthi0719/CollabCode",
    live: "https://collabcode-x.vercel.app/",
    demoUrl: "https://collabcode-x.vercel.app/",
    caseStudy: {
      problem: "Existing collaborative tools suffer from sync conflicts, latency issues, and poor performance degradation with multiple users. Real-time editing at scale is difficult.",
      solution: "Engineered a collaborative editor with operational transformation for conflict resolution, optimized WebSocket communication, and intelligent caching for sub-100ms latency.",
      architecture: [
        "Node.js server with WebSocket connections for real-time bidirectional communication",
        "Operational Transformation algorithm for conflict-free collaborative editing",
        "Redis for session management and cursor position tracking",
        "React editor with Monaco integration and optimistic UI updates",
        "Binary protocol optimization to reduce payload size by 70%",
      ],
      challenges: [
        "Resolving concurrent edits without losing content or creating conflicts",
        "Maintaining sub-100ms latency with 100+ concurrent users",
        "Handling network disconnections and reconnection sync",
        "Managing memory efficiently with large documents",
      ],
      keyDecisions: [
        "Used Operational Transformation over CRDT for predictable performance",
        "Implemented binary protocol instead of JSON for 70% bandwidth reduction",
        "Built custom cursor sync system to avoid latency from position updates",
        "Chose Redis for fast session state rather than database queries",
      ],
    },
  },
  {
    num: "/003",
    title: "AI Traffic Monitoring System",
    desc: "Smart traffic signal optimization using computational logic & OpenCV",
    impact: "Smart traffic optimization with computer vision",
    tags: ["Python", "OpenCV", "Image Processing"],
    href: "#",
    github: "https://github.com/Shruthi0719/TrafficOptimizer",
    live: "#",
    demoUrl: "https://github.com/Shruthi0719/TrafficOptimizer",
    caseStudy: {
      problem: "Fixed-interval traffic signals cause unnecessary congestion. Static timing doesn't adapt to real-world traffic patterns, wasting commuter time and fuel.",
      solution: "Deployed computer vision system that analyzes real-time traffic density from camera feeds and dynamically adjusts signal timing using optimization algorithms.",
      architecture: [
        "OpenCV for vehicle detection and density estimation from traffic camera feeds",
        "YOLO-based object detection for accurate vehicle counting",
        "Optimization algorithms (greedy + local search) for signal timing",
        "Python backend processing traffic data and computing optimal intervals",
        "Real-time monitoring dashboard showing traffic metrics",
      ],
      challenges: [
        "Accurate vehicle detection under varying lighting and weather conditions",
        "Processing video streams within latency constraints for real-time decisions",
        "Optimizing traffic flow across multiple intersections (NP-hard problem)",
        "Handling edge cases like accidents or unusual traffic patterns",
      ],
      keyDecisions: [
        "Used YOLO for speed and accuracy vs traditional computer vision methods",
        "Implemented greedy + local search for balance between optimality and speed",
        "Stored traffic patterns historically to predict peak hours",
        "Built feedback loops to learn from intersection-specific patterns",
      ],
    },
  },
  {
    num: "/004",
    title: "Hospital Patient Management System",
    desc: "Full-stack system for managing patient records with secure CRUD operations",
    impact: "Secure patient record management system",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    href: "#",
    github: "https://github.com/Shruthi0719/Hospital-Patient-Management-System",
    live: "#",
    demoUrl: "https://github.com/Shruthi0719/Hospital-Patient-Management-System",
    caseStudy: {
      problem: "Hospitals struggle with fragmented patient records across systems. Manual data entry causes errors, duplicate records, and patient privacy risks.",
      solution: "Built a centralized, HIPAA-compliant patient management system with secure record storage, role-based access control, and audit logging for regulatory compliance.",
      architecture: [
        "Node.js + Express backend with JWT authentication and role-based middleware",
        "MongoDB for flexible schema supporting diverse patient data",
        "End-to-end encryption for sensitive medical information",
        "React frontend with intuitive patient search and record management",
        "Comprehensive audit logs for all data access and modifications",
      ],
      challenges: [
        "Ensuring HIPAA compliance with proper encryption and access controls",
        "Handling concurrent access to patient records safely",
        "Preventing data duplication while merging existing records",
        "Balancing usability with security requirements",
      ],
      keyDecisions: [
        "Implemented field-level encryption for PII instead of just transport encryption",
        "Used MongoDB for schema flexibility - patient records vary significantly",
        "Built role-based access with doctor/admin/staff permission levels",
        "Maintained immutable audit trail for compliance and debugging",
      ],
    },
  },
  {
    num: "/005",
    title: "FPGA IP Core Design",
    desc: "RTL design and verification for DLRL/DRDO with Xilinx Vivado",
    impact: "Hardware-accelerated IP core design",
    tags: ["FPGA", "RTL", "Xilinx"],
    href: "#",
    github: "#",
    live: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "CPU-based signal processing was too slow for real-time high-throughput applications. Software implementation couldn't meet latency and throughput requirements.",
      solution: "Designed specialized FPGA IP core in RTL that achieves 40% performance improvement through hardware parallelism and optimized data pipelines.",
      architecture: [
        "Pipelined architecture with parallel processing stages",
        "Dedicated hardware for matrix operations and signal transformations",
        "Memory hierarchy optimization for bandwidth-critical operations",
        "AXI4 interface for seamless integration with system on chip",
      ],
      challenges: [
        "Meeting strict timing constraints while optimizing resource usage",
        "Debugging hardware issues without visibility into execution",
        "Balancing throughput with resource (LUT/BRAM) constraints",
        "Ensuring correctness through comprehensive simulation and verification",
      ],
      keyDecisions: [
        "Implemented pipelining to maximize throughput at cost of latency",
        "Used block RAM for frequently accessed data to reduce BRAM usage",
        "Designed AXI4 slave interface for AMBA compatibility",
        "Wrote extensive Python testbenches to verify behavioral correctness before synthesis",
      ],
    },
  },
];

const skills: string[] = [
  "React.js",
  "Node.js",
  "Python",
  "JavaScript",
  "Flask",
  "AWS",
  "MongoDB",
  "SQL",
  "WebSockets",
  "Linux",
  "Git",
];

const navLinks: string[] = ["Work", "About", "Writing", "Contact", "Resume"];
const footerLinks: string[] = [
  { label: "GitHub", href: "https://github.com/Shruthi0719" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rshruthiyadav" },
  { label: "Resume", href: "#" },
].map((l) => typeof l === "string" ? l : l.label) as string[];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay: i * 0.1 },
  }),
};

// ─── Hook ─────────────────────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

// ─── Cursor Glow ─────────────────────────────────────────────────────────────
function CursorGlow(): React.JSX.Element {
  const [pos, setPos] = useState<{ x: number; y: number }>({
    x: -999,
    y: -999,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(120,80,255,0.06), transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none fixed z-0 w-80 h-80 rounded-full blur-3xl opacity-20 mix-blend-screen transition-none"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}

// ─── Case Study Modal ─────────────────────────────────────────────────────────
function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}): React.JSX.Element | null {
  if (!project?.caseStudy) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-black border border-gray-800 rounded-xl shadow-2xl max-w-3xl max-h-[80vh] overflow-y-auto"
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 z-50"
        >
          ✕
        </motion.button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
              {project.num}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full border border-gray-700 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div className="mb-8 pb-8 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">
              The Problem
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8 pb-8 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">
              The Solution
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>

          {/* Architecture */}
          <div className="mb-8 pb-8 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Architecture & Implementation
            </h3>
            <ul className="space-y-2">
              {project.caseStudy.architecture.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-400">
                  <span className="text-indigo-400 mt-1">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mb-8 pb-8 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Key Challenges Solved
            </h3>
            <ul className="space-y-2">
              {project.caseStudy.challenges.map((challenge, i) => (
                <li key={i} className="flex gap-3 text-gray-400">
                  <span className="text-orange-400 mt-1">◆</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Decisions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Key Technical Decisions
            </h3>
            <ul className="space-y-2">
              {project.caseStudy.keyDecisions.map((decision, i) => (
                <li key={i} className="flex gap-3 text-gray-400">
                  <span className="text-purple-400 mt-1">★</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800 mt-8">
            {project.demoUrl && project.demoUrl !== "#" && (
              <motion.div
                onClick={() => window.open(project.demoUrl, "_blank")}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all duration-200 cursor-pointer"
              >
                View Demo →
              </motion.div>
            )}
            {project.github && project.github !== "#" && (
              <motion.div
                onClick={() => window.open(project.github, "_blank")}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-2.5 rounded-full border border-gray-600 text-gray-300 text-sm font-semibold hover:text-white hover:border-gray-400 transition-all duration-200 cursor-pointer"
              >
                View Code
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav(): React.JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className={[
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between",
        "px-8 md:px-12 py-6 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-black/80 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <motion.span
        whileHover={{ scale: 1.04 }}
        className="text-lg md:text-xl font-bold tracking-tight cursor-pointer"
      >
        R Shruthi Yadav
      </motion.span>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((label) => (
          <motion.a
            key={label}
            href={label === "Resume" ? "/api/resume" : `#${label.toLowerCase()}`}
            target={label === "Resume" ? "_blank" : undefined}
            rel={label === "Resume" ? "noopener noreferrer" : undefined}
            whileHover={{ y: -2, scale: label === "Resume" ? 1.05 : 1 }}
            className={`text-[13px] tracking-wide transition-all duration-200 ${
              label === "Resume"
                ? "px-3 py-1.5 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-gray-900/50 font-medium"
                : "text-white/40 hover:text-white"
            }`}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero(): React.JSX.Element {
  const { scrollY } = useScroll();
  const y: MotionValue<number> = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity: MotionValue<number> = useTransform(
    scrollY,
    [0, 400],
    [1, 0]
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-8 md:px-12 pt-24">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-8"
        >
          <p className="text-sm font-medium text-gray-400 mb-2">Developer • Writer</p>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Full-Stack Developer · Based in Hyderabad
          </p>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-semibold leading-[1.15] tracking-[-0.015em] text-5xl md:text-6xl lg:text-6xl mb-8 text-white"
        >
          I enjoy building systems
          <br />
          <span className="text-gray-300">
            that scale and solve real problems.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-base text-gray-300 max-w-2xl leading-relaxed"
        >
          Full-stack developer with hands-on experience in cloud infrastructure, real-time systems, and hardware acceleration. I focus on building scalable architectures and writing clean, maintainable code.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-4 text-sm text-gray-400 max-w-2xl"
        >
          Built systems used in real-time environments, from collaborative platforms to cloud monitoring tools.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12 flex flex-wrap gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-200"
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-500 text-gray-300 text-sm font-semibold hover:text-white hover:border-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-200"
          >
            Get in Touch →
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-8 md:left-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-white/20"
      >
        <span className="w-10 h-px bg-white/15" />
        Scroll
      </motion.div>
    </section>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider(): React.JSX.Element {
  return (
    <div className="mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────
function SectionLabel({ label }: { label: string }): React.JSX.Element {
  return (
    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-white/25 mb-16">
      <span className="w-6 h-px bg-white/20" />
      {label}
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About(): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.75, ease }}
      className="px-8 md:px-12 py-32"
    >
      <SectionLabel label="About" />
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-tight text-white mb-6">
            Building systems{" "}
            <span className="text-gray-400">that work at scale.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((s) => (
              <motion.span
                key={s}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-3 py-1.5 rounded-full border border-gray-600 text-xs text-gray-300 hover:border-indigo-500/50 hover:text-white hover:shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-all duration-200 cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="space-y-7 text-gray-300 text-base leading-relaxed">
          <p>
            I&apos;m a full-stack developer focused on building scalable systems and real-time applications. I work across the entire stack—backend APIs, cloud infrastructure, and frontend interfaces—with a focus on performance and elegant architecture.
          </p>
          <p>
            I&apos;m interested in challenging problems that require careful system design, whether that&apos;s event-driven architectures, real-time synchronization, or hardware-level optimization. Currently exploring startup-stage opportunities.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────
function Projects(): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.section
        id="work"
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.75, ease }}
        className="px-8 md:px-12 py-32"
      >
        <SectionLabel label="Selected Work" />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ scale: 1.01 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="block cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative px-6 py-7 border border-gray-700 rounded-lg hover:border-gray-500 transition-all duration-300 flex items-center justify-between hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]">
                  <div className="flex items-center gap-6 flex-1">
                    <span className="w-10 shrink-0 text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                      {p.num}
                    </span>
                    <div className="flex-1 min-w-0">
                    <div className="text-lg md:text-lg font-medium tracking-tight text-white/80 group-hover:text-white transition-colors duration-300">
                      {p.title}
                    </div>
                    <div className="mt-2 text-[13px] text-white/40">{p.desc}</div>
                    <div className="mt-2 text-xs text-gray-400">{p.impact}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 group-hover:text-white/50 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-all duration-300"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-end gap-2">
                  <div className="flex gap-3">
                    {p.caseStudy && (
                      <motion.button
                        onClick={() => setSelectedProject(p)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-full border border-indigo-500/50 text-indigo-400 text-[11px] font-medium hover:text-indigo-300 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-200"
                      >
                        Case Study
                      </motion.button>
                    )}
                    {p.github && (
                      <motion.div
                        onClick={() => window.open(p.github, "_blank")}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-full border border-white/20 text-white/50 text-[11px] font-medium hover:text-white hover:border-white/40 transition-all duration-200 cursor-pointer"
                      >
                        Code
                      </motion.div>
                    )}
                    {p.live && p.live !== "#" && (
                      <motion.div
                        onClick={() => window.open(p.live, "_blank")}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-full border border-white/40 text-white/70 text-[11px] font-medium hover:text-white hover:border-white/60 bg-white/5 transition-all duration-200 cursor-pointer"
                      >
                        Live
                      </motion.div>
                    )}
                  </div>
                  <span className="text-lg text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-300">
                    ↗
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact(): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, ease }}
      className="relative px-8 md:px-12 py-48 text-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full bg-purple-700/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-10"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6 text-white"
        >
          Currently looking for full-time software engineering opportunities.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-300 mb-12"
        >
          Let&apos;s connect if you have an interesting role or project to discuss.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            onClick={() => window.location.href = "mailto:shruthii1819@gmail.com"}
            whileHover={{ scale: 1.06, y: -3 }}
            className="px-8 py-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-200 font-semibold text-sm cursor-pointer"
          >
            Email me
          </motion.div>
          <motion.div
            onClick={() => window.open("/api/resume", "_blank")}
            whileHover={{ scale: 1.06, y: -3 }}
            className="px-8 py-3 rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-200 font-semibold text-sm cursor-pointer"
          >
            View Resume
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer(): React.JSX.Element {
  return (
    <footer className="px-8 md:px-12 py-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="text-xs text-gray-500">© 2026 R Shruthi Yadav</span>
      <div className="flex items-center gap-8">
        <motion.a
          href="https://github.com/Shruthi0719"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, x: 2 }}
          className="text-xs text-gray-400 hover:text-white transition-colors duration-200 font-medium flex items-center gap-1"
        >
          View my code on GitHub →
        </motion.a>
        <span className="text-gray-700">•</span>
        <motion.a
          href="https://linkedin.com/in/rshruthiyadav"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="text-xs text-gray-400 hover:text-white transition-colors duration-200 font-medium"
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="/api/resume"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -2 }}
          className="text-xs px-4 py-1.5 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-gray-900/50 font-medium transition-all duration-200"
        >
          Resume
        </motion.a>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home(): React.JSX.Element {
  return (
    <main className="bg-black text-white min-h-screen antialiased">
      <CursorGlow />
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}