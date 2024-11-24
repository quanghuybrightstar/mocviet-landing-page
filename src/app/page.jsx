import HeaderComponent from "@/components/header";
import { TypeHeader, INFO, DataSeo } from "@/libs/constants";
import GridIntroImage from "@/components/grid-intro-image";
import SlideComponent from "@/components/slide";
import Parameter from "@/components/ui/parameter";
import ImageZoom from "@/components/ui/image-zoom";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="commondPage homePage">
      <HeaderComponent type={TypeHeader.HOME.path}></HeaderComponent>
      <h1 className="hidden">{DataSeo.seoTitle}</h1>
      <SlideComponent />

      <section className="ftco-services bg-light">
        <div className="container">
          <div className="row" style={{ position: "relative", zIndex: 2 }}>
            <div className="col-md-4 d-flex align-self-stretch">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-idea"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Thiết kế hoàn hảo</h3>
                  <p>
                    Mộc Việt - Nơi thực hiện những ý tưởng hoàn hảo của bạn với
                    tinh thần sáng tạo và tận tâm
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-compass-symbol"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Lên Kế Hoạch Chu Đáo</h3>
                  <p>
                    Tại Mộc Việt, chúng tôi chuyên về việc lên kế hoạch chu đáo
                    cho mỗi dự án thiết kế nội thất, tạo ra không gian sống và
                    làm việc độc đáo, tinh tế và tiện nghi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-layers"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Triển Khai Thông Minh</h3>
                  <p>
                    Mộc Việt triển khai thông minh, tạo ra không gian sống đẳng
                    cấp và tiện nghi bằng sự sáng tạo và kiến thức chuyên môn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <GridIntroImage
        nameSection={"Giới thiệu"}
        title={INFO.about.title}
        description={INFO.about.desc}
        srcBg={"about.jpg"}
        linkViewMore={TypeHeader.ABOUT.path}
        sectionClass="px-4"
      />

      {/* Thông số */}
      <Parameter />

      {/* Công trình */}
      <section className="ftco-section pb-4 md:pb-2">
        <div className="container">
          <div className="row justify-content-center mb-2 pb-2 md:mb-4">
            <div className="col-md-7 heading-section">
              <h2 className="mb-4">{INFO.projects.title}</h2>
              <p>{INFO.projects.desc}</p>
            </div>
          </div>
        </div>
        <div className="row no-gutters gap-y-4">
          {INFO.projects.list_home?.map((project) => (
            <Link
              prefetch
              href={`${TypeHeader.PROJECTS.path}/${project.code}`}
              key={project.id}
              className="col-md-6 col-lg-3 min-h-[450px] h-[450px] relative"
            >
              <ImageZoom
                key={project.id}
                src={project.src}
                title={project.title}
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center text-center pt-4">
          <a href={TypeHeader.PROJECTS.path} className="btn-primary-custom">
            Xem thêm
          </a>
        </div>
      </section>

      {/* Service Home */}
      <GridIntroImage
        nameSection={"Dịch vụ"}
        title={INFO.services.list_services?.[0].name}
        description={INFO.services.list_services?.[0].desc}
        srcBg={INFO.services.list_services?.[0].image}
        linkViewMore={TypeHeader.SERVICES.path}
        posImage="right"
        sectionClass="px-4"
      />
    </div>
  );
}
