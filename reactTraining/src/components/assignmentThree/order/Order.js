import React from 'react';
import './Order.scss'

export default function Order(props) {
    return (
        <div className='Order'>
            <h1>{props.data.customer.name}</h1>
        </div>
    )
}