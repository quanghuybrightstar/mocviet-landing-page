import HeaderComponent from "@/components/Header";
import HomeAdvantages from "@/components/home/HomeAdvantages";
import HomeProjectTiles from "@/components/home/HomeProjectTiles";
import { TypeHeader, INFO, DataSeo } from "@/libs/constants";
import GridIntroImage from "@/components/GridIntroImage";
import SlideComponent from "@/components/Slide";
import Parameter from "@/components/ui/Parameter";

export default async function HomePage() {
  /** Home "projects" block: fixed list of work types (thể loại công ty có thể làm), not the Sanity project list. */
  const listHome = INFO.projects.list_home;

  return (
    <div className="commondPage homePage">
      <HeaderComponent type={TypeHeader.HOME.path} headerVariant="overHero" />
      <h1 className="hidden">{DataSeo.seoTitle}</h1>
      <SlideComponent />

      <HomeAdvantages advantages={INFO.home.advantages} />

      <GridIntroImage
        nameSection={"Giới thiệu"}
        title={INFO.about.title}
        description={INFO.about.desc}
        srcBg={"about.jpg"}
        linkViewMore={TypeHeader.ABOUT.path}
        sectionClass="container"
        animated
      />

      <Parameter />

      <HomeProjectTiles
        projects={listHome}
        title={INFO.projects.title}
        description={INFO.projects.desc}
      />

      <GridIntroImage
        nameSection={"Dịch vụ"}
        title={INFO.services.list_services?.[0].name}
        description={INFO.services.list_services?.[0].desc}
        srcBg={INFO.services.list_services?.[0].image}
        linkViewMore={TypeHeader.SERVICES.path}
        posImage="right"
        sectionClass="container"
        animated
        slideFromMd="right"
        delayMs={80}
      />
    </div>
  );
}
