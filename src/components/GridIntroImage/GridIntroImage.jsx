const GridIntroImage = (props) => {
  let {
    nameSection,
    srcBg,
    title,
    description,
    linkViewMore = "#",
    posImage = "left",
  } = props;

  return (
    <section className="ftco-section ftc-no-pb">
      <div className="container">
        <div
          className={`row no-gutters ${
            posImage === "right" ? "flex-row-reverse" : ""
          }`}
        >
          <div
            className="col-md-5 p-md-5 img img-2"
            style={{
              backgroundImage: `url(/images/${srcBg})`,
            }}
          ></div>
          <div className="col-md-7 wrap-about pb-md-5 ">
            <div className="heading-section mb-5 pl-md-5 heading-section-with-line">
              <div className={`${posImage === "right" ? "pr-md-5 mr-md-5 " : "pl-md-5 ml-md-5 "}`}>
                <span className="subheading">{nameSection}</span>
                <h2 className="mb-4">{title}</h2>
              </div>
            </div>
            <div
              className={`${
                posImage === "right" ? "pr-md-5 mr-md-5 " : "pl-md-5 ml-md-5 "
              } mb-5`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="pb-2"
              ></div>
              <p>
                <a href={linkViewMore} className="btn-custom link-primary ">
                  Tìm hiểu thêm <span className="ion-ios-arrow-forward"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridIntroImage;
