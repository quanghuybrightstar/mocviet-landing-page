"use client";
import "./header.style.scss";
import { menuHeader } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { IconMenu } from "@public/assets/icons";

const HeaderComponent = (props) => {
  let { type, className, isSpecialHeader = false } = props;
  const heightShowHeader = 450;
  const [isShowHeader, setIsShowHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = () => {
    const headerCategory = document.querySelector(".header_container");
    const heightScrollY = window?.scrollY || 0;
    let transformValue = "translate(0px, 0px)";
    let showHeader = false;

    if (heightScrollY > heightShowHeader) {
      transformValue = `translate(0px, ${Math.min(
        heightScrollY - heightShowHeader,
        52
      )}px)`;
      showHeader = true;
    }
    headerCategory.style.transform = transformValue;
    setIsShowHeader(showHeader);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Render Header Item
  const renderHeaderItems = (item) => {
    return (
      <li
        key={item.id}
        className={`nav-item pointer_cursor ${
          item.path == type ? " active" : ""
        }`}
      >
        <Link
          prefetch
          href={item.path}
          className={clsx(
            "nav-link",
            isShowHeader || isSpecialHeader
              ? "md:!text-[var(--foreground)] text-[#ffffff]"
              : "text-[#ffffff]"
          )}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  // Func toggle Menu
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav
      className={clsx(
        {
          "!fixed !top-[-52px] !bg-[var(--bg-color)]": isShowHeader,
          "!shadow": isShowHeader || isSpecialHeader,
        },
        "navbar header_container navbar-expand-lg navbar-dark ftco_navbar absolute ftco-navbar-light",
        className
      )}
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand pointer_cursor" href="/">
          <Image
            src="/images/logo_header.png"
            alt="Logo Header"
            className="contain_image img_logo"
            width={128}
            height={128}
          />
        </a>
        <button
          className="navbar-toggler flex items-center gap-2"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleMenu}
        >
          <Image src={IconMenu} width={24} height={24} alt="Icon" />
          Menu
        </button>
        <div
          className={clsx(
            {
              open: openMenu,
              closed: !openMenu,
            },
            " navbar-collapse bg-black md:bg-transparent"
          )}
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto">
            {menuHeader?.map((item) => renderHeaderItems(item))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
