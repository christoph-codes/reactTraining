import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './BurgerNavItems.scss'

export default function BurgerNavItems(props) {
    let match = useRouteMatch();

    const navroutes = [
        {
            path: `${match.url}/burger-builder`,
            name: 'Burger Builder',
        },
        {
            path: `${match.url}/orders`,
            name: 'Orders',
        },
        {
            path: `${match.url}/checkout`,
            name: 'Checkout',
        }
    ];

    const navitems = (
        navroutes.map(route => {
            return <li className="BurgerNavItem"><Link onClick={props.clicked} to={route.path}>{route.name}</Link></li>
        })
    )

    return (
        <div className='BurgerNavItems'>
            <ul>
                {navitems}
            </ul>
        </div>
    );
}