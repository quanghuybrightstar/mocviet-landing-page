"use client";

import {
  PARALLAX_MOBILE_MEDIA,
  useScrollParallax,
} from "@/libs/hooks/useScrollParallax";
import { usePrefersReducedMotion } from "@/libs/hooks/usePrefersReducedMotion";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";

/**
 * @param {{ imageSrc?: string, title: string, subtitle: string }} props
 */
export default function AboutHero({
  imageSrc = "/images/slide/slide_2.webp",
  title,
  subtitle,
}) {
  const sectionRef = useRef(null);
  const parallaxY = useScrollParallax(sectionRef, {
    matchMedia: PARALLAX_MOBILE_MEDIA,
  });
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div
      ref={sectionRef}
      className="relative max-h-[calc(100dvh-74px)] h-[calc(100dvh-74px)] md:h-[100dvh] md:max-h-screen md:min-h-[750px] min-h-[350px] home-slider owl-carousel overflow-hidden"
    >
      <div
        className="absolute inset-0 will-change-transform md:will-change-auto"
        style={
          reduceMotion
            ? undefined
            : { transform: `translate3d(0, ${parallaxY}px, 0)` }
        }
      >
        <div
          className={clsx(
            "absolute inset-[-10%] md:inset-0 origin-center",
            !reduceMotion && "scroll-hero-zoom",
          )}
        >
          <Image
            src={imageSrc}
            alt="Slide"
            fill
            priority
            fetchPriority="high"
            className="!object-bottom !object-cover"
          />
        </div>
      </div>
      <div className="overlay_slider" />
      <div className="container h-full relative z-[1]">
        <div className="h-full row no-gutters slider-text js-fullheight items-center justify-end">
          <div className="col-md-7 text scroll-hero-content">
            <h1 className="m-0">{title}</h1>
            <p className="m-0 mt-2">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
