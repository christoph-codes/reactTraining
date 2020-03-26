import React from "react";
import "./OrderSummary.scss";

export default function OrderSummary(props) {
  // Turn ingredients into an array of keys
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
      // For each key return a list item of the key and its value.
    return (
      <li key={igKey} class="ingredient-list">
        <span>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div className="OrderSummary">
      <h3>Your Order</h3>
      <p>Here is your burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <h2><sup>$</sup>{props.price}</h2>
      <button className="btn cta">Continue to Checkout?</button>
      <button className="btn link" onClick={props.close}>Cancel</button>
    </div>
  );
}
