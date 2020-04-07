import React, { useState } from 'react';
import './Checkout.scss'
import CheckoutSummary from '../../checkoutSummary/CheckoutSummary';

export default function Checkout(props) {
    const [ingredients,setIngredients] = useState({
        lettuce: 1,
        tomatos: 1,
        pickles: 1,
        onions: 1,
        cheese: 1,
        meat: 1,
    });

    const continueCheckout = () => {
        console.log('...Checking Out')
        props.history.replace('/checkout/contact-data');
    }
    const cancelCheckout = () => {
        console.log('...Cancelling Order');
        props.history.goBack();
    }
    return (
        <div className='Checkout'>
            <CheckoutSummary checkoutCancelled={cancelCheckout} checkoutConfirmed={continueCheckout} ingredients={ingredients} />
        </div>
    );
}