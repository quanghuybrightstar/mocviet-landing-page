/** Sanity `project.tags` select options — shared with Studio schema and list UI. */
export const PROJECT_TAG_OPTIONS = [
  { title: "Nội thất", value: "noi-that" },
  { title: "Kiến trúc", value: "kien-truc" },
  { title: "Văn phòng", value: "van-phong" },
  { title: "Thương mại", value: "thuong-mai" },
  { title: "F&B", value: "f-b" },
  { title: "Spa & làm đẹp", value: "spa-lam-dep" },
  { title: "Công trình công cộng", value: "cong-trinh-cong-cong" },
];

export const PROJECT_TAG_VALUES = PROJECT_TAG_OPTIONS.map((o) => o.value);

/**
 * @param {string | undefined} value
 * @returns {string | undefined}
 */
export function getProjectTagLabel(value) {
  if (!value) return undefined;
  return PROJECT_TAG_OPTIONS.find((o) => o.value === value)?.title ?? value;
}

/**
 * @param {string[] | undefined} tags
 * @returns {string[]}
 */
export function getProjectTagLabels(tags) {
  if (!Array.isArray(tags) || tags.length === 0) return [];
  return tags
    .map((value) => getProjectTagLabel(value))
    .filter((label) => typeof label === "string" && label.length > 0);
}

/**
 * Normalize tags from API (supports legacy single `tag` field).
 * @param {{ tags?: string[], tag?: string }} doc
 * @returns {string[]}
 */
export function normalizeProjectTags(doc) {
  if (Array.isArray(doc?.tags) && doc.tags.length > 0) {
    return doc.tags.filter((t) => typeof t === "string" && t.length > 0);
  }
  if (typeof doc?.tag === "string" && doc.tag.length > 0) {
    return [doc.tag];
  }
  return [];
}
