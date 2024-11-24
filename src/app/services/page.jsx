import HeaderComponent from "@/components/header";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import GridIntroImage from "@/components/grid-intro-image";
import Image from "next/image";

const ServicePage = (props) => {
  return (
    <div className="commondPage homePage">
      <div className="md:min-h-[90px]">
        <HeaderComponent
          type={TypeHeader.SERVICES.path}
          className="!bg-white relative"
          isSpecialHeader
        />
      </div>
      <div className="container">
        <section className="px-0 pt-6 pb-8 md:pt-12 md:pb-14 flex flex-col items-center justify-center md:px-4 ">
          <h1 className="text-[28px] md:text-[40px]">{INFO.services.title}</h1>
          <h2
            className="text-sm md:text-base max-w-[625px] text-center"
            dangerouslySetInnerHTML={{ __html: INFO.services.desc }}
          />
        </section>

        <Image
          src={INFO.services.thumbnail}
          width={1240}
          height={960}
          alt="Dịch vụ chính"
          className="object-cover rounded-lg hidden md:block"
        />
        <div className="flex flex-col gap-6 md:gap-16 min-h-screen">
          {INFO.services.list_services.map((service, index) => (
            <GridIntroImage
              key={service.id}
              nameSection={"Dịch vụ"}
              title={service.name}
              description={service.desc}
              srcBg={service.image}
              posImage={!(index % 2) ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata({ params }) {
  return {
    title: `${TypeHeader.SERVICES.name} | ${DataSeo.seoTitle}`,
    description: DataSeo.seoDescription,
    openGraph: {
      images: [DataSeo.seoImage],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${TypeHeader.SERVICES.path}`,
    },
  };
}

export default ServicePage;
