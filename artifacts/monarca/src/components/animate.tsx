import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const variants =
    direction === "left" ? fadeLeft : direction === "right" ? fadeRight : fadeUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ children, subtitle }: { children: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      className="text-center mb-16 space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-serif text-primary"
        variants={fadeUp}
      >
        {children}
      </motion.h2>
      <motion.div variants={fadeUp} custom={1}>
        <div className="w-24 h-px bg-primary/60 mx-auto" />
        <div className="w-12 h-0.5 bg-primary mx-auto mt-0.5" />
      </motion.div>
      {subtitle && (
        <motion.p
          className="text-muted-foreground uppercase tracking-[0.3em] text-sm"
          variants={fadeUp}
          custom={2}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
