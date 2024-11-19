import HeaderComponent from "@/components/header";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import ListProjects from "@/components/project/list-projects";

export default function ProjectPage() {
  return (
    <div className="commondPage homePage">
      <div className="md:min-h-[90px]">
        <HeaderComponent
          type={TypeHeader.PROJECT.path}
          className="!bg-white relative"
          isSpecialHeader
        />
      </div>
      <div className="container ">
        <section className="pt-6 pb-8 md:pt-12 md:pb-14 flex flex-col items-center justify-center px-4 ">
          <h1 className="text-[32px] md:text-[40px]">{INFO.projects.title}</h1>
          <h2 className="text-sm md:text-base max-w-[630px] text-center">
            {INFO.projects.desc}
          </h2>
        </section>
        <div className="flex flex-col gap-10 md:gap-16 min-h-screen">
          <ListProjects />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: `${TypeHeader.PROJECT.name} | ${DataSeo.seoTitle}`,
  description: DataSeo.seoDescription,
  openGraph: {
    images: [DataSeo.seoImage],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/project`,
  },
};
