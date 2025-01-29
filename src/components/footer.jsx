import { INFO, menuHeader, TypeHeader } from "@/libs/constants";
import Link from "next/link";
import Image from "next/image";
import { IconFacebook } from "@public/assets/icons";

const listContacts = [
  {
    id: 1,
    name: INFO.contact.address,
    icon: "https://img.icons8.com/bubbles/100/place-marker.png",
    href: "https://maps.app.goo.gl/RBymNB7Q6HXqbJJU9",
  },
  {
    id: 2,
    name: INFO.contact.phoneNumber,
    icon: "https://img.icons8.com/bubbles/100/phone--v1.png",
    href: `tel:${INFO.contact.phoneNumber}`,
  },
  {
    id: 3,
    name: INFO.contact.email,
    icon: "https://img.icons8.com/bubbles/100/new-post.png",
    href: `tel:${INFO.contact.email}`,
  },
];

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
                    href={INFO.contact.facebook}
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
                <ul className="flex flex-col gap-4">
                  {listContacts?.map((contact) => (
                    <li className="group" key={contact.id}>
                      <Link href={contact.href} target="_blank">
                        <div className="relative w-8 h-8 min-w-8 min-h-8 mr-2">
                          <Image
                            src={contact.icon}
                            alt="icon contact"
                            fill
                            className="duration-500 ease-in-out scale-105 group-hover:scale-125"
                          />
                        </div>
                        <span className="text">{contact.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p
              className="d-flex flex-wrap text-center items-center justify-center"
              style={{ gap: "0.35rem" }}
            >
              All rights reserved | This website is made with ❤️ by
              <Link
                href={INFO.contact.facebook}
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
