import React, { useState } from "react";
import UserInput from '../userinput/UserInput';
import UserOutput from '../useroutput/UserOutput';

export default function FirstAssignment() {
  const [username, setUsername] = useState("Christopher");

  const handleUsername = e => {
    // console.log(e.target.value)
    setUsername(e.target.value);
  };
  
  return (
    <div className="FirstAssignment">
      <h1>{username}</h1>
      <UserInput name={username} onChange={handleUsername} />
      <UserOutput name={username} />
      <UserOutput name={username} />
    </div>
  );
}
