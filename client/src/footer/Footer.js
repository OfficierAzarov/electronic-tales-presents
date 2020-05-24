import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = (props) => {
  if (props.mobile) {
    return (
      <footer>
        <p>Made with &#10084; by Electronic&nbsp;Tales Team</p>
        <div>
          <a href="mailto:contact@electronictales.io">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/electronictales.io/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/ElectronicTales">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/Electronic-Tales-100499265012350">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/34911130">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/OfficierAzarov/electronic-tales-presents">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    );
  } else {
    return (
      <footer>
        <div>
          <Link to="/team">Team</Link>
        </div>

        <p>Made with &#10084; by Electronic&nbsp;Tales Team</p>
        <div>
          <a href="mailto:contact@electronictales.io">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/electronictales.io/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/ElectronicTales">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/Electronic-Tales-100499265012350">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/34911130">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/OfficierAzarov/electronic-tales-presents">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
