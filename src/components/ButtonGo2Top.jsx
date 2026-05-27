"use client";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { scrollToElement } from "@/libs/helper";

const ButtonGo2Top = () => {
  const [showGo2TopButton, setShowGo2TopButton] = useState(false);
  const go2TopEle = useRef();

  useEffect(() => {
    let timeout = -1;
    const scrollEvent = (e) => {
      if ((document?.scrollingElement?.scrollTop || 0) > window.innerHeight) {
        setShowGo2TopButton(true);
      } else {
        setShowGo2TopButton(false);
      }
      if (!go2TopEle.current) {
        return;
      }
      clearTimeout(timeout);
      go2TopEle.current.style.opacity = 1;
      timeout = setTimeout(() => {
        if (go2TopEle.current) go2TopEle.current.style.opacity = 0.1;
      }, 1000);
    };
    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
      clearTimeout(timeout);
    };
  }, []);

  if (!showGo2TopButton) {
    return <></>;
  }

  return (
    <div className={"w-full bottom-0 h-[1px] fixed bg-transparent z-[1000]"}>
      <div className={"max-w-[1100px] mx-auto relative"}>
        <IconButton
          className="z-[1000] hover:!opacity-100 !text-white duration-500 !bg-[var(--primary-color)] !absolute !right-3 md:!right-0 !w-11 !h-11 !p-0 !flex !items-center !justify-center rounded-full bottom-10 md:bottom-3"
          onClick={() => {
            window.requestAnimationFrame(() => {
              scrollToElement(document.body, 0);
            });
          }}
          ref={go2TopEle}
        >
          <ArrowUpwardIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default ButtonGo2Top;
