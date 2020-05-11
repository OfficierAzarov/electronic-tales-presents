import React from "react";
import i18next from "i18next";

const withAPITranslation = (WrappedComponent) => {
  class withAPITranslation extends React.Component {
    componentDidMount() {
      this.generate();
    }

    componentDidUpdate(prevProps) {
      if (this.props.language !== prevProps.language) {
        i18next.changeLanguage(this.props.language, (err) => {
          if (err) return console.log("something went wrong loading", err);
          this.generate();
        });
      }
    }

    generate = () => {};

    implementGenerate = (implementation) => {
      this.generate = implementation;
      console.log("fired");
    };

    render() {
      return (
        <WrappedComponent
          language={this.props.language}
          implementGenerate={this.implementGenerate}
          {...this.props}
        />
      );
    }
  }
  return withAPITranslation;
};

export default withAPITranslation;
