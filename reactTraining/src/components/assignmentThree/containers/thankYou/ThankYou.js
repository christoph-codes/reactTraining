import React, { useEffect } from 'react';
import './ThankYou.scss'

export default function ThankYou(props) {
    const orderDetails = props.location.state;

    const ingredientSummary = Object.keys(orderDetails.ingredients).map(igKey => {
        // For each key return a list item of the key and its value.
      return (
        <li key={igKey} className="ingredient-list">
          <span><strong>{igKey[0].toUpperCase() + igKey.slice(1)}</strong></span>: {orderDetails.ingredients[igKey]}
        </li>
      );
    });

    useEffect(() => {
      props.location.state = []
    })

    return (
        <div className='ThankYou'>
            <h1>Thank You {orderDetails.customerData.name} For Your Order</h1>
            <p>Your order has been submitted and will be ready in {Math.floor(Math.random() * 20)} minutes</p>
            <hr/>
            <h3>Order Details</h3>
            <div className="order-details">
            <ul>{ingredientSummary}</ul>
            <h2 className="total-price">Your Total: <sup>$</sup>{orderDetails.totalPrice.toFixed(2)}</h2>   
            <p>Be sure to print this page for your records.</p>
            <button className="btn prime" onClick={(e) => { window.print() }} >Print This Page</button>
            <button className="btn cta" onClick={(e) => { props.history.push('/assignment3/burger-builder') }} >Order Another Burger!</button>
            </div>
        </div>
    )
}