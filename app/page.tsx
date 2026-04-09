"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  num: "01" | "02" | "03" | "04";
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    num: "01",
    title: "ClouSec – Cloud Security Platform",
    description:
      "Event-driven cloud security system monitoring AWS infrastructure in real time using CloudTrail and EventBridge.",
    tags: ["Python", "Flask", "AWS", "React"],
    github: "https://github.com/Shruthi0719/ClouSec",
    featured: true,
  },
  {
    num: "02",
    title: "CollabCode – Real-Time Code Editor",
    description:
      "Real-time collaborative coding platform with sub-100ms sync latency using WebSockets and Operational Transformation.",
    tags: ["React", "Node.js", "WebSockets"],
    github: "https://github.com/Shruthi0719/CollabCode",
    live: "https://collabcode-x.vercel.app/",
    featured: true,
  },
  {
    num: "03",
    title: "AI Traffic Monitoring System",
    description:
      "Smart traffic signal optimization using OpenCV and computational logic.",
    tags: ["Python", "OpenCV", "Image Processing"],
    github: "https://github.com/Shruthi0719/AI-powered-smart-traffic-monitoring-system",
  },
  {
    num: "04",
    title: "Hospital Patient Management System",
    description:
      "Full-stack system for managing patient records with secure CRUD operations.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/Shruthi0719/Hospital-Patient-Management-System",
  },
];

const codeSnippets = [
  "const editor = new CollabEditor({ sync: 'websocket' })",
  "await monitor.detect({ service: 'AWS', realtime: true })",
  "if (latency < 100) sync.broadcast(delta)",
  "export const scale = (fn) => cluster.fork(fn)",
];

const sectionReveal = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onDone, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black"
    >
      <p className="font-[var(--font-heading)] text-7xl font-extrabold text-[#F5F5F0]">
        {Math.min(progress, 100)}%
      </p>
    </motion.div>
  );
}

function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 170, damping: 20 });
  const ringY = useSpring(y, { stiffness: 170, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[95] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CAFF47]"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-[94] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CAFF47]"
      />
    </>
  );
}

function CodeBackdrop() {
  const [typed, setTyped] = useState(["", "", "", ""]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const target = codeSnippets[active];
    if (typed[active].length < target.length) {
      const t = setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];
          next[active] = target.slice(0, prev[active].length + 1);
          return next;
        });
      }, 24);
      return () => clearTimeout(t);
    }

    const reset = setTimeout(() => {
      setTyped((prev) => {
        const next = [...prev];
        next[active] = "";
        return next;
      });
      setActive((prev) => (prev + 1) % codeSnippets.length);
    }, 950);

    return () => clearTimeout(reset);
  }, [active, typed]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 font-mono text-[#CAFF47] opacity-5">
      {typed.map((line, idx) => (
        <motion.p
          key={idx}
          animate={{ opacity: active === idx ? 1 : line ? 0.6 : 0.2 }}
          className={`absolute text-xs md:text-sm ${
            idx === 0
              ? "left-[7%] top-[18%]"
              : idx === 1
                ? "right-[9%] top-[30%]"
                : idx === 2
                  ? "left-[15%] bottom-[24%]"
                  : "right-[13%] bottom-[14%]"
          }`}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroWords = [
    "Curious",
    "enough",
    "to",
    "figure",
    "it",
    "out.",
    "Careful",
    "enough",
    "to",
    "do",
    "it",
    "right.",
  ];

  return (
    <main className="relative min-h-screen bg-black text-[#F5F5F0]">
      <AnimatePresence>{!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}</AnimatePresence>
      <Cursor />
      <CodeBackdrop />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-14 ${
          scrolled ? "border-b border-[#1a1a1a] bg-black/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <a href="#home" className="font-[var(--font-heading)] text-xl font-extrabold">
          R Shruthi Yadav
        </a>
        <div className="hidden items-center gap-7 text-sm text-[#cfcfca] md:flex">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      <section id="home" className="flex min-h-screen flex-col justify-center px-6 py-28 md:px-14 md:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl font-[var(--font-heading)] text-5xl font-extrabold leading-[1.02] md:text-6xl lg:text-7xl"
        >
          {heroWords.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className={`mr-3 inline-block ${word === "right." ? "text-[#CAFF47]" : "text-[#F5F5F0]"}`}
            >
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-8 max-w-2xl text-sm leading-8 text-[#9d9d98]"
        >
          Full-stack developer. Curious by nature. Serious about craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-10 flex items-center justify-end gap-5"
        >
          <a href="#work" className="rounded-full bg-[#CAFF47] px-6 py-3 text-sm font-semibold text-black">
            View Work →
          </a>
          <a href="#contact" className="text-sm text-[#cecec9]">
            Get in Touch
          </a>
        </motion.div>

        <p className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180 text-[10px] tracking-[0.4em] text-[#5e5e5b] [writing-mode:vertical-rl]">
          SCROLL
        </p>
      </section>

      <motion.section
        id="about"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 py-36 md:px-14 md:py-44"
      >
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
              I like building systems that just make sense.
            </h2>
          <p className="mt-4 text-xl italic text-[#878783]">Reliable systems. Intentional craft.</p>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#b9b9b5]">
            <p>
              I&apos;m a full-stack developer who enjoys working on problems that involve
              real-time systems, scalability, and clean architecture.
            </p>
            <p>
              I focus on writing code that is simple, reliable, and easy to reason about.
              I care about how things work under the hood.
            </p>
            <p>
              Lately I&apos;ve been building systems around collaboration, cloud
              infrastructure, and performance.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-4 text-xs tracking-[0.22em] text-[#8a8a85]">CORE STACK</p>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Node.js", "Python", "AWS"].map((item) => (
              <span key={item} className="rounded-full border border-[#1a1a1a] px-4 py-1.5 text-xs text-[#d6d6d1]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="work"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="border-t border-[#1a1a1a] px-6 py-36 md:px-14 md:py-44"
      >
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#80807c]">— SELECTED WORK</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Systems I&apos;ve built.</h2>
          </div>
          <a href="https://github.com/Shruthi0719" target="_blank" rel="noreferrer" className="rounded-full border border-[#1a1a1a] px-4 py-2 text-xs text-[#cbcbc6]">
            All on GitHub ↗
          </a>
        </div>

        {projects.map((project, idx) => (
          <motion.article
            key={project.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative border-b border-[#1a1a1a] py-10 transition-colors duration-300 hover:bg-[#0d0d0d]"
          >
            <span className="absolute left-0 top-0 h-full w-px scale-y-0 bg-[#CAFF47] transition-transform duration-300 group-hover:scale-y-100" />
            <div className="grid gap-6 md:grid-cols-[70px_1fr_auto]">
              <p className="text-sm text-[#6f6f6c]">{project.num}</p>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#CAFF47] md:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-[#9d9d99]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#111] px-3 py-1 text-[11px] text-[#cacac5]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noreferrer"
                data-hoverable="true"
                className="translate-x-3 text-3xl text-[#666661] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#CAFF47]"
              >
                ↗
              </a>
            </div>
          </motion.article>
        ))}
      </motion.section>

      <motion.section
        id="skills"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-[#1a1a1a] px-6 py-36 md:px-14 md:py-44"
      >
        <p className="text-xs tracking-[0.3em] text-[#80807c]">— CAPABILITIES</p>
        <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">What I work with.</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Languages", color: "text-[#CAFF47]", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
            { label: "Frontend", color: "text-[#d8ff80]", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
            { label: "Backend", color: "text-[#ffe082]", items: ["Node.js", "Express", "Flask", "REST APIs", "WebSockets"] },
            { label: "Core Concepts", color: "text-[#ffb347]", items: ["Distributed Systems", "Real-time Sync", "System Design", "Cloud Security"] },
            { label: "Tools", color: "text-[#ffd166]", items: ["AWS", "MongoDB", "Git", "Linux"] },
          ].map((group) => (
            <div key={group.label} className="rounded-2xl bg-[#111] p-6">
              <p className={`text-sm font-semibold ${group.color}`}>{group.label}</p>
              <ul className="mt-3 space-y-1 text-sm text-[#c5c5c0]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <footer id="contact" className="border-t border-[#1a1a1a] px-6 py-24 md:px-14 md:py-28">
        <h2 className="text-5xl font-extrabold md:text-7xl">Let&apos;s build something.</h2>
        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#d0d0cb]">
          <a href="https://github.com/Shruthi0719" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/rshruthiyadav" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:shruthii1819@gmail.com">Email</a>
        </div>
        <p className="mt-12 text-xs text-[#6a6a66]">© 2026 R Shruthi Yadav</p>
      </footer>

    </main>
  );
}
