"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section className="relative px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-xs tracking-[0.3em] text-[#c8ff57] mb-6"
            >
              ABOUT
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Who I Am
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-gray-400 leading-relaxed mb-6"
            >
              I’m a Computer Science undergrad who enjoys building software that solves real problems — from real-time systems to full-stack applications.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-gray-400 leading-relaxed"
            >
              I focus on writing clean, scalable code and continuously improving through building, experimenting, and learning.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Third-year CS student at SNIST, Hyderabad — building systems one commit at a time.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="border border-white/10 p-6">
            <p className="text-sm text-gray-500 mb-2">01</p>
            <h3 className="text-lg font-semibold mb-3">Systems Thinking</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I think in architectures — event-driven systems, scalable flows, and how components interact.
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <p className="text-sm text-gray-500 mb-2">02</p>
            <h3 className="text-lg font-semibold mb-3">Builder Mindset</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I build projects end-to-end — focusing on usability, performance, and real-world impact.
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <p className="text-sm text-gray-500 mb-2">03</p>
            <h3 className="text-lg font-semibold mb-3">Consistency</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I learn by building consistently and improving with every project I ship.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}