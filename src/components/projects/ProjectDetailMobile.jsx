"use client";

import ProjectDetailGallery from "@/components/projects/ProjectDetailGallery";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDetailSections from "@/components/projects/ProjectDetailSections";
import ProjectRelated from "@/components/projects/ProjectRelated";
import FadeUp from "@/components/motion/FadeUp";
import MyBreadCrumb from "@/components/MyBreadCrumb";

/**
 * @param {{
 *   title: string,
 *   images: string[],
 *   description?: string,
 *   tags?: string[],
 *   tag?: string,
 *   designConcept?: object,
 *   functionalRooms?: string[],
 *   contentSections?: Array,
 *   projectMeta?: object,
 *   relatedProjects?: Array,
 *   breadCrumbs: Array<{ url: string, name: string }>,
 * }} props
 */
export default function ProjectDetailMobile({
  title,
  images = [],
  description,
  tags,
  tag,
  designConcept,
  functionalRooms = [],
  contentSections = [],
  projectMeta,
  relatedProjects = [],
  breadCrumbs = [],
}) {
  const descriptionText = description?.trim();

  return (
    <div className="md:hidden pb-4">
      <ProjectDetailHero
        title={title}
        imageUrl={images[0]}
        tags={tags}
        tag={tag}
      />

      <main className="relative z-10 -mt-8 rounded-t-[32px] bg-surface px-6 pt-6 space-y-10">
        <FadeUp>
          <MyBreadCrumb breadCrumbs={breadCrumbs} variant="compact" />
          {descriptionText ? (
            <p className="mt-6 mb-0 text-base leading-relaxed text-secondary">
              {descriptionText}
            </p>
          ) : null}
        </FadeUp>

        <FadeUp delayMs={80}>
          <ProjectDetailGallery images={images} title={title} layout="mobile" />
        </FadeUp>

        <FadeUp delayMs={120}>
          <ProjectDetailSections
            designConcept={designConcept}
            functionalRooms={functionalRooms}
            contentSections={contentSections}
            projectMeta={projectMeta}
            layout="mobile"
          />
        </FadeUp>

        <FadeUp delayMs={160}>
          <ProjectRelated projects={relatedProjects} layout="mobile" />
        </FadeUp>
      </main>
    </div>
  );
}
