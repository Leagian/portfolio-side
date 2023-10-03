import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Dots from "./Dots";

import "./Home.css";

const Home = () => {
  return (
    <div className="screen-global">
      <div className="background-container">
        <Dots />
      </div>
      <Header />
      <div id="home-pres">
        <Presentation />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
