"use client";

import { IconPhotograph } from "@public/assets/icons";
import {
  PARALLAX_DESKTOP_MEDIA,
  useScrollParallax,
} from "@/libs/hooks/useScrollParallax";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const ProjectGalleryModal = dynamic(
  () => import("@/components/projects/ProjectGalleryModal"),
  { ssr: false },
);

const DESKTOP_VISIBLE = 6;
const MOBILE_VISIBLE = 3;

const TILE_BASE =
  "relative group overflow-hidden rounded-xl border border-border-light shadow-sm hover:shadow-md transition-shadow duration-500 cursor-zoom-in";

const TILE_IMAGE_CLASS =
  "transition-transform duration-500 group-hover:scale-105 pointer-events-none";

/** Desktop: 3-col mosaic, 6 visible tiles, overlay on last when more exist. */
const CELL_LAYOUT_DESKTOP = [
  "md:col-span-2 md:row-span-2 md:h-full md:min-h-0",
  "h-[250px] md:h-full md:min-h-0",
  "h-[250px] md:h-full md:min-h-0",
  "h-[250px] md:h-full md:min-h-0",
  "h-[250px] md:h-full md:min-h-0",
  "h-[250px] md:h-full md:min-h-0",
];

/** Mobile: 3 tiles — 1 wide + 2 narrow; overlay on 3rd when total > 3. */
const CELL_LAYOUT_MOBILE = [
  "col-span-2 h-64 min-h-[256px]",
  "col-span-1 h-48 min-h-[192px]",
  "col-span-1 h-48 min-h-[192px]",
];

function MoreOverlay({ moreCount, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 text-white transition-colors duration-300 hover:bg-black/70 cursor-pointer border-0 p-0"
      aria-label={`Xem thêm ${moreCount} ảnh`}
    >
      <span className="flex items-center gap-1 text-2xl font-semibold leading-none">
        +{moreCount}
        <Image
          src={IconPhotograph}
          width={24}
          height={24}
          alt=""
          aria-hidden
          className="w-7 h-7 shrink-0 brightness-0 invert pointer-events-none"
        />
      </span>
      <span className="text-sm mt-1">Xem thêm</span>
    </button>
  );
}

/**
 * @param {{ images: string[], title: string, layout?: 'mobile' | 'desktop' }} props
 */
export default function ProjectDetailGallery({
  images,
  title = "",
  layout = "desktop",
}) {
  const list = images ?? [];
  const isMobileLayout = layout === "mobile";
  const visibleCount = isMobileLayout ? MOBILE_VISIBLE : DESKTOP_VISIBLE;
  const visible = list.slice(0, visibleCount);
  const hasMore = list.length > visibleCount;
  const moreCount = list.length - (visibleCount - 1);
  const moreTileIndex = visibleCount - 1;

  const heroTileRef = useRef(null);
  const parallaxY = useScrollParallax(heroTileRef, {
    enabled: !isMobileLayout,
    matchMedia: isMobileLayout ? undefined : PARALLAX_DESKTOP_MEDIA,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openGallery = useCallback((index) => {
    setStartIndex(index);
    setModalOpen(true);
  }, []);

  if (!list.length) return null;

  const cellLayouts = isMobileLayout ? CELL_LAYOUT_MOBILE : CELL_LAYOUT_DESKTOP;
  const gridClass = isMobileLayout
    ? "grid grid-cols-2 gap-4"
    : "grid grid-cols-1 md:grid-cols-3 md:grid-rows-[repeat(2,minmax(0,1fr))_minmax(0,0.85fr)] gap-4 md:h-[clamp(560px,46vw,640px)]";

  return (
    <section className="w-full">
      <div className={gridClass}>
        {visible.map((image, index) => {
          const isMoreTile = index === moreTileIndex && hasMore;
          const isDesktopHeroTile = !isMobileLayout && index === 0;
          const desktopSizes =
            index === 0
              ? "(max-width: 767px) 100vw, 66vw"
              : "(max-width: 767px) 100vw, 33vw";

          return (
            <div
              key={`${image}-${index}`}
              ref={isDesktopHeroTile ? heroTileRef : undefined}
              role="button"
              tabIndex={0}
              className={`${TILE_BASE} ${cellLayouts[index] ?? ""}`}
              onClick={() => !isMoreTile && openGallery(index)}
              onKeyDown={(e) => {
                if (!isMoreTile && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  openGallery(index);
                }
              }}
              aria-label={
                isMoreTile ? undefined : `Xem ảnh ${index + 1} trong gallery`
              }
            >
              {isMobileLayout ? (
                <Image
                  src={image}
                  alt={title}
                  title={title}
                  width={960}
                  height={960}
                  className={`!object-cover !object-center w-full h-full min-h-[inherit] ${TILE_IMAGE_CLASS}`}
                  priority={index < 2}
                />
              ) : (
                <div
                  className={
                    isDesktopHeroTile
                      ? "absolute inset-0 overflow-hidden will-change-transform"
                      : "absolute inset-0 overflow-hidden"
                  }
                  style={
                    isDesktopHeroTile
                      ? { transform: `translate3d(0, ${parallaxY}px, 0)` }
                      : undefined
                  }
                >
                  <Image
                    src={image}
                    alt={title}
                    title={title}
                    fill
                    sizes={desktopSizes}
                    className={`object-cover object-center ${TILE_IMAGE_CLASS}`}
                    priority={isDesktopHeroTile || index < 4}
                  />
                </div>
              )}
              {isMoreTile ? (
                <MoreOverlay
                  moreCount={moreCount}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openGallery(moreTileIndex);
                  }}
                />
              ) : null}
            </div>
          );
        })}
      </div>

      {modalOpen ? (
        <ProjectGalleryModal
          open={modalOpen}
          initialIndex={startIndex}
          images={list}
          title={title}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </section>
  );
}
