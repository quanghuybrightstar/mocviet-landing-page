import HeaderComponent from "@/components/Header/Header";
import { TypeHeader, INFO, DataSeo } from "@/libs/constants";
import GridIntroImage from "@/components/GridIntroImage/GridIntroImage";
import SlideComponent from "@/components/Slide/Slide";
import ListImagePreview from "@/components/ListImagePreview/ListImagePreview";
import Parameter from "@/components/Paramater/Parameter";

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
        linkViewMore={"/about"}
      />

      {/* Thông số */}
      <Parameter />

      {/* Công trình */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 heading-section">
              <h2 className="mb-4">Công trình của chúng tôi</h2>
              <p>
                Đây là nơi bạn có thể khám phá những dự án thiết kế nội thất
                tuyệt vời, thể hiện sự sáng tạo và tinh tế trong từng chi tiết.
                Với đội ngũ chuyên gia giàu kinh nghiệm và đam mê, chúng tôi cam
                kết mang đến cho bạn những không gian sống đẳng cấp, tiện nghi
                và ấm cúng. Hãy cùng khám phá những công trình nổi bật của chúng
                tôi và cảm nhận sự khác biệt trong từng không gian.{" "}
              </p>
            </div>
          </div>
        </div>
        <ListImagePreview listImages={INFO.projects?.slice(0, 4)} />

        <div className="flex justify-center text-center pt-5">
          <a href="/project" className="btn-primary-custom">
            Xem thêm
          </a>
        </div>
      </section>

      {/* Service Home */}
      <GridIntroImage
        nameSection={"Dịch vụ"}
        title={INFO.services?.[0].name}
        description={INFO.services?.[0].desc}
        srcBg={"service-1.jpg"}
        linkViewMore={"/service"}
        posImage="right"
      />
    </div>
  );
}
