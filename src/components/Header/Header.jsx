import "./Header.style.scss";
import { menuHeader } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";

const HeaderComponent = (props) => {
  let { type } = props;

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

  return (
    <nav
      className="navbar header_container navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
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
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className=" navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {menuHeader?.map((item) => renderHeaderItems(item))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
