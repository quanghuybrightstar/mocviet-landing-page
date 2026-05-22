"use client";
import "./header.style.scss";
import { menuHeader } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import clsx from "clsx";
import { IconMenu } from "@public/assets/icons";

/** Gần đỉnh trang: luôn hiện header */
const SCROLL_TOP_THRESHOLD = 12;
/** Lệch scroll tối thiểu để đổi hướng (tránh giật) */
const SCROLL_DELTA_MIN = 8;
/** Sau ngưỡng này (home): header hiện dạng nền solid + chữ tối */
const SCROLL_SOLID_START = 450;

const HeaderComponent = (props) => {
  let { type, className, isSpecialHeader = false } = props;
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const headerVisibleRef = useRef(true);
  const openMenuRef = useRef(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY || 0;
    const delta = y - lastScrollY.current;
    let visible = headerVisibleRef.current;

    if (openMenuRef.current) {
      visible = true;
    } else if (y <= SCROLL_TOP_THRESHOLD) {
      visible = true;
    } else if (delta > SCROLL_DELTA_MIN) {
      visible = false;
    } else if (delta < -SCROLL_DELTA_MIN) {
      visible = true;
    }

    headerVisibleRef.current = visible;
    lastScrollY.current = y;
    setScrollY(y);
    setHeaderVisible(visible);
  }, []);

  useEffect(() => {
    openMenuRef.current = openMenu;
    if (openMenu) {
      headerVisibleRef.current = true;
      setHeaderVisible(true);
    }
  }, [openMenu]);

  useEffect(() => {
    lastScrollY.current = window.scrollY || 0;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const useSolidHeader =
    headerVisible && (isSpecialHeader || scrollY > SCROLL_SOLID_START);

  const renderHeaderItems = (item) => {
    return (
      <li
        key={item.id}
        className={`nav-item pointer_cursor ${item.path == type ? " active" : ""
          }`}
      >
        <Link
          href={item.path}
          className={clsx(
            "nav-link",
            useSolidHeader || isSpecialHeader
              ? "lg:!text-[var(--foreground)] text-[#ffffff]"
              : "text-[#ffffff]"
          )}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={clsx(
        {
          "header-visible": headerVisible,
          "!shadow": useSolidHeader,
          "!bg-[var(--bg-color)]": useSolidHeader && !isSpecialHeader,
        },
        "navbar header_container navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light fixed z-50",
        className
      )}
      id="ftco-navbar"
      ref={headerRef}
    >
      <div className="container">
        <Link className="navbar-brand pointer_cursor" href="/">
          <Image
            src="/images/logo_header.png"
            alt="Logo Header"
            className="contain_image img_logo"
            width={128}
            height={128}
          />
        </Link>
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
            " navbar-collapse h-[calc(100dvh-74px)] md:h-auto"
          )}
          id="ftco-nav"
        >
          {openMenu && (
            <div
              className="absolute inset-0 bg-black bg-opacity-0 z-10"
              onClick={() => setOpenMenu(false)}
            />
          )}
          <ul className="relative navbar-nav ml-auto z-20 bg-black lg:bg-transparent">
            {menuHeader?.map((item) => renderHeaderItems(item))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
