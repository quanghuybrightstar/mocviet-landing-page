import { INFO, TypeHeader } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { calistogaFont } from "@/libs/fonts";

const ListProject = () => {
  return (
    <div className="list-has-dot grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 md:gap-16 md:gap-y-20 md:pt-8">
      {Object.values(INFO.projects.list_detail).map((project, index) => (
        <Link
          prefetch
          href={`${TypeHeader.PROJECTS.path}/${project.code}`}
          key={project.id}
          className={clsx(
            {
              "item-dot ": !(index % 2),
            },
            "flex flex-col gap-3 group relative"
          )}
        >
          <div className="overflow-hidden relative h-[360px] md:h-[480px] rounded-lg">
            <Image
              alt={project.title}
              src={project.images?.[0]}
              width={840}
              height={840}
              className="!object-cover !object-center w-full h-full group-hover:scale-125 scale-100 duration-500 ease-in-out rounded-lg border border-[#e1e5ea]"
              priority={index < 6 ? true : false}
            />
            <div
              className={`${calistogaFont.className} text-3xl text-bold min-w-12 min-h-12 px-2 absolute top-0 left-0 rounded-tl-lg rounded-br-lg flex items-center justify-center primary-color bg-[#f0e9db]`}
            >
              {index + 1}
            </div>
          </div>
          <h3 className="font-semibold text-xl md:text-2xl group-hover:text-[var(--primary-color)]">
            {project.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ListProject;
