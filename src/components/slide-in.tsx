"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { PropsWithChildren } from "react";
import React from "react";

export type SlideDirection = "up" | "down" | "left" | "right";

interface SlideInProps<T extends keyof HTMLElementTagNameMap = "div"> {
  as?: T;
  delay?: number;
  className?: string;
  direction?: SlideDirection;
}

const slideVariants = {
  up: { opacity: 0, y: 50 },
  down: { opacity: 0, y: -50 },
  left: { opacity: 0, x: 50 },
  right: { opacity: 0, x: -50 },
};

export default function SlideIn<T extends keyof HTMLElementTagNameMap>({
  as = "div" as T,
  children,
  delay = 0,
  direction = "up",
  className = "",
  ...props
}: PropsWithChildren<SlideInProps<T> & HTMLMotionProps<T>>) {
  // This alllows us to use the HTML element as is instead of having to wrap it in a motion.div
  const Component = motion[as || "div"];

  return (
    // @ts-expect-error Typescript mismatch, can't figure out how to resolve it, but it works fine so meh
    <Component
      initial={slideVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
