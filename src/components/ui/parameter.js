import NumberAnimated from "@/components/ui/number-animated";
import { INFO } from "@/libs/constants";

const Parameter = () => {
  return (
    <section
      className="ftco-section ftco-counter img bg-center mt-12 md:mt-24"
      id="section-counter"
      style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row d-md-flex items-center justify-center">
          <div className="col-lg-4">
            <div className="heading-section pl-lg-5 heading-section-white text-center md:text-left">
              <div className="pl-lg-5 ml-lg-5">
                <span className="subheading">NHỮNG</span>
                <h2 className="mb-4 !text-[28px] md:!text-[40px]">
                  SỰ THẬT
                  <br /> ẤN TƯỢNG
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row d-md-flex items-center">
              <div className="col-md d-flex justify-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number !flex justify-center text-center !text-[28px] md:!text-[40px]"
                      style={{ gap: "0.5rem" }}
                    >
                      {`>`}{" "}
                      <NumberAnimated numberProps={INFO.home.experienceYears} />
                    </strong>
                    <span>Năm kinh nghiệm</span>
                  </div>
                </div>
              </div>
              <div className="col-md flex justify-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number d-flex text-center !text-[28px] md:!text-[40px]"
                      style={{ gap: "0.5rem" }}
                    >
                      <NumberAnimated numberProps={INFO.home.projects} /> +
                    </strong>
                    <span>Công trình</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number !text-[28px] md:!text-[40px]">
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
