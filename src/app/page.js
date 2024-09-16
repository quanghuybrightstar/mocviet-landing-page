import HeaderComponent from "@/components/Header/Header";
import { TypeHeader, INFO } from "@/libs/constants";
import ImageZoom from "@/components/ImageZoom/ImageZoom";
import GridIntroImage from "@/components/GridIntroImage/GridIntroImage";
import SlideComponent from "@/components/Slide/Slide";
import NumberAnimated from "@/components/NumberAnimated/NumberAnimated";
import ListImagePreview from "@/components/ListImagePreview/ListImagePreview";

export default function HomePage() {
  return (
    <div className="commondPage homePage">
      <HeaderComponent type={TypeHeader.HOME.path}></HeaderComponent>
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

      {/* giới thiệu */}
      <GridIntroImage
        nameSection={"Giới thiệu"}
        title={INFO.about.title}
        description={INFO.about.desc}
        srcBg={"about.jpg"}
        linkViewMore={"/about"}
      />

      {/* Thông số */}
      <section
        className="ftco-section ftco-counter img bg-center"
        id="section-counter"
        style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="col-lg-4">
              <div className="heading-section pl-md-5 heading-section-white">
                <div className="pl-md-5 ml-md-5">
                  <span className="subheading">Some</span>
                  <h2 className="mb-4">Interesting Facts</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong
                        className="number !flex justify-center text-center"
                        style={{ gap: "0.5rem" }}
                      >
                        {`>`} <NumberAnimated numberProps={8} />
                      </strong>
                      <span>Năm kinh nghiệm</span>
                    </div>
                  </div>
                </div>
                <div className="col-md flex justify-content-center counter-wrap">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong
                        className="number d-flex text-center"
                        style={{ gap: "0.5rem" }}
                      >
                        <NumberAnimated numberProps={500} /> +
                      </strong>
                      <span>Công trình</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number">
                        <NumberAnimated numberProps={321} />
                      </strong>
                      <span>Khách hàng</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
