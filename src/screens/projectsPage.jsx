import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/FooterPage";

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <div className="screen-size">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
