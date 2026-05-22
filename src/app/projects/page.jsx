import HeaderComponent from "@/components/header";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import ListProjects from "@/components/projects/list-projects";
import { fetchProjects } from "@/libs/sanity";

/** Revalidate at most every 60s so Sanity publishes show up without full rebuild. */
export const revalidate = 60;

export default async function ProjectPage() {
  const projects = await fetchProjects();

  return (
    <div className="commondPage homePage min-h-dvh bg-[#fffaf8] md:bg-[#fafafa]">
      <HeaderComponent
        type={TypeHeader.PROJECTS.path}
        className="!bg-white"
        isSpecialHeader
      />
      <div className="container">
        <section className="pt-[74px] pb-8 md:pt-[90px] md:pb-11 flex flex-col items-center justify-center md:px-4 ">
          <h1 className="text-[28px] md:text-[40px]">{INFO.projects.title}</h1>
          <h2 className="text-sm md:text-base max-w-[960px] text-center">
            {INFO.projects.desc}
          </h2>
        </section>
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
