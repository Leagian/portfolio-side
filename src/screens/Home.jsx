import FooterPage from "../components/FooterPage";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Dots from "./Dots";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="background-container">
        <Dots />
      </div>
      <Header />
      <div className="screen-size">
        <Presentation />
        <Skills />
      </div>
      {/* <FooterPage /> */}
    </div>
  );
};

export default Home;
