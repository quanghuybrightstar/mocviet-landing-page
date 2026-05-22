import { TypeHeader } from "@/libs/constants";
import { getProjectTagLabel, normalizeProjectTags } from "@/libs/project-tags";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { calistogaFont } from "@/libs/fonts";
import { IconArrowForward, IconArrowOutward } from "@public/assets/icons";

/** Stitch: surface-container-low + primary-container text, rounded-full pill */
const PROJECT_TAG_PILL_CLASS =
  "inline-flex items-center px-3 py-1 rounded-full bg-[#fff1ec] text-[var(--primary-color)] font-medium uppercase tracking-wider text-[10px] md:normal-case md:tracking-normal md:text-sm";

/**
 * @param {{ project: { title: string, description?: string, tags?: string[], tag?: string } }} props
 */
function ProjectListMeta({ project }) {
  const tagValues = normalizeProjectTags(project);
  const description = project.description?.trim();

  return (
    <>
      {tagValues.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          {tagValues.map((value) => (
            <span key={value} className={PROJECT_TAG_PILL_CLASS}>
              {getProjectTagLabel(value)}
            </span>
          ))}
        </div>
      ) : null}
      <h3 className="m-0 font-semibold text-lg md:text-2xl text-[#241915] group-hover:text-[var(--primary-color)] transition-colors duration-300">
        {project.title}
      </h3>
      {description ? (
        <p className="m-0 text-sm font-normal leading-5 text-[#57423a] line-clamp-2 md:text-base md:leading-normal md:line-clamp-3">
          {description}
        </p>
      ) : null}
    </>
  );
}

/**
 * @param {{ projects: Array<{ _id: string, title: string, code: string, imageUrls?: string[], description?: string, tags?: string[], tag?: string }> }} props
 */
const ListProject = ({ projects = [] }) => {
  return (
    <div className="list-has-dot grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-6 md:gap-y-20 lg:gap-x-16 md:pt-8">
      {projects.map((project, index) => (
        <Link
          prefetch
          href={`${TypeHeader.PROJECTS.path}/${project.code}`}
          key={project._id || project.code}
          className={clsx(
            { "item-dot": !(index % 2) },
            "group relative flex flex-col overflow-hidden md:overflow-visible",
            "rounded-2xl shadow-sm bg-white",
            "md:rounded-xl md:bg-[#f6f6f6] md:shadow-sm md:hover:shadow-md md:transition-shadow md:duration-500",
            { "z-[2]": !(index % 2) },
          )}
        >
          <div
            className={clsx(
              "overflow-hidden relative w-full",
              "aspect-[4/3] md:aspect-auto md:h-[420px]",
              "md:rounded-none md:rounded-t-xl",
            )}
          >
            <Image
              alt={project.title}
              title={project.title}
              src={project.imageUrls?.[0] || "/images/projects/project_1.webp"}
              width={840}
              height={840}
              className="!object-cover !object-center w-full h-full scale-100 group-hover:scale-105 duration-700 ease-out"
              priority={index < 6}
            />
            <div
              className={`${calistogaFont.className} text-3xl text-bold min-w-12 min-h-12 px-2 absolute top-0 left-0 rounded-tl-lg md:rounded-tl-xl rounded-br-lg flex items-center justify-center primary-color bg-[#f0e9db]`}
            >
              {index + 1}
            </div>
            {/* Desktop: overlay CTA on image hover */}
            <div className="absolute inset-0 z-[1] hidden md:flex bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center pointer-events-none">
              <span className="bg-white text-[#1A202C] text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-sm">
                Xem chi tiết
                <Image
                  src={IconArrowOutward}
                  width={18}
                  height={18}
                  alt=""
                  aria-hidden
                />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-3.5 md:gap-3 md:px-5 md:pt-4 md:pb-5 md:rounded-b-xl md:overflow-hidden">
            <ProjectListMeta project={project} />
            {/* Mobile: inline CTA below content (Stitch) */}
            <span className="md:hidden flex items-center gap-1 text-sm font-semibold text-[var(--primary-color)] mt-2">
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
      ))}
    </div>
  );
};

export default ListProject;
