import HeaderComponent from "@/components/Header";
import GridIntroImage from "@/components/GridIntroImage";
import PageIntro from "@/components/motion/PageIntro";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import ServicesHeroImage from "@/components/services/ServicesHeroImage";

const ServicePage = () => {
  return (
    <div className="commondPage homePage">
      <HeaderComponent
        type={TypeHeader.SERVICES.path}
        isSpecialHeader
      />
      <div className="container">
        <PageIntro
          title={INFO.services.title}
          descriptionHtml={INFO.services.desc}
          className="px-0 pt-[75px] pb-2 md:pt-[100px] md:pb-8 flex flex-col items-center justify-center md:px-6"
          descriptionClassName="text-sm md:text-base max-w-[625px] text-center m-0 font-normal"
        />

        <ServicesHeroImage
          src={INFO.services.thumbnail}
          alt="Dịch vụ chính"
        />

        <div className="flex flex-col gap-6 md:gap-16 min-h-[100dvh]">
          {INFO.services.list_services.map((service, index) => (
            <GridIntroImage
              key={service.id}
              nameSection={"Dịch vụ"}
              title={service.name}
              description={service.desc}
              srcBg={service.image}
              posImage={!(index % 2) ? "right" : "left"}
              animated
              delayMs={index * 80}
              slideFromMd={index % 2 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata() {
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
