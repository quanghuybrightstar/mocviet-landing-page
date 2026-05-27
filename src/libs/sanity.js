import { cache } from "react";
import { createClient } from "next-sanity";
import { normalizeProjectTags } from "@/libs/project-tags";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/** Card shape for related project lists. */
const PROJECT_RELATED_CARD_PROJECTION = `{
  _id,
  title,
  "code": coalesce(code.current, code),
  "imageUrls": images[].asset->url,
  description,
  tags,
  tag
}`;

/** GROQ: all projects (code, title, first image URLs). Order: asc to match original constants order (first-created first). code from slug type (code.current) or legacy string. */
const PROJECTS_LIST_QUERY = `*[_type == "project"] | order(_createdAt asc) {
  _id,
  title,
  "code": coalesce(code.current, code),
  "imageUrls": images[].asset->url,
  description,
  tags,
  tag
}`;

/** GROQ: single project by code with full detail fields. */
const PROJECT_BY_CODE_QUERY = `*[_type == "project" && (code.current == $code || code == $code)][0] {
  _id,
  title,
  "code": coalesce(code.current, code),
  "images": images[].asset->url,
  description,
  tags,
  tag,
  designConcept {
    title,
    description,
    "moodboardImages": moodboardImages[].asset->url
  },
  functionalRooms,
  contentSections[] {
    _key,
    heading,
    body
  },
  projectMeta {
    client,
    location,
    area,
    completedYear
  },
  "relatedProjects": relatedProjects[]->${PROJECT_RELATED_CARD_PROJECTION}
}`;

/** GROQ: supplement related projects (tag overlap, then newest). */
const RELATED_PROJECTS_SUPPLEMENT_QUERY = `*[_type == "project" && _id != $currentId && !(_id in $excludeIds)] | order(count(tags[@ in $tags]) desc, _createdAt desc)[0...$limit] ${PROJECT_RELATED_CARD_PROJECTION}`;

/**
 * Merge manual related projects with auto supplement (dedupe by _id, max 3).
 * @param {Array<{ _id: string }>} manual
 * @param {Array<{ _id: string }>} supplement
 * @returns {Array<{ _id: string }>}
 */
export function resolveRelatedProjects(manual = [], supplement = []) {
  const seen = new Set();
  const out = [];
  for (const p of [...manual, ...supplement]) {
    if (!p?._id || seen.has(p._id)) continue;
    seen.add(p._id);
    out.push(p);
    if (out.length >= 3) break;
  }
  return out;
}

/** Fallback: get one project by code from constants when not found in Sanity. */
function getFallbackProjectByCode(code) {
  try {
    const { INFO } = require("@/libs/constants");
    const p = INFO?.projects?.list_detail?.[code];
    if (!p) return null;
    return {
      _id: p.code,
      title: p.title,
      code: p.code,
      images: Array.isArray(p.images) ? p.images : [],
      relatedResolved: [],
    };
  } catch {
    return null;
  }
}

async function fetchRelatedSupplement(currentId, tags, excludeIds, limit) {
  if (!limit || limit <= 0) return [];
  try {
    const list = await sanityClient.fetch(RELATED_PROJECTS_SUPPLEMENT_QUERY, {
      currentId,
      tags: Array.isArray(tags) ? tags : [],
      excludeIds: Array.isArray(excludeIds) ? excludeIds : [],
      limit,
    });
    return Array.isArray(list) ? list : [];
  } catch (e) {
    console.error("[Sanity] fetchRelatedSupplement error:", e);
    return [];
  }
}

/**
 * Fetch project detail with resolved related projects (manual + auto supplement).
 * @param {string} code
 */
export async function fetchProjectDetailByCode(code) {
  if (!code) return null;

  if (projectId && dataset) {
    try {
      const doc = await sanityClient.fetch(PROJECT_BY_CODE_QUERY, { code });
      if (doc) {
        const manual = (doc.relatedProjects ?? []).filter(Boolean);
        let supplement = [];
        if (manual.length < 3) {
          const excludeIds = [
            doc._id,
            ...manual.map((p) => p._id).filter(Boolean),
          ];
          supplement = await fetchRelatedSupplement(
            doc._id,
            normalizeProjectTags(doc),
            excludeIds,
            3 - manual.length,
          );
        }
        return {
          ...doc,
          relatedResolved: resolveRelatedProjects(manual, supplement),
        };
      }
    } catch (e) {
      console.error("[Sanity] fetchProjectDetailByCode error:", e);
    }
  }

  return getFallbackProjectByCode(code);
}

/** Deduped per-request fetch for page + generateMetadata. */
export const getProjectDetailByCode = cache(fetchProjectDetailByCode);

/**
 * Fetch all projects from Sanity (used by /projects list and sitemap).
 * @returns {Promise<Array<{ _id: string, title: string, code: string, imageUrls: string[], description?: string, tags?: string[], tag?: string }>>}
 */
export async function fetchProjects() {
  if (!projectId || !dataset) return [];
  try {
    const list = await sanityClient.fetch(PROJECTS_LIST_QUERY);
    const result = Array.isArray(list) ? list : [];
    if (result.length === 0) return [];
    return result;
  } catch (e) {
    console.error("[Sanity] fetchProjects error:", e);
    return [];
  }
}

/**
 * @deprecated Use getProjectDetailByCode for detail pages.
 * @param {string} code
 */
export async function fetchProjectByCode(code) {
  return fetchProjectDetailByCode(code);
}
