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
  } = props;

  return (
    <section
      className={clsx(
        {
          "pt-0": isAboutPage,
        },
        sectionClass,
        " ftco-section ftc-no-pb"
      )}
    >
      <div
        className={`row no-gutters gap-y-4 ${
          posImage === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-md-5 h-[300px] md:h-auto">
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
            " col-md-7 wrap-about pb-md-5 "
          )}
        >
          <div className="heading-section mb-5 pl-md-5 heading-section-with-line">
            <div
              className={`${
                posImage === "right" ? "pr-md-5 mr-md-5 " : "pl-md-5 ml-md-5 "
              }`}
            >
              <span className="subheading">{nameSection}</span>
              <h2
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </div>
          <div
            className={`${
              posImage === "right" ? "pr-md-5 mr-md-5 " : "pl-md-5 ml-md-5 "
            } mb-2 md:mb-5`}
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
};

export default GridIntroImage;
