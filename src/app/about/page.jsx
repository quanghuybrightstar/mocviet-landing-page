import HeaderComponent from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import AboutPageSections from "@/components/about/AboutPageSections";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import Parameter from "@/components/ui/Parameter";

export default function AboutPage() {
  return (
    <div className="commondPage homePage">
      <HeaderComponent type={TypeHeader.ABOUT.path} headerVariant="overHero" />
      <AboutHero
        title="Về chúng tôi"
        subtitle="Mộc Việt – Cùng nhau kiến tạo, cùng nhau lớn mạnh"
      />

      <AboutPageSections
        introduction={INFO.about.introduction}
        coreValues={INFO.about.core_values}
      />

      <Parameter />
    </div>
  );
}

export const metadata = {
  title: `${TypeHeader.ABOUT.name} | ${DataSeo.seoTitle}`,
  description: DataSeo.seoDescription,
  openGraph: {
    images: [DataSeo.seoImage],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/about`,
  },
};
