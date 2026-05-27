"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Keyboard, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";

/** Shared nav chrome (prev + next). */
const NAV_BTN =
  "!inline-flex !absolute top-1/2 z-10 -translate-y-1/2 !bg-white !shadow-md !w-11 !h-11 !outline-none";

/** Thumbnail frame — active/inactive toggled in map. */
const THUMB_FRAME =
  "relative w-[64px] h-[48px] md:w-[88px] md:h-[64px] rounded-lg overflow-hidden border-2 transition-colors";
const THUMB_ACTIVE =
  "border-white opacity-100 md:border-[var(--primary-color)]";
const THUMB_INACTIVE =
  "border-transparent opacity-60 md:opacity-80 md:hover:opacity-100";

/**
 * @param {{
 *   open: boolean,
 *   initialIndex?: number,
 *   images: string[],
 *   title?: string,
 *   onClose: () => void,
 * }} props
 */
export default function ProjectGalleryModal({
  open,
  initialIndex = 0,
  images = [],
  title = "",
  onClose,
}) {
  const mainSwiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    setActiveIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, handleClose]);

  if (!open || !images.length) return null;

  const count = images.length;

  const modal = (
    <div
      className="fixed inset-0 z-[1200] flex min-h-[100dvh] flex-col md:items-center md:justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery ${title}`}
    >
      <button
        type="button"
        className="absolute inset-0 border-0 cursor-default bg-black md:bg-black/50"
        aria-label="Đóng gallery"
        onClick={handleClose}
      />

      <div
        className="relative z-[1] flex h-[100dvh] w-full min-h-[100dvh] flex-col overflow-hidden bg-black max-md:max-w-none max-md:rounded-none md:h-full md:max-h-[95dvh] md:max-w-[1100px] md:min-h-0 md:rounded-xl md:bg-white md:shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          type="button"
          onClick={handleClose}
          aria-label="Đóng"
          className="!absolute top-3 right-3 z-20 !text-white hover:!bg-white/10 md:top-2 md:right-2 md:!text-secondary md:hover:!bg-black/5"
          size="small"
        >
          <CloseIcon />
        </IconButton>

        <div className="relative flex flex-1 min-h-0 flex-col justify-center md:px-8 md:pt-14 md:pb-2">
          <div className="relative mx-auto flex w-full flex-1 items-center justify-center min-h-[55dvh] md:min-h-0 md:max-h-[min(52dvh,520px)]">
            {count > 1 ? (
              <div className="hidden md:contents">
                <IconButton
                  type="button"
                  aria-label="Ảnh trước"
                  onClick={() => mainSwiperRef.current?.slidePrev()}
                  className={`${NAV_BTN} left-0`}
                  size="small"
                >
                  <ChevronLeftIcon />
                </IconButton>

                <IconButton
                  type="button"
                  aria-label="Ảnh sau"
                  onClick={() => mainSwiperRef.current?.slideNext()}
                  className={`${NAV_BTN} right-0`}
                  size="small"
                >
                  <ChevronRightIcon />
                </IconButton>
              </div>
            ) : null}

            <Swiper
              key={`main-${open}-${initialIndex}`}
              modules={[Thumbs, Keyboard]}
              onSwiper={(swiper) => {
                mainSwiperRef.current = swiper;
              }}
              keyboard={{ enabled: true }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              initialSlide={initialIndex}
              spaceBetween={0}
              className="project-gallery-main w-full md:!px-14"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {images.map((src, i) => (
                <SwiperSlide
                  key={`${src}-${i}`}
                  className="!flex items-center justify-center"
                >
                  <div className="relative h-full w-full min-w-full min-h-[65dvh] md:aspect-[4/3] md:min-h-0 md:max-h-[min(60dvh,520px)] md:rounded-lg md:overflow-hidden md:bg-surface-card">
                    <Image
                      src={src}
                      alt={`${title} ${i + 1}`}
                      fill
                      className="!object-contain"
                      sizes="(max-width: 768px) 100vw, 1100px"
                      priority={i === initialIndex}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between px-6 pb-2 md:hidden">
          <span className="text-sm font-medium text-white underline underline-offset-4 decoration-white">
            Tất cả ({count})
          </span>
          <span className="text-sm text-white tabular-nums">
            {activeIndex + 1}/{count}
          </span>
        </div>

        <div className="shrink-0 pb-6 md:px-8 md:pb-6">
          <p className="m-0 mb-3 hidden px-8 text-sm font-semibold text-[var(--primary-color)] border-b-2 border-[var(--primary-color)] md:inline-block pb-1">
            Tất cả ảnh ({count})
          </p>

          <Swiper
            key={`thumbs-${open}-${initialIndex}`}
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            initialSlide={initialIndex}
            spaceBetween={10}
            slidesPerView="auto"
            watchSlidesProgress
            slideToClickedSlide
            className="project-gallery-thumbs w-full px-6 md:px-0"
          >
            {images.map((src, i) => (
              <SwiperSlide
                key={`thumb-${src}-${i}`}
                className="!w-[64px] md:!w-[88px] cursor-pointer shrink-0"
              >
                <div
                  className={clsx(
                    THUMB_FRAME,
                    i === activeIndex ? THUMB_ACTIVE : THUMB_INACTIVE,
                  )}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="!object-cover"
                    sizes="88px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
