import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/FooterPage";

const About = () => {
  return (
    <div>
      <Header />
      <div className="screen-size">
        <Bio />
      </div>
      <Footer />
    </div>
  );
};

export default About;
