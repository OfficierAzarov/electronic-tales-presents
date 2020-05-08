import React from "react";

import "./InteractiveHeader.css";

class InteractiveHeader extends React.Component {
  state = {
    isShown: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.isShown !== prevProps.isShown) {
      this.setState({ isShown: this.props.isShown });
    }
  }

  render() {
    return (
      <div className="h-container">
        <h2 dangerouslySetInnerHTML={this.props.bigText}></h2>
        <h3 dangerouslySetInnerHTML={this.props.middleText}></h3>
        <h4 dangerouslySetInnerHTML={this.props.littleText}></h4>
        <i
          className="fas fa-chevron-down"
          style={{
            opacity: this.state.isShown || window.innerHeight > 800 ? 0 : 1,
          }}
          onClick={this.props.scrollDown}
        ></i>
      </div>
    );
  }
}

export default InteractiveHeader;
