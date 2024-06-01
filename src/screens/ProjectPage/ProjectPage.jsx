import { TypeHeader } from "../../constants/header";
import "./ProjectPage.style.scss";
import HeaderComponent from "../../components/Header/Header";

const ProjectPage = () => {
  return (
    <div className="commondPage projectPage">
      <HeaderComponent type={TypeHeader.PROJECT.path} />
    </div>
  );
};

export default ProjectPage;
