import { Variants } from "framer-motion";

/* ✅ MAIN FADE UP (used everywhere) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* ✅ FADE IN */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

/* ✅ SLIDE LEFT */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* ✅ SCALE IN */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

/* ✅ HERO TEXT ANIMATION */
export const heroLine: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.2 + i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ✅ STAGGER */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/* ✅ DRAW LINE */
export const drawLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (i = 0) => ({
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.5 + i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* ✅ VIEWPORT */
export const viewportOnce = {
  once: true,
  margin: "-100px",
};