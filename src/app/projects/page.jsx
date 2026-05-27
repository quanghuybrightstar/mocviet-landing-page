import HeaderComponent from "@/components/Header";
import ProjectsPageIntro from "@/components/projects/ProjectsPageIntro";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import ListProjects from "@/components/projects/ListProjects";
import { fetchProjects } from "@/libs/sanity";

/** Revalidate at most every 60s so Sanity publishes show up without full rebuild. */
export const revalidate = 60;

export default async function ProjectPage() {
  const projects = await fetchProjects();

  return (
    <div className="commondPage homePage min-h-dvh bg-surface-warm md:bg-surface">
      <HeaderComponent
        type={TypeHeader.PROJECTS.path}
        isSpecialHeader
      />
      <div className="container">
        <ProjectsPageIntro
          title={INFO.projects.title}
          description={INFO.projects.desc}
        />
        <div className="flex flex-col gap-8 md:gap-16 min-h-[100dvh]">
          <ListProjects projects={projects} />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: `${TypeHeader.PROJECTS.name} | ${DataSeo.seoTitle}`,
  description: DataSeo.seoDescription,
  openGraph: {
    images: [DataSeo.seoImage],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/projects`,
  },
};
