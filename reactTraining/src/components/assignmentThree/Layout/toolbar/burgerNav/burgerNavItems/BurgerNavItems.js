import React from 'react';
import {NavLink, useRouteMatch} from 'react-router-dom';
import './BurgerNavItems.scss'

export default function BurgerNavItems(props) {
    let match = useRouteMatch();
    return (
        <div className='BurgerNavItems'>
            <ul>
                <li className="BurgerNavItem"><NavLink to={`${match.url}/burger-builder`}>Burger Builder</NavLink></li>
                <li className="BurgerNavItem"><NavLink to="assignment3/orders">Orders</NavLink></li>
                <li className="BurgerNavItem"><NavLink to="assignment3/checkout">Checkout</NavLink></li>
            </ul>
        </div>
    );
}