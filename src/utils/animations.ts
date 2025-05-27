export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
};

export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

export const sentenceVariants = {
  hidden: { opacity: 1 }, // Jaga parent tetap terlihat, biarkan children yang hilang
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Kecepatan 'mengetik'
      delayChildren: 0.5, // Opsional: Jeda sebelum mulai
    },
  },
};

export const letterVariants = {
  hidden: {
    opacity: 0,
    y: 10, // Efek 'muncul' dari bawah sedikit
    transition: {
      duration: 0.05, // Cepat hilang
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Efek 'muncul' yang lebih bagus
      damping: 12,
      stiffness: 100,
    },
  },
};
