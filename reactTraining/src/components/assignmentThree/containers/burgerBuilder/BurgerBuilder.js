import React from 'react';
import './BurgerBuilder.scss';

import Burger from '../../burger/Burger';

export default function BurgerBuilder() {
    return (
        <div className="BurgerBuilder">
            <Burger />
            <div className="BurgerControls">Build Controls</div>
        </div>
    )
}