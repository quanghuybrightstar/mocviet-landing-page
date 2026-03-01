import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/** GROQ: all projects (code, title, first image URLs). Order: asc to match original constants order (first-created first). code from slug type (code.current) or legacy string. */
const PROJECTS_LIST_QUERY = `*[_type == "project"] | order(_createdAt asc) {
  _id,
  title,
  "code": coalesce(code.current, code),
  "imageUrls": images[].asset->url
}`;

/** GROQ: single project by code (slug). code from slug type (code.current) or legacy string. */
const PROJECT_BY_CODE_QUERY = `*[_type == "project" && (code.current == $code || code == $code)][0] {
  _id,
  title,
  "code": coalesce(code.current, code),
  "images": images[].asset->url
}`;

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
    };
  } catch {
    return null;
  }
}

/**
 * Fetch all projects from Sanity (used by /projects list and sitemap).
 * Falls back to INFO.projects.list_detail when Sanity has no documents or env is missing.
 * @returns {Promise<Array<{ _id: string, title: string, code: string, imageUrls: string[] }>>}
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
 * Fetch one project by code (slug) for /projects/[code].
 * Falls back to INFO.projects.list_detail when Sanity returns nothing.
 * @param {string} code - URL slug (e.g. "cafe-meo")
 * @returns {Promise<{ _id: string, title: string, code: string, images: string[] } | null>}
 */
export async function fetchProjectByCode(code) {
  if (!code) return null;
  if (projectId && dataset) {
    try {
      const doc = await sanityClient.fetch(PROJECT_BY_CODE_QUERY, { code });
      if (doc) return doc;
    } catch (e) {
      console.error("[Sanity] fetchProjectByCode error:", e);
    }
  }
  return getFallbackProjectByCode(code);
}
