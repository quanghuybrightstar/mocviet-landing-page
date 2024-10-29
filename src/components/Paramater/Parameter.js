import NumberAnimated from "@/components/NumberAnimated/NumberAnimated";
import { INFO } from "@/libs/constants";

const Parameter = () => {
  return (
    <section
      className="ftco-section ftco-counter img bg-center"
      id="section-counter"
      style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row d-md-flex align-items-center justify-content-center">
          <div className="col-lg-4">
            <div className="heading-section pl-md-5 heading-section-white text-center md:text-left">
              <div className="pl-md-5 ml-md-5">
                <span className="subheading">NHỮNG</span>
                <h2 className="mb-4 !text-[32px] md:!text-[40px]">
                  SỰ THẬT
                  <br /> ẤN TƯỢNG
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row d-md-flex align-items-center">
              <div className="col-md d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number !flex justify-center text-center !text-[32px] md:!text-[40px]"
                      style={{ gap: "0.5rem" }}
                    >
                      {`>`}{" "}
                      <NumberAnimated numberProps={INFO.home.experienceYears} />
                    </strong>
                    <span>Năm kinh nghiệm</span>
                  </div>
                </div>
              </div>
              <div className="col-md flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number d-flex text-center !text-[32px] md:!text-[40px]"
                      style={{ gap: "0.5rem" }}
                    >
                      <NumberAnimated numberProps={INFO.home.projects} /> +
                    </strong>
                    <span>Công trình</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number !text-[32px] md:!text-[40px]">
                      <NumberAnimated numberProps={INFO.home.customers} />
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
  );
};

export default Parameter;
