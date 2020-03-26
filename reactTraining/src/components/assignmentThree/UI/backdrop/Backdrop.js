import React from 'react';
import './Backdrop.scss'

export default function Backdrop(props) {
    return <div onClick={props.clicked} className='Backdrop'></div>
}