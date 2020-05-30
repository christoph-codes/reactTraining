import React from 'react';
import './AddPerson.scss'

export default function AddPerson(props) {
    return (
        <button onClick={props.personAdded} className='AddPerson'>
            Add Person
        </button>
    )
}