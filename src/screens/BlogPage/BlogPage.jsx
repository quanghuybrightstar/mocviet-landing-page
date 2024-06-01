import { TypeHeader } from "../../constants/header";
import "./BlogPage.style.scss";
import HeaderComponent from "../../components/Header/Header";

const BlogPage = () => {
  return (
    <div className="commondPage blogPage">
      <HeaderComponent type={TypeHeader.BLOG.path} />
    </div>
  );
};

export default BlogPage;
