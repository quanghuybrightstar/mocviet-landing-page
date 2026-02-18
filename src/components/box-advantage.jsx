const BoxAdvantage = (props) => {
  const { iconClass = "", title = "", children } = props;

  return (
    <div className="media block-6 services d-block">
      <div className="icon d-flex justify-center items-center">
        <span className={iconClass} />
      </div>
      <div className="media-body p-2 mt-2 md:mt-3">
        <h3 className="heading">{title}</h3>
        <ul className="pl-4">{children}</ul>
      </div>
    </div>
  );
};

export default BoxAdvantage;
