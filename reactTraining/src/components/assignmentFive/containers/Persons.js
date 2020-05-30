import React, { useState, useReducer } from "react";
import "./Persons.scss";
import AddPerson from "../components/addPerson/AddPerson";
import Person from "../components/person/Person";
import {reducer} from '../reducers/personReducer';

export default function Persons(props) {
      const [state, dispatch] = useReducer(reducer, {persons: []});
//   const [personList, setPersonList] = useState([]);

//   const addPerson = () => {
//     const newPerson = {
//       id: Math.random() * 50000000,
//       name: "Christopher",
//       age: Math.floor(Math.random() * 50)
//     };
//     setPersonList([...personList, newPerson]);
//   };

//   const deletePerson = id => {
//     setPersonList(prev => {
//       return [...prev, prev.filter(person => person.id !== id)];
//     });
//   };
//   return (
//     <div className="Persons">
//       <AddPerson personAdded={addPerson} />
//       {personList.map(person => {
//         return (
//           <Person
//             key={person.id}
//             person={person}
//             clicked={() => deletePerson(person.id)}
//           />
//         );
//       })}
//     </div>
//   );
  return (
    <div className="Persons">
      <AddPerson personAdded={() => dispatch({type: 'ADD_PERSON'})} />
      {state.persons.map(person => {
        return (
          <Person
            key={person.id}
            person={person}
            clicked={() => dispatch({type: 'ADD_PERSON', id: person.id})}
          />
        );
      })}
    </div>
  );
}
