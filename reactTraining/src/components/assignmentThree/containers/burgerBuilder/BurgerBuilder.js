import React, { useState } from 'react';
import './BurgerBuilder.scss';
import BuildControls from '../../buildControls/BuildControls';

import Burger from '../../burger/Burger';

const INGREDIENT_PRICES = {
    lettuce: 0.1,
    cheese: 0.5,
    bacon: 3,
    meat: 5,
}

export default function BurgerBuilder() {
    const [ingredients, setIngredients] = useState({
            // lettuce: 1,
            // bacon: 1,
            // cheese: 2,
            // meat: 2,
            // price: "39.99"
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
            price: 4
    });
    const [totalPrice, setTotalPrice] = useState(0);

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

    }
    return (
        <div className="BurgerBuilder">
            <Burger ingredients={ingredients}/>
            <BuildControls ingredientAdded={addIngredient} ingredientRemoved={removeIngredient}/>
        </div>
    )
}