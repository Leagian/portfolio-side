import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/FooterPage";
import Dots from "./Dots";

const Contact = () => {
  return (
    <div>
      <div className="background-container">
        <Dots />
      </div>
      <Header />
      <div className="screen-size">
        <ContactForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
