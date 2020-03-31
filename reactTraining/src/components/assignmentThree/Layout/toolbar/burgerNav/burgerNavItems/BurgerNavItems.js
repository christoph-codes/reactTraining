import React from 'react';
import {NavLink} from 'react-router-dom';
import './BurgerNavItems.scss'

export default function BurgerNavItems(props) {
    return (
        <div className='BurgerNavItems'>
            <ul>
                <li className="BurgerNavItem"><NavLink to="/burger-builder">Burger Builder</NavLink></li>
                <li className="BurgerNavItem"><NavLink to="/checkout">Checkout</NavLink></li>
            </ul>
        </div>
    );
}