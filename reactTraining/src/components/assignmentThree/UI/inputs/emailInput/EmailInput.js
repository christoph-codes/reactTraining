import React, { useState } from 'react';
import './EmailInput.scss'

export default function EmailInput(props) {
    const [feedback, setFeedback] = useState(null);
    const [isValid,setIsValid] = useState(true);

    const validateEmailInput = e => {
        let val = e.target;
        let emailValid = val.checkValidity();

        if (!emailValid) {
            setFeedback(e.target.validationMessage);
            setIsValid(false)
        }

        return val;
        
    };

    const validateInput = e => {
        let val = e.target.value;
        if (val.length === 0) {
          setFeedback("You must complete this field!");
          setIsValid(false)
        } else {
            setFeedback(null)
        }
        return val;
      };

    return (
        <div className={'EmailInput ' + isValid ? 'valid' : 'invalid'}>
        <input type="email" {...props} onKeyUp={validateEmailInput} onBlur={validateInput} placeholder={props.label} />
        {feedback ? <small>{feedback}</small> : null}
      </div>
    )
}