import { TypeHeader } from "@/libs/constants";
import { getProjectTagLabel, normalizeProjectTags } from "@/libs/project-tags";
import {
  getProjectCoverImage,
  PROJECT_TAG_PILL_CLASS,
  PROJECT_TAG_PILL_ON_IMAGE_CLASS,
} from "@/libs/project-ui";
import Image from "next/image";
import Link from "next/link";
import { IconArrowForward } from "@public/assets/icons";

const RELATED_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
};

/**
 * @param {{ projects: Array, layout?: 'mobile' | 'desktop' }} props
 */
export default function ProjectRelated({ projects, layout = "desktop" }) {
  const list = projects ?? [];
  if (!list.length) return null;

  const isMobile = layout === "mobile";

  if (isMobile) {
    return (
      <section className="pb-2">
        <h2 className="text-xl font-semibold text-heading !mb-6">
          Dự án liên quan
        </h2>
        <div className="flex flex-col gap-4">
          {list.map((project) => {
            const tagValues = normalizeProjectTags(project);
            const imageSrc = getProjectCoverImage(project.imageUrls);
            const firstTag = tagValues[0];

            return (
              <Link
                key={project._id || project.code}
                href={`${TypeHeader.PROJECTS.path}/${project.code}`}
                {...RELATED_LINK_PROPS}
                className="group relative block h-72 overflow-hidden rounded-2xl active:scale-[0.98] transition-transform"
              >
                <Image
                  src={imageSrc}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {firstTag ? (
                      <span className={PROJECT_TAG_PILL_ON_IMAGE_CLASS}>
                        {getProjectTagLabel(firstTag)}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="m-0 text-lg font-medium text-white leading-tight mt-2">
                    {project.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="pt-6 md:pt-16 border-t border-border-light">
      <h2 className="text-lg md:text-2xl font-medium text-heading !mb-6">
        Dự án liên quan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {list.map((project) => {
          const tagValues = normalizeProjectTags(project);
          const imageSrc = getProjectCoverImage(project.imageUrls);

          return (
            <Link
              key={project._id || project.code}
              href={`${TypeHeader.PROJECTS.path}/${project.code}`}
              {...RELATED_LINK_PROPS}
              className="group flex flex-col overflow-hidden rounded-2xl bg-surface-card shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={project.title}
                  title={project.title}
                  width={640}
                  height={480}
                  className="!object-cover !object-center w-full h-full scale-100 group-hover:scale-105 duration-500 ease-out"
                />
              </div>
              <div className="flex flex-col gap-2 p-6 md:p-5">
                {tagValues.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {tagValues.slice(0, 2).map((value) => (
                      <span key={value} className={PROJECT_TAG_PILL_CLASS}>
                        {getProjectTagLabel(value)}
                      </span>
                    ))}
                  </div>
                ) : null}
                <h3 className="m-0 font-semibold text-lg text-heading group-hover:text-[var(--primary-color)] transition-colors">
                  {project.title}
                </h3>
                {project.description?.trim() ? (
                  <p className="m-0 text-sm text-secondary line-clamp-2">
                    {project.description.trim()}
                  </p>
                ) : null}
                <span className="flex items-center gap-1 text-sm font-semibold text-[var(--primary-color)] mt-1">
                  Xem chi tiết
                  <Image
                    src={IconArrowForward}
                    width={18}
                    height={18}
                    alt=""
                    aria-hidden
                    className="shrink-0"
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
