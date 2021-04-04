import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

function Buttons(props) {
  return (
    <Button
      size="lg"
      style={{ backgroundColor: props.bgColor }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default Buttons;
