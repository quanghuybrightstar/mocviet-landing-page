import { Link } from "react-router-dom";
import { headerLogic } from "./Header.logic";
import LazyLoad from "react-lazyload";
import "./Header.style.scss";

const HeaderComponent = (props) => {
  let { dataNavBar } = headerLogic(props);

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
        <Link to={item.path} className="nav-link">
          {item.title}
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
          <LazyLoad>
            <img
              src="/assets/images/logo_header.png"
              alt="Logo Header"
              className="contain_image img_logo"
            />
          </LazyLoad>
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

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {dataNavBar?.map((item) => renderHeaderItems(item))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
