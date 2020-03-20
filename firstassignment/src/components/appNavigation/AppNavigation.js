import React from 'react';
import { NavLink } from "react-router-dom";
import './AppNavigation.scss';

export default function AppNavigation() {
    return (
        <div className="AppNavigation">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/assignment1">First Assignment</NavLink></li>
            </ul>
        </div>
    )
}