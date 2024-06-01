import { TypeHeader } from "../../constants/header";
import "./ServicePage.style.scss";
import HeaderComponent from "../../components/Header/Header";

const ServicePage = () => {
  return (
    <div className="commondPage servicePage">
      <HeaderComponent type={TypeHeader.SERVICE.path} />
    </div>
  );
};

export default ServicePage;
