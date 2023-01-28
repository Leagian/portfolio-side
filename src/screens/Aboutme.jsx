import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/FooterPage";
import Dots from "./Dots";

const About = () => {
  return (
    <div className="screen-global">
      <div className="background-container">
        <Dots />
      </div>
      <Header />
      <div id="about-pres">
        <Bio />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
