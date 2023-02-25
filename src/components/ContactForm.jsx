import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <div>
      <div id="contact" onSubmit={handleSubmit}>
        <h1 className="contact-h1">GET IN TOUCH</h1>
        <h4 className="contact-h4">I would love to hear from you!</h4>

        <div className="contact-circle"></div>

        <h3 className="contact-h3">Send me a Message</h3>

        <form className="contact-form">
          <div>
            <AiOutlineUser size="25" className="contact-icon" />
            <input
              className="contact-inputName"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <AiOutlineMail size="25" className="contact-icon" />
            <input
              className="contact-inputEmail"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <AiOutlineUser size="25" className="contact-icon" />
            <input
              className="contact-inputBusiness"
              type="text"
              placeholder="Business name"
            />
          </div>

          <div>
            <AiOutlinePhone size="25" className="contact-icon" />
            <input
              className="contact-inputPhone"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <div className="wrapper-message">
            <textarea
              className="contact-message"
              type="text"
              placeholder="Message"
              required
            />
          </div>

          <br />
          <button className="contact-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
