const baseUrl =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN || "https://mocviet.netlify.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
