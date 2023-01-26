import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/FooterPage";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="screen-size">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
