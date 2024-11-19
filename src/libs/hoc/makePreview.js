/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/dist/photoswipe.css";

const maxWidthImagePreview = 960;
const maxHeightImagePreview = 640;

function makePreviewImage(Component) {
  const Result = (props) => {
    const lightboxRef = (useRef < PhotoSwipeLightbox) | (null > null);

    const openGallery = ({ index, event: e = new MouseEvent("click") }) => {
      e?.preventDefault();
      const targetElement = e?.target;
      const anchorElement = targetElement?.closest("a");
      if (
        anchorElement &&
        anchorElement?.contains(targetElement) &&
        targetElement?.tagName === "IMG"
      ) {
        if (lightboxRef.current) {
          lightboxRef.current?.destroy();
          lightboxRef.current = null;
        }
        anchorElement?.click();
        return;
      }
      if (lightboxRef.current) {
        lightboxRef.current?.destroy();
      }

      if (index !== undefined && index !== null) {
        // Option cho gallery
        const options = {
          bgOpacity: 1,
          gallery: "#my-gallery #list-images",
          children: "img",
          preloadFirstSlide: true,
          secondaryZoomLevel: 1.5,
          wheelToZoom: true,
          clickToCloseNonZoomable: false,
          pswpModule: () => import("photoswipe"),
        };
        const lightbox = new PhotoSwipeLightbox(options);
        lightbox.addFilter("domItemData", (itemData, element) => {
          const imageElement =
            element?.tagName === "IMG"
              ? element
              : element?.querySelector("img");

          // Set thuộc tính cho image của gallery
          if (imageElement) {
            itemData.src = imageElement?.getAttribute("src") || "";
            itemData.w = imageElement?.naturalWidth || maxWidthImagePreview;
            itemData.h = imageElement?.naturalHeight || maxHeightImagePreview;
          }
          return itemData;
        });

        lightbox.init();
        if (lightboxRef.current) {
          lightboxRef.current = lightbox;
        }
      }
    };

    useEffect(() => {
      // Hàm quay lại trang và close gallery khi gallery đang mở
      const handlePopState = (event) => {
        if (
          lightboxRef.current &&
          lightboxRef.current.pswp &&
          lightboxRef.current.pswp.isOpen
        ) {
          event?.preventDefault();
          lightboxRef.current.pswp?.close();
        }
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
        if (lightboxRef.current) {
          lightboxRef.current?.destroy();
        }
      };
    }, []);

    return (
      <div id="my-gallery" className="h-full">
        <Component {...props} openGallery={openGallery} />
      </div>
    );
  };
  return Result;
}

export default makePreviewImage;
