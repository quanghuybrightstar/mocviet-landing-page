import { INFO } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";

const ListProject = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
      {Object.values(INFO.projects.list_detail).map((project) => (
        <Link
          prefetch
          href={`/project/${project.code}`}
          key={project.id}
          className="flex flex-col gap-3 group overflow-hidden"
        >
          <div className="overflow-hidden relative h-[480px] rounded-lg">
            <Image
              alt={project.title}
              src={project.images?.[0]}
              fill
              className="!object-cover !object-center w-full h-full group-hover:scale-125 scale-100 duration-500 ease-in-out rounded-lg border border-[#e1e5ea]"
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
