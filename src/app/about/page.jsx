import HeaderComponent from "@/components/Header/Header";
import { TypeHeader, DataSeo, INFO } from "@/libs/constants";
import Parameter from "@/components/Paramater/Parameter";
import Image from "next/image";

export const metadata = {
  title: `About | ${DataSeo.seoTitle}`,
  description: DataSeo.seoDescription,
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
          src={`/images/slide/slide_3.webp`}
          alt="Slide"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          fetchPriority="high"
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
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                Mộc Việt – Cùng nhau kiến tạo, cùng nhau lớn mạnh
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-16 flex flex-col gap-10 md:gap-16">
        <section className="flex flex-col gap-8">
          <h2 className="text-center font-bold text-3xl">
            Giới thiệu về Mộc Việt
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-16">
            {INFO?.about?.introduction.map((item, index) => {
              return (
                <div key={item.id} className="flex flex-col items-center">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <p
                    className="text-center"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="pt-8 flex flex-col gap-4 relative">
          <h2 className="text-center font-bold text-3xl">
            Sứ mệnh và tầm nhìn
          </h2>
          <div>
            <p className="text-justify mx-auto">
              Cung cấp 1 hệ thống dịch vụ đồng bộ, khép kín với chất lượng và
              phong cách phục vụ chuyên nghiệp nhất, đáp ứng cho khách hàng
              những công trình như ý, những không gian sống hoàn hảo.{" "}
              <strong>Mộc Việt</strong> luôn cam kết mọi khách hàng của chúng
              tôi sẽ luôn được sử dụng những công trình tốt nhất, đẹp nhất và
              chất lượng nhất. <br className="block md:hidden" /> Bằng nỗ lực
              lao động và sáng tạo cùng sự áp dụng khoa học quản lý,{" "}
              <strong>Mộc Việt</strong> mong muốn trở thành đơn vị hàng đầu
              trong lĩnh vực tư vấn, thiết kế và thi công lắp đặt đồ gỗ nội thất
              tại Việt Nam.
            </p>
          </div>
          <Image
            src="/images/mission.webp"
            alt="about"
            width={1300}
            height={700}
          />
        </section>
      </div>

      {/* Thông số */}
      <Parameter />
    </div>
  );
}
