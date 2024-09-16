import Image from "next/image";

const ImageZoom = (props) => {
  let { src, title } = props;
  return (
    <div className="project cursor-zoom-in">
      <Image
        src={src || "/images/work-2.jpg"}
        className="img-fluid"
        alt="Mộc Việt Template"
        width={422}
        height={634}
      />
      <div className="text">
        <h3>{title || ""}</h3>
      </div>
    </div>
  );
};

export default ImageZoom;
