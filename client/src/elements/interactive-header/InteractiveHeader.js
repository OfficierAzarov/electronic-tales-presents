import React from "react";
import Slide from "react-reveal/Slide";

import "./InteractiveHeader.css";

class InteractiveHeader extends React.Component {
  state = {
    isShown: false,
    isClickable: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props.isShown !== prevProps.isShown) {
      this.setState({ isShown: this.props.isShown });
    }
    if (this.props.isClickable !== prevProps.isClickable) {
      this.setState({ isClickable: this.props.isClickable });
    }
  }

  render() {
    if (this.props.mobile) {
      return (
        <div className="h-container">
          <Slide bottom>
            <h2 dangerouslySetInnerHTML={this.props.bigText}></h2>
          </Slide>
          <Slide bottom>
            <h3 dangerouslySetInnerHTML={this.props.middleText}></h3>
          </Slide>
          <Slide bottom>
            <h4 dangerouslySetInnerHTML={this.props.littleText}></h4>
          </Slide>
        </div>
      );
    } else {
      return (
        <div className="h-container animated">
          <h2 dangerouslySetInnerHTML={this.props.bigText}></h2>
          <h3 dangerouslySetInnerHTML={this.props.middleText}></h3>
          <h4 dangerouslySetInnerHTML={this.props.littleText}></h4>
          <div id="icon-container">
            <i
              className="fas fa-chevron-down"
              style={{
                opacity: this.state.isShown || window.innerHeight > 800 ? 0 : 1,
                pointerEvents: this.state.isClickable ? "" : "none",
              }}
              onClick={this.props.scrollDown}
            ></i>
          </div>
        </div>
      );
    }
  }
}

export default InteractiveHeader;
