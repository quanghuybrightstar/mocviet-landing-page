"use client";

import { usePrefersReducedMotion } from "@/libs/hooks/usePrefersReducedMotion";
import { useEffect, useRef, useState } from "react";

const DEFAULT_RATIO = 0.38;
const DEFAULT_MAX_RATIO = 0.22;
/** Match Tailwind `md` breakpoint. */
export const PARALLAX_MOBILE_MEDIA = "(max-width: 767px)";
export const PARALLAX_DESKTOP_MEDIA = "(min-width: 768px)";

/**
 * Scroll-linked vertical parallax for a section ref (RAF-throttled).
 * @param {React.RefObject<HTMLElement | null>} sectionRef
 * @param {{ ratio?: number, maxRatio?: number, enabled?: boolean, matchMedia?: string }} [options]
 * @returns {number} translateY offset in pixels (0 when inactive)
 */
export function useScrollParallax(sectionRef, options = {}) {
  const {
    ratio = DEFAULT_RATIO,
    maxRatio = DEFAULT_MAX_RATIO,
    enabled = true,
    matchMedia,
  } = options;
  const reduceMotion = usePrefersReducedMotion();
  const parallaxRef = useRef(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    if (reduceMotion || !enabled) return;

    let rafId = 0;
    let scrollAttached = false;
    let mediaQuery = null;

    const resetParallax = () => {
      if (parallaxRef.current === 0) return;
      parallaxRef.current = 0;
      setParallaxY(0);
    };

    const mediaActive = () => !mediaQuery || mediaQuery.matches;

    const updateParallax = () => {
      rafId = 0;
      if (!mediaActive()) {
        resetParallax();
        return;
      }

      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight || 1;
      const scrolledInto = Math.max(0, -rect.top);
      const maxShift = sectionHeight * maxRatio;
      const next = Math.min(scrolledInto * ratio, maxShift);

      if (Math.abs(next - parallaxRef.current) < 0.5) return;
      parallaxRef.current = next;
      setParallaxY(next);
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateParallax);
    };

    const attachScroll = () => {
      if (scrollAttached) return;
      scrollAttached = true;
      updateParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
    };

    const detachScroll = () => {
      if (!scrollAttached) return;
      scrollAttached = false;
      window.removeEventListener("scroll", onScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const sync = () => {
      if (mediaActive()) attachScroll();
      else {
        detachScroll();
        resetParallax();
      }
    };

    if (matchMedia) {
      mediaQuery = window.matchMedia(matchMedia);
      mediaQuery.addEventListener("change", sync);
    }

    sync();

    return () => {
      detachScroll();
      if (mediaQuery) mediaQuery.removeEventListener("change", sync);
    };
  }, [reduceMotion, enabled, ratio, maxRatio, matchMedia, sectionRef]);

  return reduceMotion || !enabled ? 0 : parallaxY;
}
