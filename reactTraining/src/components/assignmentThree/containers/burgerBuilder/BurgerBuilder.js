import React, { useState } from 'react';
import './BurgerBuilder.scss';
import BuildControls from '../../buildControls/BuildControls';

import Burger from '../../burger/Burger';

const INGREDIENT_PRICES = {
    lettuce: 0.1,
    cheese: 0.5,
    onions: 0.5,
    pickles: 0.2,
    tomatos: 0.2,
    meat: 5,
}

export default function BurgerBuilder() {
    const [ingredients, setIngredients] = useState({
            lettuce: 0,
            onions: 0,
            pickles: 0,
            tomatos: 0,
            cheese: 0,
            meat: 0,
            price: 2
    });
    const [totalPrice, setTotalPrice] = useState(ingredients.price);
    const [feedback, setFeedback] = useState('');
    const [purchaseable, setPurchaseable] = useState(false);

    const addIngredient = type => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
        setTotalPrice(newPrice);
        setIngredients(updatedIngredients);
    }
    const removeIngredient = type => {
        const oldCount = ingredients[type];
        let updatedCount;
        if(oldCount > 0) {
            updatedCount = oldCount - 1;
        
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceReduction;
        setTotalPrice(newPrice);
        setIngredients(updatedIngredients);
        } else {
            setFeedback(`There are no pieces of ${type} on your burger!`);
        }
    }
    const disabledInfo = {
        ...ingredients
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    console.log(ingredients.length);

    return (
        <div className="BurgerBuilder">
            <Burger ingredients={ingredients}/>
            <h2 className="burger-price">Total Price: <sup>$</sup>{totalPrice.toFixed(2)}</h2>
            <BuildControls 
                ingredientAdded={addIngredient} 
                ingredientRemoved={removeIngredient} 
                disabled={disabledInfo}
            />
            <button disabled={!purchaseable} className="btn order-now">Order Now</button>
            {feedback ? <p>{feedback}</p> : null}
        </div>
    )
}