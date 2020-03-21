import React, { useState } from 'react';
import InputField from './inputField/InputField';
import ValidationComp from './validationComp/ValidationComp';
import CharComp from './charComp/CharComp';

export default function AssignmentTwo() {
    // Component State
    const [inputText, setInputText] = useState('');
    // Setting the state entered from the input field
    const handleText = e => {
        setInputText(e.target.value);
    }
    //Making a copy of the existing state and converting into an array
    let characters = [...inputText];
    // Delete letter function to fired upon click
    const deleteLetter = (index) => {
        let words = characters;
        words.splice(index, 1);
        setInputText(words.join(''));
    }
    // Initiate variable that loops through each character
    let chars = null;
    // Check to see if any characters have been entered
    if(inputText.length > 0) {
        // Set variable that loops through each character
        chars = (
            characters.map((char, index) => {
                    // Return component that displays each character in its own div
                    return <CharComp key={index} letters={char} onClick={() => deleteLetter(index)} />
                    
            })
        )
    }

    return (
        <div className="AssignmentTwo">
            <h1 className="page-header">Assignment #2</h1>
            <InputField onChange={handleText} text={inputText}/>
            <ValidationComp length={inputText.length} text={inputText}/>
            {chars}
            {chars ? <p><b>Click on a letter to remove it from this list.</b></p> : null}
        </div>
    )
}