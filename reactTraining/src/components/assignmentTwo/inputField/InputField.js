import React from 'react';

export default function InputField(props) {
    const inputStyle = {
        width: "800px",
        backgroundColor: "lightblue",
        border: "darkblue",
        padding: "10px 5px",
        fontSize: "25px",
        fontWeight: "lighter",
        textAlign: "center",
    }


    return (
        <textarea type="text" style={inputStyle} onChange={props.onChange} value={props.text}/>
    )
}