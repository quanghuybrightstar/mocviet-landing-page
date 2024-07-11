const ImageZoom = (props) => {
  let { src, title } = props;
  return (
    <div className="project">
      <img
        src={src || "/assets/images/work-2.jpg"}
        className="img-fluid"
        alt="Mộc Việt Template"
      />
      <div className="text">
        <h3>{title || ""}</h3>
      </div>
      <a
        href={src || "/assets/images/work-2.jpg"}
        className="icon image-popup d-flex justify-content-center align-items-center"
        target="_blank"
        rel="noreferrer"
      >
        <span className="icon-expand"></span>
      </a>
    </div>
  )
}

export default ImageZoom;