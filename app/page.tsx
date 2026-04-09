"use client";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";

export default function Page() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main className="relative">
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 px-6 md:px-12 border-t border-grey-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-grey-4 tracking-widest uppercase">
          © 2025 R Shruthi Yadav
        </span>
        <span className="font-mono text-xs text-grey-4">
          Built with Next.js · TypeScript · Framer Motion
        </span>
      </footer>
    </>
  );
}