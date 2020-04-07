import React, { useState } from 'react';
import './Toolbar.scss'
import Logo from '../../assets/logo/Logo';
import Sidedrawer from '../sidedrawer/Sidedrawer';
import HamburgerIcon from '../../../../assets/hamburger.svg';

export default function Toolbar(props) {
    const [sidedrawerStatus, setSidedrawerStatus] = useState(false);

    const toggleSidedrawer = () => {
        setSidedrawerStatus(!sidedrawerStatus);
    }
    return (
        <div className='Toolbar'>
            <header>
                <Logo />
                <button onClick={toggleSidedrawer} className="mobile-nav"><img src={HamburgerIcon} alt="" /></button>
                <Sidedrawer open={sidedrawerStatus} clicked={toggleSidedrawer} close={toggleSidedrawer} />
            </header>
        </div>
    );
}