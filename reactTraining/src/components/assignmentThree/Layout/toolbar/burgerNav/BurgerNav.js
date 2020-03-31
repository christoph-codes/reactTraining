import React from 'react';
import './BurgerNav.scss'
import BurgerNavItems from './burgerNavItems/BurgerNavItems';

export default function BurgerNav(props) {
    return (
        <div className='BurgerNav'>
            <BurgerNavItems/>
        </div>
    );
}