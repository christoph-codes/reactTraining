import React from 'react';
import { NavLink } from "react-router-dom";
import './AppNavigation.scss';

export default function AppNavigation() {
    return (
        <div className="AppNavigation">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/assignment1">Assignment #1</NavLink></li>
                <li><NavLink exact to="/assignment2">Assignment #2</NavLink></li>
                <li><NavLink exact to="/assignment3">Assignment #3</NavLink></li>
                <li><NavLink exact to="/assignment4">Assignment #4</NavLink></li>
                <li><NavLink exact to="/assignment5">Assignment #5</NavLink></li>
            </ul>
        </div>
    )
}