"use client";

import ProjectDetailGallery from "@/components/projects/ProjectDetailGallery";
import ProjectDetailSections from "@/components/projects/ProjectDetailSections";
import ProjectRelated from "@/components/projects/ProjectRelated";
import FadeUp from "@/components/motion/FadeUp";
import MyBreadCrumb from "@/components/MyBreadCrumb";

/**
 * @param {{
 *   title: string,
 *   heroSubtitle: string,
 *   images: string[],
 *   breadCrumbs: Array<{ url: string, name: string }>,
 *   designConcept?: object,
 *   functionalRooms?: string[],
 *   contentSections?: Array,
 *   projectMeta?: object,
 *   relatedProjects?: Array,
 * }} props
 */
export default function ProjectDetailDesktop({
  title,
  heroSubtitle,
  images = [],
  breadCrumbs = [],
  designConcept,
  functionalRooms = [],
  contentSections = [],
  projectMeta,
  relatedProjects = [],
}) {
  const sectionProps = {
    designConcept,
    functionalRooms,
    contentSections,
    projectMeta,
  };

  return (
    <div className="hidden md:block container">
      <FadeUp>
        <div className="pt-[90px]">
          <MyBreadCrumb breadCrumbs={breadCrumbs} />
        </div>
        <section className="pt-8 pb-10 flex flex-col items-center justify-center px-6">
          <h1 className="text-[40px] text-center font-bold">{title}</h1>
          <p className="text-base max-w-[960px] text-center text-secondary m-0">
            {heroSubtitle}
          </p>
        </section>
      </FadeUp>

      <div className="flex flex-col gap-10">
        <FadeUp delayMs={80}>
          <ProjectDetailGallery
            images={images}
            title={title}
            layout="desktop"
          />
        </FadeUp>

        <FadeUp delayMs={120}>
          <ProjectDetailSections {...sectionProps} layout="desktop" />
        </FadeUp>

        <FadeUp delayMs={160}>
          <ProjectRelated projects={relatedProjects} />
        </FadeUp>
      </div>
    </div>
  );
}
