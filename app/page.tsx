"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Project = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "ClouSec – Cloud Security Platform",
    desc: "Event-driven monitoring detecting 10+ AWS misconfigurations in real-time.",
    tags: ["Python", "Flask", "React", "AWS"],
    github: "https://github.com/Shruthi0719/ClouSec",
  },
  {
    num: "02",
    title: "CollabCode – Real-Time Code Editor",
    desc: "High-performance collaborative IDE with sub-100ms sync latency.",
    tags: ["JavaScript", "Node.js", "WebSockets", "React"],
    github: "https://github.com/Shruthi0719/CollabCode",
    live: "https://collabcode-x.vercel.app/",
  },
  {
    num: "03",
    title: "AI Traffic Monitoring System",
    desc: "Smart traffic signal optimization using computational logic and OpenCV.",
    tags: ["Python", "OpenCV", "Image Processing"],
    github: "https://github.com/Shruthi0719/TrafficOptimizer",
  },
  {
    num: "04",
    title: "Hospital Patient Management System",
    desc: "Full-stack system for managing patient records with secure CRUD operations.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/Shruthi0719/Hospital-Patient-Management-System",
  },
  {
    num: "05",
    title: "FPGA IP Core Design",
    desc: "RTL design and verification for DLRL/DRDO with Xilinx Vivado.",
    tags: ["FPGA", "RTL", "Xilinx"],
  },
];

const skillCategories = [
  {
    label: "Languages",
    color: "text-[#CAFF47]",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frontend",
    color: "text-[#d8ff80]",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    color: "text-[#ffe082]",
    items: ["Node.js", "Express", "Flask", "REST APIs", "WebSockets"],
  },
  {
    label: "Core Concepts",
    color: "text-[#ffb347]",
    items: [
      "Distributed Systems",
      "Real-time Sync",
      "System Design",
      "Cloud Security",
    ],
  },
  {
    label: "Tools",
    color: "text-[#ffd166]",
    items: ["AWS", "MongoDB", "Git", "Linux", "Xilinx Vivado"],
  },
];

function LoadingGate({ done }: { done: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 11) + 4;
      if (value >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(done, 350);
        return;
      }
      setProgress(value);
    }, 45);

    return () => clearInterval(timer);
  }, [done]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <p className="mb-3 text-xs tracking-[0.35em] text-[#9d9d9a]">LOADING</p>
        <p className="font-[var(--font-heading)] text-6xl font-extrabold text-[#F5F5F0]">
          {progress}%
        </p>
      </div>
    </motion.div>
  );
}

function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 20 });
  const ringY = useSpring(y, { stiffness: 180, damping: 20 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-hoverable='true']")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CAFF47]"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: active ? 2.2 : 1, opacity: active ? 0.95 : 0.6 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[89] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CAFF47]"
      />
    </>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const previewX = useMotionValue(-400);
  const previewY = useMotionValue(-400);
  const previewSpringX = useSpring(previewX, { stiffness: 180, damping: 22 });
  const previewSpringY = useSpring(previewY, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroWords = useMemo(
    () => ["I", "build", "systems", "that", "scale", "&", "inspire."],
    []
  );

  if (!loaded) {
    return <LoadingGate done={() => setLoaded(true)} />;
  }

  return (
    <main className="relative min-h-screen bg-black text-[#F5F5F0]">
      <CustomCursor />

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-14 ${
          scrolled
            ? "border-b border-[#1a1a1a] bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a href="#home" className="font-[var(--font-heading)] text-xl font-extrabold">
          R Shruthi Yadav
        </a>
        <div className="hidden items-center gap-7 text-sm text-[#c2c2bf] md:flex">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      <section id="home" className="relative flex min-h-screen flex-col justify-center px-6 pt-28 md:px-14">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="max-w-6xl font-[var(--font-heading)] text-5xl font-extrabold leading-[0.95] md:text-7xl lg:text-[7.25rem]"
        >
          {heroWords.map((word) => (
            <motion.span
              key={word}
              variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              className={`mr-3 inline-block ${
                word === "scale" || word === "&" || word === "inspire."
                  ? "text-[#CAFF47]"
                  : "text-[#F5F5F0]"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#9d9d9a]">
          Full-stack developer focused on scalable platforms, real-time systems, and
          thoughtful product engineering.
        </p>

        <div className="mt-10 flex items-center justify-end gap-5">
          <a
            href="#work"
            className="rounded-full bg-[#CAFF47] px-6 py-3 text-sm font-semibold text-black"
          >
            View Work →
          </a>
          <a href="#contact" className="text-sm text-[#c9c9c4] underline-offset-4 hover:underline">
            Get in Touch
          </a>
        </div>

        <p className="absolute right-3 top-1/2 -translate-y-1/2 rotate-180 text-[10px] tracking-[0.45em] text-[#5b5b58] [writing-mode:vertical-rl]">
          SCROLL
        </p>
      </section>

      <section id="about" className="px-6 py-28 md:px-14 md:py-36">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="max-w-xl font-[var(--font-heading)] text-4xl font-extrabold leading-tight md:text-6xl">
              I like building systems that just make sense.
            </h2>
            <p className="mt-5 text-xl italic text-[#8c8c89]">Reliable architecture. Elegant outcomes.</p>
          </motion.div>
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-sm leading-7 text-[#b8b8b4]"
          >
            <p>
              I&apos;m a full-stack developer focused on building scalable systems and
              real-time applications. I work across backend APIs, cloud infrastructure,
              and frontend interfaces with a focus on performance.
            </p>
            <p>
              I&apos;m interested in challenging problems that require careful system
              design, from event-driven architectures and real-time synchronization to
              optimization-heavy engineering work.
            </p>
            <p>
              I care about making complex systems feel simple, both for users and
              for teams maintaining them over time.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <p className="mb-5 text-xs tracking-[0.22em] text-[#8a8a86]">CORE STACK</p>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Node.js", "Python", "AWS"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#1a1a1a] px-4 py-1.5 text-xs text-[#dbdbd6]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-[#1a1a1a] px-6 py-28 md:px-14 md:py-36">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-[#81817d]">— SELECTED WORK</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-extrabold md:text-6xl">
              Systems I&apos;ve built.
            </h2>
          </div>
          <a
            href="https://github.com/Shruthi0719"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#1a1a1a] px-4 py-2 text-xs text-[#c8c8c3]"
          >
            All on GitHub ↗
          </a>
        </div>

        <div>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => {
                previewX.set(e.clientX + 32);
                previewY.set(e.clientY - 96);
              }}
              className="group relative border-b border-[#1a1a1a] py-9"
            >
              <div className="grid gap-6 md:grid-cols-[70px_1fr_auto]">
                <p className="text-sm text-[#6f6f6b]">{project.num}</p>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-[var(--font-heading)] text-2xl font-bold md:text-3xl">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-[#CAFF47] px-2.5 py-1 text-[10px] font-bold text-black">
                      FEATURED
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#9d9d9a]">{project.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#111111] px-3 py-1 text-[11px] text-[#ccccca]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <a
                    data-hoverable="true"
                    href={project.live || project.github || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="translate-y-2 text-3xl text-[#5c5c59] opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#CAFF47]"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-t border-[#1a1a1a] px-6 py-28 md:px-14 md:py-36">
        <p className="text-xs tracking-[0.22em] text-[#81817d]">— CAPABILITIES</p>
        <motion.h2
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          className="mt-4 font-[var(--font-heading)] text-4xl font-extrabold md:text-6xl"
        >
          What I work with.
        </motion.h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-2xl bg-[#111111] p-6"
            >
              <p className={`text-sm font-semibold ${category.color}`}>{category.label}</p>
              <ul className="mt-3 space-y-1 text-sm text-[#c4c4bf]">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-[#1a1a1a] px-6 py-20 md:px-14">
        <h2 className="font-[var(--font-heading)] text-5xl font-extrabold md:text-7xl">
          Let&apos;s build something.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#d1d1cb]">
          <a href="https://github.com/Shruthi0719" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rshruthiyadav" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:shruthii1819@gmail.com">Email</a>
        </div>

        <p className="mt-12 text-xs text-[#6c6c69]">© 2026 R Shruthi Yadav</p>
      </footer>

      <motion.div
        style={{ x: previewSpringX, y: previewSpringY }}
        animate={{ opacity: hoveredProject ? 1 : 0, scale: hoveredProject ? 1 : 0.95 }}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden w-72 -translate-x-1/2 rounded-xl border border-[#1a1a1a] bg-[#0b0b0b] p-4 md:block"
      >
        {hoveredProject && (
          <>
            <div className="h-32 rounded-lg bg-[linear-gradient(135deg,#CAFF47_0%,#6f8f2a_100%)]" />
            <p className="mt-3 text-xs tracking-[0.2em] text-black/70">PREVIEW</p>
            <p className="mt-1 font-[var(--font-heading)] text-lg font-bold text-[#f5f5f0]">
              {hoveredProject.title}
            </p>
          </>
        )}
      </motion.div>
    </main>
  );
}
