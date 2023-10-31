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
            <i className="fas fa-envelope" alt="lien vers notre mail"></i>
          </a>
          <a href="https://www.instagram.com/electronictales.io/">
            <i className="fab fa-instagram" alt="suivez-nous sur instagram"></i>
          </a>
          <a href="https://twitter.com/ElectronicTales">
            <i className="fab fa-twitter" alt="suivez-nous sur twitter"></i>
          </a>
          <a href="https://www.facebook.com/Electronic-Tales-100499265012350">
            <i className="fab fa-facebook" alt="suivez-nous sur facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/34911130">
            <i className="fab fa-linkedin" alt="suivez-nous sur linkedin"></i>
          </a>
          <a href="https://github.com/OfficierAzarov/electronic-tales-presents">
            <i className="fab fa-github" alt="suivez-nous sur github"></i>
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
        <ul>
          <li>
            <a href="mailto:contact@electronictales.io" aria-label="Lien vers notre mail">
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          
          <li>
            <a href="https://www.instagram.com/electronictales.io/" aria-label="Suivez-nous sur Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/ElectronicTales" aria-label="Suivez-nous sur Twitter">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        
          <li>
            <a href="https://www.facebook.com/Electronic-Tales-100499265012350"aria-label="Suivez-nous sur facebook">
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/company/34911130" aria-label="Suivez-nous surlinkedin">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a href="https://github.com/OfficierAzarov/electronic-tales-presents" aria-label="Suivez-nous sur notre compte github">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
};

export default Footer;
