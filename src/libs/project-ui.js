/** Stitch: surface-container-low + primary-container text, rounded-full pill */
export const PROJECT_TAG_PILL_CLASS =
  "inline-flex items-center px-3 py-1 rounded-full bg-[var(--surface-primary-tint)] text-[var(--primary-color)] font-medium uppercase tracking-wider text-[10px] md:normal-case md:tracking-normal md:text-sm";

/** Glass pill on dark image overlays (hero, related mobile). */
export const PROJECT_TAG_PILL_ON_IMAGE_CLASS =
  "inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-color)]/20 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[3px] font-semibold text-white";

export const PROJECT_FALLBACK_IMAGE = "/images/projects/project_1.webp";

const SANITY_CDN_HOST = "cdn.sanity.io";

/**
 * Sanity CDN resize (center crop). Local/static URLs pass through for Next optimizer.
 * @param {string | undefined} url
 * @param {{ width?: number, quality?: number, fit?: string, crop?: string }} [opts]
 * @returns {string | undefined}
 */
export function getOptimizedSanityImageUrl(url, opts = {}) {
  if (!url?.trim()) return url;

  const {
    width = 1280,
    quality = 85,
    fit = "crop",
    crop = "center",
  } = opts;

  if (!url.includes(SANITY_CDN_HOST)) {
    return url;
  }

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("w", String(width));
    parsed.searchParams.set("q", String(quality));
    parsed.searchParams.set("auto", "format");
    if (fit) parsed.searchParams.set("fit", fit);
    if (crop) parsed.searchParams.set("crop", crop);
    return parsed.toString();
  } catch {
    return url;
  }
}

/**
 * @param {string | string[] | undefined} imagesOrFirstUrl
 * @returns {string}
 */
export function getProjectCoverImage(imagesOrFirstUrl) {
  const first = Array.isArray(imagesOrFirstUrl)
    ? imagesOrFirstUrl[0]
    : imagesOrFirstUrl;
  return first || PROJECT_FALLBACK_IMAGE;
}

/** Mobile hero: ~2× retina width, center crop, higher quality from Sanity CDN. */
export function getProjectHeroImageUrl(imagesOrFirstUrl) {
  return getOptimizedSanityImageUrl(getProjectCoverImage(imagesOrFirstUrl), {
    width: 1600,
    quality: 88,
    fit: "crop",
    crop: "center",
  });
}
