"use client";

import FadeUp from "@/components/motion/FadeUp";
import Image from "next/image";

/**
 * @param {{ introduction: Array, coreValues: Array }} props
 */
export default function AboutPageSections({ introduction, coreValues }) {
  return (
    <div className="container pt-12 pb-10 md:py-16 flex flex-col gap-10 md:gap-16">
      <section className="flex flex-col gap-8">
        <FadeUp>
          <h2 className="text-center font-bold text-2xl md:text-3xl">
            Giới thiệu về Mộc Việt
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-16">
          {introduction.map((item, index) => (
            <FadeUp
              key={item.id}
              className="flex flex-col items-center"
              delayMs={Math.min(index * 80, 240)}
            >
              <Image
                src={item.icon}
                alt="icon"
                width={80}
                height={80}
                className="mb-6"
              />
              <p
                className="text-center"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="pt-10 flex flex-col gap-4 relative">
        <FadeUp>
          <h2 className="text-center font-bold text-2xl md:text-3xl">
            Sứ mệnh và tầm nhìn
          </h2>
        </FadeUp>
        <FadeUp delayMs={80}>
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
        </FadeUp>
        <FadeUp delayMs={160}>
          <Image
            src="/images/mission.webp"
            alt="about"
            width={1300}
            height={700}
            className="object-cover rounded-lg w-full h-auto"
          />
        </FadeUp>
      </section>

      <section className="pt-10 flex flex-col gap-4 relative">
        <FadeUp>
          <h2 className="text-center font-bold text-2xl md:text-3xl">
            6 giá trị cốt lõi của Mộc Việt
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2 md:pt-6">
          {coreValues.map((value, index) => (
            <FadeUp
              key={value.id}
              delayMs={Math.min(Math.floor(index / 2) * 120, 420)}
            >
              <div className="duration-500 ease-in-out hover:-translate-y-2.5 hover:shadow-xl md:min-h-[380px] rounded-[32px] bg-white border border-[#bdbdbd73] p-6">
                <div className="relative min-h-[200px] h-[200px]">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-center flex-col items-center pt-6 text-center">
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
