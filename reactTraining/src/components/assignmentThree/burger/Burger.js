import React from 'react';
import './Burger.scss';

import BurgerIngredient from '../burgerIngredient/BurgerIngredient';

export default function Burger(props) {
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
        transformedIngredients = <p>Please Start Adding Ingredients!</p>
    }
    
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}