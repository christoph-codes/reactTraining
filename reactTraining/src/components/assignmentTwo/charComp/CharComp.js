import React from 'react';
import './CharComp.scss';

export default function CharComp(props) {
    return (
        <div onClick={props.onClick} className="CharComp">
            <p>{props.letters}</p>
        </div>
    )
}