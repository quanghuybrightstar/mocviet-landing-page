import { slideLogic } from "./Slide.logic";
import "./Slide.style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const SlideComponent = () => {
  let { dataSlides } = slideLogic();

  // Render Slides
  const renderSlideItem = (slide) => {
    return (
      <SwiperSlide
        key={slide.id}
        className="slider-item js-fullheight"
        style={{
          background: `url(/assets/images/slide_${slide.id}.png) no-repeat top center /cover`,
        }}
      >
        <div className="overlay"></div>
        {/* <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-end"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-7 text ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                We Create Amazing Architecture Designs
              </h1>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p>
                <a
                  href="#"
                  className="btn btn-white btn-outline-white px-4 py-3 mt-3"
                >
                  View our works
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </SwiperSlide>
    );
  };

  return (
    <section>
      <Swiper
        mousewheel={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="home-slider home-slider-full js-fullheight"
      >
        {dataSlides.map((slide) => renderSlideItem(slide))}
      </Swiper>
    </section>
  );
};

export default SlideComponent;
