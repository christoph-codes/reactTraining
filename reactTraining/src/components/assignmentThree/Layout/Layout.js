import React from 'react';
import './Layout.scss';
import Toolbar from './toolbar/Toolbar';

export default function Layout(props) {
    return (
        <div className="Layout">
            <Toolbar />
            {props.children}
        </div>
    )
}