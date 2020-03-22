import React, { useState } from 'react';
import './BurgerBuilder.scss';

import Burger from '../../burger/Burger';

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
            price: 0
    })
    return (
        <div className="BurgerBuilder">
            <Burger ingredients={ingredients}/>
            <div className="BurgerControls">Build Controls</div>
        </div>
    )
}