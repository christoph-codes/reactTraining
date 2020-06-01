import React, { useState } from "react";
import "./AddPerson.scss";

export default function AddPerson(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="AddPerson">
      <input
        type="text"
        placeholder="name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <input
        type="number"
        placeholder="age"
        onChange={e => setAge(e.target.value)}
        value={age}
      />
      <button
        onClick={() => props.personAdded(name, age)}
        className="AddPerson"
      >
        Add Person
      </button>
    </div>
  );
}
