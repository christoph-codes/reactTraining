import React from 'react';

export default function UserInput(props) {
    const inputStyle = {
        width: "800px",
        backgroundColor: "lightblue",
        border: "darkblue",
        padding: "10px 5px",
        "font-size": "50px",
        "font-weight": "lighter",
        "text-align": "center",
    }
    return (
      <input type="text" style={inputStyle} onChange={props.onChange} value={props.name} />
      // <input onChange={ e => setUsername(e.target.value) } value={username} />
    );
  };