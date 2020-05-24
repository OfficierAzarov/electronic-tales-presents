import React from "react";
// import i18next from "i18next";

const withAPITranslation = (WrappedComponent) => {
  class withAPITranslation extends React.Component {
    componentDidMount() {
      this.generate();
    }

    componentDidUpdate(prevProps) {
      if (this.props.language !== prevProps.language) {
        this.generate();
      }
    }

    generate = () => {};

    implementGenerate = (implementation) => {
      this.generate = implementation;
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
