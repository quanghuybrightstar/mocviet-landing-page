"use client";

import FadeUp from "@/components/motion/FadeUp";
import ImageZoom from "@/components/ui/ImageZoom";
import { TypeHeader } from "@/libs/constants";
import Link from "next/link";

/**
 * @param {{ projects: Array<{ id?: number, code: string, src?: string, title: string }>, title: string, description: string }} props
 */
export default function HomeProjectTiles({ projects, title, description }) {
  return (
    <section className="ftco-section pb-6 md:pb-2">
      <FadeUp>
        <div className="container">
          <div className="row justify-center mb-2 pb-2 md:mb-6">
            <div className="col-md-7 heading-section">
              <h2 className="mb-6">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </FadeUp>
      <div className="row no-gutters gap-y-4">
        {projects?.map((project, index) => (
          <FadeUp
            key={project.id || project.code}
            className="col-md-6 col-lg-3 min-h-[450px] h-[450px] relative"
            delayMs={Math.min(index * 80, 320)}
          >
            <Link
              prefetch
              href={`${TypeHeader.PROJECTS.path}/${project.code}`}
              className="block h-full"
            >
              <ImageZoom
                src={project.src || "/images/projects/project_1.webp"}
                title={project.title}
              />
            </Link>
          </FadeUp>
        ))}
      </div>
      <FadeUp delayMs={120}>
        <div className="flex justify-center text-center pt-6">
          <Link href={TypeHeader.PROJECTS.path} className="btn-primary-custom">
            Xem thêm
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
