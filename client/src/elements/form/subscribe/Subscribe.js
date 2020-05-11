import React from "react";
import i18next from "i18next";

import withAPITranslation from "../../HOC/withAPITranslation";

import "../subscribe/Subscribe.css";

class Subscribe extends React.Component {
  state = {
    email: "",
    message500: "",
  };

  componentDidMount() {
    this.props.implementGenerate(this.generate);
  }

  generate = () => {
    this.setState({ message500: i18next.t("signup.form.error500") });
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.email) {
      fetch(`api/memberAdd?email=${this.state.email}`)
        .then((res) => res.json())
        .then((res) => {
          this.props.configureNotification(res, this.state.email);
        })
        .catch((err) => {
          this.props.handleError({
            status: "generic",
            msg: this.state.message500,
          });
        });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          className="form-control"
          placeholder="yeah.sure@mytrashbox.io"
          onChange={this.handleChange}
        />
        <button id="subscribe-button" className="button-design" type="submit">
          {i18next.t("signup.form.subscribeButton")}
        </button>
      </form>
    );
  }
}

export default withAPITranslation(Subscribe);
