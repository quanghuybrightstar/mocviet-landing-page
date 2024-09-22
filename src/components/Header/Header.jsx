"use client";
import "./Header.style.scss";
import { menuHeader } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { IconMenu } from "@/assets/icons";

const HeaderComponent = (props) => {
  let { type } = props;
  const heightShowHeader = 500;
  const [isShowHeader, setIsShowHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
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
        <Link href={item.path} className="nav-link">
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
          "!fixed !top-[-52px] !bg-[#676864]": isShowHeader,
        },
        "navbar header_container navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light relative"
      )}
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand pointer_cursor" href="/">
          <Image
            src="/images/logo_header.png"
            alt="Logo Header"
            className="contain_image img_logo"
            width={66}
            height={64}
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
      </div>

      <div
        className={clsx(
          {
            open: openMenu,
            closed: !openMenu,
          },
          " navbar-collapse md:hidden bg-black"
        )}
        id="ftco-nav"
      >
        <ul className="navbar-nav ml-auto">
          {menuHeader?.map((item) => renderHeaderItems(item))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
