const textFadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.1 },
  },
};

const gridContainerMotions = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 40, damping: 8 },
  },
};

const cardFadeDown = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 40, damping: 8 },
  },
};

const cardFadeLeft = {
  hidden: { opacity: 0, x: -250 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 30, damping: 10, delay:0.2 },
  },
};

const cardFadeRight = {
  hidden: { opacity: 0, x: 250 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 30, damping: 10, delay:0.2 },
  },
};

export {
  textFadeUp,
  gridContainerMotions,
  cardFadeUp,
  cardFadeDown,
  cardFadeLeft,
  cardFadeRight,
};
