import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import slack from "../assets/images/slack.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <Link className="header-link active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-link active" to="/about">
              About me
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/contact">
              Contact me
            </Link>
          </li>
        </ul>
        <div className="header-social">
          <a
            href="https://github.com/Leagian"
            target="_blank"
            rel="noreferrer noreferrer"
          >
            <img src={github} className="header-socialLogo" alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/leagiangrosso/"
            target="_blank"
            rel="noreferrer noreferrer"
          >
            <img
              src={linkedin}
              className="header-socialLogo"
              alt="linkedin logo"
            />
          </a>
          <a
            href="https://slack.com/app_redirect?channel=U0486U1NDBM"
            target="_blank"
            rel="noreferrer noreferrer"
          >
            <img src={slack} className="header-socialLogo" alt="slack logo" />
          </a>
        </div>
        <AiOutlineMenu
          size="40"
          className="headerIcon-toggle"
          // onClick={toggle}
        />
      </nav>
    </header>
  );
};

export default Header;
