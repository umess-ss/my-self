export const easeOut = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: easeOut,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.36,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const reducedFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  },
};

export const cardHover = {
  y: -3,
  transition: {
    duration: 0.22,
    ease: easeOut,
  },
};

export const buttonHover = {
  y: -2,
  transition: {
    duration: 0.22,
    ease: easeOut,
  },
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.12,
    ease: easeOut,
  },
};
