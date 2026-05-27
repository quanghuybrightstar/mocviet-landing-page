"use client";

import {
  PARALLAX_MOBILE_MEDIA,
  useScrollParallax,
} from "@/libs/hooks/useScrollParallax";
import { usePrefersReducedMotion } from "@/libs/hooks/usePrefersReducedMotion";
import { getProjectTagLabel, normalizeProjectTags } from "@/libs/project-tags";
import {
  getProjectHeroImageUrl,
  PROJECT_TAG_PILL_ON_IMAGE_CLASS,
} from "@/libs/project-ui";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";

/**
 * Visual-lead hero (mobile only).
 * Scroll: image layer moves slower than the page (translateY) for depth.
 * Load: zoom-in entrance on image only (separate layer so it does not fight parallax).
 * @param {{ title: string, imageUrl?: string, tags?: string[], tag?: string }} props
 */
export default function ProjectDetailHero({ title, imageUrl, tags, tag }) {
  const sectionRef = useRef(null);
  const parallaxY = useScrollParallax(sectionRef, {
    matchMedia: PARALLAX_MOBILE_MEDIA,
  });
  const reduceMotion = usePrefersReducedMotion();

  const tagValues = normalizeProjectTags({ tags, tag }).slice(0, 2);
  const src = getProjectHeroImageUrl(imageUrl);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[85vh] min-h-[420px] max-h-[720px] overflow-hidden md:hidden"
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
            "absolute inset-[-10%] origin-center will-change-transform",
            !reduceMotion && "scroll-hero-zoom",
          )}
        >
          <Image
            src={src}
            alt={title}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      <div className="absolute bottom-0 left-0 w-full px-6 !pb-10 space-y-2 scroll-hero-content">
        <div className="flex flex-wrap gap-2">
          {tagValues.map((value) => (
            <div key={value} className={PROJECT_TAG_PILL_ON_IMAGE_CLASS}>
              {getProjectTagLabel(value)}
            </div>
          ))}
        </div>
        <h1 className="m-0 text-[2.5rem] leading-[1.1] font-normal text-white tracking-tight mt-2">
          {title}
        </h1>
      </div>
    </section>
  );
}
