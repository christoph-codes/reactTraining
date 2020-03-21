import React from "react";
import "./ValidationComp.scss";

export default function ValidationComp(props) {
  let charMessage = null;
  if (props.length >= 50) {
    charMessage = {
      message: "Text Long Enough",
      class: "green"
    };
  } else {
    charMessage = {
      message: "Text Too Short",
      class: "red"
    };
  }
  return (
    <div className="ValidationComp">
      <p>
        Character Count: <span className={charMessage.class}>{charMessage.message}</span>
      </p>
    </div>
  );
}
