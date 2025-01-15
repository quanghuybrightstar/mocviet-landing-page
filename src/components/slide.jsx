"use client";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

const SlideComponent = () => {
  const dataSlides = [
    {
      id: 1,
      img: "slide_1",
    },
    {
      id: 2,
      img: "slide_2",
    },
    {
      id: 3,
      img: "slide_3",
    },
  ];

  // Render Slides
  const renderSlideItem = (slide) => {
    return (
      <SwiperSlide key={slide.id} className="slider-item js-fullheight">
        <Image
          src={`/images/slide/${slide.img}.webp`}
          alt="Slide"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          fetchPriority="high"
        />
        <div className="overlay_slider" />
        <div className="container h-full">
          <div
            className="h-full row no-gutters slider-text js-fullheight items-center justify-end"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-7 text ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h2
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Mộc Việt - Tinh hoa trong từng thiết kế
              </h2>
              <p
                className="!text-base md:!text-lg"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Mộc Việt mang đến những giải pháp thiết kế kiến trúc đẳng cấp,
                hài hòa giữa nghệ thuật và công năng, tạo nên không gian sống và
                làm việc tinh tế, độc đáo.
              </p>
              <p>
                <Link
                  href="/about"
                  className="btn btn-white btn-outline-white px-4 py-3 mt-3"
                >
                  Tìm hiểu thêm
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <Swiper
      mousewheel={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="home-slider home-slider-full owl-carousel min-h-[750px] js-fullheight"
      navigation
    >
      {dataSlides.map((slide) => renderSlideItem(slide))}
    </Swiper>
  );
};

export default SlideComponent;
