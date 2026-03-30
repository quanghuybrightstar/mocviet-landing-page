import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * On-demand ISR revalidation: called from a Sanity Webhook when a `project`
 * is published/updated/deleted.
 * Sanity webhook setup: URL = https://<domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 * (or set the `x-sanity-revalidate-secret` header).
 *
 * @see https://www.sanity.io/docs/webhooks
 */
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
}

function verifySecret(request) {
  const expected = process.env.SANITY_REVALIDATE_SECRET;
  if (!expected) return false;
  const url = new URL(request.url);
  const fromQuery = url.searchParams.get("secret");
  const fromHeader =
    request.headers.get("x-sanity-revalidate-secret") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  return (fromQuery && fromQuery === expected) || (fromHeader && fromHeader === expected);
}

/**
 * Sanity webhook payload usually contains `result` (a GROQ projection) or the
 * document at the root.
 * Extract the project slug from the `code` field (either a slug object or a
 * legacy string).
 */
function extractProjectSlug(body) {
  if (!body || typeof body !== "object") return null;
  let doc = body.result ?? body;
  if (Array.isArray(doc)) doc = doc[0];
  if (!doc || typeof doc !== "object") return null;
  if (doc._type && doc._type !== "project") return null;
  const c = doc.code;
  if (typeof c === "string" && c.trim()) return c.trim();
  if (c && typeof c === "object" && typeof c.current === "string" && c.current.trim()) {
    return c.current.trim();
  }
  return null;
}

export async function POST(request) {
  if (!verifySecret(request)) return unauthorized();

  let body = {};
  try {
    const text = await request.text();
    if (text) body = JSON.parse(text);
  } catch {
    // Empty or non-JSON body — still revalidate the list + sitemap.
  }

  const slug = extractProjectSlug(body);

  try {
    revalidatePath("/projects");
    if (slug) revalidatePath(`/projects/${slug}`);
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      ok: true,
      revalidated: ["/projects", slug ? `/projects/${slug}` : null, "/sitemap.xml"].filter(Boolean),
    });
  } catch (e) {
    console.error("[api/revalidate]", e);
    return NextResponse.json({ ok: false, error: "Revalidate failed" }, { status: 500 });
  }
}
