import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/FooterPage";
import Dots from "./Dots";

const Contact = () => {
  return (
    <div className="screen-global">
      <div className="background-container">
        <Dots />
      </div>
      <Header />
      <div id="contact-pres">
        <ContactForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
