import { INFO, menuHeader, TypeHeader } from "@/libs/constants";
import Link from "next/link";
import Image from "next/image";
import { IconFacebook } from "@public/assets/icons";

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
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=100083410364772"
                    className="relative flex items-center justify-center w-12 h-12"
                  >
                    <Image
                      src={IconFacebook}
                      alt="icon facebook"
                      fill
                      className="p-[10px] duration-500 ease-in-out hover:scale-110"
                    />
                  </Link>
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
                    <Link href={itemMenu.path}>{itemMenu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Dịch vụ</h2>
              <ul className="list-unstyled">
                {INFO.services.list_services?.map((item) => (
                  <li key={item.id}>
                    <Link href={TypeHeader.SERVICES.path}>{item.name}</Link>
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
                    <Link href={`tel:${INFO.contact.phoneNumber}`}>
                      <span className="icon icon-phone"></span>
                      <span className="text">{INFO.contact.phoneNumber}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`mailto:${INFO.contact.email}`}>
                      <span className="icon icon-envelope"></span>
                      <span className="text">{INFO.contact.email}</span>
                    </Link>
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
              All rights reserved | This website is made with ❤️ by
              <Link
                href="https://www.facebook.com/profile.php?id=100083410364772"
                rel="noreferrer"
                target="_blank"
              >
                Mộc Việt
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
