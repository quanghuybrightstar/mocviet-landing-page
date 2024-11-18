import HeaderComponent from "@/components/header";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import ListImagePreview from "@/components/list-image-preview";
import Image from "next/image";

export default function ProjectDetailPage({ params }) {
  const { code } = params;
  const { title, images = [] } = INFO.projects.list_detail[code];

  return (
    <div className="commondPage homePage">
      <HeaderComponent
        type={TypeHeader.PROJECT.path}
        className="!bg-white relative"
        isSpecialHeader
      />
      <section className="py-10 md:py-16 flex flex-col items-center justify-center px-4">
        <h1 className="text-[32px] md:text-[40px]">{title}</h1>
        <h2 className="text-sm md:text-base max-w-[630px] text-center">
          Hãy cùng Mộc Việt khám phá những thiết kế của công trình {title}
        </h2>
      </section>
      <div className="container flex flex-col gap-10 md:gap-16 min-h-screen">
        <ListImagePreview
          listImages={images}
          classNameList="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-4 !gap-y-6"
        >
          {images?.map((image, index) => (
            <div
              key={index}
              className="relative h-[360px] cursor-zoom-in group overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="!object-cover !object-center w-full h-full group-hover:scale-125 scale-100 duration-500 ease-in-out rounded-lg border border-[#e1e5ea]"
              />
            </div>
          ))}
        </ListImagePreview>
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
  twitter: {
    title: `${TypeHeader.PROJECT.name} | ${DataSeo.seoTitle}`,
    description: DataSeo.seoDescription,
    images: [DataSeo.seoImage],
  },
};
