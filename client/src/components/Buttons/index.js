import React from "react";


function Buttons(props) {
    return (
      <button
        className="btn btn-lg"
        style={{ backgroundColor: props.bgColor }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };

  export default Buttons;