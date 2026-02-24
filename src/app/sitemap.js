import { INFO, TypeHeader } from "@/libs/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN || "https://mocviet.netlify.app";

// Priority: relative hint 0–1 within your site (not a Google ranking factor). Home = 1, main sections = 0.9, project detail = 0.8.
// lastModified omitted: Google recommends only including it when you have a real last content-change date; avoid build-time "now" for static pages.

export default function sitemap() {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: TypeHeader.ABOUT.path, priority: 0.9, changeFrequency: "monthly" },
    { path: TypeHeader.SERVICES.path, priority: 0.9, changeFrequency: "monthly" },
    { path: TypeHeader.PROJECTS.path, priority: 0.9, changeFrequency: "weekly" },
  ];

  const projectCodes = Object.keys(INFO.projects.list_detail || {});

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));

  const projectEntries = projectCodes.map((code) => ({
    url: `${baseUrl}/projects/${code}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...projectEntries];
}
