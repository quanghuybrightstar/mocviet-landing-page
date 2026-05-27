"use client";

import { usePrefersReducedMotion } from "@/libs/hooks/usePrefersReducedMotion";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

/** Default: detail blocks. List cards use earlier trigger + longer motion via `slideFromMd`. */
const IN_VIEW_DEFAULT = { rootMargin: "0px 0px -8% 0px", threshold: 0.08 };
/** Slightly earlier than detail (-8%); avoid huge positive margin (can skip animation). */
const IN_VIEW_LIST = { rootMargin: "0px 0px -4% 0px", threshold: 0.06 };

/**
 * Scroll entrance: fade-up (default) or md+ horizontal slide for 2-col layouts.
 * Respects prefers-reduced-motion.
 * @param {{ children: React.ReactNode, className?: string, delayMs?: number, slideFromMd?: 'left' | 'right', variant?: 'default' | 'list' }} props
 */
export default function FadeUp({
  children,
  className,
  delayMs = 0,
  slideFromMd,
  variant,
}) {
  const reducedMotion = usePrefersReducedMotion();
  const isListReveal = variant === "list" || Boolean(slideFromMd);
  const inViewOpts = isListReveal ? IN_VIEW_LIST : IN_VIEW_DEFAULT;

  const { ref, inView } = useInView({
    rootMargin: inViewOpts.rootMargin,
    threshold: inViewOpts.threshold,
    triggerOnce: true,
    skip: reducedMotion,
  });

  const visible = reducedMotion || inView;

  return (
    <div
      ref={ref}
      className={clsx(
        "scroll-reveal",
        isListReveal && "scroll-reveal--list",
        slideFromMd === "left" && "scroll-reveal--md-from-left",
        slideFromMd === "right" && "scroll-reveal--md-from-right",
        visible && "scroll-reveal--visible",
        className,
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
