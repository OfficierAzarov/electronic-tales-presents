import React from "react";

import "./InteractiveHeader.css";

import { convertToHtml } from "../../utils/Utils";

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
        <h2 dangerouslySetInnerHTML={convertToHtml(this.props.bigText)}></h2>
        <h3>{this.props.middleText}</h3>
        <h4>{this.props.littleText}</h4>
        <i
          className="fas fa-chevron-down"
          style={{
            opacity: this.state.isShown || window.innerHeight > 800 ? 0 : 1,
          }}
          onClick={this.scrollDown}
        ></i>
      </div>
      // <div className="h-container">
      //     <h2>&Agrave; Electronic Tales, on veut rendre <br/>la computer culture <em>human readable</em>.</h2>
      //     <h3>C'est-à-dire accessible &agrave; tous&middot;tes.</h3>
      //     <h4>Pour cela, on s'est assis&middot;e&middot;s, <span className="strike">on a mang&eacute; des tartines au beurre demi-sel,</span> on a r&eacute;flechi, on a d&eacute;fini des axes (et ourdi des concepts).</h4>
      //     <i className="fas fa-chevron-down"
      //     style={{opacity: this.state.isShown || window.innerHeight > 800 ? 0 : 1}}
      //     onClick={this.scrollDown}></i>
      // </div>
    );
  }
}

export default InteractiveHeader;
