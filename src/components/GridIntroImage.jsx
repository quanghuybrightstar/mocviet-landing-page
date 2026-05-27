"use client";

import FadeUp from "@/components/motion/FadeUp";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const GridIntroImage = (props) => {
  let {
    nameSection,
    srcBg,
    title,
    description,
    linkViewMore = "",
    posImage = "left",
    isAboutPage = false,
    sectionClass = "",
    animated = false,
    delayMs = 0,
    slideFromMd,
  } = props;

  const content = (
    <section
      className={clsx(
        {
          "pt-0": isAboutPage,
        },
        sectionClass,
        " ftco-section ftc-no-pb",
      )}
    >
      <div
        className={`row no-gutters gap-y-4 ${
          posImage === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-md-5 h-[300px] md:h-auto relative">
          <Image
            src={`/images/${srcBg}`}
            alt="Image About"
            fill
            className="h-full object-cover rounded-lg"
          />
        </div>
        <div
          className={clsx(
            {
              "pt-24": isAboutPage,
            },
            " col-md-7 wrap-about md:pb-12 ",
          )}
        >
          <div className="heading-section mb-12 md:pl-12 heading-section-with-line">
            <div
              className={`${
                posImage === "right"
                  ? "md:pr-12 md:mr-12 "
                  : "md:pl-12 md:ml-12 "
              }`}
            >
              <span className="subheading">{nameSection}</span>
              <h2
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </div>
          <div
            className={`${
              posImage === "right"
                ? "md:pr-12 md:mr-12 "
                : "md:pl-12 md:ml-12 "
            } mb-2 md:mb-12`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="pb-2"
            />
            {!!linkViewMore && (
              <Link href={linkViewMore} className="btn-custom link-primary ">
                Tìm hiểu thêm <span className="ion-ios-arrow-forward"></span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  if (!animated) return content;

  return (
    <FadeUp delayMs={delayMs} slideFromMd={slideFromMd} variant="list">
      {content}
    </FadeUp>
  );
};

export default GridIntroImage;
