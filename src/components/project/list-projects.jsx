import { INFO } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const ListProject = () => {
  return (
    <div className="list-has-dot grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 md:gap-16 md:gap-y-20 md:pt-8">
      {Object.values(INFO.projects.list_detail).map((project, index) => (
        <Link
          prefetch
          href={`/project/${project.code}`}
          key={project.id}
          className={clsx(
            {
              "item-dot ": !(index % 2),
            },
            "flex flex-col gap-3 group relative"
          )}
        >
          <div className="overflow-hidden relative h-[480px] rounded-lg">
            <Image
              alt={project.title}
              src={project.images?.[0]}
              width={720}
              height={720}
              className="!object-cover !object-center w-full h-full group-hover:scale-125 scale-100 duration-500 ease-in-out rounded-lg border border-[#e1e5ea]"
              priority={index < 3 ? true : false}
            />
          </div>
          <h3 className="font-semibold text-[24px] group-hover:text-[var(--primary-color)]">
            {project.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ListProject;
