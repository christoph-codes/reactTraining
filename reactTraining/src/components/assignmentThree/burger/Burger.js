import React from 'react';
import './Burger.scss';

import BurgerIngredient from '../burgerIngredient/BurgerIngredient';

export default function Burger(props) {
    let emptyIngredientMessage;
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
           return <BurgerIngredient key={ingKey + i} type={ingKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    // console.log(transformedIngredients.length);

    if (transformedIngredients.length <= 4) {
        emptyIngredientMessage = "What would you like on your burger today?"
    }
    
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
            {emptyIngredientMessage ? <p>{emptyIngredientMessage}</p>: null}
        </div>
    )
}