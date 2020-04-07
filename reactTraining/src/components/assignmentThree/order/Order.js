import React from 'react';
import './Order.scss'

export default function Order(props) {
    // console.log(props.data)
    return (
        <div className='Order'>
            <h1>{props.data.price}</h1>
        </div>
    )
}