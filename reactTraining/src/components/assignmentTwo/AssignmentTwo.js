import React, { useState } from 'react';
import InputField from './inputField/InputField';
import ValidationComp from './validationComp/ValidationComp';
import CharComp from './charComp/CharComp';

export default function AssignmentTwo() {
    const [inputText, setInputText] = useState('');
    const handleText = e => {
        setInputText(e.target.value);
    }
    
    let characters = [...inputText.split(' ')];
    console.log(characters);
    
    const deleteWord = (index) => {
        let words = characters;
        words.splice(index, 1);
        setInputText(words);
    }

    let chars = null;
    if(inputText.length > 0) {
        chars = (
            characters.map((char, index) => {
                    return <CharComp key={index} letters={char} onClick={() => deleteWord(index)} />
            })
        )
    }

    return (
        <div className="AssignmentTwo">
            <h1 className="page-header">Assignment #2</h1>
            <InputField onChange={handleText} text={inputText}/>
            <ValidationComp length={inputText.length} text={inputText}/>
            {chars}
        </div>
    )
}