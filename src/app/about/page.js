import HeaderComponent from "@/components/Header/Header";
import { TypeHeader, INFO, DataSeo } from "@/libs/constants";
import GridIntroImage from "@/components/GridIntroImage/GridIntroImage";
import Parameter from "@/components/Paramater/Parameter";
import Image from "next/image";

export const metadata = {
  title: `About | ${DataSeo.seoTitle}`,
  description: DataSeo.seoDescription,
  icon: "/favicon.ico",
  openGraph: {
    images: [DataSeo.seoImage],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
  },
  twitter: {
    title: `About | ${DataSeo.seoTitle}`,
    description: DataSeo.seoDescription,
    images: [DataSeo.seoImage],
  },
};

export default function HomePage() {
  return (
    <div className="commondPage homePage">
      <HeaderComponent type={TypeHeader.ABOUT.path}></HeaderComponent>
      <div className="relative h-screen min-h-[750px] home-slider owl-carousel">
        <Image
          src={`/images/slide_3.png`}
          alt="Slide"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
        <div className="overlay_slider"></div>
        <div className="container h-full">
          <div
            className="h-full row no-gutters slider-text js-fullheight align-items-center justify-content-end"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-7 text ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className=""
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Về chúng tôi
              </h1>
            </div>
          </div>
        </div>
      </div>

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
