import React from 'react';
import './BuildControl.scss'

export default function BuildControl(props) {
    return (
        <div className='BuildControl'>
            <h3 className="label">{props.label}</h3>
            <button disabled={props.disabled} className={`${props.disabled ? "disabled" : ""} less btn`} onClick={props.ingredientRemoved}>-</button>
            <button className="more btn prime" onClick={props.ingredientAdded}>+</button>
        </div>
    )
}