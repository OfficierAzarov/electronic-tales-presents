import React from "react";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    style={{
      fontSize: props.size,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
    }}
  >
    {props.symbol}
  </span>
);
export default Emoji;
