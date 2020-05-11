import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        {/* <a href="#">contact@electronictales.com</a> */}
        <Link to="/team">Team</Link>
      </div>

      <p>Made with &#10084; by Electronic&nbsp;Tales Team</p>
      <div>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
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
};

export default Footer;
