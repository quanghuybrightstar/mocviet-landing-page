import { TypeHeader } from "../../constants/header";
import "./AboutPage.style.scss";
import HeaderComponent from "../../components/Header/Header";

const AboutPage = () => {
  return (
    <div className="commondPage aboutPage">
      <HeaderComponent type={TypeHeader.ABOUT.path} />
    </div>
  );
};

export default AboutPage;
