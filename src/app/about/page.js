import HeaderComponent from "@/components/Header/Header";
import { TypeHeader, INFO, DataSeo } from "@/libs/constants";
import GridIntroImage from "@/components/GridIntroImage/GridIntroImage";
import SlideComponent from "@/components/Slide/Slide";
import Parameter from "@/components/Paramater/Parameter";

export const metadata = {
  title:`About | ${DataSeo.seoTitle}`,
  description: DataSeo.seoDescription,
  icon: "/favicon.ico",
  openGraph: {
    images: [DataSeo.seoImage],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
  },
  twitter: {
    title:`About | ${DataSeo.seoTitle}`,
    description: DataSeo.seoDescription,
    images: [DataSeo.seoImage],
  }
};

export default function HomePage() {
  return (
    <div className="commondPage homePage">
      <HeaderComponent type={TypeHeader.ABOUT.path}></HeaderComponent>
      <h1 className="hidden">{DataSeo.seoTitle}</h1>
      <SlideComponent />

      {/* Giới thiệu */}
      <GridIntroImage
        nameSection={"Giới thiệu"}
        title={INFO.about.title}
        description={INFO.about.desc}
        srcBg={"about.jpg"}
        linkViewMore={"/about"}
        isAboutPage
      />

      {/* Thông số */}
      <Parameter />
    </div>
  );
}
