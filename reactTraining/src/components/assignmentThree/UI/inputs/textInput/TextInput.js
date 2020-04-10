import React, { useState } from "react";
import "./TextInput.scss";

export default function TextInput(props) {
  const [feedback, setFeedback] = useState("");
  const [isValid,setIsValid] = useState(true);

  const validateInput = e => {
    let val = e.target.value;
    console.log('User left')
    if (val.length === 0) {
      setFeedback("You must complete this field!");
      setIsValid(false)
    } else {
        setFeedback(null)
    }
    return val;
  };
  return (
      <div className={'TextInput ' + isValid ? 'valid' : 'invalid'}>
        <input type="text" {...props} onBlur={validateInput} placeholder={props.label} />
        {feedback ? <small>{feedback}</small> : null}
      </div>
  );
}
