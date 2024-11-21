import Image from "next/image";

const ImageZoom = (props) => {
  let { src, title, className } = props;
  return (
    <div className={`project cursor-zoom-in h-full ${className}`}>
      <Image
        src={src || "/images/project/project_2.webp"}
        className="img-fluid !h-full object-cover"
        alt="Mộc Việt Template"
        width={422}
        height={634}
      />
      <div className="text">
        <h3 className="text-2xl" style={{ textShadow: "1px 1px 20px #000000" }}>
          {title || ""}
        </h3>
      </div>
    </div>
  );
};

export default ImageZoom;
