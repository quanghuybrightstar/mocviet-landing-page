/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import makePreviewImage from "@/libs/hoc/makePreview";
import { useMemo } from "react";

const ListImagePreview = ({
  listImages = [],
  openGallery,
  classNameList,
  children,
}) => {
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
      for (let i = 0; i < images.length; i++) {
        const imgEle = images[i];
        if (imgEle) {
          imgEle.onclick = onOpenImage(i);
        }
      }
    }
  };

  const contentListImages = useMemo(() => {
    return (
      <div
        id="list-images"
        className={`row no-gutters ${classNameList}`}
        ref={onLoad}
      >
        {children}
      </div>
    );
  }, [listImages]);

  return <div className="container-wrap">{contentListImages}</div>;
};

export default makePreviewImage(ListImagePreview);
