import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Layout.scss';
// import Toolbar from './toolbar/Toolbar';
// import BurgerBuilder from '../containers/burgerBuilder/BurgerBuilder';
// import Orders from '../containers/orders/Orders';

export default function Layout(props) {
    return (
        <div className="Layout">
            {props.children}
        </div>
    )
}