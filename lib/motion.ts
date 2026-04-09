// Shared Framer Motion variants — import where needed

export const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
      delay: i * 0.1,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      ease,
      delay: i * 0.1,
    },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
      delay: i * 0.08,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const viewportOnce = { once: true, margin: "-80px" };
