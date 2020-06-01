import React, { useReducer } from "react";
import "./Persons.scss";
import AddPerson from "../components/addPerson/AddPerson";
import Person from "../components/person/Person";
import { reducer } from "../reducers/personReducer";

export default function Persons(props) {
  const [state, dispatch] = useReducer(reducer, { persons: [] });

  return (
    <div className="Persons">
      <AddPerson
        personAdded={(name, age) =>
          dispatch({ type: "ADD_PERSON", name: name, age: age })
        }
      />
      {state.persons.map(person => {
        return (
          <Person
            key={person.id}
            person={person}
            clicked={() => dispatch({ type: "DELETE_PERSON", id: person.id })}
          />
        );
      })}
    </div>
  );
}
