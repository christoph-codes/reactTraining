import React from 'react';
import './Burger.scss';

import BurgerIngredient from '../burgerIngredient/BurgerIngredient';

export default function Burger() {
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="lettuce"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="lettuce"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="lettuce"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}