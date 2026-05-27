"use client";

import FadeUp from "@/components/motion/FadeUp";
import {
  PARALLAX_DESKTOP_MEDIA,
  useScrollParallax,
} from "@/libs/hooks/useScrollParallax";
import { usePrefersReducedMotion } from "@/libs/hooks/usePrefersReducedMotion";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";

/**
 * @param {{ src: string, alt: string }} props
 */
export default function ServicesHeroImage({ src, alt }) {
  const sectionRef = useRef(null);
  const parallaxY = useScrollParallax(sectionRef, {
    matchMedia: PARALLAX_DESKTOP_MEDIA,
  });
  const reduceMotion = usePrefersReducedMotion();

  return (
    <FadeUp className="hidden md:block mb-6 md:mb-8">
      <div
        ref={sectionRef}
        className="relative w-full overflow-hidden rounded-lg aspect-[1240/960] max-h-[480px]"
      >
        <div
          className="absolute inset-0 will-change-transform"
          style={
            reduceMotion
              ? undefined
              : { transform: `translate3d(0, ${parallaxY}px, 0)` }
          }
        >
          <div
            className={clsx(
              "absolute inset-[-8%] origin-center",
              !reduceMotion && "scroll-hero-zoom",
            )}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 1240px, 100vw"
            />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
