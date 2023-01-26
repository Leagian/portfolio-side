import FooterPage from "../components/FooterPage";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="screen-size">
        <Presentation />
        <Skills />
        {/* <Projects /> */}
      </div>
      <FooterPage />
    </>
  );
};

export default Home;
