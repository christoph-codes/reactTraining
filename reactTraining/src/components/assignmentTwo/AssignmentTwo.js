import React, { useState } from 'react';
import InputField from './inputField/InputField';
import ValidationComp from './validationComp/ValidationComp';

export default function AssignmentTwo() {
    const [inputText, setInputText] = useState('');
    const handleText = e => {
        setInputText(e.target.value);
    }
    return (
        <div className="AssignmentTwo">
            <h1 className="page-header">Assignment #2</h1>
            <InputField onChange={handleText} text={inputText}/>
            <ValidationComp length={inputText.length}/>
        </div>
    )
}