import React from 'react';
import './Layout.scss';

export default function Layout(props) {
    return (
        <div className="Layout">
            <div>Toolbar, Side Drawer, Backdrop</div>
            {props.children}
        </div>
    )
}