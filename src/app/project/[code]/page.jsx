import HeaderComponent from "@/components/header";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import ListImagePreview from "@/components/list-image-preview";
import Image from "next/image";
import MyBreadCrumb from "@/components/my-breadcrumb";

export default function ProjectDetailPage({ params }) {
  const { code } = params;
  const { title, images = [] } = INFO.projects.list_detail[code];

  const breadCrumbs = [
    {
      url: TypeHeader.PROJECT.path,
      name: TypeHeader.PROJECT.name,
    },
    {
      url: "",
      name: title,
    },
  ];

  return (
    <div className="commondPage homePage">
      <div className="md:min-h-[90px]">
        <HeaderComponent
          type={TypeHeader.PROJECT.path}
          className="!bg-white relative"
          isSpecialHeader
        />
      </div>
      <div className="container">
        <MyBreadCrumb breadCrumbs={breadCrumbs} />
        <section className="pt-6 pb-8 md:pt-12 md:pb-14 flex flex-col items-center justify-center px-4 ">
          <h1 className="text-[32px] md:text-[40px]">{title}</h1>
          <h2 className="text-sm md:text-base max-w-[630px] text-center">
            {INFO.projects.seo_desc_detail} {title}
          </h2>
        </section>
        <div className=" flex flex-col gap-10 md:gap-16 min-h-screen">
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
                  width={720}
                  height={720}
                  className="!object-cover !object-center w-full h-full group-hover:scale-125 scale-100 duration-500 ease-in-out rounded-lg border border-[#e1e5ea]"
                  priority={index < 3 ? true : false}
                />
              </div>
            ))}
          </ListImagePreview>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { code } = params;
  const { title, images = [] } = INFO.projects.list_detail[code];

  return {
    title: `${TypeHeader.PROJECT.name} ${title} | ${DataSeo.seoTitle}`,
    description: INFO.projects.seo_desc_detail + title,
    openGraph: {
      images: [DataSeo.seoImage],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/project/${code}`,
    },
  };
}
