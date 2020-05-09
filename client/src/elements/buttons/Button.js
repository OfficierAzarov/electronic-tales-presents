import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <div className="button-wrap animated slow">
        <Link to={this.props.goto}>
          <button className="button-design">{this.props.text}</button>
        </Link>
      </div>
    );
  }
}

export default Button;
