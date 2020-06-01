import React from 'react';
import './Person.scss'

export default function Person(props) {
    return (
        <div onClick={props.clicked} className='Person'>
            <h1>{props.person.name}</h1>
            <p>{props.person.age}</p>
        </div>
    )
}