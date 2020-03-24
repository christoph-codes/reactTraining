import React from 'react';
import './BuildControl.scss'

export default function BuildControl(props) {
    return (
        <div className='BuildControl'>
            <h3 className="label">{props.label}</h3>
            <button className="less btn" href="#">-</button>
            <button className="more btn" href="#">+</button>
        </div>
    )
}