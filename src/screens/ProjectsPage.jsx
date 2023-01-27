import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/FooterPage";
import Dots from "./Dots";
const ProjectsPage = () => {
  return (
    <div>
      <div className="background-container">
        <Dots />
      </div>
      <Header />
      <div className="screen-size">
        <Projects />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProjectsPage;
