import HeaderComponent from "@/components/Header";
import ProjectDetailDesktop from "@/components/projects/ProjectDetailDesktop";
import ProjectDetailMobile from "@/components/projects/ProjectDetailMobile";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import { getProjectDetailByCode, fetchProjects } from "@/libs/sanity";
import { notFound } from "next/navigation";

/** Revalidate at most every 60s so Sanity publishes show up without full rebuild. */
export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((p) => ({ code: p.code }));
}

export default async function ProjectDetailPage({ params }) {
  const { code } = params;
  const project = await getProjectDetailByCode(code);
  if (!project) return notFound();

  const {
    title = "",
    images = [],
    description,
    tags,
    tag,
    designConcept,
    functionalRooms,
    contentSections,
    projectMeta,
    relatedResolved,
  } = project;

  const heroSubtitle =
    description?.trim() ||
    `${INFO.projects.seo_desc_detail} ${title}`;

  const breadCrumbs = [
    { url: TypeHeader.PROJECTS.path, name: TypeHeader.PROJECTS.name },
    { url: "", name: title },
  ];

  const sectionProps = {
    designConcept,
    functionalRooms: functionalRooms ?? [],
    contentSections: contentSections ?? [],
    projectMeta,
  };

  return (
    <div className="commondPage homePage">
      <HeaderComponent
        type={TypeHeader.PROJECTS.path}
        headerVariant="overHero"
      />

      <ProjectDetailMobile
        title={title}
        images={images ?? []}
        description={description}
        tags={tags}
        tag={tag}
        {...sectionProps}
        relatedProjects={relatedResolved ?? []}
        breadCrumbs={breadCrumbs}
      />

      <ProjectDetailDesktop
        title={title}
        heroSubtitle={heroSubtitle}
        images={images ?? []}
        breadCrumbs={breadCrumbs}
        {...sectionProps}
        relatedProjects={relatedResolved ?? []}
      />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { code } = params;
  const project = await getProjectDetailByCode(code);
  if (!project) return notFound();

  const { title = "", images = [], description } = project;
  const firstImage = images?.[0];
  const seoImage = firstImage
    ? firstImage.startsWith("http")
      ? firstImage
      : `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${firstImage}`
    : DataSeo.seoImage;

  const metaDesc =
    description?.trim() || `${INFO.projects.seo_desc_detail}${title}`;

  return {
    title: `${TypeHeader.PROJECTS.name} ${title} | ${DataSeo.seoTitle}`,
    description: metaDesc,
    openGraph: { images: [seoImage] },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/projects/${code}`,
    },
  };
}
