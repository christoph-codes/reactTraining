import React from 'react';
import './FourOhFour.scss'

export default function FourOhFour(props) {
    return (
        <div className='FourOhFour animated fadeIn delay-1s'>
            <h1 className='animated fadeIn delay-2s'>404 Error</h1>
            <p className='animated fadeIn delay-3s'>You've encountered a small error because this page does not exist.</p>
        </div>
    );
}