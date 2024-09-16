"use client";
import makePreviewImage from "@/libs/hoc/makePreview";
import ImageZoom from "../ImageZoom/ImageZoom";
import { useRef, useMemo } from "react";

const ListImagePreview = ({ listImages = [], openGallery, setListImage }) => {
  const onOpenImage = (index) => (e) => {
    openGallery &&
      openGallery({
        index,
        event: e,
      });
  };

  const onLoad = (element) => {
    if (element) {
      const images = [...element.querySelectorAll("img")];
      const imageList = [];
      for (let i = 0; i < images.length; i++) {
        const imgEle = images[i];
        if (imgEle) {
          imgEle.onclick = onOpenImage(i);
          imageList.push({
            src: imgEle.src,
          });
        }
      }
      setListImage && setListImage(imageList);
    }
  };

  const contentListImages = useMemo(() => {
    return (
      <div id="list-images" className="row no-gutters" ref={onLoad}>
        {listImages?.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-3">
            <ImageZoom src={project.src} title={project.title} />
          </div>
        ))}
      </div>
    );
  }, [listImages]);

  return <div className="container-wrap">{contentListImages}</div>;
};

export default makePreviewImage(ListImagePreview);
