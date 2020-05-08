import React from "react";

import { emitCurrentPath } from "../../utils/Utils";

const withDisplay = (WrappedComponent) => {
  class WithDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.ref = React.createRef();
    }

    state = {
      isShown: false,
      isTranslated: false,
      scroll: true,
    };

    componentDidMount() {
      // passes the location fo the app (current path) to the parent (App.js)
      emitCurrentPath(this.props);
      this.goUp(this.adaptDisplay);
    }

    goUp = (callback) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(callback, 800);
    };

    adaptDisplay = () => {
      if (document.body.scrollTop === 0) {
        if (window.innerHeight < 800) {
          window.addEventListener("scroll", this.pop);
        } else {
          this.setState({ isShown: true });
        }
      }
    };

    pop = () => {
      if (this.state.scroll) {
        this.setState(
          { isShown: true, isTranslated: true },
          this.setState({ scroll: false })
        );
      }
    };

    render() {
      return (
        <WrappedComponent
          isShown={this.state.isShown}
          isTranslated={this.state.isTranslated}
        />
      );
    }
  }
  return WithDisplay;
};

export default withDisplay;
