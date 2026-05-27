"use client";

import FadeUp from "@/components/motion/FadeUp";

/**
 * @param {{ children: React.ReactNode, className?: string, delayMs?: number, slideFromMd?: 'left' | 'right', variant?: 'default' | 'list' }} props
 */
export default function AnimatedSection({
  children,
  className,
  delayMs = 0,
  slideFromMd,
  variant,
}) {
  return (
    <FadeUp
      className={className}
      delayMs={delayMs}
      slideFromMd={slideFromMd}
      variant={variant}
    >
      {children}
    </FadeUp>
  );
}
