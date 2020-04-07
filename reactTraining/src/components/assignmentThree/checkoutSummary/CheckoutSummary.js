import React from 'react';
import './CheckoutSummary.scss'
import Burger from '../burger/Burger';

export default function CheckoutSummary(props) {

    return (
        <div className='CheckoutSummary'>
            <h1>We hope your burger is deilicious!</h1>
            <div className="burger-container">
                <Burger ingredients={props.ingredients}/>
            </div>
            <button onClick={props.checkoutConfirmed} className="btn cta">Purchase</button>
            <button onClick={props.checkoutCancelled} className="btn cancel">Cancel</button>
        </div>
    );
}