import React from "react";
import "./Button.css";

const Button = ({ textGiven, functionGiven, buttonSize }) => {
  const SIZES = ["btn--small", "btn--medium", "btn--large"];
  const size = SIZES.includes(buttonSize) ? buttonSize : null;
  return (
    <button className={`btn ${size}`} onClick={functionGiven}>
      <h3 className="btn--text"> {textGiven} </h3>
    </button>
  );
};

export default Button;
