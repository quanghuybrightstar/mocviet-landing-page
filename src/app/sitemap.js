import { TypeHeader } from "@/libs/constants";
import { fetchProjects } from "@/libs/sanity";

const baseUrl =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN || "https://mocviet.netlify.app";

export default async function sitemap() {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: TypeHeader.ABOUT.path, priority: 0.9, changeFrequency: "monthly" },
    { path: TypeHeader.SERVICES.path, priority: 0.9, changeFrequency: "monthly" },
    { path: TypeHeader.PROJECTS.path, priority: 0.9, changeFrequency: "weekly" },
  ];

  const projects = await fetchProjects();
  const projectCodes = projects.map((p) => p.code);

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
