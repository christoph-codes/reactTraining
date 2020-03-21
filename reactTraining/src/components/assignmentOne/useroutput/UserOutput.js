import React from 'react';

export default function UserOutput(props) {
    return (
      <div className="UserOuptut">
        <p>
          This is a paragraph so make sure this is amazing. {props.name} need to
          make sure this paragraph info is dynamic from the user input.
        </p>
        <p>
          {props.name} is pretty amazing at coding so we should keep watching him
          as he does so!
        </p>
      </div>
    );
  };