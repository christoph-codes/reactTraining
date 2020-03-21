import React from "react";
import "./ValidationComp.scss";

export default function ValidationComp(props) {
  let charMessage = null;
  const charMinimum = 20
  if (props.length >= charMinimum) {
    charMessage = {
      message: "Great Job!",
      class: "green"
    };
  } else {
    charMessage = {
      message: "Text Too Short, Keep typing!",
      class: "red"
    };
  }
  return (
    <div className="ValidationComp">
      <p>
        Character Count Must Be Over {charMinimum}: <span className={charMessage.class}>{charMessage.message}</span>
      </p>
    </div>
  );
}
