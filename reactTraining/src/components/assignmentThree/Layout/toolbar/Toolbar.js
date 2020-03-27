import React from 'react';
import './Toolbar.scss'

export default function Toolbar(props) {
    return (
        <div className='Toolbar'>
            <header>
                <button className="">Menu</button>
                <Logo />
                <BurgerNav/>
            </header>
        </div>
    );
}