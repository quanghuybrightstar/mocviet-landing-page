import { INFO, menuHeader } from "@/libs/constants";

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Mộc Việt</h2>
              <p>
                Mộc Việt luôn cam kết mọi khách hàng của chúng tôi sẽ luôn được
                sử dụng những công trình tốt nhất ,đẹp nhất và chất lượng nhất.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=100083410364772"
                  >
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Liên kết</h2>
              <ul className="list-unstyled">
                {menuHeader.map((itemMenu) => (
                  <li key={itemMenu.id}>
                    <a href={itemMenu.path}>{itemMenu.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Dịch vụ</h2>
              <ul className="list-unstyled">
                {INFO.services?.map((item) => (
                  <li key={item.id}>
                    <a href="/">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Liên hệ</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">{INFO.contact.address}</span>
                  </li>
                  <li>
                    <a href={`tel:${INFO.contact.phoneNumber}`}>
                      <span className="icon icon-phone"></span>
                      <span className="text">{INFO.contact.phoneNumber}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${INFO.contact.email}`}>
                      <span className="icon icon-envelope"></span>
                      <span className="text">{INFO.contact.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p
              className="d-flex flex-wrap text-center align-items-center justify-content-center"
              style={{ gap: "0.35rem" }}
            >
              {/* <script>document.write(new Date().getFullYear());</script> */}
              All rights reserved | This website is made with
              <i className="icon-heart" aria-hidden="true"></i> by
              <a
                href="https://www.facebook.com/profile.php?id=100083410364772"
                rel="noreferrer"
                target="_blank"
              >
                Mộc Việt
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
