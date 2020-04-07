import React from 'react';
import './Logo.scss';
import burgerLogo from '../../../../assets/logo.svg';

export default function Logo(props) {
    return (
        <div className='Logo'>
            <img src={burgerLogo} alt="Burger Builder" />
            <h1>Build a Burger</h1>
        </div>
    );
}